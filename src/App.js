import HeroSection from './components/HeroSection/HeroSection'
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
      <HeroSection />
      <Filter />
      <Feed />
      <ClientList />
      <Form />
      <Footer />
    </div>
  )
}

export default App
