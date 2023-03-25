/* 
 @testing-library/react - uses ReactDOM to render a component for testing
 @testing-library/user-event - helps simulate user input like typing and clicking
 @testing-library/dom - helps find elements that are rendered by our components
 jest
 - finds all files in the src folder that end with .spec.js / .test.js
 - finds all files in the __test__ folder
 - runs our tests, reports results
 jsdom - simulates a browser when running in a Node environment 
*/

import { render, screen } from "@testing-library/react";
import App from "./App";

/* 
to define a test we use the 'test' function, which is provided by the jest testing framework
it accepts two arguments
 1. a string that describes the purpose of the test
 2. a function that contains the testing code 
*/

// When we run our tests, they are being executed in a Node.js environment

test("purpose", async () => {
  // when we render the component a fake browser environment is being created by the JS Dom
  // component is rendered, HTML is taken from it
  render(<App />);

  // now we can access elements that have been rendered by using the 'screen' object
  // to get the individual elements we use query functions
  // react testing library query system has a collection of ~48 function (.getByRole, .queryByLabelText, .findByTitle, etc....)
  const button = screen.getByRole("button");

  /* 
  ROLE
  ARIA Roles clarify the purpose of an HTML element
  Many of the HTML elements have implicit roles
    a -> link
    ul, li -> list
    h1 -> heading
    etc....
  */

  /*
  To make an assertion we use the 'expect' function, from jest.
  Then we chain on a function ("a matcher").
  A matcher looks at the value we passed in and makes sure it's correct.

  The matchers are coming from jest ('https://jestjs.io/docs/expect') and RTL ('https://github.com/testing-library/jest-dom#custom-matchers')
*/
  expect(button).toBeInTheDocument(1);
});
