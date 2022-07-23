import HeroSection from './components/HeroSection/HeroSection'
import background_img_11 from './components/HeroSection/img/background_img_11.jpg'
import ClientCard from './components/ClientCard/ClientCard'
import React from 'react'
import content from './content/content'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import ClientNote from './components/ClientNote/ClientNote'
import { type } from '@testing-library/user-event/dist/type'

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

      {content.map(client => {
        if (client.type === 'client') {
          return (
            <ClientCard
              key={client.brand}
              brand={client.brand}
              title={client.title}
              coverUrl={client.coverUrl}
            />
          )
        }
        if (client.type === 'note') {
          return <ClientNote clients={client.clients} />
        }

        return null
      })}
    </div>
  )
}

export default App
