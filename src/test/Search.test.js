import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Search from "../Component/Search";

test("render search input", ()=>{
  render(<Search search="wel dubbel"></Search>);
  const inputSearch = screen.getByTestId("Search");
  expect(inputSearch).toBeInTheDocument();
});

test("pass valid value to test search field", async () => {
  const value = "well dubble";
  const { getByTestId } = render(<Search search={value} setSearch={value}/>);
  const search = getByTestId("Search");
  userEvent.type(search, value);
  expect(search).toBeInTheDocument();
  expect(search.textContent).toBe('search');

});