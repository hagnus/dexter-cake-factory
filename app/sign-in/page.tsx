'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    // Here you would typically handle the login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/cake-factory-logo.svg" alt="Cake Factory" className="w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Cake Factory</h1>
          <p className="text-slate-600">Acesse sua conta para gerenciar sua fábrica</p>
        </div>

        {/* Login Card */}
        <Card className="border-rose-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Entrar</CardTitle>
            <CardDescription>Digite seu email e senha para acessar a plataforma</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-900">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-900">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-10 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 text-rose-600 focus:ring-2 focus:ring-rose-500"
                  />
                  Lembrar de mim
                </label>
                <a href="#" className="text-rose-600 hover:text-rose-700 font-medium">
                  Esqueceu a senha?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 h-11 font-semibold"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Entrando...
                  </span>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-600">ou</span>
              </div>
            </div>

            {/* Alternative login methods */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full border-slate-300 hover:bg-slate-50"
              >
                Continuar com Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-slate-300 hover:bg-slate-50"
              >
                Continuar com Apple
              </Button>
            </div>

            {/* Sign up link */}
            <p className="text-center text-slate-600 text-sm mt-6">
              Não tem uma conta?{' '}
              <Link href="/sign-up" className="text-rose-600 hover:text-rose-700 font-semibold">
                Criar conta
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Ao entrar, você concorda com nossos <a href="#" className="hover:text-slate-700 underline">Termos de Serviço</a> e <a href="#" className="hover:text-slate-700 underline">Política de Privacidade</a>.</p>
        </div>
      </div>
    </div>
  );
}
