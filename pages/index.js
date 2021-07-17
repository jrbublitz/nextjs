import styles from '../styles/Home.module.css'
import Typical from 'react-typical'
import Head from 'next/head'

export default function Home() {   
  var logo = '< JEFF />';
  return (   
    <html lang="pt-br">
      <div className={styles.container} lang={'pt-br'}>
        <Head>          
          <title>Adventurer</title>                   
        </Head>

        <header className={styles.header}>
          <h5>{logo}</h5>
        </header>

        <main className={styles.main}>         
          <blockquote className={styles.blockquote}>          
            <p>
              <Typical
              steps={["Be patient outsider. We need to wait for the scout group to come back for more information, they will be back soon. Here take a beer."]}
              />            
            </p>          
          </blockquote>                  
        </main>
        <div>
          <a className={styles.emoji}>🍺🧝🏻‍♂</a>
        </div>
        
        <footer className={styles.footer}>        
          <a href="https://github.com/jrbublitz"><img src="/github.png" alt="github" className={styles.github} /></a>
          <a href="https://www.linkedin.com/in/jefferson-roberto-bublitz-junior-338193101/"><img src="/linkedin.png" alt="linkedin" className={styles.link} /></a>        
        </footer>
      </div>    
    </html>        
  )
}
