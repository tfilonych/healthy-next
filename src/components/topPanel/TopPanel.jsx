import Link from 'next/link';
import Logo from '../logo/Logo';
import styles from './topPanel.module.css';

const TopPanel = () => (
  <div className={styles.topPanel}>
    <Logo />
    <Link className={styles.loginBtn} href='/login'>
      Sign In
    </Link>{' '}
    :{/* <Link className={styles.loginBtn} href='/'>Sign Out</Link> */}
  </div>
);

export default TopPanel;
