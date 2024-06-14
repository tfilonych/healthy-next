import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <a href='https://facebook.com'>
      <img src='/images/twitter.svg' alt='' />
    </a>
    <a href='https://twitter.com'>
      <img src='/images/facebook.svg' alt='' />
    </a>
    <div className={styles.copyright}>© 2024 Healthy Plate</div>
  </footer>
);

export default Footer;
