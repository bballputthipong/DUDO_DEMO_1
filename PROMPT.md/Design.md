# Design System Spec: DUDO Visual Identity

This specification defines the visual language, token architecture, and user interface layouts for **DUDO**. It translates the interactive Storybook foundations into actionable design implementation tokens.

---

## 1. Design Philosophy
The design language of **DUDO** is **Athletic Minimalist with High-Energy Accents**. It balances a clean, structured layout with futuristic glassmorphism layers, providing a highly premium experience that treats data visualization as an editorial art form.

---

## 2. Design Tokens & Color Palette
The color system utilizes a precisely defined set of semantic colors[cite: 5]:

### Core Colors
- **Primary (Brand):** `#4D54F8` (Base 500) - The core functional brand color, used for primary actions, Universal Credit badges, and prominent branding elements[cite: 5].
- **Accent (Highlight):** `#AAF980` (Base 500) - High-energy neon green highlight color used for primary CTAs, active status badges, and attention-grabbing metrics[cite: 5].
- **Neutral Background:** `#E5D9CB` (Base 300) alongside lighter greyscale variants like `#F9FAFB` and `#F3F4F6` - Provides an organic, clean, and anti-fatigue reading space[cite: 5].
- **Dark Elements:** `#111827` (Black) and `#06074A` (Primary 900) - Used for heavy text, high-contrast structural cards, and dark theme UI components[cite: 5].

### Typography
- **Primary Font:** 'Inter', sans-serif (acting as a fallback for Vend Sans)[cite: 5].
- **Hierarchies:**
  - Section Head: Weight 600, Size 24px, Line 100%[cite: 5].
  - Card Title: Weight 500, Size 18px, Line 120%[cite: 5].
  - Body Base: Weight 400, Size 16px, Line 150%[cite: 5].
  - Caption Small: Weight 350, Size 12px, Line 120%[cite: 5].

### Layout Geometry
- **Spacing:** Base unit is 4px (e.g., `sm`: 8px, `md`: 16px, `lg`: 24px)[cite: 5].
- **Heights:** Defined heights for interactive elements: `sm` (32px), `md` (40px), `lg` (48px)[cite: 5].
- **Border Radius (Curve):** Scaled from `sm` (4px) to `full` (9999px)[cite: 5].

### Effects & Glassmorphism
- **Shadows:** Ranging from `sys-sm` (0 1px 2px rgba(17, 24, 39, 0.05)) for buttons to `sys-lg` for modals[cite: 5].
- **Glass-Light:** `background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5)` - Best for Sticky Navbar and Light Overlays[cite: 5].
- **Glass-Dark:** `background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1)` - Used for Premium Cards and Dark Tooltips[cite: 5].
- **Glass-Brand:** `background: rgba(77, 84, 248, 0.2); backdrop-filter: blur(8px); border: 1px solid rgba(77, 84, 248, 0.3)` - Used for Highlight Banners and Hero Overlays[cite: 5].

---

## 3. UI Layout Blueprints

### Data Visualization
Charts and graphs must be minimal. Eliminate grid lines where possible. Focus on key metrics using large typography overlaid on soft backgrounds or Glass-light panels.

### Social Feed & Flex Culture
Cards in the Community feed should support full-width background images with "Stylized Data Stickers" floating on top using Glassmorphism utilities to display pace, HRV, or calories burned.