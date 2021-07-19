import './App.css';
import CreateUser from './CreateUser';
import Users from './Users';
import Home from './Home';
import About from './About';
import Get_api from './Get_api';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"> <Link to="/CreateUser">CreateUser</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#"> <Link to="/users">Users</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to="/get_api">Get_api</Link> </Nav.Link>
          </Nav>
        </Navbar> 
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/get_api">
            <Get_api />
          </Route>
          <Route exact path="/CreateUser">
          <CreateUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/contact">
          {/* <Users /> */}
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
