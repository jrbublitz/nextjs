export default function typeScript(props){        

  var i = 0;

  function clearElement() {
    if (typeof window !== 'undefined') {
      document.getElementById("dialog").innerHTML = ""
    }
  }

  function typeWriter() {    
    if (typeof window !== 'undefined') {      
      if (i < props.dialog.length)  {                
        document.getElementById("dialog").innerHTML += props.dialog.charAt(i);              
        i++;
        setTimeout(typeWriter, 50); // 50 == Speed
      }        
    }          
  }
 
  return (     
    <p onAnimationStart={clearElement()} onLoad={typeWriter()} id="dialog"></p> 
  )
}