# GreenStitch

![Greenstitch-prep](https://user-images.githubusercontent.com/80452785/235316955-752f6509-cbdd-4bcb-9c11-81ec8154f044.png)

## Project Description

The goal of this project was to create a UI for the provided [Figma UX](https://www.figma.com/file/AGlLGwS4yvPMWJXsyJ7V1q/Untitled?node-id=0-1&t=FpivFABhDmPEwtUo-0). The UI resembles the design in the Figma file as closely as possible, and the data displayed in the UI should is powered from a DB/JSON file. The Figma UI showcases a dashboard page for reports, where the dashboard has cards to showcase particular data, bar and pie charts for formatted data.

## Prerequisites

To run this project, you need to have the following installed on your system:

- Node.js
- npm

## Installation

To install the dependencies, run the following command:

npm install

## Running the Application

To run the application in development mode, run the following command:

npm start

This will start a development server on `http://localhost:3000`, and you can view the application in your browser.

To build the application for production, run the following command:

npm run build

This will create a production-ready build in the `build` folder.

## Dependencies

The project uses the following dependencies:

- React
- Gh-Pages
- Victory

## Data

To display the data in the dashboard, I have stored the json data in a Javascript file with the required data structure. The structure of the JSON file matchs the data required as closely as possible by the application. You can store the JavaScript file in the `src` folder.

## Folder Structure

The project has the following folder structure in src folder:

    .
    ├── ...
    ├── components                    
    │   ├── Content             # This contains the main dashboard components
    │   ├── Navbar              # This contains navbar and related components
    │   └── Sidebar             # This contains sidebar and related components
    ├── data                    
    │   ├── barCharts.js        # This contains the json object that contains data for the bar chart  
    │   ├── cards.js            # This contains the json object that contains data for the card components
    │   └── donutCharts.js      # This contains the json object that contains data for the donut chart
    └── ...


The `components` folder contains all of the reusable components used in the project, the `data` folder contains the JSON file used to power the data in the dashboard, and `App.js` and `index.js` are the entry points for the application.

## Conclusion

This project had been a great way to practice and showcase my React skills and explore designing dashboard with charts and data pulled from a JSON file. If you have any questions or feedback, please feel free to contact me.
