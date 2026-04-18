'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/auth/input-field';
import { PasswordField } from '@/components/auth/password-field';
import { signInWithPassword } from '@/app/api/users/auth';

export function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const { data, error: authError } = await signInWithPassword(email, password);

      if (authError) {
        setError(authError.message);
        setIsLoading(false);
        return;
      }

      if (data.user) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <InputField
          id="email"
          label="Email"
          icon={Mail}
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PasswordField
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

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

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 h-11 font-semibold"
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

      <p className="text-center text-slate-600 text-sm mt-6">
        Não tem uma conta?{' '}
        <Link href="/auth/sign-up" className="text-rose-600 hover:text-rose-700 font-semibold">
          Criar conta
        </Link>
      </p>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-slate-500">
        <p>Ao entrar, você concorda com nossos <a href="#" className="hover:text-slate-700 underline">Termos de Serviço</a> e <a href="#" className="hover:text-slate-700 underline">Política de Privacidade</a>.</p>
      </div>
    </>
  );
}

