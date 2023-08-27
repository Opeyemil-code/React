import React from "react"
//import ReactLogo from './react/src/img/Vector (3).png'
import Joke from "./contact"
import jokesData from "./jokesData"

export default function Content(params) {
    const multiplejoke = jokesData.map(
        (joke)=> {
          return <Joke 
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline}/>  
        }
    )

    return(
        <div className="">{multiplejoke}</div>
    )
}
    

















































/*

const nums = [1,2,3,4,5,]

const squared = nums.map(
    (nums)=> {
      return(
        nums * nums
      )  
    }
)

console.log(squared)


const names =['alice','ope','agba']

const capitalized = names.map(
    (names)=>{
        return(
          names.toUpperCase()
        )
    }
)

console.log(capitalized)

const pokemon =['bulaba','balablu','tinubu']

const alphabet = pokemon.map(
    (mon)=>{
        return(
            `<p>${mon}</p>`
        )
        
        
    }
)

console.log(alphabet)





<Joke 
        setup='I got my daughter a fridge for her birthday.'
        punchline=" I can't wait to see her face light up when she opens it."
        isPun={true}/>

        <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}/>

        <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
        isPun={false}/>

        */







