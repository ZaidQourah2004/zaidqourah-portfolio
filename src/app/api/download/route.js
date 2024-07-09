import JSZip from 'jszip';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';

const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 403) {
            const errorData = await response.json();
            throw new Error(`GitHub API error: ${errorData.message}`);
        }
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response.json();
};

const fetchFileContent = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 403) {
            const errorData = await response.json();
            throw new Error(`GitHub API error: ${errorData.message}`);
        }
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return Buffer.from(await response.arrayBuffer());
};

const addFilesToZip = async (zip, files, basePath, newFolderName) => {
    for (const file of files) {
        const filePath = `${newFolderName}/${basePath}/${file.name}`;
        if (file.type === 'file') {
            const content = await fetchFileContent(file.download_url);
            zip.file(filePath, content);
        } else if (file.type === 'dir') {
            const dirFiles = await fetchJson(file.url);
            const folder = zip.folder(filePath);
            await addFilesToZip(folder, dirFiles, `${basePath}/${file.name}`, newFolderName);
        }
    }
};

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const path = searchParams.get('path');
    const newFolderName = searchParams.get('newFolderName') || 'renamed-folder';
    const branch = searchParams.get('branch') || 'main';
    const encodedPath = encodeURIComponent(path);

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${branch}`;

    try {
        const files = await fetchJson(apiUrl);
        const zip = new JSZip();
        await addFilesToZip(zip, files, '', newFolderName);

        const content = await zip.generateAsync({ type: 'nodebuffer' });
        const response = new NextResponse(content, {
            headers: {
                'Content-Disposition': `attachment; filename=${newFolderName}.zip`,
                'Content-Type': 'application/zip'
            }
        });
        return response;
    } catch (error) {
        console.error('Error creating zip file:', error);
        if (error.message.includes('GitHub API error')) {
            return NextResponse.json({
                error: 'You have exceeded the number of API calls allowed in a specific time period. Please visit my GitHub page: https://github.com/ZaidQourah2004 to view and download the project directly, or wait for a while and try again.'
            }, { status: 429 });
        }
        return NextResponse.json({ error: 'Error creating zip file.' }, { status: 500 });
    }
}
