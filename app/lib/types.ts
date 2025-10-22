export interface Trend {
  id: string;
  topic: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  keywords: string[];
  score: number;
  source: 'farcaster' | 'twitter' | 'both';
  timestamp: string;
  summary: string;
  engagement?: number;
  influencers?: Influencer[];
  contentBrief?: ContentBrief;
}

export interface Influencer {
  fid?: string;
  username: string;
  displayName: string;
  pfpUrl?: string;
  platform: 'farcaster' | 'twitter';
  influenceScore: number;
}

export interface ContentBrief {
  id: string;
  trendId: string;
  summaryText: string;
  keyArguments: string[];
  suggestedKeywords: string[];
  influencerFIDs: string[];
}

export interface User {
  fid: string;
  username: string;
  displayName: string;
  pfpUrl?: string;
  walletAddress?: string;
}
