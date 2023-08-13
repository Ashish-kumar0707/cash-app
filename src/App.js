import './App.css';
import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import Hero from './pages/hero'
import FooterMobile from './pages/footerMobile'

function App() {

  return (
    <>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden'>
        <Hero/>
       
      </div>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden'>
        <Hero/>
        <FooterMobile/>
      </div>
    </>
  );
}

export default App;
