import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetail from './pages/BlogDetail';
import NoMatch from './pages/NoMatch';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="/about">
                    <About />
                </Route>
                
                <Route path="/blog">
                    <Blog />
                </Route>
                
                <Route path='/single/:id'>
                    <BlogDetail />
                </Route>
                
                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <Route path="*">
                    <NoMatch />
                </Route>
                
            </Switch>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
