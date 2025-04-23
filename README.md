# Club Website

This project is a customizable club website that features an editable club meeting calendar, event list, and roster list. It is designed to provide both public access to club information and a secure admin area for privileged users to manage content.

## Project Structure

- **public/**: Contains static files for the public-facing website.
  - **index.html**: Main HTML entry point.
  - **styles/**: Contains CSS styles for the website.
    - **main.css**: Styles for public pages.
  - **scripts/**: Contains JavaScript for client-side functionality.
    - **main.js**: Client-side scripts for user interactions.

- **src/**: Contains the source code for the application.
  - **app.ts**: Main entry point of the application, initializes the Express app.
  - **controllers/**: Contains controllers for handling requests.
    - **calendarController.ts**: Manages calendar-related requests.
    - **eventsController.ts**: Manages events.
    - **rosterController.ts**: Manages the club roster.
  - **routes/**: Contains route definitions.
    - **api/**: API routes for different functionalities.
      - **calendarRoutes.ts**: Routes for calendar operations.
      - **eventsRoutes.ts**: Routes for event operations.
      - **rosterRoutes.ts**: Routes for roster operations.
    - **index.ts**: Main application routes setup.
  - **views/**: Contains EJS templates for rendering pages.
    - **admin/**: Templates for admin management.
      - **calendar.ejs**: Admin calendar management page.
      - **events.ejs**: Admin events management page.
      - **roster.ejs**: Admin roster management page.
    - **public/**: Templates for public views.
      - **calendar.ejs**: Public calendar view.
      - **events.ejs**: Public events view.
      - **roster.ejs**: Public roster view.
  - **types/**: Contains TypeScript types and interfaces.
    - **index.ts**: Shared types for the application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Access the website**:
   Open your browser and go to `http://localhost:3000` to view the public site.

## Usage Guidelines

- Public users can view the calendar, events, and roster.
- Admin users can access the admin area to manage the calendar, events, and roster by navigating to the respective admin routes.

## License

This project is licensed under the MIT License.