import Navbar from '../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>Contact Information</h1>
                {/* Add your hobbies and contact info here */}
            </main>
        </div>
    );
}
