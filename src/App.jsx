import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './styles/index.css';

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
