import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Articles from "./components/Articles/Articles"
import { useState } from 'react';
import SingleArticle from './components/SingleArticle/SingleArticle';
import Users from './components/Header/Users';
import { UserContext } from "./contexts/UserContext"

function App() {

  const [topics, setTopics] = useState([])
  const [user, setUser] = useState("")

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Articles topic={topics} />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/article/:article_id' element={<SingleArticle />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
