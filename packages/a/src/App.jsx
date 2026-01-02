import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'b';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <Button
          type="button"
          variant="contained"
          text={"테스트 버튼"}
        />
      </div>
    </BrowserRouter>
  );
}
