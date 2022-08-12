
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar, LoadingScrean, ProtectedRoutes } from './componets'
import { Home, Login, ProductDetail, Purchaches } from './pages'
import { useSelector } from 'react-redux'
import moon from './assets/icons/moon.svg'
import sun from './assets/icons/sun.svg'
import { useState } from 'react'



function App() {

  const isLoading = useSelector(state => state.isLoading)
  const [DarkMode, setDarkMode] = useState(0)

  const darkmode = () => {
    if (DarkMode === 0) {

      setDarkMode(1)
      localStorage.setItem("DARK", 1)

    } else {
      setDarkMode(0)
      localStorage.setItem("DARK", 0)
    }
  }

  let themeDark = localStorage.getItem("DARK")

  return (

    <body className={themeDark == 1 ? 'dark' : ""} >

      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScrean />}
        <div className='btn_darkmode'>
          {
            themeDark == 1 ? (
              <img className='toogle-theme__icon' src={moon} alt="" />
            )
              :
              (<img className='toogle-theme__icon' src={sun} alt="" />)

          }
          <button onClick={() => darkmode()}  >{themeDark == 1 ?

            " Dark Mode"
            :
            "Light Mode"

          }

          </button>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/Purchaches' element={<Purchaches />} />
          </Route>
          <Route path='/Products/:id' element={<ProductDetail />} />
        </Routes>
      </HashRouter>

    </body>

  )
}

export default App
