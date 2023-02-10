import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Articles from "./components/Articles/Articles"
import { useState } from 'react';
import SingleArticle from './components/SingleArticle/SingleArticle';
import Users from './components/Header/Users';
import { UserContext } from "./contexts/UserContext"

function App() {

  const [topics, setTopics] = useState([])
  const [user, setUser] = useState({
    username: "Unknown",
    name: "Unknown",
    avatar_url: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
  })

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path='/' element={<Articles topic={topics} />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/:topic' element={<Articles topics={topics} />}></Route>
          <Route path='/article/:article_id' element={<SingleArticle />}></Route>
          <Route path="*" element={<p>404 - Url not found</p>}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
