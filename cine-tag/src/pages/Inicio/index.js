import Titulo from 'components/Titulo';
import Card from 'components/Card';
import videos from 'json/db.json';
import styles from './Inicio.module.css';
import Banner from 'components/Banner';

export default function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo texto='Um lugar para guardar seus vídeos e filmes' />
      <section className={styles.container}>
        {videos.map(video => {
          return <Card {...video} key={video.id}></Card>
        })}
      </section>
    </>

  )
}
