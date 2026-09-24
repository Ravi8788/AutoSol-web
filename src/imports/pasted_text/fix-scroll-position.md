FIX GLOBAL PAGE SCROLL POSITION ON ROUTE NAVIGATION — AUTOSOL TECHNOLOGIES

There is currently a navigation issue across the static multi-page website.

Example:
The user is at the bottom of the Home page.
They click "Work".
The Work page opens, but it keeps the previous scroll position, so the user lands near the bottom of the Work page instead of at the top.

I want this fixed globally.

==================================================
REQUIRED BEHAVIOR
==================================================

Whenever the user navigates to a NEW PAGE / ROUTE:

The new page MUST always open at the TOP.

Examples:

Home → Work
Work → Services
Services → Products
Products → Training
Training → Insights
Insights → Contact
Contact → Home

Every destination page should start at:

scrollY = 0

The user should NEVER inherit the previous page's scroll position.

==================================================
1. NEXT.JS / ROUTER HANDLING
==================================================

First inspect the existing routing architecture.

If this is Next.js App Router, implement a proper global route scroll solution.

Handle:

- Link navigation
- Navbar navigation
- CTA navigation
- Footer navigation
- Card navigation
- Project navigation
- Service navigation
- Product navigation
- Breadcrumb navigation

Do not fix only the navbar.

The behavior must work across the entire website.

==================================================
2. AUTOMATIC SCROLL TO TOP
==================================================

On route/pathname change:

window.scrollTo({
  top: 0,
  left: 0,
  behavior: "instant"
});

Do NOT use smooth scrolling for route reset.

The new page should immediately start at the top.

If "instant" is not supported in the current implementation, use:

window.scrollTo(0, 0)

==================================================
3. IMPORTANT: DO NOT BREAK INTERNAL ANCHORS
==================================================

There is an important distinction.

For normal page navigation:

/work
/services
/products
/contact

→ scroll to TOP.

For intentional same-page section links such as:

/services#ai
/products#roadmap
/contact#enquiry

→ preserve the intended anchor behavior.

Do NOT blindly force scroll-to-top after an intentional hash navigation.

Primary navbar navigation should remain route-based.

==================================================
4. BROWSER BACK / FORWARD
==================================================

Handle browser history carefully.

For normal page-to-page navigation, the destination should open from the top.

Do not create unexpected behavior where navigating to another page restores the old page's scroll position.

Test:

Home
→ Work
→ Services
→ Back
→ Forward

Make sure the navigation feels consistent.

If the framework's default scroll restoration conflicts with the desired behavior, implement the solution at the global routing/layout level rather than adding individual fixes to every page.

==================================================
5. GLOBAL IMPLEMENTATION
==================================================

Create one reusable global solution.

Possible approach for Next.js App Router:

- Create a client-side route scroll manager component.
- Read the current pathname/search params.
- Detect route changes.
- Scroll the new page to the top.
- Mount this component globally in the root layout.

Example conceptual behavior:

pathname changes
↓
new route renders
↓
scroll position resets
↓
page starts at top

DO NOT duplicate this logic across:

Home
Services
Products
Work
Training
Insights
Contact

==================================================
6. STICKY HEADER COMPATIBILITY
==================================================

The website has a sticky header/navigation.

Make sure:

- scroll-to-top means the actual page top
- the first content section is not hidden behind the sticky header
- there is no excessive top padding
- there is no double spacing
- route transition does not jump unexpectedly

Use the existing header height to account for layout correctly.

Do not solve this with random large margins.

==================================================
7. MOBILE
==================================================

The same behavior must work on:

Mobile
Tablet
Desktop

Test:

320px
360px
375px
390px
412px
430px
768px
1024px
1280px
1440px
1920px

When a mobile user is at the bottom of one page and taps another navigation item:

the new page MUST open at the top.

==================================================
8. MENU + ROUTE CHANGE
==================================================

When navigation happens from:

Desktop Services dropdown
Mobile hamburger menu
Footer
Navbar
CTA
Project card
Service card
Product card

Do all of the following:

1. Navigate to destination route.
2. Close any open menu/dropdown.
3. Reset scroll position to top.
4. Render the destination page normally.

Do not leave the Services mega-menu open after navigation.

Do not leave the mobile drawer open after navigation.

==================================================
9. PAGE LOAD / DIRECT URL
==================================================

Also ensure that when a user directly opens a route:

/work
/services
/products
/contact

the page starts at the top.

If the browser restores an old scroll position unexpectedly, handle scroll restoration appropriately.

==================================================
10. DO NOT BREAK SMOOTH SCROLL
==================================================

The site may already have smooth scrolling for same-page section navigation.

Preserve that behavior where appropriate.

Important distinction:

SAME PAGE SECTION:
Smooth scroll is allowed.

NEW PAGE / ROUTE:
Instantly reset to top.

Example:

On Home:

Click "Explore Work"
→ /work
→ open Work at top.

On Work:

Click an internal section anchor if intentionally implemented
→ smooth scroll within Work.

==================================================
11. TEST THESE EXACT FLOWS
==================================================

Test all of the following:

FLOW 1:
Home bottom
→ click Work
→ Work opens at top.

FLOW 2:
Work bottom
→ click Services
→ Services opens at top.

FLOW 3:
Services bottom
→ click Products
→ Products opens at top.

FLOW 4:
Products bottom
→ click Training
→ Training opens at top.

FLOW 5:
Training bottom
→ click Insights
→ Insights opens at top.

FLOW 6:
Insights bottom
→ click Contact
→ Contact opens at top.

FLOW 7:
Contact bottom
→ click Home
→ Home opens at top.

FLOW 8:
Any page
→ open Services dropdown
→ click a service
→ service detail page opens at top
→ dropdown closes.

FLOW 9:
Any page
→ mobile menu
→ click Work
→ Work opens at top
→ mobile menu closes.

FLOW 10:
Any project page
→ click another project
→ destination project opens at top.

==================================================
12. PERFORMANCE
==================================================

Implement this cleanly.

Do not:

- add unnecessary libraries
- add repeated event listeners
- cause layout flickering
- delay page rendering unnecessarily
- create visible scroll jumps
- reset scroll repeatedly during rendering

Use one centralized route-scroll mechanism.

==================================================
13. ACCESSIBILITY
==================================================

Do not interfere with:

- keyboard navigation
- focus management
- screen readers
- browser history

After navigation, ensure the page is visually at the top without creating an inaccessible interaction.

==================================================
14. FINAL ACCEPTANCE CRITERIA
==================================================

[ ] Every new route opens at the top
[ ] Previous page scroll position is not inherited
[ ] Navbar navigation works
[ ] Footer navigation works
[ ] CTA navigation works
[ ] Project cards work
[ ] Service cards work
[ ] Product cards work
[ ] Mobile menu navigation works
[ ] Services dropdown closes after navigation
[ ] Mobile menu closes after navigation
[ ] Same-page anchor scrolling still works
[ ] Sticky header still works
[ ] No layout jump
[ ] No horizontal overflow
[ ] Works on desktop
[ ] Works on tablet
[ ] Works on mobile
[ ] Browser navigation behaves consistently
[ ] No console errors

IMPORTANT:
Do not rewrite the website.
Only implement the required global scroll-position behavior and any small supporting changes necessary for correct route navigation.

After implementation, tell me:
1. Which file/component was responsible for the fix.
2. How route scroll restoration is handled.
3. Which navigation flows were tested.
4. Confirm that every new page now opens at the top.