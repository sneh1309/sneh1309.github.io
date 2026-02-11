# Sneh Patel — Cybersecurity Portfolio

A cyberpunk-themed personal portfolio website built with pure HTML, CSS, and JavaScript.

## Quick Start (Local)

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it — no build tools needed!

---

## Deploy on GitHub Pages (Free Hosting)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repository exactly: `sneh1309.github.io`
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Push Files

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/sneh1309/sneh1309.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo **Settings** > **Pages**
2. Under **Source**, select `Deploy from a branch`
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: **https://sneh1309.github.io**

### Step 4: Custom Domain (Optional)

1. In repo **Settings** > **Pages** > **Custom domain**, enter your domain (e.g., `snehpatel.co.uk`)
2. Add these DNS records at your domain registrar:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | CNAME | www  | sneh1309.github.io       |

3. Check **Enforce HTTPS**
4. Wait up to 24 hours for DNS propagation

---

## Setup EmailJS (Free Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the browser — no backend needed.

### Step 1: Create Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free tier: 200 emails/month)

### Step 2: Add Email Service
1. Dashboard > **Email Services** > **Add New Service**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Note your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Dashboard > **Email Templates** > **Create New Template**
2. Set up the template:

   **Subject:** `New Portfolio Message: {{subject}}`

   **Body:**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

3. Set **To Email** to your email address
4. Save and note your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Dashboard > **Account** > **API Keys**
2. Copy your **Public Key**

### Step 5: Update Code
Open `js/main.js` and replace the placeholder values (around line 145):

```javascript
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
```

---

## Customization

### Update Personal Info
- Edit `index.html` to update your bio, projects, certifications, etc.
- Replace `your.email@example.com` in the contact section with your real email

### Add Profile Photo
Replace the icon placeholder in the About section with an `<img>` tag:
```html
<div class="image-placeholder">
    <img src="your-photo.jpg" alt="Sneh Patel" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
</div>
```

### Add Project Links
Update the `href="#"` placeholders in the Projects section with actual GitHub repo URLs.

### Add Blog Posts
Link blog cards to actual blog posts or platforms like Medium, dev.to, etc.

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Particles.js](https://vincentgarreau.com/particles.js/) — Matrix rain background
- [Typed.js](https://mattboldt.com/demos/typed-js/) — Terminal typing effect
- [AOS](https://michalsnik.github.io/aos/) — Scroll animations
- [EmailJS](https://www.emailjs.com/) — Client-side email
- [Font Awesome](https://fontawesome.com/) — Icons
- [Google Fonts](https://fonts.google.com/) — Fira Code + Inter

---

## License

MIT License. Free to use and modify.
