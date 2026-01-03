import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const getData= async ()=>{
  const response=await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
  setUserData(response.data)
  console.log(response.data);

  }
  let printUserData = 'no user Available'
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
       <a href={elem.url} target='_blank'>
         <div className='h-40 w-44 bg-white rounded-xl'>
        <img className='h-full w-full overflow-hidden object-cover'src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
       </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
      onClick={getData}
       className='bg-green-600 active:scale-95 mb-3 px-5 py-4 text-white'>Get data</button>
       <div className='flex flex-wrap gap-4'>
        {printUserData}
       </div>
    </div>
  )
}

export default App