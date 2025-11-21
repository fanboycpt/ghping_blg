# Groundhopping Blog - ALF/Cyberpunk Design Guidelines

## Design Approach
Reference-based approach inspired by retro 80s ALF aesthetics merged with cyberpunk UI patterns. Think retro-futuristic terminal interfaces with pixel art nostalgia.

## Typography System

**Primary Font (Headings & Navigation):**
- "Press Start 2P" (Google Fonts) - 8bit pixel font for all headings, navigation, and ALF branding
- Sizes: text-xs to text-2xl (keep pixel fonts smaller for readability)

**Secondary Font (Body & Content):**
- "IBM Plex Mono" or "JetBrains Mono" (Google Fonts) - Terminal-style monospace
- Body text: text-sm to text-base
- Code/technical elements: text-xs

**Hierarchy:**
- H1: Press Start 2P, text-xl to text-2xl
- H2/H3: Press Start 2P, text-sm to text-lg
- Body: IBM Plex Mono, text-sm
- Captions/Meta: IBM Plex Mono, text-xs

## Layout System

**Spacing Units:** Tailwind units of 2, 4, 8, 12, 16 for consistent retro-grid aesthetic
- Container padding: px-4 md:px-8
- Section spacing: py-12 md:py-16
- Component gaps: gap-4 or gap-8
- Grid gaps: gap-2 for tight pixel-aesthetic, gap-4 for breathing room

**Grid Structure:**
- Homepage article grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Max container width: max-w-7xl

## Component Library

**Header:**
- Fixed/sticky positioning with scanline animation overlay
- ALF pixel art logo (left)
- 8bit hamburger menu icon (right, mobile)
- Desktop navigation: horizontal pixel-style buttons with scan-hover effect
- Height: h-16 md:h-20

**Navigation Menu (Mobile):**
- Full-screen overlay with glitch entrance animation
- Vertical stacked pixel buttons
- Terminal-style border effects
- Each link gets individual scan-line hover treatment

**Article Cards (Homepage Grid):**
- Border with dual-color glow effect (cyan/magenta)
- Hover: Scan-line animation sweeping top-to-bottom
- Card structure: Image top (16:9), title, date/location meta, excerpt
- Padding: p-4
- Image should have slight chromatic aberration effect on hover

**Leaflet Map Integration:**
- Custom dark-themed map tiles (CartoDB Dark Matter or similar)
- Stadium markers: Custom cyan/magenta pixel-art icons
- Popup styling: Terminal window aesthetic with monospace text
- Map container: Full-width section, h-96 md:h-[500px]

**Gallery Component:**
- Masonry or uniform grid layout
- Lazy-loaded images with glitch-in animation on scroll
- Lightbox with cyberpunk chrome effects
- Scan-line overlay on hover state

**Contact Form (Funkkontakt):**
- Terminal-style input fields with blinking cursor effect
- Glowing cyan/magenta focus states
- Submit button: Pixel-style with scan animation
- Form layout: Single column, max-w-2xl centered

**Footer:**
- Three-column grid (md+), single column mobile
- Sections: Quick Links, Social/Contact, Credits
- Retro divider lines between sections
- Small pixelated social icons

## Animation Specifications

**Scan-Hover Effect:**
- Linear gradient overlay sweeping from top to bottom (0.5s duration)
- Applied to cards, buttons, navigation items

**Glitch Entrance:**
- RGB split effect (0.3s) for menu opening
- Used sparingly on page transitions

**Chromatic Aberration:**
- Subtle red/cyan split on image hover (2-3px offset)

**Scanline Background:**
- Repeating horizontal lines overlay (opacity: 0.05)
- Applied to header and hero sections

**Blinking Cursor:**
- Contact form inputs and terminal-style elements
- 1s blink cycle

## Images

**Hero Section (Homepage):**
- Large stadium/groundhopping action shot with cyberpunk color grading overlay
- Height: h-[60vh] md:h-[70vh]
- Overlay: Dark gradient with scan-line pattern
- CTA buttons on hero: Background blur (backdrop-blur-sm) with cyan/magenta borders

**Article Cards:**
- Each card includes stadium/match thumbnail (16:9 aspect ratio)
- Apply subtle cyan/magenta duotone filter overlay

**Gallery Page:**
- Grid of stadium visit photos (20-30 placeholder images)
- Mix of landscape/portrait orientations
- Each with glitch-on-scroll entrance

**About Page:**
- Include 1-2 retro-styled images (ALF references, vintage groundhopping)
- Positioned alongside text content, not as hero

**No hero images needed for:** Contact, Sticker & Street pages (content-focused)

## Accessibility Notes
- Ensure sufficient contrast despite dark theme (minimum 4.5:1)
- Pixel fonts: Use larger sizes than typical for readability
- Provide focus indicators with visible neon outlines
- Alternative text for all stadium images with location details
- Keyboard navigation through all interactive scan-hover elements

## Special Elements
- **Pixel Menu Icon:** Three-bar hamburger in 8x8 pixel grid style
- **Terminal Prompt:** Use ">>>" or "[$]" prefixes for interactive elements
- **Glitch Text:** Apply to ALF branding/logo sparingly
- **Border Treatments:** Double-line borders (border-2) with corner accent dots

This design creates an immersive retro-futuristic groundhopping experience that honors both ALF's 80s aesthetic and modern cyberpunk UI patterns.