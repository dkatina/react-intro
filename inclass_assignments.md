# In-Class Assignment: Personal Portfolio Card Component

## Objective
Create a reusable Card component for your personal portfolio that displays your information using props. This assignment will help you understand component structure, props passing, and component composition.

## Getting Started

### Setup Instructions
1. Create a new Vite project:
   ```bash
   npm create vite@latest portfolio-practice -- --template react
   cd portfolio-practice
   npm install
   ```

2. Create a components folder:
   ```bash
   mkdir src/components
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### File Structure
```
portfolio-practice/
├── src/
│   ├── components/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── ...
```

## Step-by-Step Instructions

### Step 1: Create the Card Component

1. **Create the Card component file**:
   - Create a new file `src/components/Card.jsx`
   - Write a functional component called `Card` that accepts props for: name, title, bio, skills, image, and email
   - Use proper prop destructuring in the function parameters
   - Return JSX that displays all the passed props
   - Include an image with proper alt text
   - Map over the skills array to display each skill as a list item
   - Remember to add a `key` prop to the mapped list items
   - Export the component as default

2. **Add CSS styling**:
   - Add styles to `src/index.css` to make your cards look professional
   - Style the card container with border, padding, and shadow
   - Style the image to be responsive and properly sized
   - Style the text elements with appropriate colors and spacing
   - Style the skills list to look like tags or badges
   - Make sure the email stands out with different styling

### Step 2: Use the Card Component in App.jsx

1. **Import and use the Card component**:
   - Import your Card component at the top of `src/App.jsx`
   - Create two objects with different person data (include name, title, bio, skills array, image URL, and email)
   - Use placeholder images from a service like placeholder.com or via.placeholder.com
   - Render both Card components, passing the data as props
   - Add a title for your portfolio section
   - Wrap your cards in a container div

2. **Add layout styling**:
   - Style the cards container to display cards in a row with flexbox
   - Make the layout responsive so cards wrap to new lines on smaller screens
   - Center the main title and add appropriate spacing
   - Add some padding to the main App container

### Step 3: Test and Customize

1. Open your browser and navigate to `http://localhost:5173`
2. Verify that both cards display correctly
3. Customize the information to show your own details
4. Try changing the styling (colors, fonts, spacing)
5. Add more cards with different information

### Step 4: Add Your Own Information

1. **Personalize your portfolio**:
   - Replace the placeholder data with your own information
   - Use a real profile picture or find a suitable placeholder image
   - Add your actual skills and experience
   - Make sure the email and other details are realistic
   - Consider adding a third card with information about a friend or colleague

## Bonus Challenges

### Challenge 1: Enhanced Styling
- Add hover effects to the cards (try transform, box-shadow, or color changes)
- Implement a responsive design that works well on mobile devices
- Add smooth animations or transitions using CSS
- Create a more sophisticated color scheme with CSS custom properties

### Challenge 2: Additional Props
- Add props for social media links (LinkedIn, GitHub, Twitter)
- Include a "hire me" or "contact" button
- Add a rating or experience level indicator
- Include additional contact information

### Challenge 3: Component Composition
- Create a Header component for your portfolio with your name and navigation
- Create a Footer component with copyright information
- Create a Layout component that uses Header and Footer
- Use the Layout component to wrap your cards and create a complete page structure

### Challenge 4: Advanced Features
- Add a "Show More/Show Less" toggle for the bio text
- Implement a skills filter or search functionality
- Add click handlers to make cards interactive (maybe show more details)
- Create a modal that opens when clicking on a card to show additional information

## Checkpoints for Validation

### Checkpoint 1: Component Structure
- [ ] Card component is properly defined and exported
- [ ] Props are destructured correctly in the function parameters
- [ ] Component uses PascalCase naming convention
- [ ] All required props are being used in the JSX

### Checkpoint 2: Props Usage
- [ ] All required props are being passed from App.jsx
- [ ] Props are used correctly in the JSX (with curly braces for variables)
- [ ] Lists have proper keys for the mapped items
- [ ] Image has appropriate alt text

### Checkpoint 3: Styling
- [ ] Cards have visual styling (borders, shadows, padding)
- [ ] Layout is responsive and works on different screen sizes
- [ ] Information is clearly organized and readable
- [ ] Skills are displayed as styled tags or badges

### Checkpoint 4: Functionality
- [ ] Multiple cards display correctly with different data
- [ ] All information is showing properly
- [ ] No console errors in the browser
- [ ] Page loads and renders without issues

## Resources

### Documentation
- [React Components](https://react.dev/learn/your-first-component)
- [JSX Syntax](https://react.dev/learn/writing-markup-with-jsx)
- [Props](https://react.dev/learn/passing-props-to-a-component)

### Code Examples
- [Component Examples](https://react.dev/learn/your-first-component#step-1-export-your-component)
- [JSX Examples](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)

### Troubleshooting Tips
- **Component not rendering**: Check export/import statements
- **Props not working**: Verify prop names match exactly between parent and child
- **Styling issues**: Check CSS class names and selectors
- **Console errors**: Open browser dev tools and check for errors

## Success Criteria

By the end of this assignment, you should be able to:
- ✅ Create a functional React component from scratch
- ✅ Pass and use props effectively between components
- ✅ Structure components properly with good naming conventions
- ✅ Apply CSS styling to make components visually appealing
- ✅ Compose multiple components together to build a complete UI
- ✅ Follow React naming conventions and best practices
- ✅ Use JSX syntax correctly with proper key props

## Next Steps

After completing this assignment, you'll be ready for the next lesson where we'll learn about:
- State management with useState hook
- Event handling and user interactions
- Making components interactive and dynamic
- Building more complex user interfaces

