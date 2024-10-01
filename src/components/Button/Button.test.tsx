import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./index";
import { login } from "../../services/login";
describe("Button component", () => {
  const buttonText = "Login";
  render(<Button children={buttonText} onClick={login} />);

  it("should render the correct text", () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const onClick = jest.fn();
    const button = screen.getByText(buttonText);
    render(<Button children="Login" onClick={onClick} />);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct styles", () => {
    const button = screen.getByText(buttonText);
    expect(button).toHaveStyle({
      backgroundColor: "purple",
      color: "white",
      width: "100%",
      marginTop: "45px",
    });
  });
});
