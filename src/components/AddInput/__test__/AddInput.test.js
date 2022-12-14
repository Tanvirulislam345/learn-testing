import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("Add Input Components", () => {
  test("should render input elements ", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type this input ", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
    fireEvent.change(inputElement, { target: { value: "Go shopping" } });
    expect(inputElement.value).toBe("Go shopping");
  });

  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go shopping" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
