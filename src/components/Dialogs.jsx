import styles from '../styles/Home.module.css';
import TypeScript from './TypeScript'
import Head from 'next/head';


export default function Dialogs(props) {   

 var logo = '< Cap. 01 />'

  return (   
    <html lang="pt-br">
      <body className={styles.container} lang={'pt-br'}>
        <Head>          
          <title>Welcome Adventurer 🍺</title>                   
          <link rel="icon" href="images/swords.png"/>;
        </Head>

        <header>
          <h5>{logo}</h5>
        </header>

        <main className={styles.main}>       
          <div className={styles.text}>  
            <a>{props.name}</a>
            <blockquote className={styles.blockquote}>          
              <TypeScript dialog={props.dialog} />            
            </blockquote> 
          </div>

          <div className={styles.emoji}>
            <a>{props.person}</a>
         </div>              
        </main>
        
        <footer className={styles.footer}>        
          <a href="https://github.com/jrbublitz"><img src="images/github.png" alt="github" className={styles.github} /></a>
          <a href="https://www.linkedin.com/in/jefferson-roberto-bublitz-junior-338193101/"><img src="images/linkedin.png" alt="linkedin" className={styles.link} /></a>        
        </footer>
      </body>    
    </html>        
  ) 
}
