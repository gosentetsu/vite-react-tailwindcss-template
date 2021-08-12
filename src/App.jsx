import React from 'react'
import reactLogo from './logo.svg'

function App() {
  return (
    <div>
      <img src={reactLogo} alt="reactLogo" className=" mx-auto h-28 text-center self-center m-10" />
      {/* <br /> */}
      <h1 className=" text-center text-3xl p-4 font-bold">This is a { }
        <a className="text-blue-400 hover:underline" href="https://reactjs.org/">React</a>
        { } project initilized{ }
        <span className="italic"> by </span>
        <a className="text-purple-600 hover:underline" href="https://vitejs.dev">Vite</a>
        { } ,along with { }
        <a className="text-green-600 hover:underline" href="https://tailwindcss.com">tailwindcss</a>
        { } configured.</h1>
    </div>
  )
}

export default App
