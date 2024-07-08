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
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        ← Back to Projects
                    </span>
                </Link>
                <h1 className="text-4xl font-bold p-4 mt-16">Stock Market Simulator</h1>
                <button
                    onClick={handleDownload}
                    className="mb-8 px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                    <span className="relative z-20">
                        Download
                    </span>
                </button>
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl p-8">
                    <p className="text-lg mb-4">
                        The Stock Market Simulator is an interactive application that allows users to simulate trading
                        stocks in a virtual environment. Users can experience the highs and lows of the stock market,
                        practice their trading strategies, and learn about financial markets without risking real money.
                    </p>
                    <p className="text-lg mb-4">
                        Features include real-time stock data, portfolio management, historical data analysis, and
                        various tools to help users make informed trading decisions. The simulator is designed for both
                        beginners and experienced traders to refine their skills and gain confidence in the stock
                        market.
                    </p>
                    <p className="text-lg">
                        By using this simulator, you can track your progress over time, analyze your trading behavior,
                        and develop better investment strategies. Whether you are a student, a hobbyist, or a
                        professional, the Stock Market Simulator is an excellent tool for enhancing your understanding
                        of the stock market.
                    </p>
                </div>
            </main>
        </div>
    );
}
