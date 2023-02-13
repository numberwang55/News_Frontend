import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Articles from "./components/Articles/Articles"
import { useState } from 'react';
import SingleArticle from './components/SingleArticle/SingleArticle';
import Users from './components/Header/Users';
import { UserContext } from "./contexts/UserContext"
import Home from './components/Articles/Home';
import NoUrlError from './components/Errors/NoUrlError';

function App() {

  const [articles, setArticles] = useState([])
  const [user, setUser] = useState({
    username: "Unknown",
    name: "Unknown",
    avatar_url: ""
  })

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home articles={articles} setArticles={setArticles} />}></Route>
          <Route path='/articles' element={<Articles articles={articles} setArticles={setArticles} />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/articles/:topic' element={<Articles articles={articles} setArticles={setArticles} />}></Route>
          <Route path='/article/:article_id' element={<SingleArticle />}></Route>
          <Route path="/*" element={<NoUrlError />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
