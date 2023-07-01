import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import { footerLinks } from '@mocks/dummyData';
import FooterColumn from './FooterColumn';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.imageContent}>
          <Image src='/logo-purple.svg' width={115} height={40} alt='logo' />
          <p className={styles.imageText}>World&apos;s leading community for creatives to share, grow and get hired.</p>
        </div>
        <div className={styles.footerContent}>
          {footerLinks.map((item) => (
            <FooterColumn key={item.title} title={item.title} links={item.links} />
          ))}
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>&copy; 2023 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
