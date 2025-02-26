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
                    Menu
                </button>

                {isOpen && (
                     <ul className="dropdown-menu">
                        <button>About me</button>
                        <button>Overview</button>
                        <button>Framework</button>
                    </ul>
                )}
            </section>
        </header>
    )
};

export default Header;