import Dialogs from '../components/Dialogs';

export default function skommaTime(){
  const text = "Be patient outsider. "+
               "We need to wait for the scout group to come back for more information, "+
               "they will be back soon. Here take a beer. " 

  return(
    <Dialogs dialog={text}/>
  )
}