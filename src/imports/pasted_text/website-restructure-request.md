# AUTOSOL TECHNOLOGIES — STATIC MULTI-PAGE WEBSITE RESTRUCTURE
## IMPORTANT: MODIFY THE EXISTING WEBSITE — DO NOT REBUILD THE DESIGN FROM SCRATCH

You have already developed a good AutoSol Technologies website.

I like the existing visual design, animations, colors, components and overall quality.

DO NOT unnecessarily redesign or replace the existing UI.

The main change I need now is the WEBSITE STRUCTURE.

Currently, much of the website content is placed on the homepage and the navbar menu links scroll down to sections on the same page.

I DO NOT WANT THAT.

I want AutoSol Technologies to become a proper STATIC MULTI-PAGE COMPANY WEBSITE.

============================================================
1. MAIN REQUIREMENT
============================================================

Convert the current single-page/section-based navigation into a proper multi-page static website.

IMPORTANT:

When a user clicks a navbar item, it must OPEN A SEPARATE PAGE/ROUTE.

It must NOT scroll down to another section on the homepage.

BAD:

Home
↓
Services
↓
scrolls to services section on homepage

GOOD:

Home
Services
Products
Solutions
Work
Training
Insights
Contact

Each of these should open its own page.

For example:

Click "Services"
→ /services

Click "Products"
→ /products

Click "Work"
→ /work

Click "Training"
→ /training

Click "Insights"
→ /insights

Click "Contact"
→ /contact

Do NOT use anchor links such as:

href="#services"
href="#products"
href="#work"

for primary navigation.

Use actual routes/pages.

============================================================
2. STATIC WEBSITE ONLY
============================================================

IMPORTANT:

For this version, I DO NOT want a dynamic backend.

Do NOT implement:

- Firebase
- Firestore
- Firebase Authentication
- Firebase Storage
- Admin dashboard
- CMS
- Dynamic content management
- Database
- API-based content loading
- Dynamic project management
- Dynamic service management
- Dynamic blog management
- Dynamic reviews
- Dynamic enquiries
- Real-time notifications

Everything should be STATIC for now.

All content should be stored directly in the frontend code/data files.

Later we will add Firebase/backend functionality.

Do NOT spend time building backend infrastructure now.

============================================================
3. PRESERVE THE CURRENT DESIGN
============================================================

IMPORTANT:

The current website already has a good design.

Do NOT completely redesign it.

Preserve:

- Current AutoSol branding
- Existing logo
- Current color palette
- Existing typography
- Existing animations
- Existing hero style
- Existing cards
- Existing buttons
- Existing visual language
- Existing responsive behavior
- Existing background effects
- Existing motion
- Existing components where possible

Refactor the architecture while preserving the visual quality.

Reuse existing components.

Do not duplicate components unnecessarily.

============================================================
4. REMOVE FOUNDER / OWNER NAMES
============================================================

IMPORTANT:

Do NOT display the names of the owners/founders anywhere on the public website.

Remove founder names from:

- Homepage
- About page
- Team page
- Footer
- Navigation
- Metadata
- Visible project descriptions
- Any public company information

Do NOT create a founder section containing personal names.

If an "Our Team" or "Leadership" section currently exists, remove it or replace it with a company-focused section.

For now, the public website should represent:

AUTOSOL TECHNOLOGIES

not individual founders.

Do not remove the company identity.

Keep:

AutoSol Technologies

BUILD. AUTOMATE. GROW.

============================================================
5. WEBSITE PAGE STRUCTURE
============================================================

Create the following proper static pages.

MAIN PAGES:

1. /
HOME

2. /about
ABOUT AUTOSOL

3. /services
SERVICES OVERVIEW

4. /products
PRODUCTS

5. /solutions
SOLUTIONS

6. /industries
INDUSTRIES

7. /work
OUR WORK / PROJECTS

8. /training
TRAINING & SKILL DEVELOPMENT

9. /insights
INSIGHTS / BLOG

10. /contact
CONTACT / START A PROJECT


SERVICE DETAIL PAGES:

11. /services/ai
AI & GENAI

12. /services/automation
AI AUTOMATION

13. /services/software
SOFTWARE DEVELOPMENT

14. /services/web
WEB DEVELOPMENT

15. /services/mobile
MOBILE DEVELOPMENT

16. /services/saas
SAAS & PRODUCT DEVELOPMENT

17. /services/business-systems
CRM / ERP / BUSINESS SYSTEMS

18. /services/data
DATA & ANALYTICS

19. /services/marketing
DIGITAL PERFORMANCE MARKETING

20. /services/seo
SEO SERVICES

21. /services/iot
IOT & SMART SYSTEMS

22. /services/cloud
CLOUD & DEVOPS

23. /services/ui-ux
UI/UX DESIGN

24. /services/integrations
API & SYSTEM INTEGRATION

25. /services/consulting
TECHNOLOGY CONSULTING


PRODUCT DETAIL PAGES:

26. /products/ai-core
AUTOSOL AI CORE

27. /products/crm
AUTOSOL CRM

28. /products/business-os
AUTOSOL BUSINESS OS


PROJECT DETAIL PAGES:

29. /work/citizen-portal
CITIZEN PORTAL / CIVICEYE / CIVIC REPORT

30. /work/kvk-farmer-management
KVK FARMER DATABASE MANAGEMENT SYSTEM

31. /work/rebelsalon
REBELSALON

32. /work/real-estate
REAL ESTATE WEBSITE

33. /work/photography-portfolio
PHOTOGRAPHY PORTFOLIO

34. /work/databridge
DATABRIDGE / MOSPI DATA PLATFORM

35. /work/smartvillage
SMARTVILLAGE / AGRIGLIDE


TRAINING:

36. /training
TRAINING OVERVIEW

For now, individual training program pages are NOT necessary unless there is actual program content.

BLOG:

37. /insights
INSIGHTS OVERVIEW

For now, individual blog article pages are NOT necessary unless actual articles exist.


LEGAL:

38. /privacy-policy

39. /terms

40. /cookie-policy

============================================================
6. HOMEPAGE — WHAT SHOULD REMAIN
============================================================

The homepage should NOT contain the complete content of every page.

The homepage should be a COMPANY INTRODUCTION and SUMMARY.

It should contain only selected highlights.

Recommended homepage structure:

1. Navbar

2. Hero

BUILD SMARTER.
AUTOMATE FASTER.
GROW FURTHER.

AI • SOFTWARE • AUTOMATION • DATA • GROWTH • IoT

CTA:
START A PROJECT

CTA:
EXPLORE OUR WORK

3. Short company statement

"From ideas to intelligent systems."

4. What we do — SHORT VERSION

Show selected service categories only.

For example:

AI & GenAI
AI Automation
Software
Web & Mobile
SaaS
Data
Marketing
IoT

CTA:

VIEW ALL SERVICES →

This must navigate to:

/services

5. Our approach — SHORT VERSION

Discover
Design
Build
Integrate
Deploy
Improve

CTA:

HOW WE WORK →

/about or /solutions

6. Products — SHORT PREVIEW

AutoSol AI Core
AutoSol CRM
AutoSol Business OS

Show status:

IN DEVELOPMENT
PRODUCT VISION

CTA:

EXPLORE PRODUCTS →

/products

7. Featured projects — SHORT PREVIEW

Show selected projects.

CTA:

VIEW ALL PROJECTS →

/work

8. Industries — SHORT PREVIEW

Show selected industries.

CTA:

EXPLORE SOLUTIONS →

/solutions

9. Training — SHORT PREVIEW

LEARN. BUILD. DEPLOY.

CTA:

EXPLORE TRAINING →

/training

10. Final CTA

LET'S BUILD
WHAT'S NEXT.

START A PROJECT →

/contact

11. Footer

============================================================
7. VERY IMPORTANT — DO NOT PUT EVERYTHING ON HOME
============================================================

The homepage should NOT contain:

All 15 service descriptions
All service details
All project case studies
All product features
Complete SEO service
Complete marketing service
Complete training curriculum
Complete technology stack
Complete industry descriptions
Complete project architecture
Complete blog content
Complete contact form details

Those belong on their respective pages.

Homepage = overview.

Internal pages = detailed information.

============================================================
8. SERVICES PAGE
============================================================

/services

Heading:

WHAT WE BUILD

Subheading:

"From intelligent automation to complete digital systems."

Display all 15 services.

Each service card should contain:

Service name
Short description
Key capabilities
Technology tags
Arrow

Clicking:

AI & GenAI
→ /services/ai

AI Automation
→ /services/automation

Software Development
→ /services/software

Web Development
→ /services/web

Mobile Development
→ /services/mobile

SaaS
→ /services/saas

Business Systems
→ /services/business-systems

Data
→ /services/data

Marketing
→ /services/marketing

SEO
→ /services/seo

IoT
→ /services/iot

Cloud
→ /services/cloud

UI/UX
→ /services/ui-ux

Integrations
→ /services/integrations

Consulting
→ /services/consulting

============================================================
9. SERVICE DETAIL PAGE STRUCTURE
============================================================

Every service detail page should have its own content.

Do NOT simply duplicate the same generic template with different titles.

Each service page should contain:

Hero
Service introduction
What we provide
Key capabilities
Use cases
Technology/capability tags
How we approach the service
Visual/mockup
Related services
CTA

Example:

/services/ai

Hero:

AI & GENAI

"Build intelligent systems around your business."

Sections:

Generative AI
LLM Integration
AI Assistants
AI Agents
RAG
Embeddings
Vector Search
Document Intelligence
Recommendations
Prompt Engineering
AI APIs
AI Consulting

CTA:

START AN AI PROJECT →

/contact

============================================================
10. PRODUCTS PAGE
============================================================

/products

Heading:

PRODUCTS WE ARE BUILDING

Products:

AutoSol AI Core
AutoSol CRM
AutoSol Business OS

Each should have:

Product name
Status
Description
Capabilities
Visual
CTA

Click:

AutoSol AI Core
→ /products/ai-core

AutoSol CRM
→ /products/crm

AutoSol Business OS
→ /products/business-os

IMPORTANT:

Do not say these are launched products.

Use:

IN DEVELOPMENT

PRODUCT VISION

where appropriate.

============================================================
11. PRODUCT DETAIL PAGES
============================================================

Each product gets a separate page.

Example:

/products/crm

Hero:

AUTOSOL CRM

Manage. Automate. Grow.

Then:

Overview
Problem
Product concept
Dashboard
Features
AI capabilities
Workflow
Future roadmap
Status
CTA

Do the same for:

AutoSol AI Core

AutoSol Business OS

============================================================
12. WORK PAGE
============================================================

/work

Heading:

BUILT BY US

Show all seven projects.

Each card:

Project image/mockup
Category
Project name
Short description
Technology
Status
VIEW CASE STUDY →

Click opens its own project page.

============================================================
13. PROJECT DETAIL PAGES
============================================================

Every project must have a dedicated page.

Example:

/work/kvk-farmer-management

Structure:

Project Hero
Project Overview
Problem
Approach
Solution
Features
Technology
Architecture
Screenshots / Project Preview
Challenges
Outcome
Project Status
Related Projects
CTA

Do NOT invent:

clients
revenue
users
performance numbers
business results

If an actual screenshot is not available:

show:

PROJECT PREVIEW

instead of pretending it is a real production screenshot.

============================================================
14. ABOUT PAGE
============================================================

/about

Do NOT show founder names.

Focus entirely on the company.

Sections:

Who We Are
What We Believe
Our Mission
Our Vision
Our Approach
Technology Philosophy
How We Work
Future Direction

Main message:

"From ideas to intelligent systems."

Show:

Manual
→ Digital
→ Automated
→ Intelligent

Do not include personal founder information.

============================================================
15. SOLUTIONS PAGE
============================================================

/solutions

Focus on business problems rather than individual services.

Examples:

Business Automation
Digital Transformation
AI Adoption
Customer Management
Lead Management
Data & Analytics
Business Software
Digital Presence
Marketing Growth
IoT & Smart Systems

Structure:

Business Problem
→ Recommended Technology
→ Possible Solution
→ CTA

============================================================
16. INDUSTRIES PAGE
============================================================

/industries

Industries:

Small & Growing Businesses
Agriculture
Civic Technology
Education
Healthcare
Real Estate
Retail
Manufacturing
Professional Services
Startups
E-Commerce
Technology

Each industry can have:

Problem
Technology opportunities
Relevant services
Relevant solutions
CTA

============================================================
17. TRAINING PAGE
============================================================

/training

Heading:

LEARN. BUILD. DEPLOY.

Programs:

AI & GenAI
Agentic AI
Python
Data Science
Machine Learning
LLM Engineering
RAG
Prompt Engineering
AI Automation
Full Stack
Web
Mobile
Cloud
DevOps
Data Analytics
SQL
REST APIs
Git & GitHub
IoT
UI/UX
Digital Marketing

Formats:

Beginner
Intermediate
Advanced
Project-Based
Workshops
College Programs
Bootcamps
Final-Year Project Mentoring
Hackathon Preparation

Do NOT claim:

guaranteed jobs
guaranteed placement
fake certifications

CTA:

ENQUIRE ABOUT TRAINING →

/contact

============================================================
18. INSIGHTS PAGE
============================================================

/insights

For now this should be a STATIC blog/insights showcase.

Do NOT build a CMS.

Create a clean structure for future articles.

Categories:

AI
Automation
Software
Data
SaaS
Cloud
IoT
Marketing
SEO
Business Technology

If actual articles do not exist yet, use clearly labelled placeholders such as:

ARTICLE COMING SOON

Do not invent fake research or statistics.

============================================================
19. CONTACT PAGE
============================================================

/contact

Hero:

HAVE AN IDEA?

"Tell us what you're building, what problem you're solving, or what you'd like to automate."

Static contact form UI for now.

Fields:

Full Name
Company Name
Email
Phone
Service
Budget
Timeline
Project Description

CTA:

START A CONVERSATION →

Email:

autosoltechnologies@gmail.com

IMPORTANT:

The form does NOT need to submit to Firebase/backend yet.

For this version it can be a static UI.

If necessary, show:

"Form integration coming soon."

Do not build backend functionality.

============================================================
20. REVIEWS
============================================================

Do not create a dynamic review system.

Do not create fake testimonials.

If a reviews page already exists:

keep it as a static placeholder:

WHAT OUR CLIENTS SAY

"Client reviews will appear here."

CTA:

LEAVE A REVIEW

But do not implement database functionality.

============================================================
21. NAVIGATION RULES
============================================================

PRIMARY NAVIGATION:

Home
Services
Solutions
Products
Work
Training
Insights
Contact

Every item must navigate to a route.

NO section scrolling.

NO hash navigation.

Do not use:

#services
#products
#work
#training
#contact

for the main navbar.

The only acceptable anchor scrolling is within a page when intentionally useful, such as a table of contents on a long service page.

============================================================
22. ACTIVE NAVIGATION STATE
============================================================

When the user is on:

/services

Services should appear active.

When:

/products

Products active.

When:

/work

Work active.

When:

/training

Training active.

Use a subtle active state.

============================================================
23. BREADCRUMBS
============================================================

For deeper pages, use breadcrumbs.

Example:

Home
/
Services
/
AI & GenAI

Or:

Home
/
Work
/
KVK Farmer Database Management System

This makes navigation easier.

============================================================
24. BACK / RELATED NAVIGATION
============================================================

At the bottom of detail pages include:

← Back to Services

or:

← Back to Work

Also include:

Related Services
Related Projects
Explore Products

These should navigate to actual pages.

============================================================
25. STATIC CONTENT ARCHITECTURE
============================================================

Keep content easy to modify later.

Instead of hardcoding large blocks inside every component, create static frontend data structures where appropriate.

For example:

services.js
projects.js
products.js
training.js
site.js

These are STATIC files.

No API.

No Firebase.

No database.

This will make future migration to Firebase easier.

============================================================
26. DO NOT OVERENGINEER
============================================================

This is a static company website.

Do not add:

Redux
Zustand
TanStack Query
Firebase
Supabase
API clients
authentication
database
admin panel
CMS
server-side dashboard
complex state management

Use only what is actually required for the static website.

============================================================
27. RESPONSIVE REQUIREMENT
============================================================

The website must work properly on:

320px
375px
430px
768px
1024px
1280px
1440px
1920px

Check every page.

No:

horizontal overflow
clipped headings
overlapping cards
giant blank spaces
broken grids
tiny buttons
desktop layout forced onto mobile

Mobile must be intentionally designed.

============================================================
28. NO EMPTY SPACE
============================================================

This is especially important.

Do not create large blank sections simply because the desktop design has a large visual area.

Every major section must have visual balance.

If there is no image:

use a system diagram
UI mockup
technical illustration
project preview
architecture graphic

Do not leave an empty container.

At the same time:

do not overcrowd the interface.

The goal is:

BALANCED WHITESPACE

not:

EMPTY SPACE.

============================================================
29. PRESERVE MOTION
============================================================

Keep the existing good motion design.

Use:

fade-in
slide-up
stagger
hover
gradient movement
subtle node animation
button arrow movement
mobile menu animation
page transition where appropriate

But keep animations lightweight.

Respect:

prefers-reduced-motion

============================================================
30. PERFORMANCE
============================================================

Because this is a static company website:

Keep it lightweight.

Do not add unnecessary dependencies.

Lazy-load heavy images.

Optimize images.

Avoid huge background videos unless already required.

Do not introduce libraries just for simple animations.

============================================================
31. SEO
============================================================

Every route should have its own:

Title
Description
H1

Examples:

Home:
AutoSol Technologies | AI, Software & Automation

Services:
AI, Software & Automation Services | AutoSol Technologies

Products:
AutoSol Products | AI Core, CRM & Business OS

Work:
Projects & Case Studies | AutoSol Technologies

Training:
Technology Training & Skill Development | AutoSol Technologies

Contact:
Start a Project | AutoSol Technologies

Do not duplicate the same title/description across every page.

============================================================
32. FINAL PAGE ARCHITECTURE
============================================================

PUBLIC WEBSITE:

HOME
/
│
├── ABOUT
│   /about
│
├── SERVICES
│   /services
│   ├── AI & GENAI
│   │   /services/ai
│   ├── AI AUTOMATION
│   │   /services/automation
│   ├── SOFTWARE
│   │   /services/software
│   ├── WEB
│   │   /services/web
│   ├── MOBILE
│   │   /services/mobile
│   ├── SAAS
│   │   /services/saas
│   ├── BUSINESS SYSTEMS
│   │   /services/business-systems
│   ├── DATA
│   │   /services/data
│   ├── PERFORMANCE MARKETING
│   │   /services/marketing
│   ├── SEO
│   │   /services/seo
│   ├── IoT
│   │   /services/iot
│   ├── CLOUD & DEVOPS
│   │   /services/cloud
│   ├── UI/UX
│   │   /services/ui-ux
│   ├── INTEGRATIONS
│   │   /services/integrations
│   └── CONSULTING
│       /services/consulting
│
├── PRODUCTS
│   /products
│   ├── AI CORE
│   │   /products/ai-core
│   ├── CRM
│   │   /products/crm
│   └── BUSINESS OS
│       /products/business-os
│
├── SOLUTIONS
│   /solutions
│
├── INDUSTRIES
│   /industries
│
├── WORK
│   /work
│   ├── Citizen Portal
│   │   /work/citizen-portal
│   ├── KVK
│   │   /work/kvk-farmer-management
│   ├── RebelSalon
│   │   /work/rebelsalon
│   ├── Real Estate
│   │   /work/real-estate
│   ├── Photography
│   │   /work/photography-portfolio
│   ├── DataBridge
│   │   /work/databridge
│   └── SmartVillage
│       /work/smartvillage
│
├── TRAINING
│   /training
│
├── INSIGHTS
│   /insights
│
├── CONTACT
│   /contact
│
├── PRIVACY
│   /privacy-policy
│
├── TERMS
│   /terms
│
└── COOKIE POLICY
    /cookie-policy

============================================================
33. IMPLEMENTATION STRATEGY
============================================================

FIRST:

Audit the current project.

Do NOT immediately rewrite everything.

Identify:

- Current routing
- Current components
- Current sections
- Current navigation
- Current animations
- Current assets
- Current CSS/design system
- Current responsive behavior

Then:

1. Preserve working components.
2. Create proper routes/pages.
3. Move existing section content into appropriate pages.
4. Remove duplicate detailed content from homepage.
5. Change navbar links from section anchors to routes.
6. Add service detail pages.
7. Add product detail pages.
8. Add project detail pages.
9. Remove founder names.
10. Remove dynamic/backend requirements.
11. Keep everything static.
12. Test every route.
13. Test desktop and mobile.
14. Fix spacing/empty-space issues.
15. Fix navigation.
16. Verify no broken links.

============================================================
34. FINAL ACCEPTANCE CRITERIA
============================================================

The work is complete ONLY when:

✓ Homepage is an overview, not the entire website.

✓ Services has its own page.

✓ Every major service has its own page.

✓ Products has its own page.

✓ Every major product has its own page.

✓ Work has its own page.

✓ Every project has its own case-study page.

✓ Solutions has its own page.

✓ Industries has its own page.

✓ Training has its own page.

✓ Insights has its own page.

✓ Contact has its own page.

✓ Legal pages exist.

✓ Navbar navigates between pages.

✓ Navbar does NOT scroll the homepage for primary navigation.

✓ No founder/owner names appear anywhere.

✓ No Firebase is implemented yet.

✓ No database is implemented yet.

✓ No CMS is implemented yet.

✓ No admin dashboard is implemented yet.

✓ Content is static.

✓ Existing design quality is preserved.

✓ Existing motion is preserved.

✓ Desktop is properly filled and balanced.

✓ Mobile is properly designed.

✓ No excessive empty space.

✓ No horizontal overflow.

✓ No fake statistics.

✓ No fake clients.

✓ No fake reviews.

✓ No fake partners.

✓ No fake achievements.

✓ No invented business results.

✓ All links work.

✓ All pages use the same AutoSol design system.

✓ The website feels like one professional company, not separate unrelated pages.

IMPORTANT:

DO NOT STOP AFTER FIXING THE NAVBAR.

The objective is to transform the current single-page section-based website into a complete, properly structured, static, multi-page AutoSol Technologies website while preserving the existing visual quality.