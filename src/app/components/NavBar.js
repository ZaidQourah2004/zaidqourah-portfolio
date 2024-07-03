import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="relative flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 shadow-md">
            <div className="flex-1 flex justify-center space-x-4">
                <Link href="/" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Home</button>
                </Link>
                <Link href="/resume" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Resume</button>
                </Link>
                <Link href="/contact" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Contact Me</button>
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="https://github.com/your-github-username" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="GitHub">
                        <FaGithub size={24} />
                    </button>
                </Link>
                <Link href="https://linkedin.com/in/your-linkedin-username" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </button>
                </Link>
            </div>
        </nav>
    );
}
