import Page from './components/Layout/Page';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import Hero from './components/Sections/Hero';
import Portfolio from './components/Sections/Portfolio';
import Resume from './components/Sections/Resume';
import Header from './components/Sections/Header';
import Testimonials from './components/Sections/Testimonials';
import {homePageMeta} from './data/data';

function App() {
  const {title, description} = homePageMeta;
  return (
    <>
      <Page description={description} title={title}>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Page>
    </>
  );
}

export default App;
