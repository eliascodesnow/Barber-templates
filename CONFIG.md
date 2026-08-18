Where to customize this barber template

This project centralizes client-editable content in src-style data at ./shopConfig.ts.

Key fields to edit for client preferences:
- name, tagline, description: shop identity shown site-wide
- whatsappNumber, email, address, city, hours: contact and booking
- services: array of {name, description, price, duration, icon}
- team: array of staff entries (name, role, experience, image)
- testimonials and gallery: customer text and images
- heroImage: main background image

Deployment
1. npm install
2. npm run build
3. Serve the dist folder (or use `npm run preview`) 

Notes
- All copy and contact info are plain strings in shopConfig.ts for fast edits.
- If you prefer a CMS, replace shopConfig import with an API call that returns the same shape.
