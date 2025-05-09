📄 Final Project Documentation
This document outlines key implementation decisions regarding styling, responsiveness, and design rationale.

1. Use of Less/SCSS
We utilized SCSS (Sassy CSS) to streamline and organize the styling of the website. Key features used include:

Variables: Defined for consistent colors, font sizes, and spacing.

Nesting: Allowed clear, hierarchical styling reflecting the HTML structure.

Mixins: Used to reduce repetition, especially for buttons and media queries.

Partials: SCSS files were split into logical components (e.g., _header.scss, _layout.scss) and combined using @import.

SCSS was compiled into CSS using a task runner, and the resulting file was linked in the HTML pages.

2. Responsiveness
Responsiveness was achieved using a combination of:

Bootstrap Grid System: Used .container, .row, and .col- classes to create a fluid, responsive layout.

Media Queries: Custom SCSS media queries adjusted layout and font sizes for tablets and phones.

Bootstrap Utilities: Classes like .d-flex, .flex-wrap, and .text-center helped adapt content across devices.

Responsive Images: All images use .img-fluid to scale correctly with their containers.

The layout was tested across common breakpoints to ensure mobile, tablet, and desktop usability.

3. Favicon Rationale
The favicon was designed to:

Reflect the project theme (e.g., a shopping cart for an e-commerce site, or a book for a library).

Maintain branding using the primary color scheme defined in SCSS.

Ensure clarity at small sizes, optimized for standard favicon dimensions (16x16, 32x32).

Created using favicon.io and included using a <link> tag in the <head> section.

4. Bootstrap Features Rationale
The following four Bootstrap features were selected to enhance usability and speed up development:

Navbar (.navbar)
Provided a responsive, accessible navigation menu with built-in support for toggling on mobile devices.

Cards (.card)
Used to present grouped content (e.g., product previews, blog posts) in a visually structured way.

Carousel (.carousel)
Added to display rotating featured content with minimal JavaScript setup.

Modals (.modal)
Used for login prompts and confirmation dialogs to reduce page reloads and improve UX.
