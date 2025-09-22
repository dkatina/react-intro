# In-Class Assignment: Personal Portfolio Card Component

## Objective
Create a reusable Card component for your personal portfolio that displays your information using props. This assignment will help you understand component structure, props passing, and component composition.

## Requirements

### Functional Requirements
- Create a Card component that accepts props for personal information
- Display at least 5 different pieces of information (name, title, bio, skills, etc.)
- Use the Card component to create at least 2 different cards with different information
- Include a profile image (can use placeholder images)
- Add basic styling to make the cards visually appealing

### Technical Requirements
- Use functional component syntax
- Implement proper prop destructuring
- Follow React naming conventions (PascalCase for components)
- Export components properly
- Use JSX syntax correctly
- Include proper keys for any lists

### Submission Format
- Create a new Vite project called "portfolio-practice"
- All code should be in the src/ folder
- Components should be in a components/ folder
- Submit the entire project folder

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

### Step 1: Create the Card Component (15 minutes)

1. Create `src/components/Card.jsx`:
   ```jsx
   function Card({ name, title, bio, skills, image, email }) {
     return (
       <div className="card">
         <img src={image} alt={`${name}'s profile`} />
         <div className="card-content">
           <h2>{name}</h2>
           <h3>{title}</h3>
           <p>{bio}</p>
           <div className="skills">
             <h4>Skills:</h4>
             <ul>
               {skills.map((skill, index) => (
                 <li key={index}>{skill}</li>
               ))}
             </ul>
           </div>
           <p className="email">{email}</p>
         </div>
       </div>
     );
   }

   export default Card;
   ```

2. Add basic CSS styling to `src/index.css`:
   ```css
   .card {
     border: 1px solid #ddd;
     border-radius: 8px;
     padding: 20px;
     margin: 20px;
     max-width: 300px;
     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   }

   .card img {
     width: 100%;
     height: 200px;
     object-fit: cover;
     border-radius: 4px;
     margin-bottom: 15px;
   }

   .card-content h2 {
     color: #333;
     margin-bottom: 5px;
   }

   .card-content h3 {
     color: #666;
     margin-bottom: 10px;
   }

   .card-content p {
     color: #555;
     line-height: 1.5;
     margin-bottom: 15px;
   }

   .skills ul {
     list-style-type: none;
     padding: 0;
   }

   .skills li {
     background-color: #f0f0f0;
     padding: 5px 10px;
     margin: 5px 5px 5px 0;
     border-radius: 15px;
     display: inline-block;
   }

   .email {
     font-style: italic;
     color: #007bff;
   }
   ```

### Step 2: Use the Card Component in App.jsx (10 minutes)

1. Update `src/App.jsx`:
   ```jsx
   import Card from './components/Card';

   function App() {
     const person1 = {
       name: "Dylan Smith",
       title: "Full-Stack Developer",
       bio: "Passionate about creating web applications that solve real-world problems. I love learning new technologies and building projects that make a difference.",
       skills: ["JavaScript", "React", "Python", "Flask", "SQL"],
       image: "https://via.placeholder.com/300x200/007bff/ffffff?text=Dylan",
       email: "dylan@example.com"
     };

     const person2 = {
       name: "Sarah Johnson",
       title: "Frontend Developer",
       bio: "Creative developer focused on user experience and modern web design. I enjoy turning complex problems into simple, beautiful solutions.",
       skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
       image: "https://via.placeholder.com/300x200/28a745/ffffff?text=Sarah",
       email: "sarah@example.com"
     };

     return (
       <div className="App">
         <h1>Team Portfolio</h1>
         <div className="cards-container">
           <Card {...person1} />
           <Card {...person2} />
         </div>
       </div>
     );
   }

   export default App;
   ```

2. Add container styling to `src/index.css`:
   ```css
   .cards-container {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap: 20px;
   }

   .App {
     text-align: center;
     padding: 20px;
   }

   .App h1 {
     color: #333;
     margin-bottom: 30px;
   }
   ```

### Step 3: Test and Customize (10 minutes)

1. Open your browser and navigate to `http://localhost:5173`
2. Verify that both cards display correctly
3. Customize the information to show your own details
4. Try changing the styling (colors, fonts, spacing)
5. Add more cards with different information

### Step 4: Add Your Own Information (10 minutes)

1. Replace the placeholder data with your own information
2. Use a real profile picture or find a suitable placeholder
3. Add your actual skills and experience
4. Make sure the email and other details are realistic

## Bonus Challenges

### Challenge 1: Enhanced Styling (15 minutes)
- Add hover effects to the cards
- Implement a responsive design that works on mobile
- Add animations or transitions
- Create a more sophisticated color scheme

### Challenge 2: Additional Props (10 minutes)
- Add props for social media links
- Include a "hire me" button
- Add a rating or experience level
- Include contact information

### Challenge 3: Component Composition (15 minutes)
- Create a Header component for your portfolio
- Create a Footer component with copyright information
- Create a Layout component that uses Header and Footer
- Use the Layout component to wrap your cards

### Challenge 4: Advanced Features (20 minutes)
- Add a "Show More/Show Less" toggle for the bio
- Implement a skills filter or search
- Add click handlers to make cards interactive
- Create a modal that opens when clicking on a card

## Checkpoints for Validation

### Checkpoint 1: Component Structure
- [ ] Card component is properly defined and exported
- [ ] Props are destructured correctly
- [ ] Component uses PascalCase naming

### Checkpoint 2: Props Usage
- [ ] All required props are being passed
- [ ] Props are used correctly in JSX
- [ ] Lists have proper keys

### Checkpoint 3: Styling
- [ ] Cards have visual styling
- [ ] Layout is responsive
- [ ] Information is clearly organized

### Checkpoint 4: Functionality
- [ ] Multiple cards display correctly
- [ ] All information is showing properly
- [ ] No console errors

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
- **Props not working**: Verify prop names match exactly
- **Styling issues**: Check CSS class names and selectors
- **Console errors**: Open browser dev tools and check for errors

## Success Criteria

By the end of this assignment, you should be able to:
- ✅ Create a functional React component
- ✅ Pass and use props effectively
- ✅ Structure components properly
- ✅ Apply basic styling to components
- ✅ Compose multiple components together
- ✅ Follow React naming conventions
- ✅ Use JSX syntax correctly

## Next Steps

After completing this assignment, you'll be ready for the next lesson where we'll learn about:
- State management with useState
- Event handling
- Making components interactive
- Building dynamic user interfaces
