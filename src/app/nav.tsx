// components/Nav.js
import Link from 'next/link';
import styles from './nav.module.css';


function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/mail"><img src="envelope.png" alt="envelope"/></Link></li>
        <li><Link href="/mail">www.registerkaro.in</Link></li>
        <li><Link href="/phone"><img src="telephone.png" alt="phone"/></Link></li>
        <li><Link href="/phone">+918447746183</Link></li>
        <li><Link href="/instagram"><img src="instagram.png" alt="instagram" /></Link></li>
        <li><Link href="/facebook"><img src="facebook.png" alt="facebook" /></Link></li>
        <li><Link href="/twitter"><img src="twitter.png" alt="twitter" /></Link></li>
        <li><Link href="/pinterest"><img src="pinterest.png" alt="pinterest" /></Link></li>
      </ul>
  
    </nav>
  );
}

export default Nav;

