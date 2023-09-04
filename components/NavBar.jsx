import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css';

export default function NavBar() {
   return (
      <nav className={styles.navBar}>
         <div className={styles.logo}>
            <Link href={'/'}>
               <Image
                  src='/images/pokeball.png'
                  alt="Logo"
                  width={30}
                  height={30}
               />
            </Link>
            <h1>Poke<span>Next</span></h1>
         </div>
         <ul className={styles.navMenu}>
            <li>
               <Link href={'/'}>Home</Link>
            </li>
            <li>
               <Link href={'/about'}>Sobre</Link>
            </li>
         </ul>
      </nav>
   )
}