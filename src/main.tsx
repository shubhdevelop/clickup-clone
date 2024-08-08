import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import UnderConstruction from './Components/UnderConstruction.tsx';
import MainLayout from './Components/MainLayout.tsx';
import DocLayout from './Components/Docs/DocLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="*" element={<UnderConstruction />} />
      <Route path="/docs" element={<DocLayout />} />
      <Route index element={<UnderConstruction />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
