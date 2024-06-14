import Navbar from '../navBar/NavBar';
import TopPanel from '../topPanel/TopPanel';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <TopPanel />
    <Navbar />
  </header>
);

export default Header;
