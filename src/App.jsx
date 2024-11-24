import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/friends/friends';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

let logo = "FriendsBook"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <span>{logo}</span>
        </header>
        <main className="App-main">
          <div className="App-sidebar">
            <Nav />
          </div>
          <div className="App-views">
            <Routes>
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
