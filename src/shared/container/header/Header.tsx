"use client";
import { useState } from "react";
import dropdown from '@/../public/dropdown.svg';
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
      
    return(
        <header>
            <section>
            <p><b>A S L Website</b></p>
            </section>
            <section>
                <button>
                    <Image src={dropdown} alt="" onClick={() => setIsOpen(!isOpen)}/>
                    <span>Menu</span>
                </button>

                {isOpen && (
                     <ul className="dropdown-menu">
                        <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                            About Me
                        </button>
                        <button onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}>
                            Overview
                        </button>
                        <button onClick={() => document.getElementById("framework")?.scrollIntoView({ behavior: "smooth" })}>
                            Framework
                        </button>
                        </ul>
                )}
            </section>
        </header>
    )
};

export default Header;