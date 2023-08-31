import Titulo from 'components/Titulo';
import Card from 'components/Card';
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import { useEffect, useState } from 'react';

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/JoaoDognini/cine-tag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => setVideos(dados))
  }, [])

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
