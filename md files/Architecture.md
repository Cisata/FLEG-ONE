# F.L.E.G. ONE — Architecture

## 1. Architecture Overview

F.L.E.G. ONE will be built as a frontend-only React application.

There will be no backend, database, authentication or payment system.

The application will use static/mock data.

---

## 2. Tech Stack

### Frontend

- React
- JavaScript
- Vite
- HTML5
- CSS3

### Development

- Git
- GitHub
- VS Code

### Optional Libraries

Only introduce a library if it provides clear value.

Avoid unnecessary dependencies.

---

## 3. Application Architecture

The application follows a component-based React architecture.

App
│
├── Navbar
├── Hero
├── Events
│   └── EventCard
├── HowItWorks
├── Format
├── Players
│   └── PlayerCard
├── Rankings
│   └── RankingRow
├── Gallery
├── PreviousEvent
├── CTA
├── Community
└── Footer

---

## 4. Data Flow

Static data will be stored separately from UI components.

Example:

events.js
players.js
rankings.js

Components receive data through props.

Example:

Event data
    ↓
Events component
    ↓
EventCard component
    ↓
Rendered UI

---

## 5. Data Models

### Event

{
  id: string,
  name: string,
  location: string,
  date: string,
  capacity: number,
  status: string,
  image: string
}

### Player

{
  id: string,
  name: string,
  nickname: string,
  location: string,
  wins: number,
  losses: number,
  goals: number,
  ranking: number,
  image: string
}

### Ranking

{
  rank: number,
  playerId: string,
  playerName: string,
  wins: number,
  goals: number,
  points: number
}

---

## 6. State Management

No global state management library is required.

React local state is sufficient for:

- Mobile menu
- Gallery interactions
- UI states
- Optional countdown

---

## 7. Routing

The initial version will use a single-page layout.

No React Router is required unless the project later expands into multiple pages.

---

## 8. Styling Architecture

Use centralized CSS variables for:

- Colors
- Typography
- Spacing
- Border radius
- Transitions

Use reusable CSS classes/components where appropriate.