import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
function App() {

  return (
    <div className="appcontainer">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
