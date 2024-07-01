import ProjectCard from './components/ProjectCard';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css';

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
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <h1 className={styles.title}>My Projects</h1>
          <div className={styles.grid}>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
  );
}
