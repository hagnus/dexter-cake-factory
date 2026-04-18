'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail, User, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { InputField } from '@/components/auth/input-field';
import { PasswordField } from '@/components/auth/password-field';
import { signUp } from '../api/users/auth';

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear errors when user starts typing
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordError('');
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('As senhas não correspondem');
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres');
      return;
    }

    if (!formData.acceptTerms) {
      setPasswordError('Você deve aceitar os termos de serviço');
      return;
    }

    setIsLoading(true);
    
    try {
      // Sign up with Supabase
      const { data, error: signUpError } = await signUp(formData.email, formData.password, formData.fullName);

      if (signUpError) {
        setError(signUpError.message);
        setIsLoading(false);
        return;
      }

      if (data.user) {
        // Redirect to sign-in or dashboard after successful signup
        router.push('/sign-in?message=Conta criada com sucesso! Faça login.');
      }
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Cake Factory"
      description="Crie sua conta e comece a gerenciar sua fábrica"
      backLink="/sign-in"
      backText="Voltar ao login"
      cardTitle="Criar Conta"
      cardDescription="Preencha os dados abaixo para se registrar"
      error={error || passwordError}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          id="fullName"
          label="Nome Completo"
          icon={User}
          type="text"
          placeholder="Seu nome completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <InputField
          id="email"
          label="Email"
          icon={Mail}
          type="email"
          placeholder="seu@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <PasswordField
          id="password"
          label="Senha"
          placeholder="••••••••"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
          helperText="Mínimo 8 caracteres"
        />

        <PasswordField
          id="confirmPassword"
          label="Confirmar Senha"
          placeholder="••••••••"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength={8}
        />

        {/* Terms and Conditions */}
        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 rounded border-slate-300 text-rose-600 focus:ring-2 focus:ring-rose-500"
            />
            <span>
              Eu concordo com os <a href="#" className="text-rose-600 hover:text-rose-700 font-medium">Termos de Serviço</a> e <a href="#" className="text-rose-600 hover:text-rose-700 font-medium">Política de Privacidade</a>
            </span>
          </label>
        </div>

        {/* Password Requirements */}
        <div className="p-3 bg-slate-50 rounded-lg space-y-2">
          <p className="text-xs font-semibold text-slate-900 uppercase">Requisitos da senha:</p>
          <ul className="space-y-1 text-xs text-slate-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Mínimo 8 caracteres
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-300" />
              Letras maiúsculas e minúsculas
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-300" />
              Números e caracteres especiais (recomendado)
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 h-11 font-semibold"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Criando conta...
            </span>
          ) : (
            'Criar Conta'
          )}
        </Button>
      </form>

      {/* Sign in link */}
      <p className="text-center text-slate-600 text-sm mt-6">
        Já tem uma conta?{' '}
        <Link href="/sign-in" className="text-rose-600 hover:text-rose-700 font-semibold">
          Fazer login
        </Link>
      </p>
    </AuthLayout>
  );
}
