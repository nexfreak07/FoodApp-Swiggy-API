import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test('Heading Check', () => {

    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  
})


// Grouping the Test Cases


describe('Contact Us Page Test Cases', () => {

    test('should check the button exist or not', () => {

        render(<Contact/>)
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
      
    })
    
    
    test('should check form exists or not',  () => {
        render(<Contact/>)
        const form =  screen.getByPlaceholderText('form');
        expect(form).toBeInTheDocument();
      
    })
    
    
    it('should render 2 input boxes', () => {
        render(<Contact/>)
        const inputs = screen.getAllByRole("textbox"); // This is Querying - Which Returns JSX -React Element- React Fibre Nodes
        console.log(inputs)
        expect(inputs.length).toBe(2)
        expect(inputs.length).not.toBeLessThan(0)
    
      
    })
    
});
