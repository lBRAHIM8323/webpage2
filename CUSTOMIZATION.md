# Website Customization Guide

This guide will help you customize your portfolio website even if you're new to HTML, CSS, and JavaScript.

## 🚀 Getting Started

Before making any changes:
1. **Make a backup** - Copy all files to a safe location
2. **Open files in a text editor** - Use VS Code, Sublime Text, or even Notepad
3. **Save and refresh** - After making changes, save the file and refresh your browser (F5)

## 📝 Step-by-Step Customization

### Step 1: Setup Formspree (Contact Form)

**Why?** This allows visitors to send you messages directly from your website.

1. Visit [https://formspree.io/](https://formspree.io/)
2. Click "Sign Up" (free plan is perfect)
3. After logging in, click "New Form"
4. Name it "Portfolio Contact Form"
5. You'll get a URL like: `https://formspree.io/f/xzbqwvyr`
6. Open `index.html` in a text editor
7. Press `Ctrl+F` (or `Cmd+F` on Mac) and search for: `YOUR_FORM_ID`
8. Replace `YOUR_FORM_ID` with just the ID part (e.g., `xzbqwvyr`)

**Example:**
```html
Before: action="https://formspree.io/f/YOUR_FORM_ID"
After:  action="https://formspree.io/f/xzbqwvyr"
```

### Step 2: Add Your Contact Information

Open `index.html` and update these sections:

#### Email Address (Line ~615)
```html
Find: <a href="mailto:your.email@example.com">your.email@example.com</a>
Replace with: <a href="mailto:mohammad@example.com">mohammad@example.com</a>
```

#### Phone Number (Line ~623)
```html
Find: <a href="tel:+1234567890">+1 (234) 567-890</a>
Replace with: <a href="tel:+971501234567">+971 50 123 4567</a>
```

#### LinkedIn URL (Line ~634)
```html
Find: href="https://www.linkedin.com/in/your-profile"
Replace with: href="https://www.linkedin.com/in/mohammad-ibrahim"
```

#### GitHub URL (Line ~638)
```html
Find: href="https://github.com/your-username"
Replace with: href="https://github.com/lBRAHIM8323"
```

#### HuggingFace URL (Line ~642)
```html
Find: href="https://huggingface.co/your-username"
Replace with: href="https://huggingface.co/your-username"
```

### Step 3: Change Website Colors

Open `style.css` and find the `:root` section (around line 12):

```css
:root {
    --primary-color: #2563eb;        /* Main blue - change this! */
    --primary-dark: #1d4ed8;         /* Darker shade */
    --secondary-color: #10b981;      /* Green accent */
    --accent-color: #f59e0b;         /* Orange accent */
}
```

**Popular color schemes:**

#### Professional Blue (Current)
```css
--primary-color: #2563eb;
--primary-dark: #1d4ed8;
```

#### Tech Purple
```css
--primary-color: #8b5cf6;
--primary-dark: #7c3aed;
```

#### Modern Teal
```css
--primary-color: #14b8a6;
--primary-dark: #0d9488;
```

#### Bold Red
```css
--primary-color: #ef4444;
--primary-dark: #dc2626;
```

**How to find color codes:**
- Use [Coolors.co](https://coolors.co/) to generate palettes
- Use [Adobe Color](https://color.adobe.com/) for inspiration
- Google "color picker" and choose your favorite

### Step 4: Update Your Projects

To add a new project, copy this template in `index.html`:

```html
<div class="project-card">
    <h4>Your Project Name</h4>
    <p>Brief description of what this project does and the problem it solves.</p>
    <div class="project-tags">
        <span>Technology 1</span>
        <span>Technology 2</span>
        <span>Technology 3</span>
    </div>
</div>
```

**Example - Adding a Chatbot Project:**
```html
<div class="project-card">
    <h4>AI Customer Support Chatbot</h4>
    <p>Built an intelligent chatbot using GPT-4 that handles customer inquiries with 95% accuracy, reducing response time by 70%.</p>
    <div class="project-tags">
        <span>GPT-4</span>
        <span>Python</span>
        <span>Flask</span>
        <span>React</span>
    </div>
</div>
```

### Step 5: Update Experience Section

To add a new job, copy this template:

```html
<div class="timeline-item">
    <div class="timeline-badge">Current</div>
    <div class="timeline-content">
        <h4>Job Title</h4>
        <h5>Company Name</h5>
        <span class="timeline-date">Start Date - End Date</span>
        <p>Brief description of your role and impact.</p>
        <ul>
            <li>Key achievement or responsibility 1</li>
            <li>Key achievement or responsibility 2</li>
            <li>Key achievement or responsibility 3</li>
        </ul>
    </div>
</div>
```

### Step 6: Change Your Profile Photo

1. Save your new photo in the `assets/` folder
2. Name it `profile.png` (or any name you like)
3. If you used a different name, update line 71 in `index.html`:

```html
<img src="assets/your-new-photo.png" alt="Your Name">
```

**Photo tips:**
- Use a professional headshot
- Square images work best (e.g., 500x500 pixels)
- Keep file size under 500KB for faster loading
- PNG or JPG format

### Step 7: Modify About Me Section

Open `index.html` and find the About section (around line 80):

```html
<p>
    Replace this paragraph with your own story.
    Talk about your background, passion, and what drives you.
</p>
```

**Tips for writing about yourself:**
- Start with your current role
- Mention years of experience
- Highlight your passion
- Include specializations
- Keep it concise (2-3 paragraphs max)

### Step 8: Update Statistics

In the About section, find these numbers and change them:

```html
<div class="stat-item">
    <h4>12</h4>           <!-- Change this number -->
    <p>Projects Completed</p>
</div>
```

### Step 9: Add New Skills

To add a skill tag, simply add a new `<span>`:

```html
<div class="skill-tags">
    <span>Python</span>
    <span>TensorFlow</span>
    <span>Your New Skill</span>  <!-- Add this -->
</div>
```

### Step 10: Customize Footer

Find the footer section (around line 632) and update:

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
        <p>Built with HTML, CSS, and JavaScript</p>
    </div>
</footer>
```

## 🎨 Advanced Customization

### Change Font

1. Go to [Google Fonts](https://fonts.google.com/)
2. Choose a font you like
3. Click "Get font" and copy the `<link>` code
4. In `index.html`, replace line 13 with your new font link
5. In `style.css`, update the `--font-family` on line 24

**Example - Using 'Roboto' font:**

In `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

In `style.css`:
```css
--font-family: 'Roboto', sans-serif;
```

### Add Animations

The website already has scroll animations. To enable the typing effect:

1. Open `script.js`
2. Find line 175 (says `/*`)
3. Remove `/*` from line 175
4. Remove `*/` from line 189
5. Save and refresh!

### Change Button Styles

In `style.css`, find the `.btn` class (around line 265) and modify:

```css
.btn {
    padding: 15px 40px;        /* Make buttons bigger */
    border-radius: 10px;       /* Less rounded corners */
}
```

### Adjust Section Spacing

In `style.css`, find `--section-padding` (line 21):

```css
--section-padding: 100px 0;    /* More space between sections */
```

## 🐛 Common Issues & Fixes

### Issue: Contact form doesn't work
**Fix:** Make sure you replaced `YOUR_FORM_ID` with your actual Formspree form ID

### Issue: Colors didn't change
**Fix:** Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Image not showing
**Fix:** 
- Check file name matches exactly (case-sensitive)
- Ensure image is in `assets/` folder
- Try using full path: `assets/profile.png`

### Issue: Mobile menu not working
**Fix:** 
- Clear cache and refresh
- Check if `script.js` is loaded (view page source)
- Try a different browser

### Issue: Text is overlapping
**Fix:** Add more padding in the CSS for that section

### Issue: Layout looks broken
**Fix:** 
- Undo recent changes
- Check for missing closing tags `</div>`
- Validate HTML at [validator.w3.org](https://validator.w3.org/)

## 📱 Testing Your Website

Test on different devices:
1. **Desktop**: Normal browser window
2. **Tablet**: Resize browser to ~800px width
3. **Mobile**: Resize browser to ~400px width or use phone

**Browser DevTools Testing:**
1. Press F12 to open DevTools
2. Click the device toggle button (phone/tablet icon)
3. Select different device sizes
4. Check all sections display correctly

## 🚀 Publishing Your Website

### Quick Deploy Options:

#### 1. GitHub Pages (Free)
```bash
1. Create GitHub account
2. Create new repository called "portfolio"
3. Upload all your files
4. Go to Settings → Pages
5. Select "main" branch
6. Your site is live at: username.github.io/portfolio
```

#### 2. Netlify (Free)
1. Visit [netlify.com](https://netlify.com)
2. Sign up
3. Drag and drop your project folder
4. Get instant live URL

#### 3. Vercel (Free)
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically

## 💡 Tips for Success

1. **Start Small**: Change one thing at a time
2. **Test Often**: Refresh browser after each change
3. **Use Comments**: Add notes in your code
   ```html
   <!-- This is a comment - it won't show on the website -->
   ```
4. **Keep Backups**: Save copies before big changes
5. **Learn Gradually**: Don't rush, learn as you go
6. **Use Browser Tools**: F12 is your friend for debugging

## 📚 Learning Resources

- **HTML**: [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- **CSS**: [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **Colors**: [Coolors.co](https://coolors.co/)
- **Icons**: [Font Awesome Icons](https://fontawesome.com/icons)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

## ✅ Checklist Before Going Live

- [ ] Updated Formspree form ID
- [ ] Added your email, phone, and social links
- [ ] Changed all placeholder content to your information
- [ ] Updated profile photo
- [ ] Tested on mobile and desktop
- [ ] Checked all links work
- [ ] Verified contact form sends emails
- [ ] Checked for spelling errors
- [ ] Tested in different browsers (Chrome, Firefox, Safari)
- [ ] All images load properly

## 🎯 Quick Reference

### File Purposes:
- `index.html` - All content (text, projects, experience)
- `style.css` - All design (colors, layout, spacing)
- `script.js` - All interactions (animations, form handling)
- `README.md` - Documentation and setup guide
- `assets/` - Images and media files

### Where to Change What:
- **Colors**: `style.css` lines 12-21
- **Text Content**: `index.html`
- **Contact Info**: `index.html` lines 615-646
- **Projects**: `index.html` lines 256-416
- **Animations**: `script.js`

---

**Need Help?**
- Check the comments in the code files
- Google your specific question
- Visit [Stack Overflow](https://stackoverflow.com/)
- Review the README.md file

**Remember**: Everyone makes mistakes while learning. Save often, test frequently, and don't be afraid to experiment!
