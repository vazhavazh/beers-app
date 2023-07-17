# Beers App
This is a simple React application that displays a list of beer recipes. Users can scroll through the list, view individual recipes, and perform actions such as selecting and deleting recipes.

#  Installation
To install and run the application locally, follow these steps:

-  Clone the repository: git clone <repository_url>
-  Navigate to the project directory: cd beers-app
-  Install the dependencies: npm install
-  Start the development server: npm start
-  Open your browser and visit http://localhost:3000 to view the app.
Features
- The app fetches a list of recipes from the Punk API on initial load.
- The list always displays 15 recipes.
- Users can select multiple recipes by right-clicking on them. The "Delete" button will appear when at least one recipe is selected.
- Clicking the "Delete" button removes the selected recipes from the rendered list while keeping a total of 15 recipes visible.
- Users can deselect a recipe by clicking on it again.
- Clicking on a recipe card with the left mouse button takes the user to the single recipe page.
- If there are no more recipes to show, the app makes another API request to fetch additional recipes.
- Only 5 recipes are visible on the screen at a time, ensuring smooth scrolling performance.
- Lazy scroll functionality is implemented, where new recipes are added when the user scrolls to the bottom of the list.

# Dependencies
The app uses the following dependencies:

- @emotion/styled: Provides CSS-in-JS styling solution.
- axios: Handles HTTP requests to the Punk API.
- react: JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods for React.
- react-router-dom: Enables routing and navigation within the app.
- react-scripts: Configures and scripts for React app development.
- web-vitals: Collects real-time performance data.

 # Notes
The application uses Zustand as the state management library. It provides a simple and efficient way to manage application state without the need for complex setup or additional dependencies.
The application follows modern React practices and uses functional components, hooks, and React Router for navigation.
The codebase is organized into reusable components, keeping concerns separated and promoting code reusability.
Styling is achieved using Emotion's CSS-in-JS solution, allowing for component-level styling and improved encapsulation.
The app is responsive and supports different screen sizes and devices.
Feel free to explore and modify the code to fit your needs. Happy coding!
