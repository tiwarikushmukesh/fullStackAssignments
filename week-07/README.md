# 🧑‍💻 ReactJS Assignment 1 — Profile Component

## 📌 Assignment Question
**Task:**  
Create a **Profile Component** using **ReactJS** that displays a user’s profile information including their profile picture, background image, name, location, and some basic statistics (followers, likes, photos).

The component should be:
- Structured properly as a **React functional component**.
- Styled using **CSS** for layout and presentation.
- Imported and rendered inside the **App component**.

---

## ✅ What I Did

### 1. **Created React Components**
- Built a `Profile.jsx` file inside the `components` folder.
- Used **functional component syntax** to define and export the component.
- Imported the `Profile` component in `App.jsx` and rendered it.

### 2. **Styled the Component**
- Created a `Profile.css` file inside a `style` folder.
- Used **Flexbox** for alignment and layout.
- Added borders, rounded corners, and clean spacing.
- Ensured images fit properly using `object-fit: cover`.
- Added sections for header, profile picture, and footer stats.

### 3. **Displayed Profile Information**
- Background image and profile image added using `<img>` tags.
- Displayed:
  - **Name:** Rita Correia  
  - **Location:** New York, USA  
  - **Followers:** 80k  
  - **Likes:** 803k  
  - **Photos:** 1.4k  

---

## 🧠 Learning Outcomes
Through this assignment, I learned:
- How to create and structure a **React component**.
- How to **import CSS** files in React.
- How to use **JSX syntax** and combine HTML + JS logic.
- How to apply **Flexbox** and **positioning** in CSS.
- The importance of **component reusability** and separation of concerns.

---

## 📂 Folder Structure
project-folder/
│
├── src/
│ ├── components/
│ │ └── Profile.jsx
│ ├── style/
│ │ └── Profile.css
│ └── App.jsx
│
└── README.md 


## 🖼️ Preview
![Profile Component Screenshot](./screenshots/profileComponents.png)
The profile component displays:
- A **cover background image** at the top  
- A **profile picture** in the center  
- A **name and location** section  
- A **footer section** with follower statistics  

---

## 🚀 Future Improvements
- Make the component **dynamic using props** (pass data from parent).
- Add **hover animations** and **box shadows** for better UI.
- Improve **responsiveness** for mobile view.
- Add **alt text** for accessibility.

---

## 🏁 Conclusion
This assignment helped me understand the **basics of React components**, CSS styling, and component structure.  
It’s my **first React project**, and it gave me a clear foundation to build more complex components in the future.
