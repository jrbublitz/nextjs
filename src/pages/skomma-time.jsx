import Dialogs from '../components/Dialogs';

export default function skommaTime(){
  const tag = <a>🍺🦁</a>
  const name = "Leo - The khajiit"
  const text = " HELLO OUTSIDERRR, LET'S DRINK SKOOOMMAA !!!" 

  return(
    <Dialogs dialog={text} person={tag} name={name}/>
  )
}