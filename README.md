# Skills and Domain Selector

This project is a React-based application for selecting, managing, and dynamically adding skills using dropdowns, checkboxes, and notifications. It includes features such as real-time search, skill selection, and feedback using React Toastify.

---

## Table of Contents

- [Features]
- [Technologies Used]
- [Setup and Installation]
- [Running the Project]
- [Folder Structure]
- [Future Improvements]

---

## Features

1. **Skill Selection:**

   - Select skills from a dropdown list.
   - Add new skills dynamically.
   - Remove selected skills with immediate feedback.

2. **Domain Selector:**

   - Manage and assign domains like FullStack, DataScience, etc.
   - Avoid duplication of selected options.

3. **Real-Time Search:**

   - Filter skills in real-time based on user input.

4. **Notifications:**

   - Success and error notifications using React Toastify.

5. **User-Friendly UI:**

   - Responsive and interactive components.

---

## Technologies Used

- React.js
- React Hooks: `useState`, `useEffect`, `useRef`
- React Toastify
- HTML, CSS
- JavaScript (ES6+)

---

## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/skills-domain-selector.git
   cd my-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

---

## Running the Project

To run the project locally, follow these steps:

1. **Ensure Node.js is Installed:**

   - Download Node.js from [Node.js Official Website]

2. **Install Dependencies:**

   - Run `npm install` to install the required dependencies.

3. **Start the Development Server:**

   - Use `npm start` to launch the development server.
   - The application will be accessible on `http://localhost:3000`.

---

## Folder Structure

```
skills-domain-selector/
|-- src/
|   |-- components/
|   |   |-- Skills.js        # Skills selection logic
|   |   |-- Domain.js        # Domain selection logic
|   |-- styles/
|   |   |-- Skills.css       # Styles for Skills component
|   |   |-- Domain.css       # Styles for Domain component
|-- public/
|-- README.md
|-- package.json
```

---

## Future Improvements

1. **Backend Integration:**

   - Store and retrieve skills/domains from a database.

2. **Dynamic Options:**

   - Fetch options dynamically instead of hardcoding them.

3. **Styling Enhancements:**

   - Improve UI responsiveness and animations.

4. **Validation:**

   - Add stricter validation for new skill inputs.



