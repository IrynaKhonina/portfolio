import useIsMobile from '@/hooks/useIsMobile'
import { AboutMe, Contacts, Footer, Header, LanguageSwitcher, Main, Portfolio, Skills } from '@/layout'
import { Cursor, GoTopButton, Particle } from '@/components'

function App() {
  const isMobile = useIsMobile()
  return (
    <>
      <Cursor isMobile={isMobile} />
      <Particle />
      <Header isMobile={isMobile} />
      <LanguageSwitcher />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
      <GoTopButton />
    </>
  )
}

export default App