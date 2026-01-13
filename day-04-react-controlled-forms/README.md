Day 4 – Controlled Forms & Validation in React

Today I focused on handling forms properly in React, moving beyond basic inputs to more realistic user interactions.

What I learned & implemented:

Controlled components

Input values fully controlled by React state (value + onChange)

React as the single source of truth

Handling multiple inputs

Managing form data using a single state object

Dynamic updates using the name attribute

User intent–based validation

Validation messages are derived values, not state

Errors appear only after:

input blur, or

form submission attempt

Form submission

Using onSubmit instead of button onClick

Preventing default page reload

Resetting form state after successful submit

Basic UI styling

Simple CSS for better readability and structure

Focused on clarity, not design-heavy UI

Key takeaway

Good form UX depends not just on validation logic, but on when validation is shown — based on user interaction, not initial render.