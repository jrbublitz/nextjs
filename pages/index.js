import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <blockquote className={styles.blockquote}>
          <h5>Be patient outsider. We need to wait for the scout group to come back for more information, they will be back soon. Here take a beer.</h5>
        </blockquote>
        <a className={styles.emoji}>🍺🧝🏻‍♂</a>
      </main>
    </div>
  )
}
