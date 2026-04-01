import { lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import Notification from './components/Notification/Notification'
import HeroSection from './components/HeroSection/HeroSection'
import Capabilities from './components/Capabilities/Capabilities'
import GetInTouch from './components/GetInTouch/GetInTouch'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import SocialAccount from './components/SocialAccount/SocialAccount'
import Footer from './components/Footer/Footer'

const Showcase = lazy(() => import('./components/Showcase/Showcase'))
const Profile = lazy(() => import('./components/Profile/Profile'))

function App() {
  return (
    <>
      <Notification />
      <Header />
      <HeroSection />
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="showcase">
        <Suspense>
          <Showcase />
        </Suspense>
      </section>
      <section id="profile">
        <Suspense>
          <Profile />
        </Suspense>
      </section>
      <section id="getInTouch">
        <GetInTouch />
      </section>
      <ScrollToTopButton />
      <SocialAccount />
      <Footer />
    </>
  )
}

export default App
