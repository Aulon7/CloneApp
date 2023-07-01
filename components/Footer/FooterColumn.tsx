import React from 'react';
import Link from 'next/link';
import styles from './footercolumn.module.css';

interface ColumnProps {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className={styles.footerContainer}>
      <h4 className={styles.footerTitle}>{title}</h4>
      <ul className={styles.footerLinks}>
        {links.map((link) => (
          <Link href='/' key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
