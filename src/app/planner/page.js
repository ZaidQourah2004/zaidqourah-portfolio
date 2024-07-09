"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function DigitalPlanner() {
    const handleDownload = async () => {
        const fileUrl = 'https://raw.githubusercontent.com/ZaidQourah2004/PROJECTS/main/Projects/Python/todo.py';
        const fileName = 'todo.py';
        const response = await fetch(`/api/downloadFile?fileUrl=${encodeURIComponent(fileUrl)}&fileName=${encodeURIComponent(fileName)}`);
        if (!response.ok) {
            console.error('Failed to download file:', response.statusText);
            return;
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
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
                <h1 className="text-5xl font-bold p-4 mt-16">Digital Planner and Reminders</h1>
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
                        Introducing my <strong>Digital Planner and Reminders</strong> application, a Python-based project that simplifies task management and boosts productivity.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Task Management:</strong> Easily add, update, and delete tasks with a simple command-line interface.</li>
                        <li><strong>Priority Levels:</strong> Assign priority levels to tasks to keep track of what&apos;s most important.</li>
                        <li><strong>Due Dates:</strong> Set due dates for tasks to ensure timely completion.</li>
                        <li><strong>Persistent Storage:</strong> Tasks are saved to a file, so they persist across sessions.</li>
                    </ul>
                    <p className="text-lg font-medium">
                        This project showcases my skills in Python programming and file handling. The application is designed to be user-friendly and efficient, making it a great tool for personal productivity.
                    </p>
                </div>
            </main>
        </div>
    );
}
