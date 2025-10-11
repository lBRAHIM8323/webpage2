# Mohammad Ibrahim - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Quick Start

1. **View the website**: Simply open `index.html` in your web browser
2. **Setup Formspree** (for contact form):
   - Go to [https://formspree.io/](https://formspree.io/) and create a free account
   - Create a new form and get your unique form ID
   - In `index.html`, find line with `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID

3. **Add your contact information**:
   - Open `index.html` in a text editor
   - Search for `<!-- REPLACE WITH YOUR EMAIL -->`
   - Update your email, phone number, LinkedIn, GitHub, and HuggingFace URLs

## 📁 File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file with all content
├── style.css           # All styles and responsive design
├── script.js           # Interactive features and animations
├── README.md           # This documentation file
│
└── assets/             # Images and media files
    └── profile.png     # Your profile photo
```

## 🎨 Customization Guide

### Changing Colors

Open `style.css` and modify the CSS variables at the top (lines 12-21):

```css
:root {
    --primary-color: #2563eb;        /* Main blue color */
    --primary-dark: #1d4ed8;         /* Darker blue */
    --secondary-color: #10b981;      /* Green accent */
    --accent-color: #f59e0b;         /* Orange accent */
    /* ... more colors ... */
}
```

**How to change the main theme color:**
1. Choose your color (use a color picker tool)
2. Get the hex code (e.g., `#ff6b6b` for red)
3. Replace `--primary-color` value with your hex code

### Updating Content

All content is in `index.html`. Each section is clearly marked with comments:

#### Hero Section (Your Introduction)
- **Location**: Lines 43-72
- **What to change**: 
  - Your name in `<h1>` tag
  - Your title (e.g., "AI/ML Engineer")
  - Your description text

#### About Section
- **Location**: Lines 76-148
- **What to change**:
  - Your bio text in the `<p>` tags
  - Statistics numbers (projects, domains, technologies)

#### Experience & Education
- **Location**: Lines 152-252
- **What to change**:
  - Job titles and company names
  - Dates and descriptions
  - Add new positions by copying a `<div class="timeline-item">` block

#### Projects
- **Location**: Lines 256-416
- **What to change**:
  - Project titles and descriptions
  - Technology tags (in `<span>` tags)
  - **To add a new project**: Copy one `<div class="project-card">` block and modify it

#### Skills
- **Location**: Lines 420-480
- **What to change**:
  - Add or remove skill tags
  - Organize skills into categories

#### Certifications
- **Location**: Lines 484-557
- **What to change**:
  - Certificate names and issuers
  - Issue dates
  - Credential links

#### Contact Section
- **Location**: Lines 561-630
- **IMPORTANT - Replace these**:
  - Line 571: Add your Formspree form ID
  - Line 615: Your email address
  - Line 623: Your phone number
  - Line 634-646: Your LinkedIn, GitHub, and HuggingFace URLs

### Adding/Removing Sections

Each section follows this structure:

```html
<section class="section-name" id="section-id">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Subtitle text</p>
        
        <!-- Section content here -->
    </div>
</section>
```

**To add a new section:**
1. Copy the structure above
2. Give it a unique `id`
3. Add a link to the navigation menu (lines 32-40)

### Changing Images

**Profile Photo:**
1. Save your new photo as `profile.png` in the `assets/` folder
2. Or update line 71 in `index.html` to point to your image file

**Background Images:**
- Currently using gradient backgrounds
- To add images, modify the `background` property in `style.css`

## 🎯 JavaScript Features

All interactive features are in `script.js`:

1. **Mobile Navigation** (lines 19-43)
   - Hamburger menu for mobile devices
   - Smooth open/close animation

2. **Scroll Effects** (lines 47-62)
   - Navbar becomes transparent on scroll
   - Smooth scrolling to sections

3. **Scroll Animations** (lines 66-86)
   - Cards fade in when scrolling
   - Automatic detection of elements

4. **Contact Form** (lines 90-139)
   - Handles form submission to Formspree
   - Shows success/error messages

5. **Active Navigation Link** (lines 143-166)
   - Highlights current section in navbar

### Optional Features

The JavaScript file includes optional features you can enable:

**Typing Effect** (lines 175-189):
- Uncomment to add typing animation to hero subtitle

**Scroll to Top Button** (lines 201-234):
- Uncomment to add a floating "back to top" button

## 📱 Responsive Design

The website automatically adapts to different screen sizes:

- **Desktop** (1200px+): Full layout with side-by-side content
- **Tablet** (768px-1200px): Adjusted layout, some stacking
- **Mobile** (below 768px): Single column, hamburger menu

**To modify breakpoints**, edit the media queries in `style.css` (lines 825-900).

## 🔧 Troubleshooting

### Contact Form Not Working
1. Make sure you've replaced `YOUR_FORM_ID` with your actual Formspree ID
2. Check browser console for errors (F12 key)
3. Verify your Formspree account is active

### Images Not Showing
1. Check the file path in `index.html`
2. Ensure image is in the `assets/` folder
3. File names are case-sensitive (profile.png ≠ Profile.PNG)

### Mobile Menu Not Opening
1. Clear browser cache
2. Check that `script.js` is loaded
3. Open browser console (F12) to check for errors

### Animations Not Working
1. Some browsers need page refresh
2. Check JavaScript is enabled
3. Try a different browser (Chrome, Firefox, Safari)

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Select main branch
6. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder
3. Your site goes live instantly

### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your project
3. Deploy with one click

## 📝 Setting Up Formspree

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Sign Up" (free plan available)
3. After login, click "New Form"
4. Give your form a name (e.g., "Portfolio Contact Form")
5. Copy the form endpoint URL (looks like `https://formspree.io/f/xzbqwvyr`)
6. In `index.html`, replace `YOUR_FORM_ID` with the ID from the URL (the part after `/f/`)

Example:
```html
<!-- Before -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- After (using example ID) -->
<form action="https://formspree.io/f/xzbqwvyr" method="POST">
```

## 🎓 Learning Resources

If you want to learn more about the technologies used:

- **HTML**: [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Flexbox**: [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid**: [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 💡 Tips for Beginners

1. **Make small changes first**: Change one color or text at a time
2. **Save often**: Always save your files before refreshing the browser
3. **Use browser DevTools**: Press F12 to inspect and debug
4. **Comment your code**: Add notes to remember what changes you made
5. **Keep backups**: Save copies before making major changes

## 📧 Support

If you need help:
1. Read the error message in the browser console (F12)
2. Google the error message
3. Check [Stack Overflow](https://stackoverflow.com/) for solutions
4. Review the code comments - they explain what each part does

## 📄 License

This project is open source and free to use for personal portfolios.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Last Updated: 2025
