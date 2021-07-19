import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav className={styles.footer}>
        <Link href="/">
          <a>
            <Image src="/Facebook.svg" width="40" height="40" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/Instagram.svg" width="40" height="40" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/Twitter.svg" width="40" height="40" />
          </a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
