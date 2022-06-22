import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/'
import ChoiceSimulator from './Pages/ChoiceSimulator/';
import ProcessorManager from './Pages/ProcessorManager/';
import Login from './Pages/Login/';
import Profile from './Pages/Profile';
import Simulator from './Pages/Simulator/';

export default function RoutesLocal() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/choice-simulator" element={<ChoiceSimulator />} />
      <Route path="/processor-manager" element={<ProcessorManager />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/simulator/:globaltype/:type" element={<Simulator />} />

    </Routes>
  );
}