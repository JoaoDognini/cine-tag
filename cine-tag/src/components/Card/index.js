import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png'

export default function Card({ id, titulo, capa }) {
  return (
    <div className={styles.container}>
      <img className={styles.capa} src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      <img className={styles.favoritar} src={iconeFavoritar} alt='Favoritar filme' />
    </div>
  )
}
