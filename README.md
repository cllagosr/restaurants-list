This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The problem

You can see the description of this challenge [here](https://www.notion.so/Coding-Challenge-Web-Application-Development-b3e2fb1ec82446c29257a67c325714dc).

## The solution

* I decided to use Redux to manage the state. If the app is going to grow, I think this is one of the cleanest ways to do it. Currently the state that describes the app has the following structure:
```
restaurantsByType: {
    pizza: {
        items: [...]
    }
    isFetching: ...,
    failed: ...
},
selectedType: 'pizza'
```

When the user changes the filter, `selectedType` and `restaurantsByType` are updated with the items from the API and it's corresponding status (isFetching and failed). I'm keeping every list of restaurants in memory so they're not fetched every time the user returns to a previous value of the filter, but this can easyly be changed.

* I tried to design the components of the app in a way that they can be easyly reused in the future.

* Eslint rules are very strict, almost anoying, I would fix that in the future but for now it allows me to have cleanner code.

* I wrote unit tests for the App component, it covers most of the cases of this project. I would totally add more tests for other components but I ran out of time.

## How to run

I used [cors-anywhere](https://github.com/Rob--W/cors-anywhere), run the server on port 8080 before running the project.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
