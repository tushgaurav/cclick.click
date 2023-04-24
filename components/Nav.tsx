import { SignIn, SignUp, currentUser } from "@clerk/nextjs/app-beta";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import styles from "@/styles/nav.module.css";

export default async function Nav() {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <ul className={styles.nav_ul}>
          <li>
            <Link className={styles.nav_a} href="/paste">
              Paste
            </Link>
          </li>
          <li>
            <Link className={styles.nav_a} href="/about">
              About
            </Link>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              Services
            </a>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              Contact
            </a>
          </li>
          {/* <li id="install-btn">Install</li> */}
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/login">Login/Regi</Link>
            </SignedOut>
          </li>
        </ul>
      </nav>
    </div>
  );
}
