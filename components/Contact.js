import React from "react"
import Image from "next/image"
import Email from "../public/Email.png"
import GitHub from "../public/GitHub.png"
import LinkedIn from "../public/LinkedIn.png"
import styles from "../styles/contact.module.css"

const Contact = () => {
    return (
        <div className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            <h1 className={styles.header}>Contact</h1>
            <div className={styles.spacing}>
                <li className={styles.list}>
                    <Image src={Email} width={25} height={25}/>
                    <a
                        href="mailto: heojay0309@gmail.com"
                        className={"transition-colors hover:text-yellow-500"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        { } heojay0309@gmail.com
                    </a>
                </li>
                <li className={styles.list}><Image src={LinkedIn} width={25} height={25} />
                           <a
                           href="https://www.linkedin.com/in/heo"
                           className={"transition-colors hover:text-yellow-500"}
                           target="_blank"
                           rel="noreferrer"
                       >
                            { } linkedin.com/in/heo
                       </a>
                </li>
                <li className={styles.list}><Image src={GitHub} width={25} height={25}/>
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