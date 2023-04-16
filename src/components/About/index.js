// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const lightAbout =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const darkAbout = 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeAboutTheme = isDarkTheme ? darkAbout : lightAbout
      const changeAboutbg = isDarkTheme ? 'about-dark' : null
      const AboutHeading = isDarkTheme ? 'about-text' : null
      return (
        <>
          <Navbar />
          <div className={`about-bg ${changeAboutbg}`}>
            <div className="about-container">
              <div className="about-content">
                <img src={changeAboutTheme} alt="about" className="about-img" />
                <h1 className={`about-heading ${AboutHeading}`}>About</h1>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
