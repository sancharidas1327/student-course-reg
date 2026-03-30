# Student Course Registration System

Student course registration project built with Node.js, Express, MySQL, and a static frontend.

## Project Structure

```text
student-course-reg/
|-- backend/
|   |-- routes/
|   |-- db.js
|   |-- server.js
|   |-- package.json
|   `-- .env.example
|-- database/
|   `-- schema.sql
|-- frontend/
|   `-- index.html
`-- .gitignore
```

## MySQL Setup

1. Create the database and tables by running the SQL in `database/schema.sql`.
2. In `backend/`, copy `.env.example` to `.env`.
3. Update `.env` with your MySQL username and password.

Example `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=student_course_reg
PORT=5000
```

## Run The App

```bash
cd backend
npm install
npm start
```

Then open [http://localhost:5000](http://localhost:5000).

## Git Setup

If you want to push this to GitHub:

```bash
git add .
git commit -m "Set up student course registration project"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

If `origin` already exists, use:

```bash
git remote set-url origin <your-github-repo-url>
git push -u origin main
```
