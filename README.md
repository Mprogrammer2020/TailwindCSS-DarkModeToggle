# TailwindCSS-DarkModeToggle

A JavaScript function/module that toggles dark mode using Tailwind CSS classes.

## Overview

This repository contains a simple JavaScript function/module that allows you to toggle dark mode on your web pages using Tailwind CSS classes. Dark mode is a popular feature that enhances user experience, especially in low-light environments.

## Usage

1. Include `dark` class in your Tailwind CSS config (`tailwind.config.js`) to style dark mode elements.

2. Add the following HTML snippet to your webpage where you want the dark mode toggle button:

```html
<button onclick="toggleDarkMode()" class="bg-gray-800 text-white px-4 py-2 rounded-md">Toggle Dark Mode</button>
```

3. Include the JavaScript code provided in your project to enable dark mode toggling.

## How it Works

- The `toggleDarkMode()` function toggles the `dark` class on the `body` element, allowing you to style dark mode elements in your CSS.
- User preference for dark mode is saved in `localStorage` to persist the dark mode state across page reloads.

## Folder Structure

- `darkModeToggle.js`: Contains the JavaScript code for the dark mode toggle functionality.
- `tailwind.config.js`: Includes the Tailwind CSS configuration file with the dark mode class added.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request.
