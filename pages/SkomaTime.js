import Head from 'next/head'
import styles from '../styles/Home.module.css'

const skommaTime = () => {
  return (
    <div className={styles.container}>
      <Head>        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <blockquote className={styles.blockquote}>
          <h5>LET'S DRINK SKOOOOMAAAA !!!</h5>
        </blockquote>
        <a className={styles.emoji}>🍺🦁</a>
      </main>
    </div>
  );
}
 
export default skommaTime;