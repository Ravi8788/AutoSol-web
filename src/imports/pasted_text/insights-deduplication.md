AUTOSOL TECHNOLOGIES — INSIGHTS DEDUPLICATION + 12-MONTH TECHNOLOGY CARE

I need two important improvements to the website:

1. FIX DUPLICATE INSIGHT CONTENT
2. ADD A UNIQUE LONG-TERM SUPPORT OFFERING

Do not rebuild the website.
Preserve the current AutoSol design system, animations, colors, typography and responsive layout.

==================================================
PART 1 — FIX DUPLICATE INSIGHTS
==================================================

There is currently duplicate insight data appearing on the Insights page.

The same article/topic/card is being rendered more than once.

IMPORTANT:
Do not simply hide duplicates with CSS.

Fix the underlying data/rendering architecture.

==================================================
1. FIND THE SOURCE OF DUPLICATION
==================================================

Inspect all insight-related files/components.

Check for:

/data/insights
insights.ts
insights.js
InsightCard
FeaturedInsight
InsightGrid
category filters
homepage insight preview
insight detail routes
static arrays
duplicate data objects

Determine why the same insight is being rendered multiple times.

Common possible causes:

- same insight exists in two arrays
- featured insights are also included in the normal grid
- duplicate objects have the same title/slug
- filtering creates duplicate results
- homepage data is being merged incorrectly
- category filtering duplicates items
- data is manually copied between components

Fix the actual cause.

==================================================
2. SINGLE SOURCE OF TRUTH
==================================================

Create ONE source of truth for insights.

Example:

/data/insights.ts

Every insight should have:

{
  slug,
  title,
  category,
  description,
  status,
  featured,
  topics,
  outline
}

Do not maintain separate copies of the same article in:

- Featured Insights
- All Insights
- Category Insights
- Homepage Insights

All of these should derive from the same data source.

==================================================
3. UNIQUE SLUG REQUIREMENT
==================================================

Every insight MUST have a unique slug.

Example:

what-is-generative-ai-business-use

ai-agents-vs-traditional-automation

rag-business-knowledge

automated-lead-workflows

crm-and-automation

building-a-saas-product

data-quality-and-ai

rest-apis-and-webhooks

whatsapp-crm-automation

choosing-business-software

manual-processes-to-digital-workflows

building-final-year-project

cloud-and-devops

performance-marketing-fundamentals

technical-seo-foundations

when-to-build-custom-software

No two records may have the same slug.

==================================================
4. UNIQUE TITLE REQUIREMENT
==================================================

No two insight cards should have exactly the same:

- title
- slug

If two articles cover the same topic, either:

A. merge them

OR

B. clearly differentiate the topic

Do not create near-identical cards just to fill the page.

==================================================
5. FEATURED INSIGHT LOGIC
==================================================

IMPORTANT:

If an insight is marked:

featured: true

and appears in the large Featured Insight section,

DO NOT show the same insight again immediately in the standard insight grid.

Example:

Featured Insight:
What Is Generative AI and How Businesses Can Use It

↓ featured section

Normal Insight Grid:
MUST EXCLUDE that same slug.

Implement logic similar to:

featuredInsights = insights.filter(item => item.featured)

regularInsights = insights.filter(item => !item.featured)

OR if more control is needed:

regularInsights = insights.filter(
  item => !featuredSlugs.includes(item.slug)
)

Do not duplicate the same card manually.

==================================================
6. CATEGORY FILTER
==================================================

The category filter must operate on the single insight data source.

Categories:

All
AI & GenAI
AI Automation
Software Engineering
Data & Analytics
SaaS & Products
CRM & Business Systems
Cloud & DevOps
Digital Growth
Technology Strategy
Learning & Development

When a category is selected:

- only matching items should appear
- no duplicates
- featured logic must remain consistent
- card count must reflect actual records

==================================================
7. HOMEPAGE INSIGHTS
==================================================

The homepage should show only 3 insight previews.

Do not create separate duplicate insight objects for the homepage.

Instead:

homeInsights = insights.filter(...).slice(0, 3)

or use a controlled featured selection.

The homepage cards should link to:

/insights/[slug]

==================================================
8. INSIGHT DETAIL ROUTES
==================================================

Every insight should use the same source data.

Route:

/insights/[slug]

Do not create a second hardcoded copy of the article metadata inside every page.

Use the slug to retrieve the corresponding static insight record.

==================================================
9. EMPTY / DRAFT STATUS
==================================================

Most current articles may be:

DRAFT

or

COMING SOON

Do not display fake:

- publication dates
- authors
- views
- likes
- comments

unless real values exist.

==================================================
10. FINAL INSIGHT QA
==================================================

Before completing the fix, verify:

[ ] No duplicate insight titles
[ ] No duplicate slugs
[ ] No duplicate cards
[ ] Featured insight does not appear twice
[ ] Category filter does not create duplicates
[ ] Homepage does not duplicate insight data
[ ] Detail pages use the same data source
[ ] No console errors
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works

==================================================
PART 2 — ADD AUTOSOL 12-MONTH TECHNOLOGY CARE
==================================================

I want AutoSol Technologies to have a more attractive long-term support offering.

Do NOT simply write:

"1 Year Support"

Make it feel like a premium part of AutoSol's delivery philosophy.

Use the concept:

12-MONTH TECHNOLOGY CARE

Alternative supporting line:

Build. Launch. Improve. Stay Supported.

==================================================
1. CORE MESSAGE
==================================================

Add a dedicated section to the website explaining:

Our relationship does not have to end when the project goes live.

For eligible projects, AutoSol can provide a structured 12-month support period focused on keeping the delivered solution usable, maintained and supported as the business moves forward.

IMPORTANT:
Do not claim this is automatically included with every project unless that is actually true.

Use wording:

"Available as part of selected project engagements."

OR

"12-Month Technology Care can be included in eligible project engagements."

==================================================
2. OFFER NAME
==================================================

Primary name:

AUTOSOL 12-MONTH TECHNOLOGY CARE

Badge:

12-MONTH SUPPORT

Tagline:

Build. Launch. Improve. Stay Supported.

==================================================
3. WHAT IT INCLUDES
==================================================

Create 6 support cards:

01
BUG & ISSUE SUPPORT

Support for identifying and resolving bugs related to the delivered project scope.

02
TECHNICAL GUIDANCE

Help with technical questions related to the delivered solution.

03
DEPLOYMENT ASSISTANCE

Support with deployment-related issues for the delivered application where applicable.

04
MINOR ADJUSTMENTS

Reasonable minor configuration or content-related adjustments within the agreed support scope.

05
MAINTENANCE GUIDANCE

Ongoing guidance for keeping the delivered system maintained.

06
PROJECT CONTINUITY

A support relationship that gives the client a clear point of technical continuity after launch.

IMPORTANT:
Do not imply unlimited development.

==================================================
4. SCOPE DISCLAIMER
==================================================

Add a subtle note:

"Support scope, response expectations and included maintenance activities are defined in the project agreement."

This is important.

Do not claim:

24/7 support
instant response
unlimited changes
unlimited development
unlimited revisions

unless those are actually offered.

==================================================
5. SUPPORT JOURNEY VISUAL
==================================================

Create:

PLAN
↓
BUILD
↓
TEST
↓
DEPLOY
↓
12-MONTH TECHNOLOGY CARE
↓
IMPROVE

Use this as a visual timeline.

==================================================
6. WHY THIS MATTERS
==================================================

Section heading:

YOUR PROJECT SHOULD NOT BE LEFT ALONE AFTER LAUNCH.

Content:

Launching software is only one part of the journey.

Teams may need help understanding issues, making small adjustments, handling deployment questions or deciding what should come next.

Our 12-Month Technology Care approach is designed to provide continuity after delivery.

Do not promise outcomes.

==================================================
7. WHAT THE CLIENT GETS
==================================================

Create a premium summary:

ONE YEAR OF CONTINUITY

Clear support scope.

PROJECT CONTEXT

The team already understands the solution that was delivered.

TECHNICAL GUIDANCE

Support when questions arise.

MAINTENANCE MINDSET

Keep the delivered system moving forward.

FUTURE-READY

A clearer path for future improvements.

==================================================
8. WEBSITE PLACEMENT
==================================================

Add this offering in multiple strategic locations.

HOME PAGE:

Add a compact section after:

How We Work

or after:

Why AutoSol

Heading:

BUILD. LAUNCH. STAY SUPPORTED.

Short description:

Selected AutoSol projects can include a 12-Month Technology Care period after delivery.

CTA:

EXPLORE SUPPORT

Route:

/services/support

==================================================
9. ADD A DEDICATED SERVICE PAGE
==================================================

Create:

/services/support

Page title:

12-Month Technology Care

Hero:

BUILD.
LAUNCH.
STAY SUPPORTED.

Description:

Technology should not become someone else's problem the day it goes live.

AutoSol's 12-Month Technology Care offering provides structured post-launch technical support for eligible projects.

==================================================
10. SUPPORT PAGE CONTENT
==================================================

Sections:

Hero

What Technology Care Means

What Is Included

How Support Works

What Is Not Included

Project Continuity

Support Period

FAQ

CTA

==================================================
11. HOW SUPPORT WORKS
==================================================

Show:

ISSUE / QUESTION
↓
CONTACT AUTOSOL
↓
UNDERSTAND THE CONTEXT
↓
CHECK THE SCOPE
↓
RESOLVE / GUIDE
↓
CLOSE / FOLLOW UP

Keep it simple.

==================================================
12. WHAT IS NOT INCLUDED
==================================================

To keep the offer honest, include:

New major features
Large scope changes
Complete redesigns
New applications
Major infrastructure migrations
Unrelated third-party systems
New product development

These may be handled separately depending on the project agreement.

==================================================
13. SUPPORT PAGE FAQ
==================================================

Question:

Is 12-Month Technology Care included with every project?

Answer:

Support availability and scope depend on the project agreement. The Technology Care plan can be included for eligible engagements.

Question:

Does support include new features?

Answer:

The support period is primarily intended for technical support, issue resolution and agreed maintenance. New major features or scope changes may be handled separately.

Question:

Does it include unlimited development?

Answer:

No. The included support scope is defined in the project agreement.

Question:

Can we continue working with AutoSol after the support period?

Answer:

Yes. Future maintenance, improvements, new features or additional technology work can be discussed separately.

==================================================
14. CONTACT PAGE
==================================================

Add an optional checkbox/dropdown:

Interested in 12-Month Technology Care

Options:

Yes
Let's Discuss
Not Sure Yet

Do not make it mandatory.

==================================================
15. SERVICE PAGE NAVIGATION
==================================================

Add:

12-Month Technology Care

to the full Services page.

However, do NOT overload the main Services mega-menu.

It can appear on:

/services

and on the support service page.

==================================================
16. PREMIUM VISUAL TREATMENT
==================================================

Make the support offering visually distinctive.

Possible visual:

12 MONTHS

01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12

with a connected timeline.

Use AutoSol blue/cyan accents.

Do not create fake metrics.

Do not show:
"99% satisfaction"
"24/7 support"
"zero downtime"
"100% uptime"

==================================================
17. HOMEPAGE SUPPORT CARD
==================================================

Create a compact premium card:

12-MONTH TECHNOLOGY CARE

Build. Launch. Improve. Stay Supported.

For eligible projects, continue with structured post-launch technical support after delivery.

CTA:

LEARN ABOUT TECHNOLOGY CARE →

/services/support

==================================================
18. PROJECT DETAIL PAGES
==================================================

On applicable project pages, add a small optional section:

POST-LAUNCH SUPPORT

12-Month Technology Care

A structured post-launch support period may be available for eligible project engagements.

Do not automatically display this on every project unless applicable.

==================================================
19. DO NOT CALL IT A WARRANTY
==================================================

Do NOT use:

Warranty
Lifetime Support
Unlimited Support
Guaranteed Support

Use:

Technology Care
Post-Launch Support
12-Month Support
Project Continuity

==================================================
20. FINAL BRAND MESSAGE
==================================================

AutoSol should communicate:

We don't just build and disappear.

We build.
We launch.
We support.
We improve.

Use this as a visual brand statement where appropriate.

==================================================
FINAL ACCEPTANCE CRITERIA
==================================================

INSIGHTS:

[ ] Duplicate insight records removed
[ ] Single source of truth
[ ] Unique slugs
[ ] Featured cards do not repeat in regular grid
[ ] Category filtering works
[ ] Homepage insights use same data
[ ] Detail pages use same data
[ ] No fake metadata

TECHNOLOGY CARE:

[ ] New 12-Month Technology Care service created
[ ] Support scope clearly defined
[ ] No fake guarantees
[ ] No fake response times
[ ] No "unlimited" claims
[ ] Added to Services
[ ] Added to homepage
[ ] Added to Contact as an optional enquiry item
[ ] Support page has FAQ
[ ] Support timeline visual added
[ ] Mobile responsive
[ ] Desktop responsive

IMPORTANT:
Do not change the existing AutoSol design language.
Do not introduce backend functionality.
Do not invent business claims.