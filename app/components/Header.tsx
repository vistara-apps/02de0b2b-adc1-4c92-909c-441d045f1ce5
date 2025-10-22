'use client';

import { Sparkles } from 'lucide-react';
import { ConnectButton } from './ConnectButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">TrendCaster</h1>
              <p className="text-xs text-muted">Powered by Base</p>
            </div>
          </div>
          
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
