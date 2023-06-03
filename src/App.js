import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Users from "./Components/Users";
import UserDetail from "./Components/UserDetail";

function App() {
  return (
    <div>

    <Menu/>

    <div className="container">
    <Header/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/home" Component={Home}/>
        <Route exact path="/about" Component={About}/> |
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/Users" Component={Users}/>|
        <Route exact path="/user-detail" Component={UserDetail}/>
      </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
