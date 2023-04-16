// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const lightHome = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const darkHome = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeHomeTheme = isDarkTheme ? darkHome : lightHome
      const changeHomebg = isDarkTheme ? 'home-dark' : null
      const homeHeading = isDarkTheme ? 'home-text' : null
      return (
        <>
          <Navbar />
          <div className={`home-bg ${changeHomebg}`}>
            <div className="home-container">
              <div className="home-content">
                <img src={changeHomeTheme} alt="home" className="home-img" />
                <h1 className={`home-heading ${homeHeading}`}>Home</h1>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
