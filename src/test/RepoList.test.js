import { render } from '@testing-library/react';
import { unmountComponentAtNode} from 'react-dom';
import { act } from "react-dom/test-utils";
import React from 'react';
import RepoList from '../repo/RepoList';
import "@testing-library/jest-dom";
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'


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

test("fetch repo", async () => {
  const history = createMemoryHistory()
  const fakeRepo = [
    {
      id: 206318978,
      node_id: "MDEwOlJlcG9zaXRvcnkyMDYzMTg5Nzg=",
      name: "assk8ball",
      full_name: "HalimaR/assk8ball",
      private: false,
      owner: {
        login: "HalimaR"
      },
      commits_url: "https://api.github.com/repos/HalimaR/assk8ball/commits{/sha}",
      language: "Java",
      default_branch: "master"
    }
  ];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeRepo)
    })
  );
    await act(async () => {
      render(
        <Router history={history}> 
          <RepoList repoList={fakeRepo} setcommits_url="https://api.github.com/repos/HalimaR/assk8ball/commits{/sha}"/> 
        </Router> , container);
    });
    expect(screan.getByText("HalimaR/assk8ball")).toBeInTheDocument();
    global.fetch.mockRestore();
  });