import React from "react";

export default function Joke(props) {
    

  const [message, setMessage] = React.useState([1,2])
  
 const [isShown, setIsshown] = React.useState(false)

  function Toggle(params) {
    setIsshown(prev => !prev)
  }



  let someVar

  if (message.length > 1) {
       someVar = 'messages'
  } else if (message.length === 1) {
       someVar = 'message'
  } else {
      someVar = 'no dudes'
  }
  
    

  return(


  <div className="mx-auto mt-10 text-center">
   <h1 className="text-2xl font-bold font-mono">{props.setup}</h1>
   {isShown && <p>{props.punchline}</p>}
   <button onClick={Toggle}className="border border-black">{isShown ? 'hide' : 'show'}</button>
   <hr />

  {
  message.length === 0 ? 
  <p>you are all caught up</p> : 
  <p>you have {message.length} {someVar}</p>}

  </div> 

)


} 
