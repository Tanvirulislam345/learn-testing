import { render, screen } from "@testing-library/react";
import Header from "../Header";

//we can us it instate of test
test("Should render same text passed into title prop in Header component", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// //heading means h1 to h6, paragraph means p tag
// test("Should render heading tag in Header component", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

/* 
//testing by multiple heading
test("Should render specific heading tag in Header component", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", {
    name: "My Header",
  });
  expect(headingElement).toBeInTheDocument();
});

//testing by title
test("Should render header by Title in Header component", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

//testing by Id
test("Should render header by id in Header component", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// Find By method
test("Should render same text passed into title prop in Header component", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//Query by
test("Should render same text passed into title prop in Header component", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

//get all by
test("Should render same text passed into title prop in Header component", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

 */
