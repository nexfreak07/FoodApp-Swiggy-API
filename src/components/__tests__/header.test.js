import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
describe("Header Tests", () => {
  it("Should Load Header with Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );


    const LoginButton = screen.getByRole("button", {name: "Login"});
    expect(LoginButton).toBeInTheDocument();

    const cartItems = screen.getByText("Cart - 0");
    expect(cartItems).toBeInTheDocument()

    const cartItem = screen.getByText(/Cart/); // Regex
    expect(cartItem).toBeInTheDocument()
  });
});


it("Should change Login to Logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );


    const login = screen.getByRole("button", {name: "Login"});

    fireEvent.click(login);

    const logout = screen.getByRole("button", {name: "Logout"});

    expect(logout).toBeInTheDocument()

  });