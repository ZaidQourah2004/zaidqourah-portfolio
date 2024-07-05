import Navbar from './components/Navbar';
import Image from 'next/image';
import { LampDemo } from './components/ui/lamp';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative overflow-hidden">
                <LampDemo />
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-12"> {/* Added margin-top for spacing */}
                    <div className="flex flex-col space-y-4">
                        <p className="text-lg">
                            Welcome to my personal portfolio. I am Zaid Qourah, a Computer Science Engineering student at
                            Michigan State University with a passion for AI, Machine Learning, and software development.
                        </p>
                        <ul className="list-disc pl-5 text-lg space-y-2">
                            <li>Exploring AI and Machine Learning technologies</li>
                            <li>Developing innovative software solutions</li>
                            <li>Committed to using technology for social good</li>
                        </ul>
                        <p className="text-lg">
                            This portfolio showcases my best projects, professional experiences, and contact
                            information.
                        </p>
                        <p className="text-lg">
                            You are able to preview and download my projects to run them locally on your devices.
                        </p>
                        <p className="text-lg">
                            Feel free to explore and get in touch if you have any questions or
                            collaboration ideas!
                        </p>
                        <p className="text-lg">
                            You can also find my social links on the right side of the navigation bar. If you would like
                            to return to the landing page, click on my logo on the left side of the navigation bar.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-xs overflow-hidden rounded-lg h-96 bg-gray-800">
                            <Image
                                src="/images/ZQ1.png"
                                alt="Profile Image"
                                fill
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
