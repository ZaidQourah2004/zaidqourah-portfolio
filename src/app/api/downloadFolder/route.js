import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import fetch from 'node-fetch';

const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response.json();
};

const fetchFileContent = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
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

export async function GET(request) {
    const { searchParams } = new URL(request.url);
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
                'Content-Type': 'application/zip',
            },
        });
        return response;
    } catch (error) {
        console.error('Error creating zip file:', error);
        return NextResponse.json({ error: 'Error creating zip file.' }, { status: 500 });
    }
}
