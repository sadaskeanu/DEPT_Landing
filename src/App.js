import HeroSection from './components/HeroSection/HeroSection'
import background_img_11 from './components/HeroSection/img/background_img_11.jpg'
import React from 'react'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import ClientList from './components/ClientList/ClientList'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Feed from './components/Feed/Feed'

function App() {
  return (
    <div>
      <Header />
      <HeroSection
        head="WORK"
        case={
          <React.Fragment>
            A selection of projects that <strong>pioneer tech</strong> and{' '}
            <strong>marketing</strong> to help brands stay ahead.
          </React.Fragment>
        }
        img={background_img_11}
      />

      <Filter />
      <Feed />
      <ClientList />
      <Form />
      <Footer />
    </div>
  )
}

export default App
