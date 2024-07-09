"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function NetworkAnalysis() {
    const handleDownload = async () => {
        const newFolderName = 'Network Analysis Software';
        const response = await fetch(`/api/downloadFolder?owner=ZaidQourah2004&repo=PROJECTS&path=Projects/Python/Network%20Analysis%20Project&newFolderName=${encodeURIComponent(newFolderName)}`);
        if (!response.ok) {
            console.error('Failed to download file:', response.statusText);
            return;
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${newFolderName}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative">
                <Link href="/projects" className="absolute top-4 left-4 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        ← Back to Projects
                    </span>
                </Link>
                <h1 className="text-5xl font-bold p-4 mt-16">Network Analysis Software</h1>
                <button
                    onClick={handleDownload}
                    className="mb-8 px-8 py-3 rounded-full relative bg-slate-700 text-white text-lg hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent"/>
                    <span className="relative z-20">
                        Download
                    </span>
                </button>
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl p-10">
                    <p className="text-lg mb-6 italic">
                        Welcome to my <strong>Network Analysis Software</strong> project, a Python-based tool designed to analyze and visualize network data.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Data Processing:</strong> Efficiently processes and analyzes large network datasets.</li>
                        <li><strong>Visualization:</strong> Provides visual representations of network data to help understand complex relationships.</li>
                        <li><strong>Customizable Analysis:</strong> Allows customization of network analysis parameters to suit different use cases.</li>
                    </ul>
                    <p className="text-lg mb-6">
                        The <strong>Network Analysis Software</strong> project showcases my proficiency in Python programming, data processing, and visualization. The project includes:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Data Import:</strong> Supports importing data from various formats including CSV and TXT.</li>
                        <li><strong>Analysis Modules:</strong> Contains modules for various network analysis algorithms.</li>
                        <li><strong>Interactive Visualizations:</strong> Provides interactive visualizations to explore network data.</li>
                    </ul>
                    <p className="text-lg font-medium">
                        This project is a testament to my skills in software development and data analysis. It serves as a powerful tool for researchers and analysts working with network data.
                    </p>
                </div>
            </main>
        </div>
    );
}
