
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar, LoadingScrean } from './componets'
import { Home, Login, ProductDetail, Purchaches } from './pages'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import moon from './assets/icons/moon.svg'
import sun from './assets/icons/sun.svg'


function App() {

  const isLoading = useSelector(state => state.isLoading)
  const [Dakmode, setDakmode] = useState("")

  const darkmode = () => {
    if (Dakmode === "") {
      setDakmode("on")
    } else {
      setDakmode("")
    }
  }

  return (

    <body className={Dakmode === "on" ? 'dark' : ""} >

      <HashRouter>

        <NavBar />
        {isLoading && <LoadingScrean />}
        <div className='btn_darkmode'>
          {
            Dakmode === "on" ? (
              <img className='toogle-theme__icon' src={moon} alt="" />
            )
              :
              (<img className='toogle-theme__icon' src={sun} alt="" />)

          }
          <button onClick={() => darkmode()}  >{Dakmode === "on" ?

            " Dark Mode"
            :
            "Light Mode"

          }

          </button>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Purchaches' element={<Purchaches />} />
          <Route path='/Products/:id' element={<ProductDetail />} />
        </Routes>

      </HashRouter>

    </body>

  )
}

export default App
