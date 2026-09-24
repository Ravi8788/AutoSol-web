You are the senior frontend architect, UI/UX designer, content architect and responsive web engineer for the AutoSol Technologies website.

IMPORTANT:
The current website design is already visually strong.
DO NOT destroy the existing visual language.

Your job is to:

1. Audit the existing project.
2. Preserve the good visual design.
3. Convert the current website into a COMPLETE STATIC MULTI-PAGE COMPANY WEBSITE.
4. Expand the content and information across all pages.
5. Fix navigation, alignment, responsive behavior and page structure.
6. Make the website feel like a real technology company website, not a demo/template.
7. Keep all content static for now.
8. Prepare the architecture so Firebase/backend can be added later.

==================================================
1. ABSOLUTE RULES
==================================================

DO NOT add:

- Firebase
- Firestore
- Supabase
- Backend API
- Authentication
- Database
- CMS
- Admin dashboard
- Dynamic reviews
- Dynamic forms
- Dynamic project management
- Dynamic service management
- Dynamic training management
- Dynamic blog management

Everything must remain STATIC.

Later we may connect Firebase/backend.

Therefore, organize content through clean local data structures/files so migration is easy later.

Possible structure:

/data
  site.ts
  services.ts
  solutions.ts
  products.ts
  projects.ts
  insights.ts
  training.ts

Use the existing project architecture if it already has an equivalent.

==================================================
2. COMPANY POSITIONING
==================================================

Company:

AutoSol Technologies

Position the company as a:

AI + Software + Automation + Data + Digital Growth technology company.

Core capabilities:

AI & GenAI
AI Automation
Software Development
Web Development
Mobile Development
SaaS & Product Development
CRM
ERP / Business Systems
Data & Analytics
API & Integrations
Cloud & DevOps
IoT
UI/UX
Performance Marketing
SEO
Technology Consulting
Training & Skill Development

Core philosophy:

BUILD.
AUTOMATE.
GROW.

The company should feel:

- Modern
- Technical
- Premium
- Global
- Intelligent
- Practical
- Product-oriented
- Engineering-focused

Do NOT make it look like:

- generic freelance agency
- cheap IT company template
- basic web design agency
- coaching institute
- fake startup with fake statistics

==================================================
3. BRAND DESIGN
==================================================

Preserve current AutoSol visual identity.

Primary colors:

Background:
#07111F

Surface:
#0D1728

Card:
#111C2E

Border:
#20304A

Electric Blue:
#2563EB

Cyan:
#06B6D4

Purple Accent:
#7C3AED

Success:
#22C55E

Text:
#F8FAFC

Muted:
#94A3B8

Gradient:
#2563EB → #06B6D4 → #7C3AED

IMPORTANT:
The logo currently has visibility issues.

Fix the AutoSol wordmark contrast.

The word:
Auto = white / near-white
Sol = blue/cyan

Use the existing official logo asset if available.

Do not create a circle logo.

Do not introduce pink/purple into the primary logo treatment.

==================================================
4. PRIMARY NAVIGATION
==================================================

Main navigation:

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

Do not add excessive navigation items.

Remove from primary navigation:

Team
Industries
Reviews
Admin
Dashboard
Login

Industries should be integrated into Solutions.

Team/founder names should NOT appear publicly.

==================================================
5. ROUTE STRUCTURE
==================================================

Main:

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

Services:

/services/ai
/services/automation
/services/software
/services/web
/services/mobile
/services/saas
/services/crm
/services/business-systems
/services/data
/services/integrations
/services/cloud
/services/iot
/services/ui-ux
/services/marketing
/services/seo
/services/consulting

Products:

/products/ai-core
/products/crm
/products/business-os

Projects:

/work/kvk-farmer-management
/work/swadeshi-mart
/work/rebelsalon
/work/real-estate
/work/inspring-ecommerce
/work/krushnai-amrutulya
/work/hotel-management-crm
/work/shoe-shop-erp-pos
/work/wedding-invitation-websites

Insights:

/insights/[slug]

==================================================
6. NO HASH NAVIGATION
==================================================

Primary navigation MUST use real routes.

Correct:

Services → /services
Solutions → /solutions
Products → /products
Work → /work
Training → /training
Insights → /insights
Contact → /contact

Do NOT use:

#services
#products
#work
#training
#contact

for primary navigation.

Internal anchors are allowed only inside individual pages when useful.

==================================================
7. HOMEPAGE
==================================================

Homepage is an overview.

Do NOT put every detailed piece of content on the homepage.

Homepage sections:

1. Header
2. Hero
3. Company introduction
4. Core capabilities
5. Services preview
6. Solutions preview
7. Featured projects
8. Products preview
9. Automation preview
10. Training preview
11. Insights preview
12. Final CTA
13. Footer

--------------------------------------------------
HERO
--------------------------------------------------

Eyebrow:

AI • SOFTWARE • AUTOMATION • DATA • GROWTH

Headline:

BUILD SMARTER.
AUTOMATE FASTER.
GROW FURTHER.

Supporting text:

AutoSol Technologies builds AI-powered software, automation systems, business platforms and digital solutions designed around real business problems.

Buttons:

START A PROJECT
EXPLORE OUR WORK

Hero visual:

Business Problem
→ Data
→ AI
→ Automation
→ Software
→ Business Outcome

Do not claim specific business results.

--------------------------------------------------
COMPANY INTRO
--------------------------------------------------

Title:

Technology Built Around Real Problems.

Content:

We combine AI, software engineering, automation, data and digital growth to build practical technology for businesses, organizations and new digital products.

CTA:

ABOUT AUTOSOL

--------------------------------------------------
CORE CAPABILITIES
--------------------------------------------------

Show:

AI
Software
Automation
Data
SaaS
CRM
Business Systems
Growth

--------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------

Show 4–6 projects only.

Recommended:

KVK Farmer Database Management System
Swadeshi Mart
Hotel Management System & CRM
Real Estate Website
Inspring E-Commerce Website
RebelSalon

CTA:

VIEW ALL PROJECTS

--------------------------------------------------
PRODUCT PREVIEW
--------------------------------------------------

AutoSol AI Core
AutoSol CRM
AutoSol Business OS

Clearly label:

IN DEVELOPMENT
PRODUCT VISION

CTA:

EXPLORE PRODUCTS

--------------------------------------------------
AUTOMATION PREVIEW
--------------------------------------------------

Visual workflow:

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

Title:

Turn Repetitive Work Into Intelligent Workflows.

CTA:

EXPLORE AI AUTOMATION

--------------------------------------------------
TRAINING PREVIEW
--------------------------------------------------

Title:

LEARN. BUILD. DEPLOY.

Content:

Project-based technology learning across AI, Data Science, Software, Cloud, DevOps, Automation and digital technologies.

CTA:

EXPLORE TRAINING

--------------------------------------------------
INSIGHTS PREVIEW
--------------------------------------------------

Show 3 insight cards.

Categories:

AI
Automation
Software
Data
Growth

CTA:

EXPLORE INSIGHTS

==================================================
8. ABOUT PAGE
==================================================

/about

IMPORTANT:
DO NOT show founder names.

Do not create a public founder/team section.

Sections:

1. About AutoSol
2. What We Believe
3. What We Build
4. Technology Philosophy
5. How We Work
6. Areas We Explore
7. Future Direction
8. CTA

--------------------------------------------------
ABOUT AUTOSOL
--------------------------------------------------

Title:

Building Practical Technology for a Smarter Future.

Content:

AutoSol Technologies is a technology-focused company working across AI, software engineering, automation, data, digital products and business systems.

We focus on turning business problems into usable technology — from websites and applications to intelligent workflows, CRM platforms, analytics systems and AI-powered products.

--------------------------------------------------
WHAT WE BELIEVE
--------------------------------------------------

Use four cards:

Technology should solve problems.
Automation should reduce repetitive work.
Data should support better decisions.
Software should grow with the business.

--------------------------------------------------
TECHNOLOGY PHILOSOPHY
--------------------------------------------------

Title:

Use What Works. Build What Differentiates.

Content:

We use existing platforms, APIs and AI models where they make sense, while focusing our engineering effort on workflow design, integrations, business context, data, user experience, evaluation and product value.

--------------------------------------------------
HOW WE WORK
--------------------------------------------------

Discover
→ Define
→ Design
→ Build
→ Integrate
→ Test
→ Deploy
→ Improve

==================================================
9. SERVICES PAGE
==================================================

/services

Do NOT present services as one random grid.

Group into 3 sections.

==================================================
GROUP 1 — AI, SOFTWARE & ENGINEERING
==================================================

1. AI & GenAI

Capabilities:

Generative AI
LLM Integration
AI Assistants
AI Agents
RAG
Embeddings
Vector Search
Document Intelligence
AI APIs
Prompt Engineering
AI Consulting

Route:
/services/ai


2. AI Automation

Capabilities:

Workflow Automation
AI Agents
Business Process Automation
CRM Automation
Lead Automation
Email Automation
WhatsApp Automation
Document Automation
Human-in-the-loop Workflows
API/Webhook Automation

Route:
/services/automation


3. Software Development

Capabilities:

Custom Software
Business Applications
Admin Portals
Management Systems
Enterprise Applications
Backend Systems
APIs
Database Applications

Route:
/services/software


4. Web Development

Capabilities:

Corporate Websites
Business Websites
E-Commerce
Web Applications
SaaS Websites
Portals
PWAs
Responsive Websites
SEO-Friendly Websites

Route:
/services/web


5. Mobile App Development

Capabilities:

Android
iOS
Flutter
React Native
Customer Apps
Business Apps
Booking Applications

Route:
/services/mobile


6. SaaS & Product Development

Capabilities:

MVP Development
SaaS Architecture
Product Engineering
Multi-Tenant Systems
Authentication
Dashboards
Subscriptions
Scalable Product Architecture

Route:
/services/saas


7. CRM Development

IMPORTANT:
CRM MUST be a separate major service.

Capabilities:

Custom CRM
Lead Management
Customer Management
Contacts
Sales Pipeline
Deals
Follow-Ups
Tasks
Activities
Communication Tracking
WhatsApp Integration
AI CRM
CRM Automation
CRM Analytics

Route:
/services/crm


8. ERP & Business Management Systems

Capabilities:

ERP
Inventory
Purchase
Sales
HR Workflows
Business Operations
Business Dashboards
Management Systems
Integrated Business Platforms

Route:
/services/business-systems


9. Data Science & Analytics

Capabilities:

Data Analytics
Business Intelligence
Dashboards
Data Processing
Data Visualization
Machine Learning
Predictive Analytics
Data Pipelines
Reporting

Route:
/services/data


10. API & Integrations

Capabilities:

REST APIs
Webhooks
Payment Integrations
WhatsApp Business API
Meta Integrations
AI APIs
CRM/ERP Integrations
Third-Party Integrations
Data Synchronization

Route:
/services/integrations


11. Cloud & DevOps

Capabilities:

Cloud Deployment
Docker
CI/CD
VPS
Server Deployment
Monitoring
Database Deployment
Scaling
Infrastructure Setup

Route:
/services/cloud


12. IoT & Smart Systems

Capabilities:

IoT
Sensors
Device Integration
Monitoring
Realtime Dashboards
Device APIs
AI + IoT
Smart Systems

Route:
/services/iot


13. UI/UX Design

Capabilities:

UX Research
Wireframes
UI Design
Design Systems
SaaS Dashboards
Mobile UI
Prototypes
User Flows

Route:
/services/ui-ux

==================================================
GROUP 2 — DIGITAL GROWTH
==================================================

14. Performance Marketing

IMPORTANT:
Performance Marketing MUST be a major service.

Capabilities:

Meta Ads
Google Ads
Lead Generation
Audience Targeting
Retargeting
Campaign Setup
Conversion Optimization
Landing Page Optimization
Campaign Analytics
ROI/ROAS Analysis
Marketing Automation
Growth Strategy

Route:
/services/marketing

Do not promise guaranteed results.


15. SEO & Digital Growth

Capabilities:

Technical SEO
On-Page SEO
Off-Page SEO
Local SEO
Keyword Research
Competitor Research
Content Strategy
SEO Content
SEO Audits
Core Web Vitals
Internal Linking
Schema
Sitemap
Robots.txt
Search Console
Analytics
SEO Reporting

Route:
/services/seo

Do not promise guaranteed #1 rankings.

==================================================
GROUP 3 — BUSINESS & PROFESSIONAL
==================================================

16. Technology Consulting

Capabilities:

AI Strategy
Software Architecture
Digital Transformation
Automation Strategy
Product Strategy
MVP Planning
Technology Consulting

Route:
/services/consulting


17. Training & Skill Development

Training must be treated as a major AutoSol offering.

Route:
/training

Show:

AI & GenAI
Agentic AI
Python
Data Science
Machine Learning
LLM Engineering
RAG
Prompt Engineering
AI Automation
Full Stack Development
Web Development
Mobile Development
Cloud
DevOps
SQL
REST APIs
Git / GitHub
Data Analytics
IoT
UI/UX
Digital Marketing

==================================================
10. SOLUTIONS PAGE
==================================================

/solutions

This page should explain problems AutoSol solves.

Sections:

Lead Management
Customer Management
Sales Workflow
Business Automation
AI Workflows
Marketing Automation
Data & Analytics
CRM Transformation
Business Systems
Digital Process Transformation
Custom Software
E-Commerce Operations
Hospitality Systems
Retail Systems
Agriculture Technology

Each solution should show:

Problem
→ Approach
→ Technology
→ Workflow
→ Result Type

Do not invent numerical results.

==================================================
11. INDUSTRIES
==================================================

DO NOT create a separate Industries page.

Put industry cards on /solutions.

Industries:

Agriculture
Government
Retail
E-Commerce
Hospitality
Real Estate
Education
Professional Services
Startups
Small & Growing Businesses

Use industry-specific solution descriptions.

==================================================
12. PRODUCTS PAGE
==================================================

/products

IMPORTANT:
Products are AutoSol's own future products.

Do NOT place client projects here.

Show three major products.

==================================================
PRODUCT 1
==================================================

AutoSol AI Core

Status:
IN DEVELOPMENT

Tagline:

The intelligence layer behind future AutoSol products.

Overview:

AutoSol AI Core is planned as a shared intelligence layer for building AI-powered applications, workflows and business systems.

Capabilities:

LLM Integration
Prompt Management
Structured Outputs
Embeddings
RAG
Vector Search
Tool Calling
AI Agents
AI Workflows
Evaluation
Model Routing
Business Context
AI Security Direction
AI Cost Tracking

Architecture concept:

Models
↓
AI Core
↓
Context / Data
↓
Tools
↓
Workflows
↓
Business Applications

Route:
/products/ai-core


==================================================
PRODUCT 2
==================================================

AutoSol CRM

Status:
IN DEVELOPMENT

Tagline:

Manage customers. Automate follow-ups. Understand your business.

Overview:

An AI-powered CRM concept designed for small and growing businesses that manage leads, customers and follow-ups across WhatsApp, spreadsheets, phone calls and manual workflows.

Modules:

Dashboard
Leads
Customers
Contacts
Deals
Tasks
Follow-Ups
Activities
Communication
Analytics
AI Assistant
AI Lead Intelligence
Business Memory
Automation

Pipeline:

New
→ Contacted
→ Qualified
→ Quotation
→ Negotiation
→ Won / Lost

Potential AI capabilities:

Customer summaries
Lead insights
Follow-up suggestions
Next Best Action
Reply drafting
Business questions
AI reports

Route:
/products/crm


==================================================
PRODUCT 3
==================================================

AutoSol Business OS

Status:
PRODUCT VISION / IN DEVELOPMENT

Tagline:

A connected operating system for the modern business.

Concept:

CRM
+
Sales
+
Inventory
+
Purchase
+
Marketing
+
HR / Team
+
Projects
+
Documents
+
Analytics
+
Automation
+
AI

Show architecture diagram.

Route:
/products/business-os

Do not claim that this product is already commercially launched.

==================================================
13. WORK PAGE
==================================================

/work

This is the main portfolio.

Use ONLY the following projects.

==================================================
PROJECT 01
==================================================

KVK Farmer Database Management System

Category:
Government / Agriculture / Desktop Software

Status:
Developed

Description:

A desktop application developed for Krishi Vigyan Kendra offices to manage farmer data and agricultural programme records.

Features:

Role-based Login
Farmer Management
Visitor Farmer Records
OFT
FLD
Training Programmes
Vocational Training
Extension Activities
Reports
PDF Export
CSV Export
PostgreSQL
Windows EXE

Technology:

Python
PyQt5
PostgreSQL
SQLAlchemy
ReportLab
PyInstaller

Route:
/work/kvk-farmer-management


==================================================
PROJECT 02
==================================================

Swadeshi Mart

Category:
E-Commerce / ERP / CRM / HRM / MLM

Status:
Developed / Project

Description:

A large-scale community-exclusive commerce platform combining commerce operations with business management modules.

Areas:

E-Commerce
ERP
CRM
HRM
MLM
Product Management
Orders
Inventory
Customer Management
Business Workflows
Dashboards

Technology:

Next.js
PostgreSQL
Prisma
NextAuth
Self-hosted architecture

IMPORTANT:
Only show functionality actually implemented in the repository.


==================================================
PROJECT 03
==================================================

RebelSalon

Category:
Mobile App / Salon

Status:
Developed

Features:

Salon Information
Service Information
Barber Information
Booking Flow
Customer Interface
Firebase

Technology:

Java
XML
Firebase
Android

Route:
/work/rebelsalon


==================================================
PROJECT 04
==================================================

Real Estate Website

Category:
Web Development / Real Estate

Status:
Developed

Features:

Property Presentation
Property Details
Responsive Interface
Modern Landing Experience
Property UI
Enquiry-Oriented Design

Do not invent features that do not exist.

Route:
/work/real-estate


==================================================
PROJECT 05
==================================================

Inspring E-Commerce Website

Category:
E-Commerce / Web

Status:
Developed

Use actual project assets/repository for exact features and technology.

Do not invent backend, payment, database or analytics features.

Route:
/work/inspring-ecommerce


==================================================
PROJECT 06
==================================================

Krushnai Amrutulya

Category:
Business Website / E-Commerce

Status:
Developed

Use actual repository/project assets for exact information.

Do not invent features.

Route:
/work/krushnai-amrutulya


==================================================
PROJECT 07
==================================================

Hotel Management System & CRM

Category:
Hospitality / CRM / Automation

Status:
Project / Developed where actually implemented

Show only actual implementation.

Potential actual areas:

Hotel Management
Customer Management
CRM
Enquiries
Lead Management
Follow-Ups
Meta Integration
Marketing Workflows
Automation

Route:
/work/hotel-management-crm


==================================================
PROJECT 08
==================================================

Shoe Shop ERP & POS System

Category:
Retail / ERP / POS

Status:

PROPOSAL / SRS

IMPORTANT:
Do NOT call this a developed/deployed project.

Proposed modules:

Product Management
Inventory
Stock
Sales
POS
Customers
Suppliers
Purchases
Billing
Reports
Roles / Permissions

Route:
/work/shoe-shop-erp-pos


==================================================
PROJECT 09
==================================================

Wedding & Engagement Invitation Websites

Category:
Creative Web / Next.js / Animation

Status:
Developed

Include:

Sonal & Avishkar — Luxury Engagement Invitation

Peshwai-Themed Wedding / Supari Invitation

Technology:

Next.js
Framer Motion
GSAP

Features:

Custom Themes
Marathi / Maharashtrian Aesthetics
Animations
Interactive Sections
Event Information
Responsive Experience
Custom Typography
Custom Layouts

Route:
/work/wedding-invitation-websites

==================================================
14. PROJECT DETAIL PAGE
==================================================

Every project should have:

Project Hero
↓
Overview
↓
Problem
↓
Solution
↓
Key Features
↓
Technology
↓
Architecture / Workflow
↓
Screenshots
↓
Project Details
↓
Status
↓
CTA

Do NOT force sections where data does not exist.

Do not invent project outcomes.

==================================================
15. TRAINING PAGE
==================================================

/training

Hero:

LEARN. BUILD. DEPLOY.

Intro:

Project-based technology learning designed around real skills, practical development and hands-on building.

Learning model:

LEARN
→ PRACTICE
→ BUILD
→ DEPLOY
→ PRESENT
→ IMPROVE

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
Full Stack Development
Web Development
Mobile Development
Cloud Computing
DevOps
SQL
REST APIs
Git & GitHub
Data Analytics
IoT
UI/UX
Digital Marketing

Formats:

Workshops
College Programs
Corporate Training
Bootcamps
Project-Based Learning
Final-Year Project Mentoring
Hackathon Preparation
Short-Term Programs

Do not make fake placement claims.

Do not claim guaranteed certification.

==================================================
16. INSIGHTS PAGE
==================================================

/insights

IMPORTANT:
The Insights page should look like a serious technology knowledge hub.

Do not create fake author names.

Do not create fake publication statistics.

Do not create fake article dates if the articles have not actually been published.

Use article data with:

title
category
short description
status
slug

For now, articles can be marked:

DRAFT
COMING SOON
PUBLISHED

Only show PUBLISHED if actual article content exists.

==================================================
INSIGHTS CATEGORIES
==================================================

AI & GenAI
AI Automation
Software Engineering
Data & Analytics
SaaS & Product Development
CRM & Business Systems
Cloud & DevOps
Digital Growth
Technology Strategy
Learning & Development

==================================================
INSIGHT CONTENT LIBRARY
==================================================

Create the following insight topics as STATIC CONTENT records.

--------------------------------------------------
INSIGHT 01
--------------------------------------------------

Title:

What Is Generative AI and How Businesses Can Use It

Category:
AI & GenAI

Status:
DRAFT

Outline:

What is Generative AI?
How LLMs work at a high level
Business use cases
AI assistants
Content workflows
Document processing
Customer support
Internal knowledge
Limitations
Data/privacy considerations
Where businesses should start

--------------------------------------------------
INSIGHT 02
--------------------------------------------------

Title:

AI Agents vs Traditional Automation

Category:
AI Automation

Status:
DRAFT

Outline:

Traditional automation
Rule-based workflows
AI agents
Tool calling
Human supervision
When to use automation
When to use agents
Example workflow
Risks
Practical implementation approach

--------------------------------------------------
INSIGHT 03
--------------------------------------------------

Title:

How RAG Helps AI Work With Business Knowledge

Category:
AI & GenAI

Status:
DRAFT

Outline:

What is RAG?
Why model knowledge is not enough
Documents
Embeddings
Vector search
Retrieval
Generation
Business knowledge assistants
Common implementation challenges
Evaluation

--------------------------------------------------
INSIGHT 04
--------------------------------------------------

Title:

How Businesses Can Automate Lead Management

Category:
AI Automation

Status:
DRAFT

Outline:

Manual lead process
Lead capture
Lead qualification
CRM
Assignment
Follow-up
WhatsApp/email
Task creation
AI assistance
Human approval
Monitoring

Workflow visual:

Lead
→ Qualification
→ CRM
→ Assignment
→ Follow-Up
→ Sales Action

--------------------------------------------------
INSIGHT 05
--------------------------------------------------

Title:

Why CRM and Automation Work Better Together

Category:
CRM & Business Systems

Status:
DRAFT

Outline:

Traditional CRM
CRM data
Automation layer
Follow-up automation
Customer history
AI assistance
Business visibility
Operational benefits
Implementation considerations

--------------------------------------------------
INSIGHT 06
--------------------------------------------------

Title:

Building SaaS Products: From MVP to Scalable Architecture

Category:
SaaS & Product Development

Status:
DRAFT

Outline:

Problem definition
MVP
Architecture
Database
Authentication
APIs
Product analytics
Security
Scalability
Multi-tenancy
Deployment
Iteration

--------------------------------------------------
INSIGHT 07
--------------------------------------------------

Title:

Why Data Quality Matters More Than AI Hype

Category:
Data & Analytics

Status:
DRAFT

Outline:

Garbage in / garbage out
Data collection
Data consistency
Data cleaning
Data modeling
Analytics
Decision making
AI readiness
Data governance

--------------------------------------------------
INSIGHT 08
--------------------------------------------------

Title:

REST APIs and Webhooks: The Foundation of Connected Software

Category:
Software Engineering

Status:
DRAFT

Outline:

What APIs do
REST fundamentals
Requests and responses
Authentication
Webhooks
Events
Integrations
Payments
CRM
Meta
AI services

--------------------------------------------------
INSIGHT 09
--------------------------------------------------

Title:

How Modern Businesses Can Connect WhatsApp, CRM and Automation

Category:
CRM & Business Systems

Status:
DRAFT

Outline:

WhatsApp-first businesses
Lead conversations
CRM records
Workflow triggers
Follow-ups
Customer history
Automation
Human supervision
Business visibility

--------------------------------------------------
INSIGHT 10
--------------------------------------------------

Title:

What Small Businesses Should Look For in Business Software

Category:
Technology Strategy

Status:
DRAFT

Outline:

Business requirements
Ease of use
Scalability
Integrations
Data ownership
Security
Automation
Reporting
Mobile access
Cost considerations

--------------------------------------------------
INSIGHT 11
--------------------------------------------------

Title:

From Manual Processes to Digital Workflows

Category:
AI Automation

Status:
DRAFT

Outline:

Identify repetitive work
Map process
Remove unnecessary steps
Digitize
Automate
Add AI where useful
Track exceptions
Measure workflow quality
Continuous improvement

--------------------------------------------------
INSIGHT 12
--------------------------------------------------

Title:

How to Plan a Final-Year Technology Project That Solves a Real Problem

Category:
Learning & Development

Status:
DRAFT

Outline:

Problem selection
Requirements
Users
Scope
Technology choice
Architecture
Development
Testing
Documentation
Presentation
Deployment
Future scope

==================================================
17. INSIGHT PAGE DESIGN
==================================================

Top hero:

INSIGHTS

Technology ideas, engineering lessons and practical perspectives.

Category filters:

All
AI
Automation
Software
Data
SaaS
CRM
Cloud
Growth
Learning

Featured insight:

Large featured card.

Then:

3-column desktop
2-column tablet
1-column mobile

Each card:

Category
Title
Short description
Status
Read More

No fake dates or author names.

==================================================
18. INSIGHT DETAIL PAGE
==================================================

For actual articles later:

Hero
Category
Title
Intro
Table of contents
Article content
Key takeaways
Related insights
CTA

If the article is only a draft:

Display:

DRAFT / COMING SOON

Do not pretend it is published.

==================================================
19. CONTACT PAGE
==================================================

/contact

Hero:

LET'S BUILD SOMETHING USEFUL.

Text:

Tell us what you want to build, improve or automate.

Sections:

Project Enquiry
What We Build
Email
How We Work

Email:

autosoltechnologies@gmail.com

Static form fields:

Name
Email
Company
Project Type
Budget Range
Project Description

Button:

SEND PROJECT DETAILS

IMPORTANT:

The form is STATIC only.

No backend submission.

Can use mailto only if appropriate.

==================================================
20. CONTACT PROJECT TYPES
==================================================

Dropdown:

AI Solution
AI Automation
Website
Web Application
Mobile Application
SaaS Product
CRM
ERP / Business System
Data & Analytics
E-Commerce
Performance Marketing
SEO
IoT
UI/UX
Training
Technology Consulting
Other

==================================================
21. LEGAL PAGES
==================================================

Create clean static placeholders:

Privacy Policy
Terms & Conditions
Cookie Policy

Do not add fake legal company details.

Keep content clearly marked for later legal review if appropriate.

==================================================
22. FOOTER
==================================================

Footer columns:

Company
About
Solutions
Work

Services
AI & GenAI
Automation
Software
Web
CRM
ERP
Data
Performance Marketing
SEO

Products
AI Core
CRM
Business OS

Learn
Training
Insights

Contact
autosoltechnologies@gmail.com

Legal
Privacy Policy
Terms
Cookie Policy

No founder names.

No fake phone number.

No fake office address.

==================================================
23. RESPONSIVE DESIGN
==================================================

Must work correctly at:

320
360
375
390
412
430
768
834
1024
1280
1440
1536
1920

Desktop:

12-column grid
max-width 1280–1400px

Tablet:

2-column sections where appropriate.

Mobile:

1-column.

No horizontal scrolling.

No clipped content.

No oversized cards.

No broken text.

No overlapping components.

No giant empty areas.

==================================================
24. TYPOGRAPHY
==================================================

Use Inter or Manrope.

Body:
16–18px

Nav:
15–16px

H1 desktop:
56–72px depending on page

H1 mobile:
38–48px

Body line height:
approximately 1.5–1.7

Long paragraphs:
max-width 60–70ch

Use strong text hierarchy.

==================================================
25. SPACING
==================================================

Use consistent spacing tokens:

8
12
16
24
32
48
64
80
96

Desktop section spacing:
80–120px

Mobile:
48–72px

Do not use random spacing values everywhere.

==================================================
26. CARD DESIGN
==================================================

All cards should have:

consistent padding
consistent border
consistent radius
consistent icon treatment
consistent title hierarchy
consistent CTA positioning

Use:

display:flex
flex-direction:column

where needed.

Avoid fixed heights unless necessary.

==================================================
27. HEADER FIX
==================================================

The current Services dropdown is hiding Contact page content.

Fix it.

Desktop:

Logo
→
Nav
→
CTA

Services menu should be compact.

Services mega menu:

2 columns
8 primary services
View All Services button

It should not become a giant overlay.

Close when:

- click outside
- Escape
- route changes
- selecting a service

Mobile:

Use hamburger menu.

Services becomes an accordion.

==================================================
28. MOBILE NAVIGATION
==================================================

Desktop navbar should NOT simply shrink on mobile.

Mobile:

Logo left
Menu button right

Open:

full-height or large scrollable navigation panel.

Items:

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

==================================================
29. ACCESSIBILITY
==================================================

Implement:

Semantic HTML
Keyboard navigation
Visible focus
ARIA labels
aria-expanded
aria-controls
Accessible buttons
Accessible links
Alt text
Readable contrast
Reduced-motion support

Do not remove focus outlines without replacement.

==================================================
30. ANIMATIONS
==================================================

Preserve current premium animations.

Use animation for:

Hero
Cards
Workflow diagrams
Page transitions
Hover states

Do not allow animation to:

shift layout
hide content
delay important text
create excessive motion

Support prefers-reduced-motion.

==================================================
31. SEO
==================================================

Create unique metadata for every page.

Examples:

Home:
AutoSol Technologies | AI, Software & Automation

About:
About AutoSol Technologies | AI & Technology Company

Services:
AI, Software & Automation Services | AutoSol Technologies

Products:
AutoSol Products | AI Core, CRM & Business OS

Work:
Projects & Case Studies | AutoSol Technologies

Training:
Technology Training & Skill Development | AutoSol Technologies

Insights:
Technology Insights | AutoSol Technologies

Contact:
Start a Project | AutoSol Technologies

Add:

robots.txt
sitemap
Open Graph metadata
Twitter/X metadata if supported
canonical URLs

==================================================
32. STATIC CONTENT ARCHITECTURE
==================================================

Create structured data.

Example:

project:

{
  slug,
  title,
  category,
  status,
  description,
  features,
  technologies,
  image,
  route
}

service:

{
  slug,
  title,
  category,
  shortDescription,
  capabilities,
  useCases,
  technologies,
  route
}

product:

{
  slug,
  title,
  status,
  tagline,
  description,
  capabilities,
  roadmap
}

insight:

{
  slug,
  title,
  category,
  status,
  description,
  outline,
  content
}

This will make future Firebase migration easy.

==================================================
33. DATA INTEGRITY RULE
==================================================

DO NOT INVENT:

clients
revenue
users
customers
growth %
ROI %
awards
certifications
partnerships
reviews
testimonials
success statistics
team size
employee count
deployment count

Do not present a proposal as a completed project.

Do not present a concept as a launched product.

Do not present draft insights as published articles.

Use status labels:

DEVELOPED
PROTOTYPE
CONCEPT
IN DEVELOPMENT
PRODUCT VISION
PROPOSAL / SRS
DRAFT
COMING SOON

==================================================
34. PROJECT STATUS SYSTEM
==================================================

Use visual badges:

Developed
Prototype
Proposal / SRS
In Development
Product Vision

Use subtle, consistent badges.

==================================================
35. HOMEPAGE FEATURED PROJECT ORDER
==================================================

Use:

1. KVK Farmer Database Management System
2. Swadeshi Mart
3. Hotel Management System & CRM
4. Real Estate Website
5. Inspring E-Commerce Website
6. RebelSalon

Then:

View all work.

==================================================
36. PRODUCTS VS PROJECTS
==================================================

IMPORTANT DISTINCTION:

PROJECTS:

KVK Farmer Database Management System
Swadeshi Mart
RebelSalon
Real Estate Website
Inspring E-Commerce Website
Krushnai Amrutulya
Hotel Management System & CRM
Shoe Shop ERP & POS Proposal
Wedding & Engagement Invitation Websites

PRODUCTS:

AutoSol AI Core
AutoSol CRM
AutoSol Business OS

Do not mix these two categories.

==================================================
37. AUTOMATION POSITIONING
==================================================

Automation is a CORE AUTOSOL CAPABILITY.

It must appear in:

Homepage
Services
Solutions
Projects where actually applicable
Products
Insights

Core concept:

Connect tools.
Automate repetitive work.
Add intelligence.
Keep humans in control.

Example:

Lead
→ AI
→ CRM
→ Workflow
→ Follow-up
→ Human Decision
→ Business Action

Do not claim autonomous production systems unless actually built.

==================================================
38. PERFORMANCE MARKETING POSITIONING
==================================================

Performance Marketing must appear in:

Services
Homepage capabilities
Solutions
Contact project type

Services include:

Meta Ads
Google Ads
Lead Generation
Retargeting
Conversion Optimization
Landing Page Optimization
Campaign Analytics
Marketing Automation

No guaranteed results.

==================================================
39. CRM POSITIONING
==================================================

CRM must appear in:

Services
Solutions
Products
Relevant projects
Homepage capabilities

Use two distinctions:

CRM DEVELOPMENT = client service

AutoSol CRM = own product

Do not confuse the two.

==================================================
40. TRAINING POSITIONING
==================================================

Training must appear:

Navbar
Services
Homepage
Training page
Contact project types

Position it as:

Technology education + project-based learning.

Not a generic coaching institute.

==================================================
41. FINAL PAGE QUALITY
==================================================

Every page must have enough meaningful content to feel complete.

Do not create pages consisting of:

just a hero
3 cards
empty area
CTA

Each major page should have:

Hero
Intro
Main information
Capabilities/details
Visual section
Process/workflow
Related content
CTA

==================================================
42. DESIGN ALIGNMENT
==================================================

Use one master container.

Example:

.container {
  width:100%;
  max-width: 1340px;
  margin-inline:auto;
  padding-inline:24px;
}

Mobile:

padding-inline:16px;

All of these must align:

Header
Hero
Section headings
Cards
Text
CTA
Footer

Do not randomly change container widths.

==================================================
43. NO DATA SCATTER
==================================================

Every page must have clear hierarchy:

HERO
↓
INTRO
↓
PRIMARY CONTENT
↓
SUPPORTING CONTENT
↓
RELATED INFORMATION
↓
CTA

No disconnected components.

No random floating elements.

No unnecessary empty white/dark sections.

No excessive repeated CTA blocks.

==================================================
44. FINAL QA
==================================================

Before considering the project complete:

1. Run the project.
2. Inspect every route.
3. Check desktop.
4. Check tablet.
5. Check mobile.
6. Check navigation.
7. Check dropdown.
8. Check every project route.
9. Check every service route.
10. Check product routes.
11. Check insights.
12. Check contact.
13. Check legal pages.
14. Check console errors.
15. Check broken links.
16. Check images.
17. Check typography.
18. Check spacing.
19. Check horizontal overflow.
20. Check accessibility.

==================================================
45. FINAL RESULT
==================================================

The website should communicate:

WE BUILD TECHNOLOGY.
WE AUTOMATE BUSINESS PROCESSES.
WE CREATE DIGITAL PRODUCTS.
WE USE DATA AND AI.
WE HELP BUSINESSES GROW.

But do not make unsupported claims.

Final visual feeling:

Premium
Technical
Modern
Structured
Intelligent
Global
Human
Engineering-led

The website must feel like a real technology company with actual project experience and future products — not a template.

==================================================
END OF MASTER REQUIREMENTS
==================================================

After completing the implementation:

1. Give a route-by-route summary.
2. Give a list of components created/reused.
3. Give a list of content/data files created.
4. Report responsive fixes.
5. Report navigation fixes.
6. Report project pages created.
7. Report product pages created.
8. Report insights structure created.
9. Report any information that was intentionally left out because it was not verified.
10. Confirm that no backend/dynamic functionality was added.