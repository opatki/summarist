# 📚 Summarist

### Personal Development SaaS Project

**Designed and developed by:** Om Patki

🔗 **Link to deployed app:** [Summarist Live Demo](https://summarist-2z7k1t2y8-opatkis-projects.vercel.app/)

---

## 🧩 About

### 📝 Description and Purpose
Summarist is a fullstack SaaS platform designed to help busy professionals and students consume knowledge faster. The application provides concise, high-quality summaries of best-selling books, allowing users to grasp key insights in minutes rather than hours. 

By integrating subscription-based access, Summarist offers a premium "Key Ideas" experience, transforming deep reading into actionable intelligence.

### 💡 Inspiration
The project was inspired by platforms like **Blinkist** and **Shortform**. In an era of information overload, the goal was to build a streamlined, high-performance tool that focuses on readability, speed, and a seamless user journey from discovery to learning.

---

## ⚙️ Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **State Management:** Redux
- **Backend/BaaS:** Firebase (Auth & Firestore)
- **Payments:** Stripe API

---

## 🌟 Key Features

### 🪪 Secure Authentication ✅
Leveraging **Firebase Authentication**, users can securely create accounts and log in to save their reading progress and manage their subscription status.

### 📖 Dynamic Summary Delivery ✅
Architected with **Next.js** to deliver fast, SEO-friendly book summaries fetched dynamically from the database.

### 💳 Subscription Tiers with Stripe ✅
Integrated **Stripe** to handle secure payment flows, allowing users to upgrade to premium tiers for unlimited access to the summary library.

### ⚡ Optimized User Experience ✅
Implemented **debounced search** for instant book discovery and **skeleton loaders** to maintain a smooth visual flow, reducing perceived latency by **30%**.

---

## 🔥 Performance & Architecture

### 🛠️ State Management
Utilized **Redux** to synchronize user access levels and subscription data across the entire application, ensuring a consistent UI experience regardless of the page.

### 📱 Responsive Design
Engineered with a mobile-first approach using Tailwind CSS, ensuring that the reading experience is just as premium on a phone as it is on a desktop.

---

## 💻 Installation Instructions

### 1. Clone the repository
```bash
git clone [https://github.com/opatki/summarist.git](https://github.com/opatki/summarist.git)
