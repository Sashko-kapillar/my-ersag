// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header/header'
import Hero from './components/Hero/Hero'
import { BenefitsSection } from './components/Benefits'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
      <Hero />
      <BenefitsSection />
      </main>
      {/* <footer /> */}
    </>
    
  )
}

export default App
