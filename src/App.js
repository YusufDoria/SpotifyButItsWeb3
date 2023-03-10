import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
// import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";


const { Footer, Sider, Content } = Layout

const App = () => {
  return(

    <Layout>
      <Sider width={300} className="sideBar">
        <img alt="spotify" className="logo" src={Spotify} />
        <div className="searchBar">
          <span>search</span>
          <SearchOutlined style={{fontSize : '30px'}} />
        </div>
        <Link to="/">
          <p style={{ color: "#1db954" }}> Home</p>
        </Link>
        <p>Your Music</p>
        <div className="recentPlayed">
            <p className="recentTitle">RECENTLY PLAYED</p>
            <div className="install">
              <span> Install App </span>
              <DownCircleOutlined style={{ fontSize: "30px" }} />
            </div>
        </div>
      </Sider>
      <Content className='contentWindow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>
  )
};

export default App;
