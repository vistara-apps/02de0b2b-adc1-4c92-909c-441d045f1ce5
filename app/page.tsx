'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Zap, Users, TrendingDown } from 'lucide-react';
import { TrendCard } from './components/TrendCard';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { mockTrends } from './lib/mockData';
import type { Trend } from './lib/types';

export default function Home() {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading trends
    const timer = setTimeout(() => {
      setTrends(mockTrends);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 bg-surface rounded-lg animate-pulse"
              />
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted">Live Trend Tracking</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-accent to-muted bg-clip-text text-transparent">
            Discover Trending Crypto Narratives
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real-time insights from Farcaster and Twitter to power your content creation
          </p>
        </div>

        {/* Stats Bar */}
        <StatsBar trends={trends} />

        {/* Trends Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-accent" />
              Today's Hot Trends
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Updated 2m ago
            </div>
          </div>

          <div className="grid gap-6">
            {trends.map((trend, index) => (
              <TrendCard key={trend.id} trend={trend} index={index} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center pb-8">
          <div className="bg-surface rounded-lg p-8 border border-accent/20">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Join the TrendCaster Community
            </h3>
            <p className="text-muted mb-4">
              Connect with creators leveraging trends to grow their audience
            </p>
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
