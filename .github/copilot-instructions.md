# AI Agent Instructions for FULLSTACK-WEB_DEV

This is a full-stack web development learning project structured in progressive daily modules.

## Project Structure

```
FULLSTACK-WEB_DEV/
├── Day 1/          # HTML and CSS Basics
├── Day 2/          # Bootstrap and Responsive Design
└── Day 3/          # JavaScript Fundamentals
```

## Key Conventions and Patterns

### HTML Structure

- HTML files follow standard HTML5 structure with proper DOCTYPE and meta tags
- External stylesheets are linked in the `<head>` section
- Scripts are placed at the end of the `<body>` section
- Example: See `Day 1/basic.html` for baseline structure

### CSS Implementation

- Three approaches to CSS are used:
  1. External CSS files (e.g., `basic.css`)
  2. Internal CSS in `<style>` tags
  3. Inline CSS with `style` attributes
- Class naming follows descriptive conventions (e.g., `para`, `myPara`)

### Bootstrap Integration

- Bootstrap 5.3.x is used via CDN
- Responsive grid system with `col-lg-*` and `col-md-*` classes
- Container structure: `container-fluid > row > col-*`
- Reference: `Day 2/bootstrap.html`

### JavaScript Patterns

- External JS files are linked without the `.js` extension
- Variable declarations use both `let` and `const` appropriately
- Basic data types and structures are demonstrated in `Day 3/basic_script js`

## Development Workflow

### File Organization

- Each day's module is contained in its own directory
- HTML files are the entry points for each example
- Associated CSS and JS files are named to match their HTML counterparts

### Dependencies

- Bootstrap 5.3.x (CDN)
- No build tools or package management required
- All files are served directly from the filesystem

## Common Tasks

### Adding New Features

1. Create files in the appropriate day's directory
2. Follow existing naming conventions
3. Link stylesheets and scripts using relative paths

### Debugging

- Use browser developer tools for HTML/CSS inspection
- JavaScript console.log statements are used throughout
- Check browser console for script errors

## Best Practices

- Use semantic HTML elements
- Implement responsive design using Bootstrap grid
- Follow consistent indentation in HTML and JavaScript
- Comment code to explain complex logic or data structures
