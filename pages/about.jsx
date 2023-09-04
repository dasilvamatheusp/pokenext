import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
   return (
      <div className={styles.container}>
         <h1>Sobre o Projeto</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente aliquam deleniti veniam culpa. Obcaecati eaque laudantium amet, voluptatum saepe, temporibus aut molestiae a inventore doloribus cupiditate cum nulla non!</p>
         <Image
            src='/images/charizard.png'
            alt='charizard'
            width={300}
            height={300}
         />
      </div>
   )
}