import logo from './logo.svg';
import './App.css';
import MyNav from './Components/Navbar/myNav';
import Home from './Pages/Home/Home';
// i needed to import the bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
    <MyNav />
    <Home />
    <Footer />
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. kulthoom was here
    //     </p>
    //     <code>src/AppClassComponenet.js</code>
    //     <h1>Bint shoukat</h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
