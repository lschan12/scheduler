# Interview Scheduler

Interview Scheduler is a single-page React app that allows for users to book and cancel interview appointments in a Monday - Friday, 12-5pm format.
It utilizes React, Axios, Webpack, Babel and SASS for the application, Storybook for components building, Jest and Cypress for integration and end-to-end testing. and an Express Scheduler API for database and server application.

## Final Product

!["Slot Showing Edit and Delete When Hovered"](https://github.com/lschan12/scheduler/blob/master/docs/Edit-Delete.png?raw=true)
!["Day List Showing Spots Remaining with specific CSS Styling"](https://github.com/lschan12/scheduler/blob/master/docs/Full-Selected.png?raw=true)
!["Interview Booking Form"](https://github.com/lschan12/scheduler/blob/master/docs/Form.png?raw=true)
!["Form Validation Showing the Relevant Error Message"](https://github.com/lschan12/scheduler/blob/master/docs/Validation.png?raw=true)
!["Error Messages"](https://github.com/lschan12/scheduler/blob/master/docs/Error.png?raw=true)
!["Status Messages When Performing Async Calls"](https://github.com/lschan12/scheduler/blob/master/docs/Status.png?raw=true)
!["Confirmation Screen"](https://github.com/lschan12/scheduler/blob/master/docs/Confirm.png?raw=true)

## Dependencies

- axios
- classnames
- normalize.css
- @testing-library/react-hooks
- react
- react-dom
- react-scripts
- react-test-renderer


## Getting Started

- Install dependencies with `npm install`.
- Run the Webpack Development Server with `npm start`.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Features

- Realtime experience with elements dynamically updating as the user interacts with the page
- Form validation when forms do not have required inputs
- Database updating with Axios calls when the user books, cancels, or edits and appointment
- Components built using Storybook
- Unit and integration testing with Jest, End-to-end testing with Cypress

