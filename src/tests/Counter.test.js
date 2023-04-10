import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  //checks the page to see if word 'Counter' is present
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  //looks at count component on webpage and tests to see if inital value is set to 0
  expect(document.querySelector('[data-testid="count"]').textContent).toBe("0");
});

test('clicking + increments the count', () => {
  //test to see if firing increment button works
  //fires event by accessing first button
  fireEvent.click(document.querySelector("button:nth-of-type(1)"));
  //checks expected value
  expect(document.querySelector('[data-testid="count"]').textContent).toBe("1");

});

test('clicking - decrements the count', () => {
   //test to see if firing decrement button works
  //fires event by accessing second button
  fireEvent.click(document.querySelector("button:nth-of-type(2)"));
  //checks expected value
  expect(document.querySelector('[data-testid="count"]').textContent).toBe("-1");
});
