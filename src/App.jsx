import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Movies from './components/Movies/Movies'

function App() {

  return (
    <div className='w-11/12 mx-auto p-5'>
      <Navbar></Navbar>
      <div className='mt-5 mb-5'>
        <Movies></Movies>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default App
