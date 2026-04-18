'use client';

import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="absolute top-10 left-10 w-40 h-40 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {children}
      </div>
    </div>
  );
}
