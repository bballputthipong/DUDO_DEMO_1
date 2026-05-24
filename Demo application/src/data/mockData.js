export const studioImages = {
  pilates: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
  climbing: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=85",
  recovery: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  yoga: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  court: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=85",
  sauna: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
  rooftop: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85",
  run: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=900&q=85",
  boxing: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=85"
};

export const categories = [
  { id: "pilates", label: "Pilates", icon: "ph-person-simple" },
  { id: "muay-thai", label: "Muay Thai", icon: "ph-boxing-glove" },
  { id: "dance", label: "Dance", icon: "ph-music-notes" },
  { id: "weights", label: "Weight", icon: "ph-barbell" },
  { id: "recovery", label: "Recovery", icon: "ph-waves" },
  { id: "climb", label: "Climb", icon: "ph-mountains" }
];

export const studios = [
  {
    id: "hotel-republic",
    name: "The Hotel Republic",
    area: "Silom",
    distance: "2.6 km",
    time: "20 min",
    rating: 4.8,
    reviews: 1233,
    price: "$$$$",
    credits: 4,
    cash: 450,
    image: studioImages.pilates,
    tags: ["Pilates", "Yoga", "Luxury"],
    classes: ["Reformer Flow", "Core Control"],
    nextTimes: ["08:30", "12:00", "17:30", "19:00"],
    vibe: "Glasshouse pilates studio with skyline recovery lounge."
  },
  {
    id: "stonegoat",
    name: "Stonegoat Climbing Gym",
    area: "Sukhumvit 69",
    distance: "5.1 km",
    time: "25 min",
    rating: 4.7,
    reviews: 890,
    price: "$$$",
    credits: 5,
    cash: 520,
    image: studioImages.climbing,
    tags: ["Climb", "Strength", "Social"],
    classes: ["Boulder Progression", "Grip Lab"],
    nextTimes: ["09:00", "13:00", "18:30", "20:00"],
    vibe: "Bouldering walls, route grades, and coach-led movement drills."
  },
  {
    id: "urban-oasis",
    name: "The Urban Oasis",
    area: "Bangkok Riverside",
    distance: "3.0 km",
    time: "12 min",
    rating: 4.6,
    reviews: 876,
    price: "$$$",
    credits: 3,
    cash: 390,
    image: studioImages.yoga,
    tags: ["Yoga", "Meditation", "Garden"],
    classes: ["Breath Reset", "Sunset Vinyasa"],
    nextTimes: ["07:00", "11:00", "16:00", "18:00"],
    vibe: "Garden studio for mindful mobility and low-impact recovery."
  },
  {
    id: "ontrack-w",
    name: "Ontrack Campus W District",
    area: "Phra Khanong",
    distance: "4.1 km",
    time: "15 min",
    rating: 4.9,
    reviews: 1200,
    price: "$$$$",
    credits: 6,
    cash: 650,
    image: studioImages.gym,
    tags: ["HIIT", "Strength", "Wearable"],
    classes: ["Threshold Engine", "Power Zone"],
    nextTimes: ["06:30", "12:30", "18:00", "19:30"],
    vibe: "Performance lab with HRV-linked intensity programming."
  },
  {
    id: "coastal-retreat",
    name: "Coastal Retreat Recovery",
    area: "Thonglor",
    distance: "2.9 km",
    time: "18 min",
    rating: 4.8,
    reviews: 990,
    price: "$$$$",
    credits: 4,
    cash: 480,
    image: studioImages.sauna,
    tags: ["Ice Bath", "Sauna", "Recovery"],
    classes: ["Contrast Therapy", "Deep Reset"],
    nextTimes: ["10:00", "14:00", "17:00", "21:00"],
    vibe: "Ice bath and sauna circuits for verified recovery sessions."
  },
  {
    id: "racquet-club",
    name: "The Racquet Club RQ49",
    area: "Phrom Phong",
    distance: "6.4 km",
    time: "30 min",
    rating: 4.5,
    reviews: 654,
    price: "$$$",
    credits: 4,
    cash: 460,
    image: studioImages.court,
    tags: ["Padel", "Tennis", "Club"],
    classes: ["Padel Open Play", "Tennis Match Lab"],
    nextTimes: ["08:00", "13:30", "18:30", "20:30"],
    vibe: "Social match scheduling with verified court check-ins."
  }
];

export const progressionData = [
  { label: "Mon", hrv: 55, pace: 68, load: 44 },
  { label: "Tue", hrv: 58, pace: 71, load: 48 },
  { label: "Wed", hrv: 61, pace: 73, load: 51 },
  { label: "Thu", hrv: 59, pace: 76, load: 55 },
  { label: "Fri", hrv: 64, pace: 80, load: 60 },
  { label: "Sat", hrv: 68, pace: 84, load: 63 },
  { label: "Sun", hrv: 72, pace: 88, load: 67 }
];

export const gallerySections = [
  {
    id: "ice",
    label: "Ice Bath",
    images: [studioImages.recovery, studioImages.sauna, studioImages.rooftop, studioImages.yoga]
  },
  {
    id: "training",
    label: "Training",
    images: [studioImages.gym, studioImages.climbing, studioImages.boxing, studioImages.run]
  },
  {
    id: "studio",
    label: "Studio",
    images: [studioImages.pilates, studioImages.court, studioImages.yoga, studioImages.rooftop]
  }
];

export const initialCommunityPosts = [
  {
    id: "post-1",
    user: "Maya V.",
    status: "CHECKED IN",
    headline: "Contrast therapy before a long work block.",
    meta: "Coastal Retreat Recovery · 18 min ago",
    image: studioImages.sauna,
    stats: ["HRV +8", "Cold 3:00", "4 credits"],
    liked: false,
    saved: false
  },
  {
    id: "post-2",
    user: "Krit P.",
    status: "BOOK LOOP",
    headline: "New V5 route unlocked at Stonegoat.",
    meta: "Stonegoat Climbing Gym · Today",
    image: studioImages.climbing,
    stats: ["Grade V5", "Load 63", "5 credits"],
    liked: true,
    saved: false
  }
];

export const reservationFriends = [
  { id: "aom", name: "Aom", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80" },
  { id: "kin", name: "Kin", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80" },
  { id: "pete", name: "Pete", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=180&q=80" }
];

export const reservationDates = [
  { day: "Mon", date: "Aug 11" },
  { day: "Tue", date: "Aug 12" },
  { day: "Wed", date: "Aug 13" },
  { day: "Thu", date: "Aug 14" },
  { day: "Fri", date: "Aug 15" }
];

export const reservationTimeSlots = [
  { time: "6:00 AM - 7:30 AM", level: "Early Send", spots: 2 },
  { time: "10:00 AM - 11:30 AM", level: "Power Climb", spots: 5 },
  { time: "6:00 PM - 7:30 PM", level: "Intermediate", spots: 3 },
  { time: "8:00 PM - 9:30 PM", level: "Night Climb", spots: 2 }
];

export const subscriptionPlans = [
  {
    id: "pro",
    name: "DUDO PRO",
    price: 1290,
    cadence: "month",
    badge: "Most Popular",
    description: "Best for active individuals who want full access to all benefits.",
    credits: 30,
    benefits: ["Universal Credits 30 /month", "Access 800+ studios", "AI Health Insights", "Exclusive events", "Cancel anytime"]
  },
  {
    id: "plus",
    name: "DUDO PLUS",
    price: 690,
    cadence: "month",
    description: "Great for getting started.",
    credits: 15,
    benefits: ["Universal Credits 15 /month", "Access 400+ studios", "AI Health Insights", "Cancel anytime"]
  },
  {
    id: "lite",
    name: "DUDO LITE",
    price: 390,
    cadence: "month",
    description: "For casual routines.",
    credits: 8,
    benefits: ["Universal Credits 8 /month", "Access 200+ studios"]
  }
];

export const subscriptionAddOns = [
  { id: "extra-credits", name: "Extra Credits", detail: "+10 Credits", price: 150, icon: "ph-crown" },
  { id: "recovery-pack", name: "Recovery Pack", detail: "Sauna + Ice Bath", price: 490, icon: "ph-waves" },
  { id: "nutrition", name: "Nutrition Plan", detail: "Personalized meal plan", price: 290, icon: "ph-apple-logo" },
  { id: "premium-studios", name: "Premium Studios", detail: "Access exclusive studios", price: 390, icon: "ph-lock-key" },
  { id: "personal-training", name: "Personal Training", detail: "1-on-1 sessions", price: 1290, icon: "ph-person-simple-run" },
  { id: "insurance", name: "Insurance", detail: "Workout protection", price: 250, icon: "ph-shield-check" }
];

export const discoveryLocations = [
  { id: "thonglor", name: "Thonglor", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=85", count: 19 },
  { id: "silom", name: "Silom", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=85", count: 24 },
  { id: "sathorn", name: "Sathorn", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=85", count: 16 },
  { id: "ari", name: "Ari", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&q=85", count: 11 }
];

export const discoveryCommunities = [
  { id: "gen-z", name: "Gen Z", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=85", count: 128 },
  { id: "young-pro", name: "Young Professionals", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=85", count: 84 },
  { id: "high-energy", name: "High-Energy Crowd", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=85", count: 63 },
  { id: "recovery-club", name: "Recovery Club", image: studioImages.sauna, count: 41 }
];

export const discoveryEditorials = [
  {
    id: "climb-bangkok",
    title: "The Beginner's Guide to Bangkok Climbing",
    subtitle: "Three studios, one route plan, and what to book first.",
    className: "Tuesday Climbing",
    studioName: "Stonegoat Climbing Gym",
    author: "Nina S.",
    views: 583,
    image: studioImages.climbing,
    tags: ["Climb", "Beginner", "Community"],
    body: "I started with a low-pressure evening session and liked how the coach explained route reading before strength work. The best move was booking a smaller class and using credits for a second visit in the same week.",
    relatedStudioId: "stonegoat"
  },
  {
    id: "pilates-silom",
    title: "Silom Pilates That Feels Worth the Credits",
    subtitle: "A compact review of coach cues, equipment, and peak hours.",
    className: "Reformer Flow",
    studioName: "The Hotel Republic",
    author: "Maya V.",
    views: 412,
    image: studioImages.pilates,
    tags: ["Pilates", "Silom", "Premium"],
    body: "The room is bright, the class pacing is clear, and the instructor fixed my shoulder position in the first ten minutes. Book the morning class if you want a calmer room.",
    relatedStudioId: "hotel-republic"
  },
  {
    id: "recovery-loop",
    title: "How I Use Ice Bath Days Without Overdoing It",
    subtitle: "Recovery cues from wearable data and studio timing.",
    className: "Contrast Therapy",
    studioName: "Coastal Retreat Recovery",
    author: "Tan R.",
    views: 256,
    image: studioImages.sauna,
    tags: ["Recovery", "Ice Bath", "HRV"],
    body: "The best sessions landed after a high-load training day, not before. I watched HRV rebound and kept the cold exposure short enough to feel sharp after.",
    relatedStudioId: "coastal-retreat"
  },
  {
    id: "padel-social",
    title: "Padel Is the Easiest Social Booking Loop",
    subtitle: "Bring friends, split intensity, and keep the streak alive.",
    className: "Padel Open Play",
    studioName: "The Racquet Club RQ49",
    author: "Krit P.",
    views: 198,
    image: studioImages.court,
    tags: ["Padel", "Friends", "Club"],
    body: "This was the easiest booking to turn into a community post. The match format makes it social without needing everyone at the same fitness level.",
    relatedStudioId: "racquet-club"
  }
];
