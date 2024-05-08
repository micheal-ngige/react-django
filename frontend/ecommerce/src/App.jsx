import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./components/screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} exact/>
            <Route path="/products/:id" element={<ProductScreen />} exact/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
