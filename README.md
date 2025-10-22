# TrendCaster - Base Mini App

Spot, create, and grow with trending crypto narratives on Base.

## Features

- 🔥 **Real-time Trend Spotting** - Live insights from Farcaster and Twitter
- 📝 **Curated Content Briefs** - Pre-digested trend summaries for creators
- ✨ **Smart Content Generation** - AI-powered cast suggestions
- 💎 **Onchain Acknowledgment** - Tip influential voices with ETH on Base
- 🎯 **Farcaster Integration** - Native Mini App with Frames support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit (Coinbase Wallet, WalletConnect)
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key from [portal.cdp.coinbase.com](https://portal.cdp.coinbase.com)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # React components
│   ├── Header.tsx
│   ├── TrendCard.tsx
│   ├── StatsBar.tsx
│   └── ConnectButton.tsx
├── lib/             # Utilities and types
│   ├── types.ts
│   └── mockData.ts
├── layout.tsx       # Root layout
├── page.tsx         # Home page
├── providers.tsx    # OnchainKit provider
└── globals.css      # Global styles

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Key Features Implementation

### Trend Spotting
- Real-time aggregation from Farcaster and Twitter
- Sentiment analysis (bullish/bearish/neutral)
- Engagement metrics and scoring

### Content Creation
- Curated briefs with key arguments
- Suggested keywords and hashtags
- Influential voice identification

### Onchain Features
- Gas-sponsored tipping via Paymaster
- Transaction status tracking
- Wallet integration with OnchainKit

### Farcaster Integration
- MiniKit for user context access
- Frame embedding support
- Cast composition and sharing
- Push notifications

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key (required)
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint (optional)
- `NEXT_PUBLIC_PAYMASTER_URL` - Paymaster for gas sponsorship (optional)

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Ensure environment variables are set in Vercel dashboard.

## License

MIT
