"use client";

import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Contact() {
    const [status, setStatus] = useState(""); // Add state for status

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "88ed3fd5-bb53-4f67-8726-738374a125a9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                setStatus("Your message has been sent successfully!");
            } else {
                setStatus("Failed to send your message. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative">
                <h1 className="text-5xl font-bold p-4 mt-16">Contact Me</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
                    <input type="hidden" name="access_key" value="88ed3fd5-bb53-4f67-8726-738374a125a9" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-2 bg-gray-900 text-white rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 bg-gray-900 text-white rounded-lg"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-2 bg-gray-900 text-white rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full p-2 bg-gray-900 text-white rounded-lg"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-200">
                        Send
                    </button>
                    {status && <p className="text-center mt-4">{status}</p>}
                </form>
                <div className="flex mt-8 space-x-4">
                    <Link href="https://www.linkedin.com/in/zaid-qourah" passHref>
                        <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </button>
                    </Link>
                    <Link href="mailto:zaidqourah@proton.me" passHref>
                        <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="LinkedIn">
                            <FaEnvelope size={24} />
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
