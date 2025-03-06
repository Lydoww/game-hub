Game Hub 🎮

Game Hub is a modern and responsive web application that allows users to discover, explore, and search for video games using data from the RAWG.io API. The app is built with React and TypeScript, and leverages Chakra UI v3 for a sleek and optimized user interface.

👉 Live Application: https://rawglike.vercel.app/


Features ✨

  - Game Search: Find games by title, genre, platform, or publisher.
  - Game Details: View detailed information about each game, including images, descriptions, ratings, and store links.
  - Advanced Filters: Filter games by genre, platform, release date, and more.
  - Responsive Design: A user interface optimized for all devices (desktop, tablet, mobile).
  - Optimized Performance: Fast loading and smooth user experience thanks to React and Chakra UI.
   

Technologies Used 🛠️

  - React: JavaScript library for building user interfaces.
  - TypeScript: Adds static types for better maintainability and error detection.
  - Chakra UI v3: Modular and accessible UI component library.
  - RAWG.io API: Video game API for fetching game data.
  - Vercel: Hosting and continuous deployment.
  - React Router: Route management for seamless navigation.
  - Axios: HTTP client for API requests.
  - React Icons: Modern icons for an intuitive user interface.


Installation and Local Setup 🚀

Follow these steps to run the project locally on your machine.
Prerequisites

  Node.js (version 16 or higher)
  npm or yarn

Steps

  Clone the repository:
    bash
    Copy

  git clone https://github.com/your-username/game-hub.git
    cd game-hub

  Install dependencies:
    bash
    Copy

  npm install
    # or
  yarn install

  Set up the API key:

  Get a free API key from RAWG.io.

  Create a .env file in the root of the project and add your API key:
        env
        Copy

  VITE_RAWG_API_KEY=your_api_key_here

  Start the application:
    bash
    Copy

  npm run dev
    # or
    yarn dev

  Access the application:
    Open your browser and navigate to http://localhost:3000.
