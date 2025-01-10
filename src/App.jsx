import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className='h-screen bg-bodyBg bg-fixed bg-center -z-50'>
        <div className="h-full w-full bg-black-900 bg-opacity-70">
          <div className='flex h-20 w-full justify-center items-center bg-black-900 bg-opacity-60'>
            <ul>
              <li>logo</li>
              <li>search</li>
              <li>searchlogin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
