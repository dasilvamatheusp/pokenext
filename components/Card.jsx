import Image from 'next/image'
import styles from '../styles/Card.module.css'
import Link from 'next/link'

export default function Card({ pokemon }) {

   return (
      <div className={styles.card}>
         <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={140}
            height={140}
            alt={pokemon.name}
         />
         <p className={styles.id}>#{pokemon.id}</p>
         <h3 className={styles.title}>{pokemon.name}</h3>
         <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
      </div>
   )
}