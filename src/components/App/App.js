import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Restaurants from '../Restaurants/Restaurants';
import './App.scss';

function App() {

  return (
    <div className="App">

      <Header />

      <main className="main">
        <div className="container">
          <Banner />
          <Restaurants />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
