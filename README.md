# Expense Tracker App

A simple and responsive expense tracking application built with **React**.  
This app allows users to add new expenses, search through their expense history, and view their spending in an easy-to-read table format.

## Features

- 📋 Add new expenses with details such as name, description, category, amount, and date.
- 🔍 Real-time search through all expenses.
- 🧾 View expenses in a clean, tabular format.
- ✍️ Easy to customize and expand with new features.

## Tech Stack

- **React** (Vite + React for fast development)
- **JavaScript**
- **CSS** for basic styling

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm 

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BoruIsakoJ/expense-tracker.git
```

2. Navigate to the project directory:

```bash
cd expense-tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```bash
http://localhost:5173
```

## Project Structure

```bash
src/
├── components/
│   ├── AddExpenseForm.jsx
│   ├── Header.jsx
│   └── Table.jsx
├── data/
│   └── items.js
├── App.jsx
├── App.css
└── main.jsx
```

## How to Use

1. **Add Expense:**  
Fill out the form to add a new expense item.

2. **Search Expense:**  
Use the search bar to filter through your expenses in real-time.

3. **View Table:**  
All expenses will be displayed in the table below the form.
