import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeFavoritado from './favoritado.png';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some(fav => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeFavoritado;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img
          className={styles.capa}
          src={capa}
          alt={titulo} />
        <h2>{titulo}</h2>
      </Link>
      <img
        className={styles.favoritar}
        src={icone}
        alt='Favoritar filme'
        onClick={() => adicionarFavorito({ id, titulo, capa })} />
    </div>
  )
}
