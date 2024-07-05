import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        name: 'Soccer Prediction Model',
        image: '/images/epl.png',
        link: '/project1-download-link',
    },
    {
        name: 'Stock Market Simulator',
        image: '/images/stock-market.png',
        link: '/stocks',
    },
    {
        name: 'Digital Planner and Reminders',
        image: '/images/planner.webp',
        link: '/project3-download-link',
    },
    {
        name: 'Solitaire',
        image: '/images/solitaire.jpeg',
        link: '/project3-download-link',
    },
    {
        name: 'Network Analysis Software',
        image: '/images/network.jpg',
        link: '/project2-download-link',
    },
    {
        name: 'Journaling App',
        image: '/images/journal.jpg',
        link: '/project1-download-link',
    },
    {
        name: 'Music Plagiarism Detector',
        image: '/images/music.webp',
        link: '/project1-download-link',
    },
    {
        name: 'Hackathon Application Analyzer',
        image: '/images/mlh.jpeg',
        link: '/project1-download-link',
    },
    {
        name: 'Star Trek Shortest Path Finder',
        image: '/images/star-trek.png',
        link: '/project1-download-link',
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative">
                <h1 className="text-4xl font-bold p-4 mt-4">My Projects</h1>
                <hr className="w-full border-gray-700 my-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="p-4">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
