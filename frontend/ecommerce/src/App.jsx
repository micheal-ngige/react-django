import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./components/screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} exact />
            <Route path="/cart" element={<CartScreen />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
