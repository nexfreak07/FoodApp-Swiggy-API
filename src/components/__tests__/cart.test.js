import { screen, render, fireEvent, act } from "@testing-library/react";
import { appStore } from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";
import mock_cart from "../mocks/mock_cart.json";
import { ItemListAccordionBody } from "../ItemListAccordionBody";
import { RestaurantMenu } from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK from "../mocks/mock_res_category.json"
import "@testing-library/jest-dom";

it("Testing the cart", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <ItemListAccordionBody items={mock_cart} />
      </BrowserRouter>
    </Provider>
  );

  const cartItemsBefore = screen.getByText("Cart - 0");
  expect(cartItemsBefore).toBeInTheDocument();

  const recommendedAccordian = screen.getAllByTestId("cart-test");
  fireEvent.click(recommendedAccordian[0]);
  fireEvent.click(recommendedAccordian[1]);

  const cartItemsAfter = screen.getByText("Cart - 2");
  expect(cartItemsAfter).toBeInTheDocument(0);
});

it("Checking the Cart Page", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Cart />
        <ItemListAccordionBody items={mock_cart} cart={true} />
      </BrowserRouter>
    </Provider>
  );

  const add = screen.getAllByRole("button", { name: "Add +" });
  const remove = screen.getAllByRole("button", { name: "Remove -" });
  const clear = screen.getByRole("button", { name: "Clear Cart" });

  let cartItems = screen.getByText("Cart - 2");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(remove[0]);
  cartItems = screen.getByText("Cart - 1");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(add[3]);
  fireEvent.click(add[4]);
  fireEvent.click(add[5]);

  cartItems = screen.getByText("Cart - 4");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(clear);
  cartItems = screen.getByText("Cart - 0");
  expect(cartItems).toBeInTheDocument();
});

global.fetch = jest.fn(
  () =>  Promise.resolve({ json: () =>  Promise.resolve(MOCK) })
);

it("Integration Testing from RestaurantMenu to Cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          {/* <ItemListAccordionBody items={mock_cart} /> --------- As Resturant Menu has ResturantCart Accordian and ItemListAccordian We dont have to use it
          Already Integration Testing is Performed in These */}
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordian = screen.getByText("Kaati Rolls (13)")
  fireEvent.click(accordian);

  const btn = screen.getAllByRole("button", {name: "Add +"});
  expect(btn.length).toBe(13)

  fireEvent.click(btn[0]);
  fireEvent.click(btn[1]);

  const cartItems = screen.getByText("Cart - 2")
  expect(cartItems).toBeInTheDocument();

  // Imp Test - 2 Items from Cart and Rest 13 From ResMenu Accordian which we clicked so - Total is 15
  const testIdItems = screen.getAllByTestId("items");
  expect(testIdItems.length).toBe(15)




});
