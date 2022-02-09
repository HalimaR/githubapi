import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import Search from "../Component/Search";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("render search input", ()=>{
  render(<Search search="wel dubbel"></Search>);
  const inputSearch = screen.getByTestId("Search");
  expect(inputSearch).toBeInTheDocument();
});

test("pass valid value to test search field", async () => {
  const value = "well dubble";
  const { getByTestId } = render(<Search search={value} setSearch={value}/>, container);
  const search = getByTestId("Search");
  expect(search.textContent).toBe(value);

});