import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import ProductList from '../ProductList/ProductList';
import './App.scss';

function App() {

  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <Router>
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="restaurant/:products" element={<ProductList />}/>
            </Routes>

            <Footer />
          </Router>

        </div>
      </main>
    </div>
  );
}

export default App;
