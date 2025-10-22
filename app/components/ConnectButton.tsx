'use client';

import { Wallet } from 'lucide-react';

export function ConnectButton() {
  return (
    <button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
      <Wallet className="w-4 h-4" />
      <span className="hidden sm:inline">Connect Wallet</span>
    </button>
  );
}
