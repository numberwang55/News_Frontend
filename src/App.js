import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Articles from "./components/Articles/Articles"
import { useState } from 'react';
import SingleArticle from './components/SingleArticle/SingleArticle';

function App() {

  const [topic, setTopic] = useState(false)

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Articles topic={topic} />}></Route>
        <Route path='/:topic' element={<Articles topic={topic} />}></Route>
        <Route path='/article/:article_id' element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
