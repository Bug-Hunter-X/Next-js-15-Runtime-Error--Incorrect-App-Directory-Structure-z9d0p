# Next.js 15 Runtime Error: Incorrect App Directory Structure

This repository demonstrates a runtime error encountered in Next.js 15 when using the `app` directory.  The provided code snippet (`bug.js`) shows a basic page component that generates a runtime error because it incorrectly uses the `app` directory.

## Solution (`bugSolution.js`)
The solution involves moving the component to the correct location.  The `bugSolution.js` demonstrates correct implementation within the `app` directory.

## How to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the runtime error in `bug.js`.
5. Compare the corrected implementation in `bugSolution.js`.