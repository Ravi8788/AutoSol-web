You are the senior frontend architect and UI/UX engineer for the AutoSol Technologies website.

IMPORTANT:
Do NOT rebuild the website from scratch.
The current design is already good and should be preserved.
Your job is to REFACTOR, CORRECT, ORGANIZE and POLISH the existing project.

The current website is static only.
DO NOT add Firebase, Firestore, Supabase, authentication, database, backend APIs, CMS, admin dashboard, dynamic reviews, dynamic enquiries or any other backend functionality.

Later we will make the site dynamic.
For this stage, everything must remain static and cleanly structured so Firebase/backend can be added later without rebuilding the frontend.

==================================================
1. FIRST AUDIT THE EXISTING PROJECT
==================================================

Before changing code:

1. Inspect the complete project structure.
2. Identify:
   - existing routes/pages
   - components
   - navbar/header
   - footer
   - service cards
   - project cards
   - product cards
   - animations
   - responsive CSS
   - data files
   - existing images/logo assets
3. Reuse working components wherever possible.
4. Do not duplicate components unnecessarily.
5. Do not destroy the current visual identity.
6. Fix architecture instead of adding CSS hacks.

Do not blindly rewrite everything.

==================================================
2. MAIN CURRENT UI PROBLEMS TO FIX
==================================================

The current screenshot shows these specific problems.

A. HEADER / LOGO
--------------------------------

The AutoSol wordmark is too dark in the current dark header.

The “Auto” portion becomes difficult to see while “Sol” is visible.

FIX:

Use the existing official AutoSol logo asset if available.

If the wordmark is rendered as text:
- “Auto” = white / near-white
- “Sol” = cyan/blue
- maintain the existing blue/cyan brand identity
- do not introduce pink/purple into the wordmark
- do not use a circular logo
- keep the logo crisp and properly scaled

Desktop:
- logo visually around 150–175px wide
- logo height around 38–46px
- never stretch the logo

Mobile:
- logo around 125–145px wide
- preserve aspect ratio

==================================================
3. HEADER / NAVBAR REDESIGN
==================================================

Current desktop navigation is visually too stretched.

Create a clean responsive header:

DESKTOP
--------------------------------

Header layout:

[AutoSol Logo]     [Home Services Solutions Products Work Training Insights Contact]     [Start a Project]

Use one centered max-width container.

Recommended:
- max-width: 1280–1400px
- header height: approximately 72–78px
- horizontal padding: 24–32px
- align everything vertically center
- no arbitrary absolute positioning

The navigation should not occupy the entire screen width.

The Start a Project button should remain visually separated from the navigation.

Nav typography:
- 15–16px
- font-weight 500–600
- readable contrast
- active state clearly visible

Do not use extremely dark text on the dark header.

All nav items must remain visually readable.

==================================================
4. SERVICES DROPDOWN / MEGA MENU
==================================================

This is one of the biggest current problems.

The current Services mega-menu is too large and visually covers the page.

Create a controlled desktop mega-menu.

Behavior:

- Open only when Services is intentionally activated.
- Do not keep it open automatically on page load.
- Close when:
  - user clicks outside
  - user presses Escape
  - user selects a service
  - user navigates to another route
- Do not leave the mega-menu open after navigation.
- Do not allow the dropdown to cover important page controls permanently.

Desktop:
- align mega-menu with the main navigation container
- max-width approximately 850–950px
- use 2 columns
- 3–4 rows maximum
- compact vertical spacing
- no unnecessary giant empty areas
- border radius around 20–24px
- consistent internal padding
- subtle shadow
- dark card surface
- strong contrast

Use these primary Services in the dropdown:

COLUMN 1:
1. AI & GenAI
2. AI Automation
3. Software Development
4. Web Development

COLUMN 2:
5. Mobile Development
6. SaaS & Product Development
7. CRM / ERP / Business Systems
8. Data & Analytics

Bottom:
[View All Services]

Additional services remain accessible from /services but do not overload the dropdown.

IMPORTANT:

The mega-menu must never create:
- horizontal overflow
- clipping
- giant whitespace
- text overlap
- content cutoff
- hidden buttons
- inaccessible menu items

For mobile:
DO NOT use the desktop mega-menu.

Use:
hamburger → mobile navigation drawer/sheet → Services accordion.

Mobile menu must be:
- touch friendly
- vertically scrollable if necessary
- full width
- no horizontal overflow
- easy to close
- keyboard accessible

==================================================
5. TOP-LEVEL SITE PAGES
==================================================

Keep the website focused.

TOP NAVIGATION SHOULD BE:

Home
Services
Solutions
Products
Work
Training
Insights
Contact

CTA:
Start a Project

Do NOT add too many top-level navigation items.

==================================================
6. PAGES TO KEEP
==================================================

KEEP THESE:

/
 /about
 /services
 /solutions
 /products
 /work
 /training
 /insights
 /contact

Legal:
 /privacy-policy
 /terms
 /cookie-policy

Keep About as a real page, but do NOT put founder/owner names on the public website.

==================================================
7. PAGES / FEATURES TO REMOVE FOR NOW
==================================================

REMOVE OR DO NOT IMPLEMENT:

/team

Admin pages:
 /admin
 /admin/login
 /admin/projects
 /admin/services
 /admin/reviews
 /admin/training
 /admin/enquiries
 etc.

Also DO NOT implement:
- login
- signup
- Firebase
- Firestore
- database
- CMS
- authentication
- dynamic reviews
- dynamic forms
- admin editing
- API-based content
- dynamic dashboard

Do not create an empty “Reviews” page.

Do not create fake testimonials.

Do not create fake statistics.

Do not create fake clients.

==================================================
8. ABOUT PAGE
==================================================

/about

The About page should describe the company, not the founders.

Sections:

1. About AutoSol Technologies
2. What We Build
3. Our Mission
4. Our Vision
5. How We Work
6. Technology Philosophy
7. AI + Software + Automation + Data + Growth
8. Future Direction
9. CTA

Do NOT show founder names.

Do NOT create fake team information.

==================================================
9. SERVICES PAGE
==================================================

/services

Create a professional services overview.

Group services logically instead of showing 15 random cards.

MAIN SERVICES:

1. AI & GenAI
2. AI Automation
3. Software Development
4. Web Development
5. Mobile Development
6. SaaS & Product Development
7. CRM / ERP / Business Systems
8. Data & Analytics
9. Performance Marketing
10. SEO
11. IoT & Smart Systems
12. Cloud & DevOps
13. UI/UX Design
14. API & Integrations
15. Technology Consulting

Each service card must contain:

- service name
- short one-line explanation
- icon
- “Explore Service” link

Cards must align consistently.

No card should become 2x taller than another because of poor text wrapping.

==================================================
10. SERVICE DETAIL PAGES
==================================================

Create dedicated routes for the important services.

Examples:

/services/ai
/services/automation
/services/software
/services/web
/services/mobile
/services/saas
/services/business-systems
/services/data
/services/marketing
/services/seo
/services/iot
/services/cloud
/services/ui-ux
/services/integrations
/services/consulting

Each page should contain:

1. Breadcrumb
2. Hero
3. Service overview
4. What we build
5. Capabilities
6. Real use cases
7. Process
8. Technologies
9. Related services
10. CTA

Do not repeat the exact same template copy on every service page.

==================================================
11. SOLUTIONS PAGE
==================================================

/solutions

This page should be problem-oriented.

Instead of just listing technologies, show business problems we solve.

Sections:

Lead Management
Customer Management
Business Automation
AI Workflows
Sales Operations
Marketing Automation
Data & Analytics
Business Systems
CRM Transformation
Digital Process Transformation
Custom Software

Example flow:

Business Problem
→ Data
→ AI / Logic
→ Automation
→ Software
→ Business Outcome

No fake metrics.

==================================================
12. PRODUCTS PAGE
==================================================

/products

Show AutoSol's own future products separately from client projects.

PRODUCT 1:
AutoSol AI Core
Status: In Development

PRODUCT 2:
AutoSol CRM
Status: In Development

PRODUCT 3:
AutoSol Business OS
Status: Product Vision / In Development

Each product card must clearly show its status.

Do NOT present future products as already launched.

==================================================
13. AUTO SOL AI CORE
==================================================

/products/ai-core

Content:

- Overview
- Purpose
- LLM Integration
- RAG
- Embeddings
- Vector Search
- AI Agents
- Tool Calling
- AI Workflows
- Evaluation
- Model Routing
- Business Context
- AI Cost Monitoring
- Security Direction
- Development Status

Use “In Development”.

==================================================
14. AUTO SOL CRM
==================================================

/products/crm

Content:

- Overview
- Problem
- Target businesses
- Leads
- Customers
- Contacts
- Deals
- Follow-ups
- Tasks
- Activity timeline
- AI assistant
- AI lead intelligence
- Business memory
- Automation
- Analytics

Pipeline:

New
→ Contacted
→ Qualified
→ Quotation
→ Negotiation
→ Won / Lost

Status:
In Development

==================================================
15. AUTO SOL BUSINESS OS
==================================================

/products/business-os

Show the long-term product vision:

CRM
Sales
Inventory
Purchase
Marketing
HR / Team
Projects
Documents
Analytics
Automation
AI

Clearly label:
PRODUCT VISION / IN DEVELOPMENT

==================================================
16. WORK / PROJECT PORTFOLIO
==================================================

/work

The Work page is extremely important.

Do not put random projects everywhere.

Use a structured portfolio grid.

Each card should have:

- project image
- project name
- category
- short description
- technology
- status
- View Case Study

Use consistent card sizes.

==================================================
17. FINAL PROJECTS TO USE
==================================================

Use the following projects as the current main AutoSol portfolio.

PROJECT 01
--------------------------------
KVK Farmer Database Management System

Category:
Government / Agriculture / Desktop Software

Status:
Developed

Description:
Desktop management system developed for Krishi Vigyan Kendra offices to manage farmer and agricultural programme data.

Features:
- Role-based login
- Farmer management
- Visitor farmer records
- OFT
- FLD
- Training programmes
- Vocational training
- Extension activities
- Reports
- PDF export
- CSV export
- PostgreSQL database
- Windows EXE

Technology:
Python
PyQt5
PostgreSQL
SQLAlchemy
ReportLab
PyInstaller

Route:
/work/kvk-farmer-management


PROJECT 02
--------------------------------
Swadeshi Mart

Category:
E-Commerce / ERP / CRM / HRM / MLM

Status:
Developed / Project

Description:
Large-scale community-exclusive commerce platform combining commerce operations with business management modules.

Features:
- E-commerce
- Product management
- Orders
- Customers
- ERP
- CRM
- HRM
- MLM / referral workflows
- Inventory
- Business dashboards
- Role-based access

Technology:
Next.js
PostgreSQL
Prisma
NextAuth
Self-hosted architecture

Route:
/work/swadeshi-mart

IMPORTANT:
Only show features actually implemented in the project repository.
Do not invent modules simply because they were planned.


PROJECT 03
--------------------------------
RebelSalon

Category:
Mobile Application / Salon

Status:
Developed

Features:
- Salon/service information
- Barber information
- Booking experience
- Customer interface
- Firebase integration

Technology:
Java
XML
Firebase
Android

Route:
/work/rebelsalon


PROJECT 04
--------------------------------
Real Estate Website

Category:
Web Development / Real Estate

Status:
Developed

Features:
- Property presentation
- Property details
- Responsive interface
- Modern landing experience
- Property-focused UI
- Enquiry-oriented experience

Do not invent additional business features.

Route:
/work/real-estate


PROJECT 05
--------------------------------
Inspring E-Commerce Website

Category:
E-Commerce / Web Development

Status:
Developed

Use the actual project repository/assets to determine exact features and technology.

DO NOT INVENT:
- payment systems
- admin panel
- backend
- database
- analytics
- customer counts

Only document what the actual project contains.

Route:
/work/inspring-ecommerce


PROJECT 06
--------------------------------
Krushnai Amrutulya

Category:
Business Website / E-Commerce

Status:
Developed

Use the actual project assets/repository for exact information.

Include:
- project overview
- actual features
- actual technology
- screenshots
- responsive design
- actual business functionality

Do NOT invent features.

Route:
/work/krushnai-amrutulya


PROJECT 07
--------------------------------
Hotel Management System & CRM

Category:
Hospitality / CRM / Automation

Status:
Project / Developed only where actually implemented

Potential documented areas ONLY if present in the actual implementation:

- Customer management
- Enquiries
- CRM
- Booking/customer records
- Lead management
- Follow-ups
- Meta integration
- Marketing workflows
- Automation
- Communication workflows

Show the actual implementation instead of assuming everything is finished.

Route:
/work/hotel-management-crm


PROJECT 08
--------------------------------
Shoe Shop ERP & POS System

Category:
Retail / ERP / POS

Status:
Proposal / SRS

This project MUST be clearly labelled:

“Client Proposal / Software Requirements Specification”

Do NOT present it as a completed deployed product.

Document the proposed modules:

- Product management
- Inventory
- Stock
- Sales
- POS
- Customers
- Suppliers
- Purchase
- Billing
- Reports
- Roles / permissions

Route:
/work/shoe-shop-erp-pos


PROJECT 09
--------------------------------
Wedding & Engagement Invitation Websites

Category:
Creative Web / Next.js / Animation

Status:
Developed

Include:

1. Sonal & Avishkar — Luxury Engagement Invitation
2. Peshwai-Themed Wedding / Supari Invitation

Technology:
Next.js
Framer Motion
GSAP

Features:
- Custom visual theme
- Marathi / Maharashtrian aesthetics
- Animation
- Interactive sections
- Event information
- Responsive mobile experience
- Premium typography
- Custom layouts

Route:
/work/wedding-invitation-websites


PROJECT 10
--------------------------------
Automation Solutions

Category:
AI Automation / Business Automation / Integrations

IMPORTANT:
Only create this as a portfolio project if the repository contains actual automation implementations.

Do not create a fake “automation case study”.

If actual automation work exists, show examples such as:

Meta Lead
→ CRM
→ Lead Assignment
→ Follow-up
→ Notification

OR

Form/Data
→ Processing
→ AI
→ Database
→ Notification

OR

Customer
→ WhatsApp/Email
→ Follow-up
→ Task
→ CRM update

Show only workflows that were actually implemented.

If there is no standalone completed automation project, move this content under:

/services/automation

instead of /work.

==================================================
18. DO NOT OVERLOAD THE WORK PAGE
==================================================

The Work page should NOT show every idea ever discussed.

Do not add:
- unfinished random ideas
- fake SaaS products
- unbuilt concepts
- fake AI projects
- fake metrics
- fake customers

If a project is not complete:
label it:
Prototype
Concept
In Development
Proposal / SRS

==================================================
19. PROJECT DETAIL PAGE DESIGN
==================================================

Every project detail page:

Hero
→ Project overview
→ Problem
→ Solution
→ Key features
→ Technology
→ Architecture / workflow
→ Screenshots
→ Challenges
→ Outcome
→ Status
→ CTA

Do not force every section when project information does not exist.

If screenshots exist in the repository, use them.

If screenshots do not exist:
use a clean “Project Preview” visual instead of fake screenshots.

Never fabricate screenshots.

==================================================
20. TRAINING PAGE
==================================================

/training

Content:

Hero:
LEARN. BUILD. DEPLOY.

Topics:

- AI & GenAI
- Agentic AI
- Python
- Data Science
- Machine Learning
- LLM Engineering
- RAG
- Prompt Engineering
- AI Automation
- Full Stack Development
- Web Development
- Mobile Development
- Cloud
- DevOps
- SQL
- APIs
- Git / GitHub
- IoT
- UI/UX
- Digital Marketing

Learning model:

Learn
→ Practice
→ Build
→ Deploy
→ Present
→ Improve

Formats:

- Workshops
- Project-based training
- College sessions
- Corporate training
- Bootcamps
- Final-year project mentoring
- Hackathon preparation

Do not claim guaranteed jobs.
Do not claim fake certifications.

==================================================
21. INSIGHTS PAGE
==================================================

/insights

Do NOT fabricate blog posts.

If no real articles exist:

Show:

“Insights are coming soon.”

Then show topic categories:

AI
Automation
Software Engineering
Data
SaaS
Digital Growth

Keep it visually complete but honest.

No fake article dates.
No fake author names.
No fake statistics.

==================================================
22. CONTACT PAGE
==================================================

/contact

This page currently gets visually hidden by the Services dropdown.

Fix the layout completely.

Sections:

1. Hero
2. Project enquiry introduction
3. Static enquiry form UI
4. Email contact card
5. What information to provide
6. CTA

Use:

Email:
autosoltechnologies@gmail.com

No phone number.

For now the form is STATIC.

It should NOT connect to Firebase/backend.

The email button can use a mailto link if appropriate.

Do not create a fake “submission successful” backend flow.

==================================================
23. HOMEPAGE
==================================================

The homepage must be an OVERVIEW.

Do NOT put every piece of company content on the homepage.

Homepage sections:

1. Hero
2. Short company introduction
3. Core capabilities
4. Selected services
5. Featured projects
6. Product preview
7. Automation preview
8. Industries / solution areas
9. Training preview
10. Final CTA
11. Footer

The homepage should link to deeper pages.

Examples:

Services →
/services

Products →
/products

Work →
/work

Training →
/training

Contact →
/contact

No “giant single-page website” architecture.

==================================================
24. NO HASH NAVIGATION
==================================================

IMPORTANT.

Do not use:

#services
#products
#work
#contact

for primary navigation.

Use actual routes:

/services
/products
/work
/contact

Internal section anchors can exist only inside a page where genuinely useful.

Navbar must navigate between pages.

==================================================
25. GLOBAL LAYOUT SYSTEM
==================================================

Create one consistent layout system.

Recommended:

Desktop container:
max-width: 1280–1400px

Large desktop:
max-width around 1400px

Tablet:
horizontal padding 24–32px

Mobile:
horizontal padding 16–20px

Never allow content to touch viewport edges.

Use:

width: 100%
max-width
margin-inline: auto

Do NOT solve alignment with random:
margin-left: 100px
top: 123px
left: 23%
etc.

Avoid absolute positioning for normal content.

Use CSS Grid and Flexbox.

==================================================
26. RESPONSIVE BREAKPOINTS
==================================================

Do not optimize only for one laptop screen.

Test:

320px
360px
375px
390px
412px
430px
768px
834px
1024px
1280px
1440px
1536px
1920px

Use content-driven responsive breakpoints.

Suggested behavior:

< 768px
Mobile layout
Hamburger menu
Single-column content

768–1023px
Tablet layout
2-column sections where appropriate
Compact navigation / mobile menu if necessary

1024–1279px
Compact desktop/tablet layout

1280px+
Full desktop layout

Do not force the desktop navigation onto narrow screens.

==================================================
27. MOBILE DESIGN
==================================================

Mobile is NOT a shrunken desktop.

At mobile:

Header:
- logo left
- menu button right
- 56–68px height

Navigation:
hamburger menu
full-width sheet/drawer
scrollable when needed

Hero:
- one column
- title approximately 38–48px
- body text approximately 16–18px
- CTA stack when required

Buttons:
minimum comfortable touch target
full width where appropriate

Cards:
single column

Images:
100% width
maintain aspect ratio

Forms:
single column

No horizontal scrolling.

==================================================
28. TYPOGRAPHY
==================================================

Use Inter or Manrope.

Global:

Body:
16–18px
line-height approximately 1.6

Small text:
14–15px

Nav:
15–16px

Section labels:
12–14px
uppercase
letter spacing

Desktop H1:
approximately 56–72px depending on page

Tablet H1:
approximately 48–60px

Mobile H1:
approximately 38–48px

Do not create enormous headings that break on mobile.

Text blocks should have controlled widths.

Use:
max-width around 60–70ch
for long text paragraphs.

==================================================
29. SPACING SYSTEM
==================================================

Use consistent spacing.

Desktop section spacing:
80–120px

Tablet:
64–88px

Mobile:
48–72px

Common gaps:
8
12
16
24
32
48
64
80

Do not randomly use:
37px
83px
117px
143px

unless there is a specific design reason.

No giant blank spaces.

==================================================
30. GRID SYSTEM
==================================================

Desktop:
12-column grid

Typical content:
3-column cards
2-column hero sections
4-column capability grids when appropriate

Tablet:
2 columns

Mobile:
1 column

Example:

grid-template-columns:
repeat(3, minmax(0, 1fr))

Mobile:
1fr

Every grid item must have:
min-width: 0

This prevents overflow.

==================================================
31. CARD ALIGNMENT
==================================================

All cards in the same grid should feel aligned.

Use:

display: flex;
flex-direction: column;

Buttons/links should align consistently.

Do not allow one card to push buttons far below another unnecessarily.

Avoid cards with huge empty fixed heights.

Use content-driven card heights wherever possible.

If equal card heights are useful, use grid stretch/flex rather than arbitrary fixed heights.

==================================================
32. NO DATA SCATTER
==================================================

This is very important.

Every page should have one clear content structure.

Use:

Page Hero
→ Intro
→ Main Content
→ Supporting Content
→ CTA

Do NOT scatter content around the page.

Do not place random cards between unrelated sections.

Do not create:
- huge empty areas
- random floating text
- disconnected components
- inconsistent left/right alignment
- sections with different container widths without reason

All major sections should share the same horizontal alignment line.

==================================================
33. PAGE HERO ALIGNMENT
==================================================

Use a common hero system.

Hero content should align with the same page container as the rest of the page.

Do not let hero text start at one x-coordinate and the main content start at another arbitrary x-coordinate.

Hero:

small label
headline
supporting paragraph
CTA
visual / abstract system diagram

Desktop:
2-column layout where appropriate

Mobile:
1-column

==================================================
34. CONTACT PAGE SPECIFIC FIX
==================================================

The screenshot currently shows:

Services mega-menu
covering the Contact page content.

Fix this.

When no menu is open:
Contact page must be fully visible.

When menu is open:
- menu is layered correctly
- menu does not clip
- page remains structurally intact
- selecting any service immediately closes the menu
- route changes properly

Do not push Contact content underneath the header.

Use appropriate z-index layers:

Header
Mega menu
Mobile menu
Page content

But do not solve layout by assigning extreme z-index values everywhere.

==================================================
35. HEADER STICKY BEHAVIOR
==================================================

Header can remain sticky if the current design uses it.

But:

- content must have proper top spacing
- no content hidden under header
- no double header spacing
- no jump when opening menu

Do not make header so tall that it consumes a large portion of the screen.

==================================================
36. DARK THEME
==================================================

Preserve AutoSol's visual language.

Colors:

Background:
#07111F

Surface:
#0D1728

Card:
#111C2E

Border:
#20304A

Primary Blue:
#2563EB

Cyan:
#06B6D4

Purple accent:
#7C3AED

Success:
#22C55E

Text:
#F8FAFC

Muted:
#94A3B8

However:

Do NOT use muted text so dark that it becomes unreadable.

Normal text should meet strong accessibility contrast.

Keep the visual hierarchy:
Primary text
Secondary text
Muted text
Accent text

==================================================
37. ACCESSIBILITY
==================================================

Implement proper accessibility.

Requirements:

- semantic nav
- semantic headings
- buttons for actions
- links for navigation
- keyboard navigation
- visible focus state
- aria-expanded on dropdown controls
- aria-controls where appropriate
- alt text for images
- accessible mobile menu
- no color-only communication
- adequate contrast
- reduced-motion support

Do not remove keyboard focus outlines without replacing them with a clear accessible focus state.

==================================================
38. ANIMATIONS
==================================================

Preserve the existing premium animations.

But animations must not interfere with usability.

Use:

Framer Motion / existing animation system
GSAP only where already used and genuinely useful.

Avoid:
- constant moving backgrounds everywhere
- excessive parallax
- slow page transitions
- animations delaying content visibility
- animation that shifts layout

Support reduced motion.

Animation should enhance:
- hero
- cards
- page transitions
- diagrams
- workflow visuals

==================================================
39. IMAGES
==================================================

Images must not cause layout shifts.

Use:
- proper aspect ratios
- width/height where appropriate
- object-fit
- responsive sizing
- lazy loading for below-the-fold images

Do not use huge fixed-size images.

No broken image icons.

If a project image does not exist:
use a designed project visual rather than an empty blank container.

==================================================
40. SEO
==================================================

Since the site is static, implement proper route-level SEO.

Each main page should have:

title
description
canonical URL
Open Graph metadata

Use unique titles.

Examples:

AutoSol Technologies | AI, Software & Automation

AutoSol Technologies | AI & GenAI

AutoSol Technologies | Business Automation

AutoSol Technologies | Software Development

AutoSol Technologies | Projects

etc.

Also prepare:
- sitemap
- robots.txt
- semantic HTML

Do not use keyword stuffing.

==================================================
41. CONTENT RULE
==================================================

Only use real company/project information.

Never invent:

- clients
- revenue
- users
- success percentages
- growth percentages
- rankings
- awards
- certifications
- testimonials
- partnerships
- deployment claims
- customer counts
- project outcomes

If the information is unavailable, omit it or label it appropriately.

==================================================
42. STATIC CONTENT ARCHITECTURE
==================================================

Even though the website is static, organize content cleanly.

Use local data objects/files such as:

/data/services.ts
/data/projects.ts
/data/products.ts
/data/training.ts
/data/site.ts

or the project's existing equivalent.

The goal:

Later Firebase/backend migration should be easy.

Do not add a backend now.

Components should consume structured local data.

Example project object:

{
  slug,
  title,
  category,
  status,
  description,
  technologies,
  features,
  image,
  route
}

==================================================
43. FOOTER
==================================================

Footer should contain:

AutoSol Technologies
Short company statement

Navigation:
About
Services
Solutions
Products
Work
Training
Insights
Contact

Services shortcuts

Products shortcuts

Contact:
autosoltechnologies@gmail.com

Legal:
Privacy Policy
Terms
Cookie Policy

Do not show founder names.

Do not show a fake office address.

Do not show fake phone numbers.

==================================================
44. HOMEPAGE FEATURED PROJECTS
==================================================

Do NOT display all projects on homepage.

Display a limited featured selection.

Use approximately 4–6 cards.

Suggested featured set:

1. KVK Farmer Database Management System
2. Swadeshi Mart
3. Hotel Management System & CRM
4. Real Estate Website
5. Inspring E-Commerce Website
6. RebelSalon

Then:

View All Projects → /work

==================================================
45. HOME PAGE PRODUCT PREVIEW
==================================================

Show:

AutoSol AI Core
AutoSol CRM
AutoSol Business OS

Each with:
- status
- short description
- Learn More

Then:
View All Products → /products

==================================================
46. HOME PAGE AUTOMATION PREVIEW
==================================================

Create a visual workflow.

Example:

LEAD
↓
AI PROCESSING
↓
CRM
↓
AUTOMATION
↓
FOLLOW-UP
↓
BUSINESS ACTION

Do NOT claim this is already running in production.

Label appropriately as:

“Automation Direction”

or

“How We Build Automated Workflows”

==================================================
47. RESPONSIVE TESTING
==================================================

After implementation, test every important page at:

320px
360px
390px
414px
430px
768px
834px
1024px
1280px
1440px
1536px
1920px

Check:

- no horizontal scrollbar
- no clipped text
- no overlapping cards
- no hidden buttons
- no navbar collision
- no dropdown clipping
- no content under sticky header
- no giant empty spaces
- no broken images
- no inconsistent card heights
- no layout jumps
- no tiny text
- no unreadable contrast

==================================================
48. ROUTE TESTING
==================================================

Verify:

/
 /about
 /services
 /solutions
 /products
 /work
 /training
 /insights
 /contact

Service routes
Product routes
Project routes
Legal routes

Every route should:
- load directly
- not rely on homepage state
- have proper page title
- have working navigation
- have breadcrumb where useful

==================================================
49. NAVIGATION TESTING
==================================================

Verify:

Home → /
Services → /services
Solutions → /solutions
Products → /products
Work → /work
Training → /training
Insights → /insights
Contact → /contact
Start a Project → /contact

No accidental:
#services
#products
#work
#contact

for primary navigation.

==================================================
50. FINAL DESIGN PRINCIPLE
==================================================

The finished AutoSol website should feel like:

A premium technology company
+
AI engineering company
+
software/product company
+
automation company

NOT:

a generic freelancer website
NOT:
a template
NOT:
a one-page portfolio
NOT:
a random collection of cards

The design should communicate:

BUILD.
AUTOMATE.
GROW.

with a connected-intelligence visual language.

==================================================
51. FINAL ACCEPTANCE CRITERIA
==================================================

Do not consider the work complete until ALL are true:

[ ] Logo is clearly visible
[ ] “AutoSol” wordmark has proper contrast
[ ] Desktop navigation is balanced
[ ] Services dropdown is compact and controlled
[ ] Dropdown closes on navigation
[ ] Dropdown closes when clicking outside
[ ] Dropdown closes with Escape
[ ] Mobile navigation is separate and usable
[ ] No horizontal overflow
[ ] No giant blank areas
[ ] No content overlap
[ ] No scattered alignment
[ ] Home is an overview only
[ ] Internal pages contain detailed information
[ ] Services are actual routes
[ ] Products are actual routes
[ ] Work is an actual route
[ ] Projects have individual case-study pages
[ ] Founder names are removed
[ ] No fake testimonials
[ ] No fake statistics
[ ] No fake clients
[ ] No backend
[ ] No Firebase
[ ] No database
[ ] No admin dashboard
[ ] No dynamic CMS
[ ] Static content is organized in local data structures
[ ] Contact page is fully visible and aligned
[ ] Forms are static only
[ ] Responsive at mobile
[ ] Responsive at tablet
[ ] Responsive at desktop
[ ] Keyboard navigation works
[ ] Focus state is visible
[ ] Text is readable
[ ] Animations are smooth
[ ] Reduced-motion support exists
[ ] SEO metadata exists per route
[ ] No broken links
[ ] No console errors
[ ] No duplicate content
[ ] No unnecessary pages

IMPORTANT:
Do not return a superficial result.

First inspect the existing implementation.
Then make the structural changes.
Then fix visual alignment.
Then fix responsive behavior.
Then test all routes and viewport sizes.
Finally report exactly what you changed.