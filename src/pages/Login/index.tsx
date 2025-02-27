import styles from "./login.module.css"

function Login(){
    return(
        <>
        <section className={styles.container}>
            <div className={styles.cadastro}>
                <form action="">
                    <h1>14:00:00</h1>
                    <label htmlFor="">Usuario</label>
                    <input type="text" />
                    <label htmlFor="">Senha</label>
                    <input type="password" />
                    <button>Entrar</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Login