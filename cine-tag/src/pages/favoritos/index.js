import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import Card from 'components/Card';
import Banner from 'components/Banner';

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo texto='Meus Favoritos' />
            <section>
                <Card id='1' titulo='Gato Bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png'></Card>
            </section>
        </>
    )
}
