# Calculator and Cipher App

This is a simple web application built with Next.js that includes a calculator and a text cipher tool. The app demonstrates the use of pure functions and unit testing. You can use this app to see how you might add unit tests to your own Next.js app projects during the course.

## What are Pure Functions?

Pure functions are functions that:
- Always return the same output for the same input
- Don't have any side effects (they don't change anything outside the function)
- Don't depend on any external state

For example, in our calculator:
```javascript
// This is a pure function
const add = (a, b) => a + b;

// This is NOT a pure function because it changes something outside (the screen)
const addAndDisplay = (a, b) => {
  const result = a + b;
  document.write(result); // Side effect!
  return result;
};
```

## Running the Application

First, install the dependencies:
```bash
npm install
```

Then, start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Running Unit Tests

We use Jest for unit testing. Unit tests help us make sure our functions work correctly.

To run the tests:
```bash
npm test
```

To run tests in watch mode (tests will re-run when you make changes):
```bash
npm run test:watch
```

### What are Unit Tests?

Unit tests are small programs that check if our functions work correctly. For example:

```javascript
// This is a unit test for our add function
test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
```

Our tests check:
- Calculator functions (add, subtract, multiply, divide)
- Cipher functions (encrypt, decrypt)
- Error cases (like dividing by zero)

## Project Structure

- `src/utils/` - Contains pure functions
  - `calculator.js` - Calculator functions
  - `cipher.js` - Text encryption/decryption functions
- `src/components/` - Contains React components
  - `Calculator.js` - Calculator UI
  - `Cipher.js` - Cipher UI
- `src/utils/*.test.js` - Unit tests for our functions

## Learn More

To learn more about:
- Next.js: [Next.js Documentation](https://nextjs.org/docs)
- Jest Testing: [Jest Documentation](https://jestjs.io/docs/getting-started)
- Pure Functions: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Pure_function)
