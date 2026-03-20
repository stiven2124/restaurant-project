# 🍽️ Restaurant Reservation System (Backend)

A robust **Node.js** REST API designed to handle user authentication, restaurant discovery, and secure table reservations. This backend is built to power upcoming **React** (Web) and **React Native** (Mobile) applications.

---

## 🚀 Core Features

* **User Authentication:** Secure Registration and Login using `Bcrypt` password hashing.
* **JWT Security:** Protected endpoints. You must provide a valid Token to create, update, or delete reservations.
* **Restaurant Discovery:** * List all restaurants.
    * Search by **Name**.
    * Filter by **Location**.
* **Reservation Management (In Production):**
    * CRUD operations for bookings.
    * User-specific reservation history.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MySQL
* **Security:** JSON Web Tokens (JWT) & Bcrypt

---

## ⚙️ How to Setup

1.  **Clone the project:**
    ```bash
    git clone [https://github.com/stiven2124/restaurant-project.git](https://github.com/stiven2124/restaurant-project.git)
    cd restaurant-project
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=your_mysql_password
    DB_NAME=your_db_name
    JWT_SECRET=super_secret_random_string
    ```

4.  **Start the Server:**
    ```bash
    npm start
    ```

---

## 🔐 API Reference

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/user/register` | Create a new account | No |
| **POST** | `/user/login` | Login & receive JWT | No |
| **GET** | `/restaurant` | View all restaurants | No |
| **POST** | `/reservation` | Create a booking | **Yes** |
| **DELETE** | `/reservation/:id`| Cancel a booking | **Yes** |

---

## 📅 Roadmap (Coming Soon)

- [ ] **Advanced Reservation Logic:** Handling table availability and time slots.
- [ ] **Web Frontend:** Interactive dashboard built with **React**.
- [ ] **Mobile App:** Cross-platform booking app using **React Native**.

---
*Developed by [Stiven](https://github.com/stiven2124)*
