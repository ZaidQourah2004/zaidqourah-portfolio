import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function ProjectCard({ project }) {
    return (
        <div className={styles.card}>
            <Image src={project.image} alt={project.name} width={300} height={200} />
            <h3>{project.name}</h3>
            <a href={project.link} className={styles.button}>Download</a>
        </div>
    );
}
