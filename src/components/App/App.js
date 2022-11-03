import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../../contants/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
    </div>
  );
}

export default App;
