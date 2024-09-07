

---

# Sadeem Summer Internship Project

## Overview

This project is part of the **Sadeem Summer Internship** program. It is a full-stack application consisting of:

- **Backend**: Go with PostgreSQL
- **Frontend**: React.js (with Vite)

The backend serves as a RESTful API with PostgreSQL for handling user authentication, role-based access control (RBAC), vendor management, and CRUD operations. The frontend is built using React.js to provide an intuitive and responsive interface for different user roles (Admin, Vendor, Customer).

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Backend Setup (Go + PostgreSQL)](#backend-setup-go--postgresql)
    - [Environment Variables](#backend-env-file)
    - [Running the Backend](#running-the-backend)
4. [Frontend Setup (React.js)](#frontend-setup-reactjs)
    - [Environment Variables](#frontend-env-file)
    - [Running the Frontend](#running-the-frontend)

---

## Features

- **User Authentication** (Signup/Login)
- **Role Management** (Admin, Vendor, Customer)
- **File Uploads** (Profile pictures and vendor descriptions)
- **Vendor Management** (CRUD operations for vendors)
- **Admin Dashboard** for managing users and vendors
- **RBAC** (Role-Based Access Control) for different actions

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Go** (>= v1.18)
- **PostgreSQL** (>= v13)
- **Node.js** (>= v14.x.x) & **npm** (>= v6.x.x)
- **Git**

---

## Backend Setup (Go + PostgreSQL)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/sadeem-summer-internship.git
cd sadeem-summer-internship
```

### Step 2: Setup PostgreSQL Database

1. Ensure PostgreSQL is running.
2. Create a new database:

```sql
CREATE DATABASE sadeem_internship;
```

3. Use the provided migrations to set up the `users`, `roles`, `vendors`, and `user_roles` tables.

### Step 3: Backend Environment Variables

Create a `.env` file in the root of your backend directory with the following content:

```dotenv
.env
DATABASE_CONNECTION_STR = postgres://postgres:ur_password@localhost:5432/sadeem_internship?sslmode=disable
MIGRATIONS_ROOT = database/migrations
DOMAIN = http://localhost:8000

```

### Step 4: Install Backend Dependencies

Ensure Go is set up properly, then run:

```bash
go mod tidy
```

### Step 5: Running the Backend

After setting up the environment variables and database, you can run the server:

```bash
go run main.go
```

The backend will now be running at `http://localhost:8000`.

---

## Frontend Setup (React.js + Vite)

### Step 1: Navigate to Frontend Directory

Navigate to the frontend directory:

```bash
cd client
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Frontend Environment Variables

Create a `.env` file in the root of the `client` directory with the following content:

```dotenv
# .env

VITE_URL = http://localhost:8000
```

### Step 4: Running the Frontend

After setting up the environment variables and installing dependencies, start the React.js development server:

```bash
npm run dev
```

The frontend will now be running at default port .

---


