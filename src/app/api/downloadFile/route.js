import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('fileUrl');
    const fileName = searchParams.get('fileName');

    if (!fileUrl || !fileName) {
        return NextResponse.json({ error: 'Missing fileUrl or fileName parameter' }, { status: 400 });
    }

    const response = await fetch(fileUrl);

    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch file' }, { status: 500 });
    }

    const fileData = await response.text();

    return new NextResponse(fileData, {
        headers: {
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Type': 'text/plain',
        },
    });
}
