import React from "react";
import RoutesLocal from './routes';
import {
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesLocal />
    </BrowserRouter>
  )
}