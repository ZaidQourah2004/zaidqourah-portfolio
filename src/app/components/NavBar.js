import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 shadow-md">
            <div className="flex items-center">
                <Link href="/" passHref>
                    <div className="relative" style={{ width: '68px', height: '68px' }}> {/* Adjust the width and height as needed */}
                        <Image src="/images/logo1.svg" alt="Logo" layout="fill" objectFit="contain" />
                    </div>
                </Link>
            </div>
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
