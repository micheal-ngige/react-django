import './App.css';
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from "./components/Footer";
import Homescreen from './components/screens/Homescreen';

function App() {

  return (
    <>
     <Header />
      <main>
        <Container>
          <Homescreen />
        </Container>
      </main>
     <Footer />
    </>
  )
}

export default App
