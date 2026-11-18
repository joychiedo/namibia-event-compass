# Namibia Event Compass

EVENTLY NAMIBIA



Complete Product Design, Frontend Development and UX Specification



You are working as a senior product designer, UI/UX designer and frontend engineer.



Your task is to design and build a polished, responsive event discovery, registration and digital ticketing platform for Namibia.



This is a portfolio demonstration project developed to demonstrate product thinking, frontend engineering, user experience design and understanding of a real client's business requirements.



The product is called:



EVENTLY



Tagline:



Discover more. Experience more.



---



1. CRITICAL PROJECT INSTRUCTIONS



This must be a completely separate project.



- Do not modify any existing project.

- Do not reuse files from another repository.

- Do not replace an existing application.

- Do not assume an existing backend.

- Do not introduce unnecessary infrastructure.

- Do not generate a generic event website template.

- Do not build only a landing page.

- Do not sacrifice functionality for visual presentation.



Build a cohesive application with interconnected pages and realistic user journeys.



Before implementing, establish the project structure, visual direction, design system and component architecture.



Work in logical stages and preserve working functionality throughout development.



2. PRODUCT OVERVIEW



EVENTLY is an online event discovery, registration and ticketing platform designed to connect event organisers with people looking for events and experiences across Namibia.



The platform should enable visitors to:



- Discover upcoming events.

- Browse events by category.

- Search by event name, location or organiser.

- View complete event information.

- Select available ticket categories.

- Register or simulate ticket purchases.

- Receive digital tickets.

- Access their tickets.

- Present QR codes for event entry.



Event organisers should be able to:



- Create and manage events.

- Configure ticket categories and pricing.

- Set ticket quantities.

- Manage registrations.

- View attendees.

- Monitor ticket sales.

- Verify tickets at event entrances.



The platform should also have an administrative interface for managing events, organisers and platform activity.



The demonstration should communicate the potential of a real commercial product.



3. DESIGN PHILOSOPHY



The visual direction is extremely important.



Create an original, professional, editorial-quality digital product.



The interface should feel:



- Contemporary.

- Premium.

- Welcoming.

- Distinctive.

- Trustworthy.

- Well structured.

- Internationally competitive.

- Appropriate for the Namibian events market.



IMPORTANT: AVOID GENERIC AI-GENERATED DESIGN.



Do not automatically fall back on common AI website patterns.



Specifically avoid:



- Purple and blue gradients.

- Glowing buttons.

- Glassmorphism.

- Decorative gradient blobs.

- Excessive rounded cards.

- Repetitive card grids.

- Generic SaaS dashboard templates.

- Excessive use of Lucide icons.

- Oversized meaningless headlines.

- Arbitrary decorative typography.

- Repetitive alternating image-and-text sections.

- Excessive animations.

- Fake charts and meaningless metrics.

- Inconsistent spacing.

- Excessive whitespace that makes the page feel empty.



Every section must have a clear purpose.



4. TYPOGRAPHY SYSTEM



Typography must be intentionally selected.



Do not automatically use Inter or Poppins for everything.



Explore a sophisticated combination of:



- Editorial display typography for major headlines.

- Clean contemporary sans-serif typography for body copy and interface elements.

- Tabular numerical styling for prices, dates and statistics.



Potential font directions include DM Sans, Manrope, Plus Jakarta Sans and a carefully selected editorial serif.



Do not combine too many typefaces.



Establish:



- Display heading styles.

- Page heading styles.

- Section heading styles.

- Body typography.

- Supporting text.

- Labels.

- Button typography.

- Numerical typography.



Maintain consistent font weights, line heights and responsive scaling.



5. COLOUR SYSTEM



Develop a coherent colour system around:



- Warm ivory.

- Deep charcoal.

- Restrained terracotta.

- Muted sand.

- Subtle sage accents.



Suggested starting colours:



Background: #F7F4EE

Primary text: #242421

Primary accent: #B95032

Secondary accent: #D9C6A5

Supporting accent: #68766A



These are starting values, not rigid requirements.



Refine the palette based on contrast, usability and visual harmony.



Do not introduce unnecessary colours.



Maintain accessible text contrast.



6. PHOTOGRAPHY AND VISUAL CONTENT



Photography should be a major part of the experience.



Use professional, authentic-looking imagery representing events and experiences in Namibia.



Relevant visual themes:



- Outdoor concerts.

- Music festivals.

- Corporate conferences.

- Business networking.

- Cultural celebrations.

- Workshops.

- Food and lifestyle events.

- Outdoor experiences.

- Venues and event spaces.



Use believable Namibian locations and environments.



Avoid:



- Repeated photographs.

- Generic images unrelated to the event.

- Broken image URLs.

- Artificial-looking images.

- Excessive stock photography.

- Images that do not match their event descriptions.



Use descriptive alt text.



Images should have intentional aspect ratios and responsive crops.



Prevent layout shifts where practical.



7. PUBLIC WEBSITE



Create the following public pages.



Homepage: /



The homepage should immediately communicate what EVENTLY does.



Include:



1. Professional navigation.

2. Distinctive hero section.

3. Strong event discovery search.

4. Featured events.

5. Upcoming events.

6. Event categories.

7. Popular locations.

8. An organiser invitation section.

9. Newsletter or event-update signup demonstration.

10. Professional footer.



The hero should not simply be a generic heading with three floating cards.



Create a thoughtful composition that combines strong typography, relevant event photography and an immediately usable discovery interface.



Primary CTA:



Explore Events



Secondary CTA:



Organise an Event



Event Discovery: /events



Build a functional event discovery page.



Include:



- Search input.

- Category filters.

- Location filters.

- Date filters.

- Sorting.

- Featured event section where appropriate.

- Event listings.

- Empty search results state.

- Clear filter reset functionality.



Filters must actually affect the displayed events.



Event Details: /events/:slug



Each event must have a dedicated detail page.



Include:



- Event photography.

- Event title.

- Category.

- Date and time.

- Venue.

- Location.

- Description.

- Organiser information.

- Ticket categories.

- Ticket prices in NAD.

- Ticket availability.

- Booking CTA.

- Related events.



Make ticket availability and selection understandable.



Categories



Provide useful categories such as:



- Music and Concerts.

- Festivals.

- Conferences.

- Business and Networking.

- Arts and Culture.

- Food and Lifestyle.

- Sports and Recreation.

- Workshops and Learning.



8. BOOKING AND CHECKOUT



The booking experience must be functional as a frontend demonstration.



Build the following flow:



1. User opens an event.

2. User selects a ticket category.

3. User selects ticket quantity.

4. User sees a booking summary.

5. User enters attendee information.

6. User reviews the order.

7. User completes a simulated checkout.

8. User receives a booking confirmation.



Include:



- Required-field validation.

- Email validation.

- Quantity limits.

- Ticket availability checks.

- Price calculations.

- Booking summary.

- Clear error messages.

- Loading and success states.



Do not integrate a real payment gateway.



Clearly label checkout as a demonstration transaction.



Do not collect real payment information.



9. DIGITAL TICKETS



Create a professional digital ticket experience.



Each successful demonstration booking should generate:



- Unique booking reference.

- Unique ticket identifier.

- Event information.

- Attendee information.

- Ticket category.

- Date and venue.

- QR code.

- Ticket status.



Provide:



- My Tickets page.

- Ticket detail view.

- Printable ticket layout.

- Clear demonstration-data disclosure.



QR codes must contain a unique ticket reference or secure-looking demo token.



Do not embed sensitive personal information in QR codes.



10. ORGANISER DASHBOARD



Create a separate organiser experience.



Routes:



/organiser

/organiser/events

/organiser/events/new

/organiser/attendees



The dashboard should include:



- Overview of created events.

- Demonstration ticket sales.

- Registration counts.

- Event status.

- Upcoming events.

- Recent registrations.

- Quick actions.



Use realistic demonstration data.



Do not create meaningless charts just to fill space.



Event management



Organisers should be able to:



- Create an event.

- Edit event information.

- Set event date and venue.

- Add event images.

- Select categories.

- Configure ticket types.

- Set ticket prices.

- Set ticket quantities.

- Publish or save as draft.

- View registrations.



All major controls must work.



11. QR CODE CHECK-IN



Create a dedicated check-in interface.



Route:



/check-in



Include:



- QR scanning interface.

- Manual ticket reference entry.

- Verification result.

- Valid ticket state.

- Invalid ticket state.

- Already-used ticket state.

- Attendee information.

- Event information.

- Mark ticket as checked in.



A successful check-in must update the ticket status.



Prevent duplicate check-ins.



If camera access is unavailable, the manual ticket reference option must still work.



This is a simulated verification environment, not a production security system.



12. ADMINISTRATION



Create a basic administrative demonstration.



Route:



/admin



Include:



- Total events.

- Organisers.

- Registrations.

- Ticket activity.

- Event moderation.

- Organiser management.

- Platform activity.



Keep the administrative experience practical and restrained.



13. SAMPLE DATA



Create realistic fictional demonstration data.



Use Namibian locations such as:



- Windhoek.

- Swakopmund.

- Walvis Bay.

- Oshakati.

- Otjiwarongo.

- Lüderitz.



Create several fictional events across different categories.



Examples may include:



- Windhoek Summer Music Festival.

- Namibia Business and Innovation Summit.

- Swakopmund Coastal Food Festival.

- Creative Namibia Exhibition.

- Young Entrepreneurs Conference.

- Desert Sounds Live.



Use realistic event descriptions, venues, dates and ticket categories.



Display all monetary values in Namibian dollars (NAD).



Clearly identify all businesses, events, organisers and transactions as demonstration content.



Do not fabricate claims that these are real events.



14. APPLICATION ARCHITECTURE



Use a clean React and TypeScript architecture.



Recommended:



- React.

- TypeScript.

- Vite.

- Tailwind CSS.

- React Router.

- Lucide React.

- Reusable UI components.

- Centralised mock data.

- LocalStorage for demo persistence.



Keep:



- Public website components.

- Organiser components.

- Administrative components.

- Shared UI components.

- Data models.

- Utility functions.

- Route definitions.



separated logically.



Do not put the entire application into one component.



Avoid unnecessary dependencies.



15. RESPONSIVENESS



The entire platform must be designed for:



- Desktop.

- Tablet.

- Mobile.



Do not merely shrink desktop layouts.



Pay particular attention to:



- Mobile navigation.

- Event cards.

- Search and filtering.

- Ticket selection.

- Checkout forms.

- Digital tickets.

- Organiser tables.

- Dashboard navigation.

- QR verification.



Mobile layouts should feel deliberately designed.



16. ACCESSIBILITY



Implement:



- Semantic HTML.

- Proper labels.

- Keyboard navigation.

- Visible focus states.

- Accessible buttons.

- Appropriate image alt text.

- Form validation.

- Accessible error messages.

- Appropriate contrast.

- Logical heading hierarchy.



17. DEMONSTRATION BOUNDARIES



This is a frontend-first portfolio prototype.



Do not:



- Add a backend.

- Add Supabase.

- Add authentication infrastructure.

- Add a real payment gateway.

- Claim real ticket purchases.

- Claim production-ready QR security.

- Claim real organiser accounts.

- Claim real event integrations.



Use simulated interactions and local persistence.



Include a tasteful disclosure that this is an interactive product demonstration using fictional data.



18. QUALITY EXPECTATIONS



The finished product must not feel like a quick template.



Prioritise:



- Visual consistency.

- Realistic content.

- Working navigation.

- Complete user journeys.

- Responsive layouts.

- Strong typography.

- Good photography.

- Form validation.

- Useful empty states.

- Thoughtful interaction design.

- Clean code.



Every visible button should perform an action or be clearly presented as unavailable.



Do not leave dead links or unfinished sections.



19. IMPLEMENTATION PROCESS



Do not attempt to build everything in one uncontrolled generation.



Start by establishing the design system, project structure and public homepage.



Then proceed through event discovery, event details, booking, tickets, organiser dashboard, check-in and administration.



Test each stage before proceeding.



Preserve working functionality.



The ultimate objective is to produce a credible, professionally designed event discovery and ticketing platform that can be confidently presented to a prospective client as a product concept.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d8046bf3-ff2b-4214-8300-3957225e5488).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
