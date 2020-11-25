import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
