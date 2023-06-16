import Image from "next/image";
import styles from '../styles/About.module.css';


export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor
                at Hampden-Sydney College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source.
            </p>

            <Image
                src='/images/charizard.png'
                alt="charizard"
                height={300}
                width={300}
                quality={100} />
        </div>
    );
}