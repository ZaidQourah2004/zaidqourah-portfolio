import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>Contact Information</h1>
                {/* Add your hobbies and contact info here */}
            </main>
            <Footer />
        </div>
    );
}
