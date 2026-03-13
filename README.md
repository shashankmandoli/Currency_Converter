# Currency Converter (React + Vite)

A small React + Vite app that converts currencies using the **ExchangeRate-API** service.

## ✅ What it does

- Pick a **source currency** and a **target currency**
- Fetches live exchange rates from ExchangeRate-API
- Converts an entered amount from one currency to another
- Includes a **swap button** for swapping "from" and "to" currencies

## 🧩 Key files

- `src/App.jsx` – main UI + conversion logic
- `src/components/InputBox.jsx` – reusable amount + currency selector
- `src/hooks/useCurrencyInfo.js` – fetches rates from the API
- `.env` – holds the API key used by Vite

## 🚀 Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (example http://localhost:5173).

---

## 🔑 API Key (required)

This app uses **ExchangeRate-API** to fetch currency conversion rates.

### 1) Get an API key

1. Go to: https://www.exchangerate-api.com/
2. Sign up for a free account
3. Copy the API key from your dashboard

### 2) Add your API key to the project

Create (or update) `.env` in the project root:

```env
VITE_EXCHANGE_API_KEY=your_api_key_here
```

> ✅ Make sure the key name is exactly `VITE_EXCHANGE_API_KEY` (Vite only exposes env vars prefixed with `VITE_`).

### 3) Restart the dev server

If the app was already running, stop and restart it:

```bash
npm run dev
```

---

## 🧪 Troubleshooting

- If the app is blank, open the browser console to check for errors (missing API key or API call failure are common).
- If conversion rates are wrong, verify your API key and check quota limits.

