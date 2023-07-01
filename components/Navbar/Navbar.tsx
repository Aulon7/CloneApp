import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@mocks/dummyData';
import AuthProvider from '../AuthProvider';
import classNames from 'classnames';

const Navbar = () => {
  const session = {};
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItems}>
        <Link href='/'>
          <Image src='/logo.svg' width={115} height={45} alt='Logo' />
        </Link>
        <ul className={classNames(styles.navLinks, styles.linkItem)}>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className={classNames(styles.navProfileItem, styles.linkItem)}>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
