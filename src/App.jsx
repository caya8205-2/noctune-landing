import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Screenshot from './components/Screenshot.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshot />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
