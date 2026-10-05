import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Screenshot from './components/Screenshot.jsx'
import Shortcuts from './components/Shortcuts.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#fcfdff] selection:bg-amber-400 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshot />
        <Shortcuts />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
