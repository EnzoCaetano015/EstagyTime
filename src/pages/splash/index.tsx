import styles from "./splash.module.css"

function Splash() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.logo}>
                    <h1>ESTAGYTIME</h1>
                    <h3>Sistema de Controle de Horas e Tarefas para Estagio</h3>
                </div>
            </section>
        </>
    )
}

export default Splash