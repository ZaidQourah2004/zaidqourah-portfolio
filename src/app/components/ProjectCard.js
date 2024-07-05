import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
    return (
        <div className={`${styles.card} relative rounded-lg overflow-hidden shadow-lg w-full h-64 md:h-80`}>
            <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={800}
                className="rounded-lg transition duration-300 ease-in-out transform hover:opacity-70 object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <Link href={project.link}>
                    <div className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
                        Preview
                    </div>
                </Link>
            </div>
        </div>
    );
}
