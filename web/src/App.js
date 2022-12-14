import React from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Mensagens } from "./pages/mensagens";
import { Contato } from "./pages/contato";
import { Login } from "./pages/login";
import { Ofertar } from "./pages/ofertar";

function App() {
  return (
    <BRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/mensagens" element = {<Mensagens />}/>
        <Route path="/contato" element = {<Contato />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/ofertar" element = {<Ofertar />}/>
        </Routes>
    </BRouter>
  );
}

export default App;
