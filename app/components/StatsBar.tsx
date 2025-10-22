'use client';

import { TrendingUp, Eye, MessageCircle } from 'lucide-react';
import type { Trend } from '../lib/types';

interface StatsBarProps {
  trends: Trend[];
}

export function StatsBar({ trends }: StatsBarProps) {
  const totalScore = trends.reduce((sum, t) => sum + t.score, 0);
  const avgScore = Math.round(totalScore / trends.length);
  const totalEngagement = trends.reduce((sum, t) => sum + (t.engagement || 0), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-surface rounded-lg p-6 border border-accent/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted text-sm">Active Trends</span>
          <TrendingUp className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl font-bold">{trends.length}</div>
        <div className="text-xs text-success mt-1">+3 from yesterday</div>
      </div>

      <div className="bg-surface rounded-lg p-6 border border-accent/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted text-sm">Avg Trend Score</span>
          <Eye className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl font-bold">{avgScore}</div>
        <div className="text-xs text-success mt-1">High momentum</div>
      </div>

      <div className="bg-surface rounded-lg p-6 border border-accent/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted text-sm">Total Engagement</span>
          <MessageCircle className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl font-bold">{(totalEngagement / 1000).toFixed(1)}K</div>
        <div className="text-xs text-success mt-1">Across all trends</div>
      </div>
    </div>
  );
}
