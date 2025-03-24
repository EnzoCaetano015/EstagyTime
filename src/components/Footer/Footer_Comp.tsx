import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
            
                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} StagyTime</p>
                </div>
            </footer>
        </>
    )
}

export default Footer