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
    </div>
  );
}
 
export default skommaTime;