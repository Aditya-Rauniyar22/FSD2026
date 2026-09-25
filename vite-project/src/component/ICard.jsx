import React from 'react'

    function ICard({data}){
        return(
            <> 
            <div style={{border:'10px solid red',height:'410px',width:'300px',marginLeft:'200px'}}>
                { <img src={data.pic} height="150px" width="120px"/>}
                <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
                <h2 style={{color:'red'}}>Welcome to React</h2>
                { <><h3 style={{ color: 'white' }}>Name:Aditya Rauniyar</h3><h3 style={{ color: 'white' }}>Roll <no className=":2400321530020">{data.roll}</no></h3><h3 style={{ color: 'white' }}>Branch:AIML</h3></> }
                { <><h3 style={{ color: 'white' }}>Section:C</h3><h3 style={{ color: 'white' }}>Add.:Ghaziabad</h3></>}

                <img src={data.pic} height={200} width={200}></img>
                <h3>Roll:{data.roll}</h3>
                <h3>Name:{data.name}</h3>   
                <h3>Branch:{data.branch}</h3>
            </div>
            { <div style={{border:'20px solid brown',height:'450px',width:'350p,',marginLeft:'100px'}}>
                <h3>Brand:{data.brand}</h3>
                <h3>Tag:{data.tag}</h3>
                <h3>Fame:{data.fame}</h3>
            </div> }
            </>
        )
    }
    export default ICard