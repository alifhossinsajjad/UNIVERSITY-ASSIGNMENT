

import './App.css'
import Container from './components/container/Container'
import Buttons from './components/Buttons/Buttons'
import { Suspense, } from 'react'
import CountBox from './components/CountBox/CountBox'
import Assignment from './components/Assingment/Assignment'

const assignmentPromise = fetch('/utilits/data.json').then(res => res.json());

function App() {




  return (

    <div>


      {
        <Suspense fallback={<p>Loading......</p>}>
          <Assignment assignmentPromise={assignmentPromise} />
        </Suspense>
      }
    </div>


  )
}

export default App
