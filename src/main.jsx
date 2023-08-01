//General imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//React Router
import Root, {loader as rootLoader, action as rootAction} from './routes/root';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact, { loader as contactLoader, } from './routes/contact';
import EditContact, {
  action as editAction,
} from './routes/edit';
import { action as destroyAction } from './routes/destroy';

//CSS
import './index.css'

//React Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error deleting the data!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
