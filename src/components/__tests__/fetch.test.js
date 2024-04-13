import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Body } from "../Body";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MockData from "../mocks/mock_res.json"


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("Should use Fetch", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );


    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
});
