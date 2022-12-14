import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter test", () => {
  test("should render the correct amount of incomplete task", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const todoFooterElement = screen.getByText(/2 tasks left/i);
    expect(todoFooterElement).toBeInTheDocument();
  });

  test("should render task when number of incomplete task is 1", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const todoFooterElement = screen.getByText(/1 task left/i);
    expect(todoFooterElement).toBeInTheDocument();
  });
});

describe("Todo Footer Visible", () => {
  test("should render numbre of incomplete task/task is visible !!?", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const todoFooterElement = screen.getByText(/1 task left/i);
    expect(todoFooterElement).toBeVisible();
  });
});
