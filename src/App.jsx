import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white">
      <Navbar/>
      <main>
        <Content/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
