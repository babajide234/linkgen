"use client"

import { Copy, Info } from 'lucide-react'
import { useState } from 'react'
import { getLink } from './actions'



export default function Home() {
  const [url, setUrl]= useState<string | null>()
  const [status, setStatus]= useState(false)

  const generateLink=async ()=>{  
    try {
      const response = await getLink();

      if (response && response.length > 0) {
        const randomIndex = Math.floor(Math.random() * response.length);
        const randomUrl = response[randomIndex].url;

        setUrl(randomUrl);
        setStatus(!status);
      } else {
        console.error('No data found in the response');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
       <div className=" w-[30rem] h-[20rem] rounded-lg gap-4 bg-white px-10 py-4 flex justify-center items-center flex-col ">
          <div className=" text-center mb-10">
            <h1 className=" text-xl font-semibold text-gray-900 capitalize">Reddit link Generator</h1>
            <p className="text-xs font-semibold text-gray-900 capitalize flex items-center gap-3"><span className="text-yellow-400"><Info /></span> click on the button to generate a unique link</p>
          </div>

          <div className={`bg-gray-100  justify-between rounded-lg items-center w-full p-2 ${status ? "flex":"hidden"}`}>
              <span className="text-gray-900 px-2 flex-grow overflow-hidden ">{url}</span>
              <span className="bg-black inline-flex rounded-md text-white hover:bg-black/70 hover:cursor-pointer text-xs p-2">
                <Copy size={15} />
              </span>
          </div>
          <button onClick={generateLink} className=" bg-black hover:bg-black/70 px-5 py-4 rounded-lg ">Generate Link</button>
       </div>
    </main>
  )
}
