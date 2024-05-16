import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import {  it } from "vitest";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';


it('should render SignIn component for path "/"', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
});

it('should renders Home component for path "/home"', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
});


