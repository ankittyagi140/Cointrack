import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { Home, NotFound, Form, Details } from "@apps";

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<Form />} />
          <Route path="/coins/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default Routing;
