"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function StarTrekNavigation() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleDownload = async () => {
        const newFolderName = 'Star Trek Navigation Project';
        const response = await fetch(`/api/downloadFolder?owner=ZaidQourah2004&repo=PROJECTS&path=Projects/Python/Data%20Structures%20and%20Alogrithms%20Work/project07-fs23&newFolderName=${encodeURIComponent(newFolderName)}`);

        if (!response.ok) {
            const errorData = await response.json();
            setErrorMessage(errorData.error || 'Failed to download the file.');
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
                <h1 className="text-5xl font-bold p-4 mt-16">Star Trek Navigation Project</h1>
                <button
                    onClick={handleDownload}
                    className="mb-8 px-8 py-3 rounded-full relative bg-slate-700 text-white text-lg hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent"/>
                    <span className="relative z-20">
                        Download
                    </span>
                </button>
                {errorMessage && (
                    <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-5xl mb-6">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl p-10">
                    <p className="text-lg mb-6 italic">
                        Welcome to my <strong>Star Trek Navigation Project</strong>, a Python-based application designed to find the most efficient paths through star systems, inspired by the voyages of the USS Enterprise.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Star System Mapping:</strong> Navigate through interconnected star systems to find the shortest path.</li>
                        <li><strong>Teleportation Points:</strong> Use teleportation for instant travel between distant star systems.</li>
                        <li><strong>Optimal Route Planning:</strong> Employ the A* algorithm to efficiently plan travel routes, saving time and energy.</li>
                    </ul>
                    <p className="text-lg mb-6">
                        The <strong>Star Trek Navigation Project</strong> demonstrates my ability to solve complex navigation problems using advanced algorithms. The project includes:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Graph Representation:</strong> Models star systems as graphs to manage navigation and teleportation.</li>
                        <li><strong>Pathfinding Algorithms:</strong> Implements algorithms to find the shortest and most efficient paths.</li>
                        <li><strong>Distance Calculations:</strong> Uses advanced techniques to compute distances and optimize travel routes.</li>
                    </ul>
                    <p className="text-lg font-medium">
                        This project highlights my skills in Python programming, graph theory, and algorithm design. It serves as a powerful tool for exploring and navigating complex star systems.
                    </p>
                </div>
            </main>
        </div>
    );
}
