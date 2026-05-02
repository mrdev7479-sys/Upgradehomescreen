90Plus — Premium Home Screen Design
Context
You are designing the Home Screen for 90Plus, a real React Native mobile app (iOS + Android) for football fans. The app is a social sports platform combining live match tracking, short-form video reels, predictions, daily quizzes, and gamification.

Tech stack for implementation: React Native + Expo + Tamagui + React Native Reanimated

This is a native mobile app — not a website, not a web dashboard. Every design decision must be realistic for React Native: touch targets minimum 44px, safe-area aware, no hover states, no CSS-only tricks, no sidebars.

Visual Identity
Mood: Premium dark luxury sports app. Think Apple TV+ meets ESPN premium tier. Cinematic, editorial, immersive.

Color palette:

Background: #000000 → #0A0A0A → #111111 (deep layered dark)
Primary accent: #32CD32 (neon green — sports identity)
Secondary accents (used per section):
Warm orange #FF7A3D — Spin Wheel
Rich green #11998E — Predictions
Deep purple #8E54E9 — Quiz
Prestige pink-red #F5576C — Rank/Leaderboard
Text primary: #FFFFFF
Text secondary: rgba(255,255,255,0.6)
Glass surfaces: rgba(255,255,255,0.08) to rgba(255,255,255,0.12)
Glass borders: rgba(255,255,255,0.12) to rgba(255,255,255,0.06)
Surface language: Liquid glass — translucent frosted dark surfaces, soft edge highlights, subtle inner glow, layered depth through shadow + gradient + transparency. NOT fake 3D, NOT heavy neon, NOT sci-fi overdesign.

Typography: Modern, high contrast, native-weight. Large bold section titles, refined metadata labels. No tiny unreadable gray text.

Spacing: 8px base grid. Consistent rhythm. Generous breathing room. Rounded corners: 12–24px range.

Screen Architecture
┌─────────────────────────────────┐
│ Status Bar (system)             │
├─────────────────────────────────┤
│ FLOATING HEADER (absolute)      │  ← overlays content, frosted glass
├─────────────────────────────────┤
│                                 │
│  VERTICAL SCROLL FEED           │
│  ┌─────────────────────────┐    │
│  │ 1. Welcome / Hero       │    │  ← 240px card carousel
│  │ 2. Match List           │    │  ← horizontal scroll
│  │ 3. Video / Reels        │    │  ← horizontal scroll
│  │ 4. Player Cards         │    │  ← horizontal scroll
│  │ 5. Team of the Month    │    │  ← full-width pitch
│  └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
The header is position: absolute, overlays the scroll content. The scroll feed has paddingTop to compensate for header height + safe area.

Section 1 — Floating Header
Layout: Full-width bar, absolute positioned, safe-area aware top padding.

Contents (left to right):

⚙️ Settings button (left)
🪙 Coins/balance badge (center-right area)
🔍 Search button
🔔 Notification button with unread count badge
Visual style:

Frosted glass surface: rgba(0,0,0,0.75) + blur-inspired layering
Thin top border: rgba(255,255,255,0.08)
Subtle bottom shadow/glow
Icon buttons: circular, 44px minimum, glass-filled background
Notification badge: red gradient pill, pulsing glow, shows count (99+ max)
Coins badge: pill shape, gold/amber accent, shows balance number
Section 2 — Welcome / Hero Carousel
Height: ~240px card. borderRadius: 24. Horizontal swipe carousel with dot indicators.

State A — Guest (not logged in)
Single premium card:

Dark gradient background (#0a0a12 → #151525)
Large headline: "Join the Game"
Subtext: "Predict matches, earn coins, compete with fans worldwide"
Two buttons: "Get Started" (solid green CTA) + "Sign In" (ghost)
Ambient glow orbs in background (green + purple)
Shimmer sweep animation hint
State B — Logged-in User (5-slide carousel)
Each slide is a distinct premium card. Auto-advances every 5 seconds. Tap to advance. Dot indicators at bottom.

Slide 1 — Welcome

Gradient: #0a0a12 → #151525 (dark blue-black)
Accent: #32CD32 (green)
Shows: user avatar (with rotating gradient ring), username, level, login streak badge (🔥 fire)
CTA: "View Profile"
Kicker label: "WELCOME BACK"
Slide 2 — Spin Wheel

Gradient: #1a0800 → #2a1200 (warm dark orange)
Accent: #FF7A3D
Available state: "🎰 Lucky Wheel — Spin & Win Coins" + bright CTA
Locked state: greyed out, shows countdown timer HH:MM:SS
Kicker: "DAILY REWARD"
Slide 3 — Predictions

Gradient: #001a15 → #002a20 (dark green)
Accent: #11998E
Shows: remaining predictions count badge, "⚽ Predict today's matches"
CTA: "Predict Now"
Kicker: "PREDICTIONS"
Slide 4 — Daily Quiz

Gradient: #0a0020 → #150040 (deep purple)
Accent: #8E54E9
Available: "🧠 Daily Quiz — Test your knowledge" + CTA
Completed: shows countdown to next quiz
Kicker: "DAILY QUIZ"
Slide 5 — Rank

Gradient: #1a0010 → #2a0020 (dark pink-red)
Accent: #F5576C
Shows: user rank position #42, "🏆 Compete with the best"
CTA: "See Leaderboard"
Kicker: "LEADERBOARD"
Each slide must have:

Unique gradient background
Ambient glow orbs (2 blurred circles, low opacity)
Shimmer sweep (diagonal light streak, very subtle)
Glass overlay layer for depth
Kicker label (small caps, low opacity)
Large bold title
Subtitle text
Action button (gradient or glass pill)
Badge or counter where relevant
Loading State
Glass skeleton card, same 240px height, shimmer animation on placeholder blocks for title, subtitle, button.

Section 3 — Match List
Layout: Section header row + horizontal FlashList of match cards.

Section header:

Left: "Important Matches" (bold white, 22px)
Right: "View All" (green accent, 14px)
Match card size: ~300px wide × 180px tall. borderRadius: 16.

Card content:

League name + logo (top, small)
Home team logo + name vs Away team logo + name (center, prominent)
Score (if live/finished) or kickoff time (if upcoming)
Status chip: LIVE (red pulse), FT, or time
Visual style:

Dark glass card: rgba(255,255,255,0.06) background
Thin border: rgba(255,255,255,0.1)
LIVE cards: subtle red glow border, pulsing dot
Upcoming: clean, structured
Team logos: circular, 40px
Loading state: 3 skeleton cards, same dimensions, shimmer.

Empty state: Single card same width, centered message "No matches right now", subtle football icon, branded — not blank.

Section 4 — Video / Reels List
Layout: Section header + horizontal FlashList of portrait video cards.

Section header:

Left: 📈 icon + "Trending Reels"
Right: "View All"
Video card size: 120px wide × 200px tall. borderRadius: 12.

Card content:

Thumbnail (full card background)
Dark gradient overlay (bottom 60%)
▶ Play button (center, circular, semi-transparent)
Views count (bottom left, small chip)
Likes count (bottom right, small chip)
Title (below card, 2 lines max, 12px)
Loading state: 4 skeleton portrait cards, shimmer.

Empty state: 3 placeholder cards with dashed green border, centered emoji + short message + "Upload Video" hint. Feels intentional, not broken.

Section 5 — Player Cards
Layout: Section header + horizontal FlashList of player cards.

Section header:

Left: ⭐ icon + "Player of the Week"
Right: "View All"
Player card size: 140px wide × 200px tall. borderRadius: 16.

Card content:

Player avatar (80px circle, top center, with colored border)
Rating badge (top-right corner, green circle, bold number)
Player name (bold, 14px, centered)
Team/country flag emoji
Position label (accent color, bold)
Visual style:

Glass card: rgba(255,255,255,0.08) + thin border
Avatar border: rgba(255,255,255,0.3) or accent color
Collectible card feel — premium, not generic
Loading state: 5 skeleton player cards, shimmer.

Empty state: Placeholder cards with dashed border, position label (ST, CM, etc.), "?" rating, encouraging message.

Section 6 — Team of the Month Pitch
Layout: Full-width section. Section header + football pitch visual.

Section header:

Left: 🏆 icon + "Team of the Month"
Right: "4-3-3" formation badge (glass pill)
Pitch visual:

Full width, height = screen width × 1.2
borderRadius: 24, overflow: hidden
Green gradient: #1a472a → #2d5a3f
Subtle white line markings: center circle, center line, penalty areas (low opacity)
11 player nodes arranged in 4-3-3 formation:
GK row (1 player)
Defenders row (4 players)
Midfielders row (3 players)
Forwards row (3 players)
Player node:

44px avatar circle, white border
Name label below (10px, white, semi-transparent dark pill background)
Rating badge (bottom-right, 18px green circle)
Loading state: Same pitch layout, player nodes replaced with shimmer circles.

Empty state: Pitch visible but all nodes are dashed-border empty circles with position labels. Banner above: "Team of the Month is being prepared — Compete to earn your spot!"

Depth & Layering System
Apply these consistently across all surfaces:

Layer	Treatment
Screen background	Full-screen diagonal gradient #000 → #111
Section cards	rgba(255,255,255,0.06–0.10) + thin border
Header	rgba(0,0,0,0.75) + blur hint + top highlight border
Hero carousel	Deep unique gradient per slide + glass overlay
Glow accents	Blurred colored circles, opacity 0.08–0.20
Shimmer	Diagonal white gradient sweep, opacity 0.03–0.06
Badges/chips	Solid accent color or glass pill
Shadows	Soft, dark, elevation 4–16 range
Motion Hints (for Reanimated later)
Design the layout to support these animations:

Header: fade + blur on scroll (floating behavior)
Hero carousel: slide transition + scale on press
List items: staggered FadeInDown entrance
Notification badge: pulse scale repeat
Avatar ring: slow rotation
Glow orbs: slow opacity pulse
Skeleton: shimmer sweep repeat
Card press: scale spring 0.96 → 1.0
Responsive Notes
iPhone (375–430px wide): Base design target. All cards and spacing as specified.

iPad / large Android (768px+):

Increase horizontal padding to 24–32px
Hero card height can increase to 280px
Match cards: show 2.5 visible instead of 1.5
Player cards: show 3.5 visible
Team pitch: cap max width at 600px, center it
Keep same vertical hierarchy — do NOT turn into a grid dashboard
What to Deliver
Main Home Screen — logged-in, content-rich state
Guest mode — welcome section variation
Loading states — hero, matches, reels, players, pitch
Empty states — matches, reels, players, pitch
Tablet adaptation — spacing and composition notes
Component annotations — label key components for Tamagui implementation