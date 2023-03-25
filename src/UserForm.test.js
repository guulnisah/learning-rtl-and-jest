import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", async () => {
  // Step 1: render the component
  render(<UserForm />); // we can pass the props too

  // Step 2: manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Step 3: assertion - component does what it's supposed to
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument(1);
});

test("onUserAdd is called when the form is submitted", async () => {
  /* 
Mock function is a fake function that does nothing, it only records the fact that it was called 
We use the mock function to make a components calls a callback
The mock function is going to have some internal storage, to record how many times it has been called.
It's also going to record all the different arguments it receives whenever it gets called.
Then we write assertions to make sure that our mock function was called the correct number of times and that it was called with the correct arguments.
*/

  const mock = jest.fn();
  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
