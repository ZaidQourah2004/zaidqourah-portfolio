"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Stock() {
    const handleDownload = async () => {
        const newFolderName = 'Stock Market Simulator';
        const response = await fetch(`/api/download?owner=ZaidQourah2004&repo=PROJECTS&path=C%2B%2B/project3&newFolderName=${encodeURIComponent(newFolderName)}`);
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
                <h1 className="text-5xl font-bold p-4 mt-16">Stock Market Simulator</h1>
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
                        Welcome to my <strong>Stock Market Simulator</strong> project, a sophisticated simulation tool designed for both aspiring and experienced traders. This application is built in C++ and demonstrates advanced features and algorithms for simulating a real trading environment.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Real-Time Order Matching:</strong> Efficiently matches buy and sell orders using advanced sorting and matching algorithms.</li>
                        <li><strong>Comprehensive User Account Management:</strong> Enables users to manage their virtual funds, with functionalities to deposit and track account balances.</li>
                        <li><strong>Advanced Order Handling:</strong> Supports adding and managing multiple orders, ensuring accurate order processing and execution.</li>
                    </ul>
                    <p className="text-lg mb-6">
                        The <strong>Stock Market Simulator</strong> showcases my proficiency in C++ and object-oriented programming, as well as my ability to implement complex algorithms for real-time applications. The project includes:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Order and Exchange Management:</strong> Modules for handling and matching orders, simulating a real trading environment.</li>
                        <li><strong>User Accounts:</strong> Management of user balances and transactions, simulating financial account operations.</li>
                    </ul>
                    <p className="text-lg font-medium">
                        This project is a testament to my skills in software development and my ability to create efficient, reliable, and user-friendly applications. It serves as a powerful tool for practicing trading strategies and understanding market dynamics in a risk-free setting.
                    </p>
                </div>
            </main>
        </div>
    );
}
