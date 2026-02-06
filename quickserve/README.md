# QuickServe — Modern E-Commerce Frontend

QuickServe is a modern, lightweight e-commerce frontend application built with **Vue 3**, **Vite**, and **Pinia**, featuring a full shopping flow — product listing, cart management, and secure checkout using **Paystack**.

This project was designed to demonstrate real-world frontend architecture, state management, routing, and third-party payment integration, and is fully deployed on **Vercel**.

---

## Live Demo

 **Production URL:**  
https://quickserve-swart.vercel.app

---

## Features

- Product listing (Home page)
- Add to Cart & Cart management
- Quantity tracking
- Paystack payment integration
- Client-side routing (SPA)
- Centralized state management with Pinia
- Fast builds with Vite
- Deployed on Vercel

---

## Tech Stack

| Technology | Purpose |
|----------|--------|
| Vue 3 (Composition API) | Frontend framework |
| Vite | Development & build tool |
| Vue Router | Client-side routing |
| Pinia | Global state management |
| Paystack Inline | Payment processing |
| CSS | Styling |
| Vercel | Deployment & hosting |

---

## Project Structure

quickserve/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
├─ main.js
├─ App.vue
├─ router/
│ └─ index.js
├─ store/
│ └─ cart.js
├─ pages/
│ ├─ Home.tsx
│ ├─ Cart.tsx
│ └─ Checkout.tsx
└─ components/
└─ ProductCard.tsx

---

## Application Flow

1. **Home Page**

   - Displays available products
   - Users can add items to the cart

2. **Cart Page**

   - View selected items
   - Remove items
   - See total cost

3. **Checkout Page**

   - Pay securely via Paystack
   - Cart clears after successful payment

---

## State Management

The cart state is managed globally using **Pinia**, allowing:

- Persistent cart across pages
- Centralized price calculation
- Easy scalability

Key store features:

- `addToCart()`
- `remove()`
- `clear()`
- `totalAmount` getter

---

## Paystack Integration

Payments are handled using **Paystack Inline JavaScript**.

### How it works:

- Amount is calculated from cart state
- Converted to kobo (₦ × 100)
- Paystack popup handles payment
- Success callback clears cart

> For production, always store Paystack keys in environment variables.

---

## Environment Variables (Recommended)

Create a `.env` file:

```env
VITE_PAYSTACK_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxx

