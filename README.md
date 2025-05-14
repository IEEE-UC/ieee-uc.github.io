# Club Website

This project is a fullstack application for managing a club website, built using Svelte for the frontend and TypeScript with Prisma for the backend. It features a public side accessible to all users and a hidden admin section that requires authentication.

## Project Structure

```
club-website
├── backend
│   ├── prisma
│   │   ├── schema.prisma
│   │   └── migrations
│   ├── src
│   │   ├── index.ts
│   │   ├── routes
│   │   │   ├── admin.ts
│   │   │   └── public.ts
│   │   └── utils
│   │       └── auth.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.svelte
│   │   ├── routes
│   │   │   ├── admin
│   │   │   │   └── SignIn.svelte
│   │   │   └── public
│   │   │       └── Home.svelte
│   │   └── stores
│   │       └── auth.ts
│   ├── package.json
│   ├── svelte.config.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Features

- **Public Side**: A home page that provides general information about the club.
- **Admin Section**: A secure area for club administrators to manage content, accessible only after signing in.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd club-website
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the public side of the website at `http://localhost:3000`.

4. Access the admin section at `http://localhost:3000/admin/signin`.

### Database Setup

The application uses PostgreSQL as the database. Ensure that the database is configured correctly in the `prisma/schema.prisma` file and that migrations are applied.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.