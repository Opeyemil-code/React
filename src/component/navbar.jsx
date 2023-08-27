import React from "react"

export default function NavBar(props) {



    return(
        <header className={props.toggle ? 'flex flex-row space-x-8 text-cente bg-white lg:w-3/4 lg:mx-auto text-3xl text-black p-6 mt-8 rounded-t-lg font-inter' :
        'flex flex-row space-x-8 text-cente bg-black w-3/4 lg:mx-auto text-3xl text-white p-6 mt-8 rounded-t-lg font-inter l'
    }>
            <div>
                <h1 className="text-cyan-400 font-bold lg:ml-72">ReactFacts</h1>
            </div>
            <div>
                
              <div className="flex flex-row text-xl lg:ml-60 space-x-2 ">

                <div>
                    <p>light</p>
                </div>
         
                {
                    props.toggle   ? <div className="bg-black w-12 h-6 mt-1 rounded-full">
                        <button onClick={props.ToggleDark} className="bg-white rounded-full w-4 h-4 ml-1"></button> 
                    </div>  : <div className="bg-white w-12 h-6 mt-1 rounded-full">
                      <button onClick={props.ToggleDark} className="bg-gray-500 rounded-full w-4 h-4 ml-6">
                      </button>
                    </div>
                }


                <div>
                    <p>dark</p>
                </div>

              </div>

            </div>
        </header>
    )
}

