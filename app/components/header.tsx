'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentPath = usePathname();

    return (
        <div className="bg-white text-black border-b border-slate-200 border-solid fixed w-full">
            <div className="container max-w-screen-lg m-auto px-10 py-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={() => {setMobileMenuOpen(true);}}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </div>

                    <div className="hidden md:flex">
                        <Link href="/" className={currentPath === "/" ? "text-sky-500 mr-10" : "mr-10 hover:text-sky-500" }>Index</Link>
                        <Link href="/about" className={currentPath === "/about" ? "text-sky-500 mr-10" : "mr-10 hover:text-sky-500" }>About</Link>
                        <Link href="/experience" className={currentPath === "/experience" ? "text-sky-500" : "hover:text-sky-500" }>Experience</Link>
                    </div>

                    <div style={{textAlign: 'right'}}>
                        <Link href="https://github.com/janerikbergman" className="mr-10" target="_blank"><FontAwesomeIcon icon={faGithub} fontSize={24}/></Link>
                        <Link href="https://fi.linkedin.com/in/jan-erik-bergman-0b3235b5" target="_blank"><FontAwesomeIcon icon={faLinkedin} fontSize={24}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}