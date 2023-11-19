// App.js

import React from 'react'
import { Footer, Courses, Features, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Courses />
      <CTA />
      <Features />
      <Brand />
      <Footer />
    </div>
  )
}

export default App
