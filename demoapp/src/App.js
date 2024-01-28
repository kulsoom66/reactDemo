import logo from "./logo.svg";
import "./App.css";
import MyNav from "./Components/Navbar/myNav";
import Home from "./Pages/Home/Home";
// i needed to import the bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/footer/Footer";
import TodoList from "./Todo/TodoList/TodoList";
import NotFound from "./NotFound/NotFound";
import AddTodo from "./Todo/AddTodo/AddTodo";
import DetailedTodo from "./Todo/DetailedTodo/DetailedTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listTodo/:id?" element={<TodoList />} />
          <Route path="/detailedTodo/:id" element={<DetailedTodo />} />
          <Route path="/AddTodo" element={<AddTodo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
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
