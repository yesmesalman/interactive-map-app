# Interactive Map Application with Polygon Drawing and Editing

## Introduction

This project is an interactive web application that allows users to draw and manipulate polygons on a map. Developed using React and TypeScript, the application leverages the Leaflet library for map interactions and Open Street Map as the tile provider. Storybook is used to demonstrate and test various UI components.

## Objective

The primary goal is to create a functional application where users can:
- Draw polygons on a map
- Edit these polygons
- Ensure that no two polygons intersect

## Features

1. **Map Integration**
   - **Leaflet Map Setup:** Displays a Leaflet map centered on a default location using Open Street Map tiles.
   - **Map Component:** A responsive React component that handles map interactions.

2. **Polygon Drawing**
   - **User Interaction:** Draw polygons by clicking to create vertices, with real-time feedback showing the forming shape.

3. **Polygon Editing**
   - **Vertex Manipulation:** Drag vertices to modify the polygon, add new vertices by clicking on an edge, and remove vertices as needed.
   - **Editing Feedback:** Visual indicators show when a polygon is in edit mode.

4. **Intersection Detection**
   - **Validation:** Ensure polygons do not intersect. If an intersection is detected, provide clear visual feedback, such as changing the polygon’s color.

5. **Storybook Integration**
   - **Setup:** Demonstrates and tests various component states and functionalities.
   - **Scenarios:** Includes stories for initial map view, drawing a new polygon, editing an existing polygon, and handling intersections.

6. **TypeScript**
   - **Type Safety:** Ensures type safety throughout the application using appropriate types and interfaces.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yesmesalman/interactive-map-app.git
   cd interactive-map-app

2. Install dependencies:
   ```bash
   npm install

## Running the Application
1.  Start the development server:
``` 
npm start 
```

Open http://localhost:3000 in your browser to view the application.

2.  To run Storybook:
```
npm run storybook
```

Open http://localhost:6006 in your browser to view the Storybook interface.

## Usage
- Drawing Polygons: Click on the map to create vertices and form polygons. Click on the starting vertex to close the polygon.
- Editing Polygons: Drag vertices to move them, click on edges to add new vertices, and press Delete on selected vertices to remove them.
- Intersection Handling: If a polygon intersects with another, it will be highlighted in red.

## Links
- ChatGPT: https://chatgpt.com/share/20a33520-4ad5-489f-b557-26f6e1f9096d