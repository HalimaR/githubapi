import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RepoListItems from "../repo/RepoListItem";

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

test("", () => {
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
    act(() =>{
        render(<RepoListItems item={fakeRepo}/>, container);
    });
})