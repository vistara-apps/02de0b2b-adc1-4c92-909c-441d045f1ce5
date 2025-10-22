'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, MessageSquare, ExternalLink, Sparkles, Users } from 'lucide-react';
import type { Trend } from '../lib/types';

interface TrendCardProps {
  trend: Trend;
  index: number;
}

export function TrendCard({ trend, index }: TrendCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sentimentColor = trend.sentiment === 'bullish' 
    ? 'text-success' 
    : trend.sentiment === 'bearish' 
    ? 'text-error' 
    : 'text-warning';

  const sentimentIcon = trend.sentiment === 'bullish' 
    ? TrendingUp 
    : trend.sentiment === 'bearish' 
    ? TrendingDown 
    : MessageSquare;

  const SentimentIcon = sentimentIcon;

  return (
    <div 
      className="bg-surface rounded-lg border border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                #{index + 1} Trending
              </span>
              <span className={`text-xs font-semibold ${sentimentColor} flex items-center gap-1`}>
                <SentimentIcon className="w-3 h-3" />
                {trend.sentiment}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{trend.topic}</h3>
            <p className="text-muted text-sm">{trend.summary}</p>
          </div>
          
          <div className="text-right ml-4">
            <div className="text-2xl font-bold text-accent">{trend.score}</div>
            <div className="text-xs text-muted">Trend Score</div>
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-4">
          {trend.keywords.map((keyword, i) => (
            <span 
              key={i}
              className="text-xs bg-bg px-3 py-1 rounded-full text-muted border border-accent/20"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-accent/10">
          <div>
            <div className="text-xs text-muted mb-1">Source</div>
            <div className="text-sm font-semibold capitalize">{trend.source}</div>
          </div>
          <div>
            <div className="text-xs text-muted mb-1">Engagement</div>
            <div className="text-sm font-semibold">{(trend.engagement || 0).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-muted mb-1">Time</div>
            <div className="text-sm font-semibold">
              {new Date(trend.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mb-4 space-y-4 animate-fade-in">
            {/* Key Influencers */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Key Influencers
              </h4>
              <div className="flex flex-wrap gap-2">
                {trend.influencers?.map((influencer, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 bg-bg px-3 py-2 rounded-lg border border-accent/20"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-xs">
                      {influencer.username[0].toUpperCase()}
                    </div>
                    <span className="text-sm">@{influencer.username}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Brief */}
            <div className="bg-bg rounded-lg p-4 border border-accent/20">
              <h4 className="text-sm font-semibold mb-2">Content Brief</h4>
              <p className="text-sm text-muted mb-3">
                {trend.contentBrief?.summaryText || 'Create engaging content around this trending topic to maximize reach and engagement.'}
              </p>
              <div className="flex flex-wrap gap-2">
                {trend.contentBrief?.suggestedKeywords.map((keyword, i) => (
                  <span key={i} className="text-xs bg-surface px-2 py-1 rounded text-accent">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {isExpanded ? 'Hide Details' : 'Generate Cast'}
          </button>
          <button className="bg-bg text-fg px-4 py-2 rounded-lg font-semibold hover:bg-surface transition-colors border border-accent/20 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Source</span>
          </button>
        </div>
      </div>
    </div>
  );
}
