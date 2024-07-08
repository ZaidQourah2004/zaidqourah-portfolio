"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function SoccerPredictor() {
    const handleDownload = () => {
        const url = 'https://github.com/ZaidQourah2004/Soccer-Predictor/archive/refs/heads/main.zip';
        window.location.href = url;
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
                <h1 className="text-5xl font-bold p-4 mt-16">Soccer Prediction Model</h1>
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
                        Introducing <strong>Soccer Predictor</strong>, a comprehensive project designed to scrape match statistics for over 700 players, manipulate and present the data dynamically, and predict match outcomes using machine learning.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Data Scraping:</strong> Engineered a comprehensive data scraping of match statistics for 700+ players using Python and pandas.</li>
                        <li><strong>Backend:</strong> Dynamic manipulation and presentation of the scraped data through a Spring Boot application.</li>
                        <li><strong>Database:</strong> Real-time data manipulation within a PostgreSQL database using SQL queries.</li>
                        <li><strong>Machine Learning:</strong> Created a model to predict match outcomes by integrating data scraping with pandas and machine learning with scikit-learn.</li>
                    </ul>
                    <h2 className="text-3xl font-semibold mb-4">Components:</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Data Scraping:</strong> <em>Technology:</em> Python, pandas. This component scrapes match statistics for over 700 players and stores the data in a CSV file for further processing.</li>
                        <li><strong>Backend:</strong> <em>Technology:</em> Spring Boot, Java. This component dynamically manipulates and presents the scraped data. It uses SQL queries to manage real-time data manipulation within a PostgreSQL database.</li>
                        <li><strong>Machine Learning:</strong> <em>Technology:</em> Python, scikit-learn, pandas. This component creates a machine learning model to predict match outcomes based on the scraped data.</li>
                    </ul>
                    <p className="text-lg font-medium">
                        This project exemplifies my ability to integrate various technologies and techniques to create a powerful and versatile application, making it a valuable addition to my portfolio.
                    </p>
                </div>
            </main>
        </div>
    );
}
