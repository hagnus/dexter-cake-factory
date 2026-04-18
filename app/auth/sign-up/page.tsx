'use client';

import { AuthPage } from '@/components/auth/auth-page';
import { SignUpForm } from './sign-up-form';

export default function SignUp() {
  return (
    <AuthPage
      title="Cake Factory"
      description="Crie sua conta e comece a gerenciar sua fábrica"
      backLink="/auth/sign-in"
      backText="Voltar ao login"
      cardTitle="Criar Conta"
      cardDescription="Preencha os dados abaixo para se registrar"
    >
      <SignUpForm />
    </AuthPage>
  );
}
