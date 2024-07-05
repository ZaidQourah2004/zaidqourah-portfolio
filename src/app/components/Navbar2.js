import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar2() {
    return (
        <nav className="relative flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
            <div className="flex items-center">
                <Link href="/" passHref>
                    <div className="relative transform transition-transform hover:scale-105" style={{ width: '68px', height: '68px' }}>
                        <div className="group">
                            <Image
                                src="/images/logo1.svg"
                                alt="Logo"
                                fill
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-180"
                                style={{ filter: 'brightness(0) invert(1) hue-rotate(180deg)' }}
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex-1 flex justify-center space-x-4">
                <Link href="/projects" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Projects</button>
                </Link>
                <Link href="/resume" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Resume</button>
                </Link>
                <Link href="/contact" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 border-b-2 border-transparent hover:border-indigo-400 transition">Contact Me</button>
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="https://github.com/ZaidQourah2004" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="GitHub">
                        <FaGithub size={24} />
                    </button>
                </Link>
                <Link href="https://www.linkedin.com/in/zaid-qourah" passHref>
                    <button className="text-gray-300 hover:text-indigo-400 px-3 py-2 transition" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </button>
                </Link>
            </div>
        </nav>
    );
}
