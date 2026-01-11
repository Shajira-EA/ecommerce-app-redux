"use client";

import { fchmodSync } from 'fs';
import styles from './Footer.module.css';

function Footer() {
    return ( 
        <div className={styles.footer}>
                <div className={`row d-flex  justify-content-center mt-3 m-0`}>
                <div className={`col ${styles.columns}`}>
                    <h5 className={styles.listheading}>Customer Support</h5>
                    <ol className={styles.list}>
                        <li>Help Center</li>
                        <li>FAQs</li>
                        <li>Shipping & Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ol>
                </div>
                <div className={`col ${styles.columns}`}>
                    <h5 className={styles.listheading}>Contact Information</h5>
                    <ol className={`pt-3 ${styles.list}`}>
                        <li>Email: support@demoestore.com</li>
                        <li>Phone: +91 90000 00000</li>
                    </ol>
                </div>
                <div className={`col ${styles.columns}`}>
                    <h5 className={styles.listheading}>Follow Us</h5>
                    <div className='pt-3 ps-3'>
                    <img className={styles.footerIcons} src="/facebook.png" alt="facebook" /> 
                    <img className={styles.footerIcons} src="/instagram.png" alt='instagram' />
                    <img className={styles.footerIcons} src="/twitter.png" alt='Twitter'/>
                    <img className={styles.footerIcons} src="/linkedin.png" alt='LinkedIn'/>
                </div>
                </div>
                </div>
                <div className={styles.copyright}>
                    © 2025 | Demo E-commerce Application | All Rights Reserved
                </div>
                </div>
     );
}

export default Footer;