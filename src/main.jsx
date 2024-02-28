import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import HTML from './pages/HTML.jsx';
import CSS from './pages/CSS.jsx';
import JavaScript from './pages/JavaScript.jsx';
import Reactpage from './pages/Reactpage.jsx';
import MongoDB from './pages/MongoDB.jsx';
import SQL from './pages/SQL.jsx';
import APIs from './pages/APIs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/html',
        element: <HTML />,
      },
      {
        path: '/css',
        element: <CSS />,
      },
      {
        path: '/javascript',
        element: <JavaScript />,
      },
      {
        path: '/react',
        element: <Reactpage />,
      },
      {
        path: '/mongodb',
        element: <MongoDB />,
      },
      {
        path: '/sql',
        element: <SQL />,
      },
      {
        path: '/apis',
        element: <APIs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './styles/index.css';

// import App from './App.jsx';
// import Home from './pages/Home.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
