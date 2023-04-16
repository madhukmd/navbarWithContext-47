// Write your code
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const lightWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darkWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const darkTheme = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const lightTheme =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeWebsiteLogo = isDarkTheme ? darkWebsiteLogo : lightWebsiteLogo
      const changeThemeButton = isDarkTheme ? lightTheme : darkTheme
      const changeBg = isDarkTheme ? 'dark-bg' : null
      const chnageHeading = isDarkTheme ? 'dark-heading' : null

      const changeMode = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar-container ${changeBg}`}>
          <div className="navbar-content-container">
            <img
              src={changeWebsiteLogo}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-list-container">
              <li>
                <Link to="/" className={`link ${chnageHeading}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`link ${chnageHeading}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="button"
              onClick={changeMode}
              data-testid="theme"
            >
              <img src={changeThemeButton} alt="theme" className="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
