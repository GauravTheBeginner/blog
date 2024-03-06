# Blog Application README

## Overview

This is a simple blog application developed to practice CRUD (Create, Read, Update, Delete) functionality in web development. It allows users to create, read, update, and delete blog posts, with added authentication for security.

## Features

- **Authentication**: Users can sign up, log in, and log out securely to access the application's features.
- **Create**: Users can create new blog posts with a title, content, and optional image.
- **Read**: Users can view existing blog posts with their titles, content.
- **Update**: Users can edit their own blog posts to modify the title, content, or image.
- **Delete**: Users can delete their own blog posts permanently.


## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Express.js middleware for routing, Mongoose for MongoDB object modeling.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies in each folder: `npm install`
3. Configure MongoDB URI:
   - Create a `config` folder in the backend folder.
   - Inside the `config` folder, create a `config.js` file.
   - In `config.js`, export an object containing your MongoDB URI.
4. Run the backend: `npx nodemon server.js`
5. Run the frontend: `npm run dev`
6. Access the application in your web browser at `http://localhost:5173`


## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or create a pull request.

## Credits

This application was developed by [Your Name] as a learning project inspired by the teachings of [Harkirat Sir] during the course on CRUD functionality.

## License

This project is licensed under the [MIT License](LICENSE).
