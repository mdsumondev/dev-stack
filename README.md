# The project name is Dev Stack

> It's react based system. User can select there stack and one stack able to add only one time. There is a option to remove each stack separately and all stack all time.

# This system has a bug, I'm trying to my best to solve it but I not find the issue. It take a reload once add a stack and remove stack

## Use the following technology:

- **React**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite** for install react
- **JSON** data formate
- **React Icon**
- **React toastify**

## ✨ Key Features

1. Add stack

2. Disable the button once add a stack

3. Visible the total stack number and the stack item

4. Option to remove stack

5. Option to remove all stack at a time

---

## React Q&A Section

### 1. What is JSX, and why is it used in React?

- JSX is a javascript XML. It's use to crate react component

### 2. What is the difference between `props` and `state`?

- Props use to pass data parent to child and state use to manage the state like a javascript variable. But it's not totaly varialbe.

### 3. What does the `useState` hook do, and where did you use it in this project?

- useState hook hold the data and update the data depend on user reaction. I've used for mobile device header hamburger, control the add to stack button etc.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect handles side effects, such as data fetching. In the project I had not use the useEffect.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

- react tract all item as a one item. That why to understand react all the items different use unique key.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

- Conditional rendering means visible a section or content conditionally depend on user behavior. I've used it to the your stack section. If user do not add any stack it's showing empty but once add stack, showing the total stack number and and stack
