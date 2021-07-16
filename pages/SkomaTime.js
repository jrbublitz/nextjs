import styles from '../styles/Home.module.css'
import Typical from 'react-Typical'

const skommaTime = () => {
  return (
    <div className={styles.container}>

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
  );
}
 
export default skommaTime;