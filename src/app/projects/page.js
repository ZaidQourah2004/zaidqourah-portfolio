import Navbar2 from '../components/Navbar2';
import ProjectCard from '../components/ProjectCard';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';

const projects = [
    {
        name: 'Soccer Prediction Model',
        image: '/images/epl.png',
        link: '/soccer',
    },
    {
        name: 'Stock Market Simulator',
        image: '/images/stock-market.png',
        link: '/stocks',
    },
    {
        name: 'Digital Planner and Reminders',
        image: '/images/planner.webp',
        link: '/planner',
    },
    {
        name: 'Solitaire',
        image: '/images/solitaire.jpeg',
        link: '/solitaire',
    },
    {
        name: 'Network Analysis Software',
        image: '/images/network.jpg',
        link: '/network',
    },
    {
        name: 'Journaling App',
        image: '/images/journal.jpg',
        link: '/journal',
    },
    {
        name: 'Music Plagiarism Detector',
        image: '/images/music.webp',
        link: '/music',
    },
    {
        name: 'Hackathon Application Analyzer',
        image: '/images/mlh.jpeg',
        link: '/hackathon',
    },
    {
        name: 'Star Trek Shortest Path Finder',
        image: '/images/star-trek.png',
        link: '/star-trek',
    },
];

export default function Projects() {
    return (
        <BackgroundGradientAnimation>
            <div className="min-h-screen flex flex-col text-white">
                <Navbar2 />
                <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative overflow-hidden">
                    <h1 className="text-4xl font-bold p-4 mt-4 animate-fade-in">My Projects</h1>
                    <hr className="w-full border-gray-700 my-4 animate-slide-in-up" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <div key={index} className="p-4 animate-slide-in-up">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </BackgroundGradientAnimation>
    );
}
