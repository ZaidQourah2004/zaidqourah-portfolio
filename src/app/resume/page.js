// pages/resume.js

import Navbar from '../components/Navbar';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import Image from 'next/image';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';

const skills = [
    { name: "Python", image: "/logos/python.png" },
    { name: "Java", image: "/logos/java.png" },
    { name: "C++", image: "/logos/cpp.png" },
    { name: "JavaScript", image: "/logos/js.png" },
    { name: "SQL", image: "/logos/sql.png" },
    { name: "NoSQL", image: "/logos/nosql.png" },
    { name: "React", image: "/logos/react.png" },
    { name: "Spring", image: "/logos/spring.png" },
    { name: "Git", image: "/logos/git.png" },
];

const msuAiClub = {
    name: "MSU AI Club",
    role: "Project Team Lead",
    duration: "Sep 2023 – Apr 2024",
    location: "East Lansing, MI",
    logo: "/images/aiclub.svg",
    description: [
        "Led a group in building an AI-powered Nutrition Recommendation web-app.",
        "Designed frontend using Tailwind CSS and ReactJS.",
        "Implemented GPT API for an AI assistant generating diet plans.",
        "Utilized Google Firebase for secure user authentication.",
        "Managed database operations with DigitalOcean and MySQL.",
        "Deployed project hosting over 1000 concurrent users, with 45% positive feedback."
    ],
};

const secsClub = {
    name: "Software Engineering & Computer Science Club",
    role: "Co-founder",
    duration: "Dec 2023 – Present",
    location: "East Lansing, MI",
    logo: "/images/secs.jpeg",
    description: [
        "Mentoring over 200 students in Software Engineering and Computer Science.",
        "Hosting events, workshops, and coding competitions.",
        "Creating a permanent server for projects and club use.",
        "Collaborated with non-profits to enhance digital presence and databases."
    ],
};

const experiences = [
    {
        company: "Quality Logistics Ltd Co.",
        role: "Software Engineering Intern",
        duration: "May 2024 – Aug 2024",
        location: "Remote",
        logo: "/images/ql.jpeg",
        description: [
            "Led full-stack development of the company website using ReactJS, Node.js, and MongoDB.",
            "Configured HTTPS, managed DNS, and implemented security protocols.",
            "Optimized website performance, reducing load times by 50%.",
            "Applied SEO best practices, increasing monthly visitors by 300%."
        ],
    },
];

export default function Resume() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative overflow-hidden">
                <h1 className="text-5xl font-bold animate-fade-in mb-8">Resume</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in-up flex items-start space-x-4">
                            <Image src="/images/msu.png" alt="MSU Logo" width={60} height={60} />
                            <div>
                                <h3 className="text-2xl font-bold mb-2"><FaGraduationCap className="inline mr-2" /> Education</h3>
                                <p className="text-xl font-semibold mb-2">
                                    Michigan State University
                                </p>
                                <p className="text-lg mb-1">
                                    Bachelor of Science in Computer Science Engineering, Minor in Economics
                                </p>
                                <p className="text-lg mb-1">
                                    GPA: 3.77
                                </p>
                                <p className="text-lg">
                                    Expected Graduation: Fall 2025
                                </p>
                            </div>
                        </div>
                        {experiences.map((experience, index) => (
                            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in-up flex items-start space-x-4">
                                <Image src={experience.logo} alt={`${experience.company} Logo`} width={60} height={60} />
                                <div className="flex flex-col space-y-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold">{experience.company}</h3>
                                        <p className="text-lg">{experience.duration}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg">{experience.role}</p>
                                        <p className="text-lg">{experience.location}</p>
                                    </div>
                                    <ul className="list-disc pl-5 text-lg space-y-1">
                                        {experience.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in-up">
                            <h3 className="text-2xl font-bold mb-2"><FaGraduationCap className="inline mr-2" /> Honors and Awards</h3>
                            <ul className="list-disc pl-5 text-lg space-y-1">
                                <li>Member of MSU Honors College</li>
                                <li>Dean’s List</li>
                                <li>MSU Academic Scholarship</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in-up flex items-start space-x-4">
                            <Image src={msuAiClub.logo} alt={`${msuAiClub.name} Logo`} width={60} height={60} />
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">{msuAiClub.name}</h3>
                                    <p className="text-lg">{msuAiClub.duration}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg">{msuAiClub.role}</p>
                                    <p className="text-lg">{msuAiClub.location}</p>
                                </div>
                                <ul className="list-disc pl-5 text-lg space-y-1">
                                    {msuAiClub.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in-up flex items-start space-x-4 w-full md:w-[125%]">
                            <Image src={secsClub.logo} alt={`${secsClub.name} Logo`} width={60} height={60} />
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">{secsClub.name}</h3>
                                    <p className="text-lg">{secsClub.duration}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg">{secsClub.role}</p>
                                    <p className="text-lg">{secsClub.location}</p>
                                </div>
                                <ul className="list-disc pl-5 text-lg space-y-1">
                                    {secsClub.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Infinite Moving Cards */}
                <div className="mt-8 w-full flex justify-center">
                    <InfiniteMovingCards items={skills} direction="right" speed="normal" />
                </div>
            </main>
        </div>
    );
}
