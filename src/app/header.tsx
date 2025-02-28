import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

function header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Link href="/home"><img src="logo.png" alt="company-logo" className='logo'/></Link></li>
                <li><Link href="/home" className='text'/>Home</li>
                <li><Link href="/services" className='text' />Our Services</li>
                <li><Link href="/home" className='text'/>Blog</li>
                <li><Link href="/contact" />Contact Us</li>
                <li><Link href="/about" className='text'/>About Us</li>
                <li><Link href="/search"><img src="search.png" alt="search"/></Link></li>
                <li><Link href="/cta-button">
                <button className="cta-btn">
                    Talk An Expert
                </button>
                </Link></li>
            </ul>
        </header>
    );
}

export default header;