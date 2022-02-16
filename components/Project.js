import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import styles from "../styles/project.module.css"
import reactrix from "../public/demo.gif"
import LockedOut1 from "../public/lockedout1.png"
import LockedOut2 from "../public/lockedout2.png"
import uSPOT from "../public/uSPOT.gif"
import unBeatable1 from "../public/unBeatable1.png"
import unBeatable2 from "../public/unBeatable.png"

const Project = () => {
    return (
        <div>
        <h1 className={styles.h1}> Open Source Products: </h1>
        <div className={styles.gridContainer}>
            <div className={styles.grid1}>
                <a className={styles.a} href='https://github.com/oslabs-beta/Reactrix'> Reactrix </a>
                <h6 className={styles.font}>React, Node.js, Express, TypeScript, PostgreSQL </h6>
                <Image src={reactrix}/>
            </div>
            <div className={styles.grid2}>
                <a className={styles.a} href='https://github.com/heojay0309/LockedOut'>LockedOut </a>
                <h6 className={styles.font}>React, Node.js, Express, TypeScript, PostgreSQL </h6>
                <Image src={LockedOut2} />
                <Image src={LockedOut1} />
            </div>
            <div className={styles.grid3}>
                <a className={styles.a} href='https://github.com/Team-API-Reference/uSPOT'>uSPOT </a>
                <h6 className={styles.font}>React, Node.js, Express, TypeScript, PostgreSQL </h6>
                <Image src={uSPOT} />
            </div>
            <div className={styles.grid4}>
                <a className={styles.a} href='https://github.com/jayjonathantrevorleonard/unbEATable'>unbEATable </a>
                <h6 className={styles.font}>React, Node.js, Express, TypeScript, PostgreSQL </h6>
                <Image src={unBeatable1} />
                <Image src={unBeatable2} />
            </div>
            </div>
        </div>
    )
}

export default Project;