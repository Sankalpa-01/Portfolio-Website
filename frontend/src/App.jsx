import { useState } from 'react'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default App
