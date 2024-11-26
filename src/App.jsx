import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/friends/friends';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import { useState } from 'react';

let logo = "FriendsBook"



function App() {
  let initCount = -10;
  let initDisabled = false;

  if (initCount < 0) {
    initCount = 0
    initDisabled = true;
  }

  let [count, setCount] = useState(initCount);
  let [disabled, setDisabled] = useState(initDisabled);

  function plusCount() {
    setCount(count + 1);
    setDisabled(false);
  }

  function minusCount() {
    if (count > 0) {
      setCount(count - 1);
    }

    if (count <= 1) {
      setDisabled(true);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <span>{logo}</span>

          <button
            onClick={minusCount}
            disabled={disabled}
          >-
          </button>
          <span>{count}</span>
          <button onClick={plusCount}>+</button>
        </header>
        <main className="App-main">
          <div className="App-sidebar">
            <Nav />
          </div>
          <div className="App-views">
            <Routes>
              <Route index element={<Navigate to="/friends" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
