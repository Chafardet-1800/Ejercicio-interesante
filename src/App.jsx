import { useEffect, useState } from 'react'
import './App.css'
import Card from '../componentes/Card'
import useAppi from './hook/useAppi'

function App() {
  
  const{Data, setTotalUsers, totalUsers} = useAppi()

  console.log(Data)
  
  const plus = ()=>{setTotalUsers(totalUsers + 1)}
  const minus = ()=>{setTotalUsers(totalUsers - 1)}

  return (
    <div className='App'>
        <div className='botonera'>
            <button onClick={minus}>-1</button>
            <p>{totalUsers}</p>
            <button onClick={plus}>+1</button>
        </div>

        {Data?.map((user,index) => {
           return <Card key={index} user={user}/>
          })
        }
        
    </div>
  )
}

export default App
