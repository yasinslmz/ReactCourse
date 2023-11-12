

import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/App";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import KategoriGrup from './routes/KategoriGrup';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/kategorigrup",
    element: <KategoriGrup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

