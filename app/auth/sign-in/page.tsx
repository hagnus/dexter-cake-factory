'use client';

import { AuthPage } from '@/components/auth/auth-page';
import { SignInForm } from './sign-in-form';

export default function SignIn() {
  return (
    <AuthPage
      title="Cake Factory"
      description="Acesse sua conta para gerenciar sua fábrica"
      backLink="/"
      backText="Voltar"
      cardTitle="Entrar"
      cardDescription="Digite seu email e senha para acessar a plataforma"
    >
      <SignInForm />
    </AuthPage>
  );
}
