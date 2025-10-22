import type { Trend } from './types';

export const mockTrends: Trend[] = [
  {
    id: '1',
    topic: 'ERC-404 Token Standard',
    sentiment: 'bullish',
    keywords: ['ERC-404', 'NFT', 'Fungible', 'Innovation'],
    score: 95,
    source: 'both',
    timestamp: new Date().toISOString(),
    summary: 'New experimental token standard combining NFT and fungible properties gaining massive traction across DeFi protocols.',
    engagement: 12500,
    influencers: [
      { username: 'vitalik', displayName: 'Vitalik Buterin', platform: 'twitter', influenceScore: 98 },
      { username: 'dankrad', displayName: 'Dankrad Feist', platform: 'farcaster', influenceScore: 92 }
    ],
    contentBrief: {
      id: 'cb1',
      trendId: '1',
      summaryText: 'ERC-404 is revolutionizing how we think about token standards by merging NFT uniqueness with fungible liquidity.',
      keyArguments: ['Increased liquidity for NFTs', 'Novel use cases', 'Community excitement'],
      suggestedKeywords: ['ERC404', 'DeFi', 'NFTs', 'Innovation'],
      influencerFIDs: ['vitalik', 'dankrad']
    }
  },
  {
    id: '2',
    topic: 'Base Chain TVL Surge',
    sentiment: 'bullish',
    keywords: ['Base', 'TVL', 'L2', 'Growth'],
    score: 88,
    source: 'farcaster',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    summary: 'Base reaches new all-time high in Total Value Locked, surpassing $2B as developers flock to the L2.',
    engagement: 8900,
    influencers: [
      { username: 'jessepollak', displayName: 'Jesse Pollak', platform: 'farcaster', influenceScore: 95 },
      { username: 'base', displayName: 'Base', platform: 'twitter', influenceScore: 90 }
    ],
    contentBrief: {
      id: 'cb2',
      trendId: '2',
      summaryText: 'Base is experiencing unprecedented growth with TVL hitting new records daily.',
      keyArguments: ['Low fees', 'Fast transactions', 'Strong ecosystem'],
      suggestedKeywords: ['Base', 'L2', 'Ethereum', 'Scaling'],
      influencerFIDs: ['jessepollak', 'base']
    }
  },
  {
    id: '3',
    topic: 'AI Agent Trading Bots',
    sentiment: 'neutral',
    keywords: ['AI', 'Trading', 'Automation', 'Bots'],
    score: 82,
    source: 'twitter',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    summary: 'Debate intensifies around AI-powered trading agents as they show both impressive gains and concerning risks.',
    engagement: 15200,
    influencers: [
      { username: 'cobie', displayName: 'Cobie', platform: 'twitter', influenceScore: 88 },
      { username: 'haseeb', displayName: 'Haseeb Qureshi', platform: 'twitter', influenceScore: 85 }
    ],
    contentBrief: {
      id: 'cb3',
      trendId: '3',
      summaryText: 'AI trading agents are becoming more sophisticated, but questions remain about their long-term viability.',
      keyArguments: ['Automation benefits', 'Risk management concerns', 'Market impact'],
      suggestedKeywords: ['AI', 'Trading', 'Automation', 'DeFi'],
      influencerFIDs: ['cobie', 'haseeb']
    }
  },
  {
    id: '4',
    topic: 'Farcaster Frames v2',
    sentiment: 'bullish',
    keywords: ['Farcaster', 'Frames', 'Social', 'Web3'],
    score: 91,
    source: 'farcaster',
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    summary: 'Farcaster announces Frames v2 with enhanced capabilities for interactive social experiences and mini-apps.',
    engagement: 6700,
    influencers: [
      { username: 'dwr', displayName: 'Dan Romero', platform: 'farcaster', influenceScore: 96 },
      { username: 'v', displayName: 'Varun Srinivasan', platform: 'farcaster', influenceScore: 94 }
    ],
    contentBrief: {
      id: 'cb4',
      trendId: '4',
      summaryText: 'Frames v2 brings powerful new features for developers building social applications on Farcaster.',
      keyArguments: ['Enhanced interactivity', 'Better UX', 'Developer tools'],
      suggestedKeywords: ['Farcaster', 'Frames', 'SocialFi', 'Web3Social'],
      influencerFIDs: ['dwr', 'v']
    }
  },
  {
    id: '5',
    topic: 'Restaking Protocols Debate',
    sentiment: 'neutral',
    keywords: ['Restaking', 'EigenLayer', 'Security', 'Yield'],
    score: 76,
    source: 'both',
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    summary: 'Community divided on restaking protocols as they offer higher yields but introduce new systemic risks.',
    engagement: 9800,
    influencers: [
      { username: 'sreeramkannan', displayName: 'Sreeram Kannan', platform: 'twitter', influenceScore: 87 },
      { username: 'tarun', displayName: 'Tarun Chitra', platform: 'twitter', influenceScore: 84 }
    ],
    contentBrief: {
      id: 'cb5',
      trendId: '5',
      summaryText: 'Restaking is gaining traction but experts warn about potential cascading failure risks.',
      keyArguments: ['Yield opportunities', 'Security concerns', 'Protocol design'],
      suggestedKeywords: ['Restaking', 'EigenLayer', 'Staking', 'DeFi'],
      influencerFIDs: ['sreeramkannan', 'tarun']
    }
  }
];
