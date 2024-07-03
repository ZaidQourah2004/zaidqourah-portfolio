import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const projects = [
    {
        name: 'Project 1',
        image: '/images/project1.jpg',
        link: '/project1-download-link',
    },
    {
        name: 'Project 2',
        image: '/images/project2.jpg',
        link: '/project2-download-link',
    },
    {
        name: 'Project 3',
        image: '/images/project3.jpg',
        link: '/project3-download-link',
    },
];

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
