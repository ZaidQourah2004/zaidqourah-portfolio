import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact Me</Link>
        </nav>
    );
}
