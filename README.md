# WanderHome — Phase 1B (UI & Styling)

A premium, responsive full-stack web application for listing and managing vacation rental properties. Built with Node.js, Express, MongoDB, and EJS.

---

## 🎯 Project Overview

WanderHome is a vacation rental platform designed to demonstrate robust CRUD operations, database management, and professional web engineering concepts. 

In **Phase 1A**, the core functional backend was built, enabling listing creation, retrieval, updates, and deletion.
In **Phase 1B**, we transformed the application from a raw HTML skeleton into a visually stunning, responsive, and cohesive user experience (UX) using modern styling practices, custom layouts, and a dedicated design system.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating & Layouts:** EJS, `ejs-mate` (for layout inheritance)
- **Styling & Frameworks:** 
  - **CSS:** Bootstrap 5 (Responsive Layout Grid and Utility Classes)
  - **Custom Styling:** Vanilla CSS (Curated color palette, micro-interactions, responsive sizing)
  - **Typography:** Plus Jakarta Sans (via Google Fonts)
  - **Icons:** Font Awesome 7 (Vector iconography)
- **Middleware:** `method-override` (HTTP PUT/PATCH/DELETE method support)

---

## 📁 Project Structure (Phase 1B Updated)

```text
WanderHome/
├── app.js                 # Main application & routing file
├── package.json           # Project metadata & dependencies
├── models/
│   └── listing.js         # Mongoose schema and model for listings
├── public/                # Static assets served by Express
│   ├── css/
│   │   └── style.css      # Core custom style definitions & overrides
│   └── images/
│       └── logo.png       # Responsive brand logo asset
├── views/                 # View templates
│   ├── includes/          # Partial templates (included across views)
│   │   ├── footer.ejs     # Dynamic brand and social footer
│   │   └── navbar.ejs     # Sticky navigation header
│   ├── layouts/
│   │   └── boilerplate.ejs # Layout container injecting views dynamically
│   └── listing/           # Listing views (inheriting boilerplate layout)
│       ├── index.ejs      # Grid display of all listings
│       ├── show.ejs       # Premium detailed view of a single listing
│       ├── new.ejs        # Styled listing creation form
│       └── edit.ejs       # Styled listing modification form
└── init/
    ├── index.js           # Database seeding script
    └── data.js            # Curated seed dataset
```

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/WanderHome.git
   cd WanderHome
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   Ensure MongoDB is running locally:
   ```bash
   mongod
   ```

4. **Seed the database:**
   Execute the database initialization script to populate with sample listings:
   ```bash
   node init/index.js
   ```

5. **Start the application:**
   ```bash
   npm start
   ```
   Or run with `nodemon` for active development:
   ```bash
   npx nodemon app.js
   ```

---

## 🚀 Key Implementation Details (Phase 1B)

### 1. Templating Architecture (`ejs-mate`)
Instead of duplicating the HTML header, scripts, navbar, and footer across every page, we introduced `ejs-mate`. Every view now begins with `<% layout('/layouts/boilerplate') -%>` and focuses only on its core body content, maintaining absolute DRY (Don't Repeat Yourself) compliance.

### 2. Design System & Typography
* **Typography:** Integrated the modern, high-legibility **Plus Jakarta Sans** font globally for a premium, clean aesthetic.
* **Palette:** Built a unified brand theme using a vibrant primary brand accent color (`#fe424d` - WanderHome Pink) combined with elegant dark tones (`#222222` for high contrast text) and soft backgrounds (`#ebebeb` footer background).
* **Grid System:** Utilized Bootstrap's mobile-first flexbox grid (`row-cols-lg-3 row-cols-md-2 row-cols-sm-1`) to ensure perfect responsivity across smartphones, tablets, laptops, and ultra-wide screens.

### 3. Component Highlights
* **Sticky Navigation Header (`navbar.ejs`):**
  - Stays pinned to the top on scroll (`sticky-top`) with a clean border separation.
  - Custom branded logo alongside dark nav-links with a responsive hamburger toggler for smaller screen sizes.
* **Property Grid (`index.ejs`):**
  - Listings are displayed in elegant, borderless cards with custom 1rem rounded image corners.
  - Multi-column layout that shifts dynamically depending on viewport size.
  - Interactive white-glow hover overlay transition indicating clickability.
* **Detail Display (`show.ejs`):**
  - Focuses user attention on the content using an elegant column offset (`col-6 offset-2 mt-3`).
  - Structured data points, custom action buttons, and beautiful visual scale.
* **Clean Input Forms (`new.ejs` & `edit.ejs`):**
  - Forms are aligned in responsive centered panels (`col-8 offset-2 mt-3`).
  - Implements form grids (`col-md-4` and `col-md-8`) for country and location fields to optimize visual space.
  - Custom buttons (`.add-btn`, `.edit-btn`) leveraging the signature branding color.
* **Branded Footer (`footer.ejs`):**
  - Modern, responsive footer styled in solid gray with clean spacing.
  - Social media icons for Facebook, Instagram, and LinkedIn.
  - Quick access links for Privacy Policies and Terms, aligned cleanly on all viewports.

---

## 🔗 Route Map

| Route | Method | Description |
|---|---|---|
| `/` | GET | Landing Page |
| `/listings` | GET | Displays all listing cards in responsive grid |
| `/listings/new` | GET | Form to create a new property listing |
| `/listings` | POST | Submits & saves a new listing to database |
| `/listings/:id` | GET | Detailed card view of a specific listing |
| `/listings/:id/edit` | GET | Edit form pre-populated with listing data |
| `/listings/:id` | PUT | Processes and updates a specific listing |
| `/listings/:id` | DELETE | Deletes a property listing from the database |

---

## 🗄️ Database Schema

**Listing Model (`models/listing.js`):**
```javascript
{
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7...",
    set: (v) => v === "" ? "https://images.unsplash.com/photo-1584132967334-10e028bd69f7..." : v
  },
  price: Number,
  location: String,
  country: String
}
```

---

## 👨‍💻 Author

**MANOJ KUMAR V**

## 📄 License

This project is licensed under the [ISC License](LICENSE).
