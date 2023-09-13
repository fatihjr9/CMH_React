import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainExchange from './pages/exchange/index.jsx';
import DetailCurrency from './pages/currency/detail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/detail-currency/:id",
    element: <DetailCurrency/>,
  },
  {
    path: "/exchanges",
    element: <MainExchange/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
