import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Header component with navigation
 * Provides consistent navigation across all pages
 */
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Reactor</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
