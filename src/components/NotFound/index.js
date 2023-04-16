// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const notFoundImg = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const noFoundBg = isDarkTheme ? 'not-dark' : null
      const changeHeading = isDarkTheme ? 'not-dark-text' : null
      const chnageDes = isDarkTheme ? 'not-dark-des' : null
      return (
        <>
          <div className={`not-found-bg ${noFoundBg}`}>
            <Navbar />
            <div className="not-found-container">
              <div className="not-found-content">
                <img
                  src={notFoundImg}
                  alt="not found"
                  className="not-found-img"
                />
                <h1 className={`not-found-heading ${changeHeading}`}>
                  Lost Your Way?
                </h1>
                <p className={`not-found-description ${chnageDes}`}>
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
