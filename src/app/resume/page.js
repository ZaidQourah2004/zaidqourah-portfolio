import Navbar from '../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function Resume() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>My Resume</h1>
                {/* Add your creative resume content here */}
            </main>
        </div>
    );
}
