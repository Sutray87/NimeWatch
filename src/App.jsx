import { useState } from 'react'
import Topbar from './layout/topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container h-screen w-screen mx-auto">
      <div className='h-full W-full bg-bodyBg bg-fixed bg-center -z-50'>
        <div className="h-full w-full bg-black-900 bg-opacity-70">
          <div className='flex h-20 w-full justify-center items-center bg-black-900 bg-opacity-60'>
            <Topbar/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
