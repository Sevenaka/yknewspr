import React from "react"
import Layout from "../components/layout"
import Logo from '../images/e771731.png'

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="logo-block">
                  <a href="/">
                    <img src={Logo} alt="Реклана на YK-news.kz" />
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <nav>
                  <ul>
                    <li><a href=""></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        
      </Layout>
    )
  }
}

export default Home
