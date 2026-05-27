# WanderHome

A full-stack web application for listing and managing vacation rental properties. Built with Node.js, Express, MongoDB, and EJS.

## 🎯 Project Overview

WanderHome is a learning project (Phase 1) designed to demonstrate CRUD operations, database management, and web application development concepts. Users can view, create, edit, and delete property listings.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating:** EJS
- **Styling:** (To be added)
- **Middleware:** Method-override for HTTP method support

## 📁 Project Structure

```
WanderHome/
├── app.js                 # Main application file
├── package.json           # Project dependencies
├── models/
│   └── listing.js         # Listing schema and model
├── views/
│   └── listing/
│       ├── index.ejs      # Display all listings
│       ├── show.ejs       # View single listing
│       ├── new.ejs        # Create new listing
│       └── edit.ejs       # Edit existing listing
└── init/
    ├── index.js           # Database initialization
    └── data.js            # Sample data
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/WanderHome.git
cd WanderHome
```

2. Install dependencies:
```bash
npm install
```

3. Ensure MongoDB is running on your local machine:
```bash
mongod
```

4. Start the application:
```bash
npm start
```
Or with nodemon for development:
```bash
nodemon app.js
```

## 🚀 Features (Phase 1)

- ✅ View all property listings
- 🔄 Create new listings
- 📝 Edit existing listings
- 🗑️ Delete listings
- 📊 MongoDB database integration

## 🔗 Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page |
| `/listings` | GET | Display all listings |
| `/listings/new` | GET | Show new listing form |
| `/listings` | POST | Create new listing |
| `/listings/:id` | GET | Display specific listing |
| `/listings/:id/edit` | GET | Show edit form |
| `/listings/:id` | PATCH/PUT | Update listing |
| `/listings/:id` | DELETE | Delete listing |

## 🗄️ Database Schema

**Listing Model:**
```javascript
{
  title: String (required),
  description: String,
  image: String (default: Unsplash image),
  price: Number,
  location: String,
  country: String
}
```

## 📝 Notes

- Phase 1 focuses on core CRUD operations
- Future phases may include user authentication, image uploads, reviews, and booking functionality

## 👨‍💻 Author

MANOJ KUMAR V

## 📄 License

ISC
