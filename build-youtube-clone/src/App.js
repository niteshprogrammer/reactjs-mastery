import { useState } from "react";
import "./App.css";
// import Header from "./Components/Header.js";
import Header from "./sonny_components/Header.js";
import Sidebar from "./sonny_components/Sidebar.js";
import RecommendedVideos from "./sonny_components/RecommendedVideos.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [searchPath, setSearchPath] = useState('');
  const handleInputSearchSubmit = (query) => { 
      setSearchPath(query);
      console.log(searchPath + ' calling from App');
  };
  return (
    <div className="app">
      {/* <h1>Hey World! Let's build the Youtube Clone, Nitesh!</h1> */}
      {/* Header */}
      <Router>
        <Header onInputSearchSubmit={handleInputSearchSubmit} />
        <Routes>
            <Route
              path={`${searchPath === '' ? '/' : `/search:${searchPath}`}`}
              element={
                <>
                  <div className="app__page">
                    <Sidebar />
                    <RecommendedVideos />
                  </div>
                </>
              }
            />
            <Route path="/" element={
              <div className="app__page">
                <Sidebar></Sidebar>
                <RecommendedVideos></RecommendedVideos>
              </div>
            }>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
