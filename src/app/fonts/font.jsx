// src/fonts.jsx
import localFont from 'next/font/local';

const kalamBold = localFont({
  src: './Kalam-Bold.ttf'
});

const kalamLight = localFont({
  src: './Kalam-Light.ttf'
});

const salsaRegular = localFont({
  src: './Salsa-Regular.ttf',
});

export { kalamBold, kalamLight, salsaRegular };
