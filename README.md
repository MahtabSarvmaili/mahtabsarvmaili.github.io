# Academic Portfolio Website

A responsive, multi-page portfolio website designed for academic professionals, research labs, and faculty members.

## 🌟 Features

- **Multi-page structure** with separate pages for Members, Publications, Partners, Research, Teaching, and Contact
- **Fully responsive design** that works perfectly on desktop, tablet, and mobile devices
- **Easy data management** - all content is stored in separate JavaScript files for easy updates
- **Modern, clean design** inspired by academic research lab websites
- **Mobile-friendly navigation** with hamburger menu for small screens

## 📁 Project Structure

```
homepage/
├── index.html              # Home page
├── members.html            # Team members page
├── publications.html       # Publications list
├── partners.html          # Partners and collaborators
├── research.html          # Research areas and sponsors
├── teaching.html          # Teaching experience
├── contact.html           # Contact information
├── css/
│   └── style.css          # All styling
├── js/
│   ├── data.js            # ALL YOUR DATA (edit this!)
│   └── main.js            # Functions to display data
└── README.md              # This file
```

## 🚀 Getting Started

### 1. Customize Your Data

Open `js/data.js` and update all the information:

- **siteData**: Lab name, university name (appears in header, navigation, page titles, and footer)
- **profileData**: Your name, title, department, location, links, profile image
- **newsData**: Recent news and updates
- **membersData**: Lab members (postdocs, PhD students)
- **publicationsData**: Your publications by year
- **partnersData**: Partner organizations and collaborators
- **researchData**: Research areas and sponsors
- **teachingData**: Courses you teach
- **contactData**: Contact information

### 2. View Locally

Simply open `index.html` in your web browser to preview the site.

### 3. Deploy to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Push all files to the repository
3. Your site will be live at `https://yourusername.github.io`

## 📝 How to Update Content

### Adding News Items

Edit the `newsData` array in `js/data.js`:

```javascript
const newsData = [
    {
        title: "Your News Title",
        date: "Month Year",
        description: "Description of the news..."
    }
];
```

### Adding Publications

Add new publications to the `publicationsData` array:

```javascript
{
    year: 2025,
    papers: [
        {
            title: "Paper Title",
            authors: "Author1, A.; Author2, B.",
            venue: "Conference Name",
            location: "City, Country, Year",
            acceptance: "XX% acceptance rate",
            links: {
                pdf: "link-to-pdf",
                bibtex: "link-to-bibtex"
            }
        }
    ]
}
```

### Adding Team Members

Update the `membersData` object:

```javascript
const membersData = {
    postdocs: [
        {
            name: "Name",
            focus: "Research focus area"
        }
    ],
    phdStudents: [
        {
            name: "Student Name",
            focus: "Research topic"
        }
    ]
};
```

### Updating Colors

Edit `css/style.css` to change the color scheme:

- Primary color: `#f77f00` (orange)
- Accent color: `#ffd700` (gold)
- Dark color: `#1a1a1a` (almost black)

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small mobile: < 480px

## 🎨 Customization Tips

### Change Logo

Replace the shield initials in the header by editing the HTML in each page:

```html
<div class="shield">ML</div>
```

### Add Profile Image

Replace the profile initials with an actual image by editing the `loadProfileCard()` function in `js/main.js`:

```javascript
<img src="path/to/your/image.jpg" alt="${profileData.name}" class="profile-image">
```

### Add Icons

You can add Font Awesome or other icon libraries to enhance the design:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Feel free to use this template for your personal or academic website.

## 🛠️ Troubleshooting

### Menu not working on mobile?
- Make sure `js/main.js` is loaded
- Check browser console for errors

### Data not showing?
- Verify `js/data.js` is properly formatted
- Check for JavaScript syntax errors in the browser console

### Styling issues?
- Clear your browser cache
- Ensure `css/style.css` is properly linked

## 💡 Tips

1. **Keep data.js clean**: This is your content management file
2. **Use relative paths**: Ensures compatibility with GitHub Pages
3. **Test on mobile**: Use browser dev tools to test responsive design
4. **Regular updates**: Keep your publications and news current
5. **Backup**: Always keep a backup of your customized data.js

## 🤝 Need Help?

If you need to customize further, the main files to edit are:
- Content: `js/data.js`
- Styling: `css/style.css`
- Layout: Individual HTML files
- Functionality: `js/main.js`

Happy publishing!
