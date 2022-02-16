import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import Email from "../public/Email.png"
import GitHub from "../public/GitHub.png"
import LinkedIn from "../public/LinkedIn.png"
import styles from "../styles/contact.module.css"

const Contact = () => {
    return (
        <div>
            <h1 className={styles.header}>Contact</h1>
            <div className={styles.spacing}>
                <li>
                    <Image src={Email} width={40} height={40}/>
                    <a
                        href="mailto: heojay0309@gmail.com"
                        className={"transition-colors hover:text-yellow-500"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        { } heojay0309@gmail.com
                    </a>
                </li>
                <li><Image src={LinkedIn} width={40} height={40}/>
                           <a
                           href="https://www.linkedin.com/in/heo"
                           className={"transition-colors hover:text-yellow-500"}
                           target="_blank"
                           rel="noreferrer"
                       >
                            { } linkedin.com/in/heo
                       </a>
                </li>
                <li><Image src={GitHub} width={40} height={40}/>
                <a
                            href="https://github.com/heojay0309"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            { } github.com/heojay0309
                        </a>
                </li>
            </div>
        </div>
    )
}

export default Contact;