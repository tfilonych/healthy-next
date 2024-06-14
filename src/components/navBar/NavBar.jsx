import Link from 'next/link';
import styles from './navBar.module.css';

const NavBar = () => (
  <navigation className={styles.navigation}>
    <nav className={styles.nav} tabIndex={-1}>
      <Link className={styles.link} href='/'>
        Home
      </Link>
      <Link className={styles.link} href='/about'>
        About
      </Link>
      <Link className={styles.link} href='/recipes'>
        Recipes
      </Link>
    </nav>
  </navigation>
);

export default NavBar;
