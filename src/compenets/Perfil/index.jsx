import styles from './Perfil.module.css';


const Perfil = ({nomeUsuario}) => {
    const usuario = {

    }
    return(
        <header className={styles.header}>
            <img className={styles.avatar} src= {`./src/compenets/Perfil/imagens/gnome.jpeg`} alt="Jupter"/>
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
        
    )
}

export default Perfil
