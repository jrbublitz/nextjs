import styles from '../styles/Home.module.css'
import Typical from 'react-Typical'

export default function Home() {  
  return (      
    <div className={styles.container}> 
      <main className={styles.main}>      
        <blockquote className={styles.blockquote}>          
          <p>
            <Typical
            steps={["Be patient outsider. We need to wait for the scout group to come back for more information, they will be back soon. Here take a beer."]}
            />            
          </p>          
        </blockquote>        
        <a className={styles.emoji}>🍺🧝🏻‍♂</a>
      </main>
    </div>
  )
}
