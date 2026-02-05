# Agent Instructions for Homepage Project

This document provides detailed instructions for AI agents to update and maintain this academic portfolio website.

## Project Overview

This is a multi-page academic portfolio website with:
- 7 HTML pages (home, members, publications, partners, research, teaching, contact)
- Centralized data management in `js/data.js`
- Responsive design that works on desktop and mobile
- All content loaded dynamically from JavaScript data objects

## Core Principles

1. **Data Separation**: ALL user-editable content is in `js/data.js`. Never hardcode content in HTML files.
2. **Consistency**: All pages follow the same structure with header, navigation, main content, and footer.
3. **Responsive Design**: The site must work on desktop (>768px), tablet (768px), and mobile (<768px).
4. **No Direct HTML Editing**: Update content through `js/data.js`, not by modifying HTML files directly.

## Project Structure

```
homepage/
├── index.html              # Home page
├── members.html            # Lab members page
├── publications.html       # Publications list
├── partners.html          # Partners and collaborators
├── research.html          # Research areas and sponsors
├── teaching.html          # Teaching experience
├── contact.html           # Contact information
├── css/
│   └── style.css          # All styling (responsive)
├── js/
│   ├── data.js            # ALL USER DATA (edit this!)
│   └── main.js            # Functions to display data
└── README.md              # User documentation
```

## Data Structure in `js/data.js`

### 1. siteData (Site-wide Configuration)
```javascript
const siteData = {
    labName: "Lab Name",           // Appears in: nav, titles, footer
    universityShort: "SHORT NAME",  // Appears in: header badge
    universitySub: "SUBTITLE"       // Appears in: header badge
};
```

### 2. profileData (Main Profile Information)
```javascript
const profileData = {
    name: "Full Name",
    initials: "XX",                 // Used if no profileImage
    profileImage: "URL or path",    // Leave empty to show initials
    title: "Job Title",
    department: "Department Name",
    university: "University Name",
    location: "City, Country",
    github: "GitHub URL",
    googleScholar: "Google Scholar URL"
};
```

### 3. newsData (Home Page News)
Array of objects with:
- `title`: News headline
- `date`: Date string (e.g., "January 2025")
- `description`: News details

### 4. membersData (Lab Members)
Object with two arrays:
- `postdocs`: Array of `{name, focus}`
- `phdStudents`: Array of `{name, focus}`

### 5. publicationsData (Publications by Year)
Array of objects:
```javascript
{
    year: 2025,
    papers: [
        {
            title: "Paper Title",
            authors: "Author List",
            venue: "Conference/Journal Name",
            location: "City, Country, Year",
            acceptance: "XX% acceptance rate",
            links: {
                pdf: "URL or #",
                bibtex: "URL or #"
            }
        }
    ]
}
```

### 6. partnersData (Partners Information)
```javascript
{
    intro: ["Paragraph 1", "Paragraph 2"],  // Array of paragraphs
    collaborators: [
        { name: "Partner Name", logo: "LOGO TEXT" }
    ]
}
```

### 7. researchData (Research Areas and Sponsors)
```javascript
{
    areas: ["Research area 1", "Research area 2"],
    sponsors: [{ name: "Sponsor", logo: "LOGO" }]
}
```

### 8. teachingData (Teaching Experience)
Array of institutions, each with courses:
```javascript
[
    {
        institution: "University Name",
        courses: [
            {
                code: "COURSE 101",
                name: "Course Name",
                terms: "Season Year",
                syllabusLink: "URL or null"
            }
        ]
    }
]
```

### 9. contactData (Contact Information)
```javascript
{
    name: "Prof. Name",
    department: "Department",
    address: "Street Address",
    city: "City, State Postal",
    country: "Country",
    email: "email[at]domain[dot]com",
    office: "Building, Office Number"
}
```

## Common Update Tasks

### Task 1: Update Basic Information (Name, Title, etc.)
1. Open `js/data.js`
2. Modify `profileData` object
3. Update `name`, `title`, `department`, `university`, `location`
4. Update `github` and `googleScholar` URLs
5. Update `profileImage` URL or leave empty for initials

### Task 2: Update Site Name
1. Open `js/data.js`
2. Modify `siteData.labName` (appears in navigation, titles, footer)
3. Modify `siteData.universityShort` and `siteData.universitySub` (header badge)

### Task 3: Add News Item
1. Open `js/data.js`
2. Add object to `newsData` array at the beginning:
```javascript
{
    title: "News Title",
    date: "Month Year",
    description: "Details..."
}
```

### Task 4: Add Publication
1. Open `js/data.js`
2. Find or create year object in `publicationsData`
3. Add paper object to `papers` array
4. Include all required fields: title, authors, venue, location, acceptance, links

### Task 5: Add/Remove Team Members
1. Open `js/data.js`
2. Edit `membersData.postdocs` or `membersData.phdStudents`
3. Add/remove objects with `{name, focus}` format

### Task 6: Update Research Areas
1. Open `js/data.js`
2. Edit `researchData.areas` array (add/remove strings)
3. Edit `researchData.sponsors` array (add/remove objects with `{name, logo}`)

### Task 7: Update Teaching Information
1. Open `js/data.js`
2. Edit `teachingData` array
3. Add/modify institution objects with courses array

### Task 8: Update Contact Information
1. Open `js/data.js`
2. Modify `contactData` object fields
3. Use `[at]` and `[dot]` in email to prevent spam

## Styling Modifications

### Color Scheme
Located in `css/style.css`:
- Primary color: `#f77f00` (orange) - Used for highlights, hover effects
- Accent color: `#ffd700` (gold) - Used for navbar border
- Dark color: `#1a1a1a` (almost black) - Used for text
- Gray: `#888` - Used for secondary text

### Responsive Breakpoints
- `@media (max-width: 968px)`: Tablet layout, sidebar moves to top
- `@media (max-width: 768px)`: Mobile layout, burger menu appears
- `@media (max-width: 480px)`: Small mobile adjustments

### Key CSS Classes
- `.lab-title`: Navigation title
- `.profile-card`: Sidebar profile box
- `.profile-image`: Profile photo (circular, 150x150px)
- `.nav-menu`: Navigation menu items
- `.menu-toggle`: Burger menu button (mobile only)
- `.highlight-boxes`: Feature boxes on home page
- `.member-item`: Individual member listing
- `.publication-item`: Individual publication
- `.news-item`: Individual news item

## JavaScript Functions in `main.js`

### Initialization Functions (Called on page load)
- `setLabTitle()`: Sets navigation title from `siteData.labName`
- `setUniversityName()`: Sets header badge text
- `setFooterText()`: Sets footer with current year
- `setPageTitle(pageName)`: Sets browser tab title

### Content Loading Functions
- `loadProfileCard()`: Loads profile sidebar (all pages)
- `loadNews()`: Loads news items (home page only)
- `loadMembers()`: Loads team members (members page)
- `loadPublications()`: Loads publications (publications page)
- `loadPartners()`: Loads partners content (partners page)
- `loadResearch()`: Loads research areas (research page)
- `loadTeaching()`: Loads teaching info (teaching page)
- `loadContact()`: Loads contact info (contact page)

### Utility Functions
- `toggleMenu()`: Opens/closes mobile burger menu

## HTML File Structure

Each HTML file follows this structure:
1. `<head>`: Meta tags, title, CSS link
2. `<header>`: University badge and name
3. `<nav>`: Lab title and navigation menu
4. `<main>`: Page-specific content
5. `<footer>`: Copyright text
6. Scripts: Load `data.js`, `main.js`, then call page-specific functions

## Important Rules When Making Changes

### DO:
- ✅ Update content by editing `js/data.js`
- ✅ Keep data structure consistent (arrays of objects)
- ✅ Use empty strings or `null` for optional fields
- ✅ Test responsive design on mobile after changes
- ✅ Maintain consistent formatting in data.js
- ✅ Use `#` as placeholder for links not yet available
- ✅ Keep functions in `main.js` reading from data objects

### DON'T:
- ❌ Hardcode content directly in HTML files
- ❌ Modify HTML structure without updating all pages consistently
- ❌ Break the data structure format (it will break the site)
- ❌ Remove required fields from data objects
- ❌ Use inline styles (use CSS classes instead)
- ❌ Add complex JavaScript logic to HTML files
- ❌ Forget to test mobile responsiveness

## Testing Checklist

After making changes:
1. ✅ Open `index.html` in browser to verify home page
2. ✅ Check all navigation links work
3. ✅ Verify profile card appears on all pages
4. ✅ Test responsive design (resize browser or use dev tools)
5. ✅ Test mobile menu (burger icon at <768px width)
6. ✅ Verify all data loads correctly on each page
7. ✅ Check browser console for JavaScript errors
8. ✅ Verify images load if URLs are provided

## Troubleshooting

### Problem: Content not appearing
- Check `js/data.js` for syntax errors (missing commas, quotes)
- Verify data structure matches expected format
- Check browser console for errors

### Problem: Mobile menu not working
- Verify `toggleMenu()` function exists in `main.js`
- Check CSS for `.menu-toggle` and mobile media queries
- Ensure `onclick="toggleMenu()"` is on the menu toggle element

### Problem: Profile image not showing
- Verify `profileImage` URL is correct and accessible
- Check if image URL requires authentication
- Fall back to initials by setting `profileImage: ""`

### Problem: Styling issues
- Clear browser cache
- Check for CSS syntax errors
- Verify CSS file is linked in HTML `<head>`
- Check responsive breakpoints match viewport size

## Advanced Customization

### Adding a New Section
1. Add data object to `js/data.js`
2. Create loading function in `main.js`
3. Add HTML container with unique ID
4. Call loading function on page load
5. Update README.md with new section info

### Changing Layout
1. Modify grid structure in CSS (`.page-layout`)
2. Update responsive breakpoints if needed
3. Test on all screen sizes

### Adding New Page
1. Copy existing HTML page structure
2. Update navigation links in ALL pages
3. Add data loading calls in script section
4. Update CSS if needed for page-specific styles
5. Update README.md with new page info

## File Maintenance

### When to Edit Each File

**`js/data.js`** - Edit when:
- Updating any content (news, publications, members, etc.)
- Changing site name, profile info, or any displayed text

**`css/style.css`** - Edit when:
- Changing colors, fonts, spacing
- Modifying responsive breakpoints
- Adding new CSS classes for custom styling

**`js/main.js`** - Edit when:
- Adding new loading functions for new data sections
- Modifying how data is displayed (HTML structure in JS)
- Adding new utility functions

**HTML files** - Edit when:
- Adding new pages or sections (structural changes)
- Modifying page layout (not content)
- Adding new HTML containers for data

**`README.md`** - Edit when:
- Updating user documentation
- Adding new features or sections
- Changing deployment instructions

## Best Practices

1. **Keep it Simple**: Don't over-engineer solutions
2. **Test Incrementally**: Test after each change
3. **Maintain Consistency**: Follow existing patterns
4. **Document Changes**: Update README if adding new features
5. **Preserve Structure**: Keep data.js format consistent
6. **Mobile First**: Always test mobile responsiveness
7. **Use Semantic HTML**: Maintain proper HTML structure
8. **Clean Code**: Keep JavaScript functions focused and clear

## Example: Complete Update Workflow

**Scenario**: User wants to add a new publication

1. Read `js/data.js` to understand current structure
2. Locate `publicationsData` array
3. Check if year (e.g., 2025) already exists
4. If year exists: Add paper to `papers` array
5. If year doesn't exist: Create new year object with paper
6. Verify all required fields are filled:
   - title, authors, venue, location, acceptance, links
7. Save `js/data.js`
8. Open `publications.html` in browser
9. Verify new publication appears
10. Check formatting and links work
11. Test on mobile device or responsive mode

## Git and Deployment

### GitHub Pages Deployment
1. Repository name should be `username.github.io`
2. All files should be in root directory
3. `index.html` must be in root for GitHub Pages
4. Commit changes: `git add .` → `git commit -m "message"` → `git push`
5. Site will be live at `https://username.github.io`

### Git Best Practices
- Commit after each logical change
- Use clear commit messages
- Test locally before pushing
- Don't commit sensitive data (API keys, passwords)

## Security Considerations

1. **Email Obfuscation**: Use `[at]` and `[dot]` in email addresses
2. **External Links**: Use `target="_blank"` for external links
3. **Image URLs**: Ensure images are from trusted sources
4. **No Secrets**: Never commit API keys or passwords
5. **Input Validation**: All data is static, no user input forms

## Performance Tips

1. Optimize images before uploading (compress, resize)
2. Use web-safe formats (JPG for photos, PNG for logos)
3. Keep profile image under 200KB
4. Minimize JavaScript complexity
5. Use CSS for animations, not JavaScript

## Summary

This website is designed for easy maintenance through `js/data.js`. As an AI agent:
- Focus on updating data.js for content changes
- Maintain existing structure and patterns
- Test responsiveness after changes
- Follow the rules and best practices above
- Refer to this document for any modifications

When in doubt, preserve existing patterns and structures rather than creating new ones.
