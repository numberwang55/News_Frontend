import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Articles from "./components/Articles/Articles"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/articles' element={<Articles/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
