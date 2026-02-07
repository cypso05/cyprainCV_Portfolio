# 🔥 Modern React Portfolio & CV Dashboard
A professional portfolio website built with React and Tailwind CSS, featuring a clean architecture and modern development practices.

## 🛠 Tech Stack

**Frontend**
- React.js – Component-based UI development
- **Tailwind CSS** – Primary styling solution (utility-first, responsive design)
- PostCSS – CSS processing and optimization
- MUI Icons – Scalable, customizable UI icons

**Styling**
- Tailwind CSS configuration
- Custom global styles (index.css, App.css)

**Tooling**
- Node.js & npm
- Environment variables (.env)
- Create React App

# 📁 Project Structure (Exact Layout)

```
FRONTEND/
├── node_modules/          # Dependencies (ignored in git)
├── pages/                # Page components (duplicate of src/pages)
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   │   └── use-toast.js  # Toast notification hook
│   ├── lib/              # Utilities and helpers
│   ├── pages/            # Page components
│   ├── App.css           # Main application styles
│   ├── App.js            # Root component
│   ├── index.css         # Global styles
│   ├── index.js          # Application entry point
│   └── mock.js           # Mock data for development
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── App.css              # Global App.css (likely duplicated)
├── App.js               # Root App.js (likely duplicated)
├── components.json      # Component configuration
├── env.txt              # Environment template
├── gitignore.txt        # Gitignore template
├── index.css            # Global index.css (likely duplicated)
├── index.js             # Main entry point (likely duplicated)
├── jsconfig.json        # Path alias configuration
├── mock.js              # Mock data (likely duplicated)
├── package-lock.json    # Exact dependency tree
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration
```
# 🎯 Key Features
Modular Architecture – Organized components, hooks, and utilities in dedicated directories

Custom Hooks – Implemented reusable logic like use-toast for notifications

Mock Data System – Uses mock.js for development and testing

Environment Configuration – Secure handling of sensitive data via .env

Clean Imports – Configured jsconfig.json for simplified import paths

Utility-First CSS – Full Tailwind CSS integration with custom configuration

# 🛠️ Getting Started
Prerequisites
Node.js 16+ and npm

Installation
bash
# Clone the repository
git clone https://github.com/cypso05/cyprainCV_Portfolio.git
cd cyprainCV_Portfolio

# Install dependencies
npm install

# Start development server
npm start
The application will run at http://localhost:3000

Available Scripts
bash
npm start    # Start development server
npm test     # Run tests
npm run build # Create production build

# 🔧 Configuration

Tailwind CSS
Customize styling in tailwind.config.js:

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
# Environment Variables
Copy env.txt to .env and configure your variables:

text
REACT_APP_API_URL=your_api_url_here
📝 Development Notes
Component Organization: Reusable components are in /src/components

Custom Hooks: Shared logic in /src/hooks (e.g., use-toast.js)

Mock Data: Development data in /src/mock.js

Styling: Primary styling via Tailwind, with custom CSS in App.css/index.css

Icons: Using @mui/icons-material for UI icons


# 📄 License
MIT License - see LICENSE file for details.

# 📬 Contact
[Cyprain Chidozie]
GitHub: @cypso05
https://www.linkedin.com/in/cyprain-chidozie-6092a71a7/

----------------------------------------------------------------------------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
