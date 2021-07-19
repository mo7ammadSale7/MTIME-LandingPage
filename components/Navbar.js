import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>
            <Image src="/logo.svg" width="150" height="150" />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
