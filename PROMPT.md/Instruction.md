# Instruction: Vibe Coding Workflow & Guidelines for DUDO

Welcome to the Vibe Coding workspace for **DUDO**, a Premium Wellness Membership Platform & Lifestyle Ecosystem. This document outlines the development lifecycle, workflow rules, and orchestration guidelines for building the interactive web demo.

---

## 1. Project Overview & Scope
DUDO operates on a continuous feedback loop (The DUDO Flywheel: Book -> Track -> Share -> Loop) driven by 3 Core Pillars:
1. **The Unified Credit Economy:** Flexible cross-network access to boutique studios using dynamic tiered credits.
2. **Smooth Data Integration & Predictive Analytics:** Native wearable sync (Apple HealthKit/Google Health Connect) translated into Publication-Grade Visualization and AI Contextual Insights.
3. **The Social Wellness Feed:** "Snap & Share" flex culture with verified check-ins and stylized data stickers.

### Core Navigation Stack (The 5 Tabs)
1. **Home:** Executive dashboard featuring Universal Credit balance, daily streaks, quick access routines, and contextual AI recommendations.
2. **Discovery:** Yield-management booking interface. Features dynamic credit pricing, interactive maps, and curated lifestyle editorial grids.
3. **Activity (Data & Content Factory):** 
   - Upcoming bookings & QR Verified Check-ins.
   - AI Health Insights (e.g., HRV tracking, recovery recommendations).
   - Performance Tracking (historical logs for pace progression, grades).
   - "Snap & Share" Studio for generating data-overlay flex images.
4. **Community:** Transparent social feed featuring friend activities, instructor reviews, and actionable booking loops.
5. **Profile (Private Control Room):** Strict private backend for billing (K PLUS, PromptPay), credit top-ups, wearable sync toggles, and privacy controls.

---

## 2. Technical Stack & Architecture
To ensure immediate execution and portability within the environment, the development will strictly use:
- **Framework:** React 18 loaded via Unpkg CDN, running via Babel Standalone[cite: 5].
- **Styling:** Tailwind CSS loaded via CDN, with runtime configuration extensions[cite: 5].
- **Icons:** Phosphor Icons loaded via CDN for clean, vector iconography[cite: 5].
- **State Management:** Localized React State with semantic prop drilling where necessary to mimic high-fidelity data flow.

---

## 3. Step-by-Step Vibe Coding Protocol

### Phase 1: Environment Orchestration
- Implement a unified master layout wrapper containing the **Floating Glassmorphism Bottom Navigation Bar**.
- Establish the dynamic routing mechanism using standard React state triggers (`activeTab`, `subTab`).

### Phase 2: Component-Driven Assembly
Build the application iteratively, ensuring each screen is fully interactive before proceeding:
1. **Step 1: The Foundation Layout** - Setup shell, navbar, and core global theme configurations.
2. **Step 2: Home Page Delivery** - Implement high-fidelity components for stats, carousel structures, and the Unified Credit gauge.
3. **Step 3: Discovery Deep-Dive** - Build sub-tab toggles, map markers, and the custom Bento grid.
4. **Step 4: Activity & Analytics** - Finalize chart placeholders, AI insight text blocks, and the Snap & Share overlay preview.
5. **Step 5: Community & Social Feed** - Construct the stories carousel, user interaction buttons, and content-aware cards.
6. **Step 6: Profile Backend** - Layout the administrative controls, billing toggles, and privacy settings.

---

## 4. Execution Commands & Rules
- **No Structural Collapses:** Always deliver complete, production-ready code blocks. Do not use placeholders like `// TODO: implement later` or `/* rest of code here */`.
- **Atomic Commits:** Focus on one page or major component sub-system per prompt iteration to maintain absolute quality control.
- **Contextual Realism:** Mock data should reflect the target audience (e.g., boutique fitness studios, premium recovery saunas, running performance metrics).