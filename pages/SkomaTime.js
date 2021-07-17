import styles from '../styles/Home.module.css'
import Typical from 'react-typical'
import Head from 'next/head'

const skommaTime = () => {
  var logo = '< JEFF />';

  return (
    <html lang="pt-br">
    <div className={styles.container}>      
      <Head>          
      <title>Adventurer</title>                 
      <link rel="icon" href="swords.png"/>;
      </Head>
      
      <header className={styles.header}>
        <h5>{logo}</h5>
      </header>

      <main className={styles.main}>        
        <blockquote className={styles.blockquote}>
          <p>          
            <Typical
              steps={["HELLO OUTSIDERRR, LET'S DRINK SKOOOOMAAAA !!!"]}
            />          
          </p>
        </blockquote>
        <a className={styles.emoji}>🍺🦁</a>
      </main>

      <footer className={styles.footer}>        
        <a href="https://github.com/jrbublitz"><img src="/github.png" alt="github" className={styles.github} /></a>
        <a href="https://www.linkedin.com/in/jefferson-roberto-bublitz-junior-338193101/"><img src="/linkedin.png" alt="linkedin" className={styles.link} /></a>      
      </footer>   
    </div>
  </html>
  );
}
 
export default skommaTime;