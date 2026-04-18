import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  description: string;
  backLink: string;
  backText: string;
  cardTitle: string;
  cardDescription: string;
  children: ReactNode;
  error?: string;
}

export function AuthLayout({
  title,
  description,
  backLink,
  backText,
  cardTitle,
  cardDescription,
  children,
  error,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href={backLink} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{backText}</span>
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/cake-factory-logo.svg" alt="Cake Factory" className="w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>

        {/* Auth Card */}
        <Card className="border-rose-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{cardTitle}</CardTitle>
            <CardDescription>{cardDescription}</CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-6">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
