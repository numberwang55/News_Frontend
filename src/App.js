import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Articles from "./components/Articles/Articles"
import { useState } from 'react';

function App() {

  const [topic, setTopic] = useState(false)

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Articles topic={topic} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
