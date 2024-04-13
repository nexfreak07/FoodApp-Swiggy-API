import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RestaurantCard } from "../RestaurantCard";
import { withPromoted } from "../RestaurantCard";
import MockHOC from "../mocks/mock_restaurant_hoc.json"
import Mock from "../mocks/mock_restaurant_data.json"

it('should render the restaurant card with the data we provide', () => {
    render(<RestaurantCard restaurant={Mock}/>);

    const title = screen.getByText("Irani Cafe");

    expect(title).toBeInTheDocument();
});


it('Should Render the HOC with 50% Discount', () => {

    const RestaurantCardPromoted = withPromoted(RestaurantCard);
    render(<RestaurantCardPromoted restaurant={MockHOC}/>);

    const label = screen.getByText("50% OFF");

    expect(label).toBeInTheDocument()
});

