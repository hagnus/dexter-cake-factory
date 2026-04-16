import { createClient } from '@/lib/supabase/client';
import { AuthResponse, AuthTokenResponsePassword, User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

const supabase = createClient();

export const getUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();

  return user;
}

export const signOut = async (): Promise<void> => {
  await supabase.auth.signOut();
  redirect('/')
}

export const signUp = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
  const response = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  return response;
}

export const signInWithPassword = async (email: string, password: string): Promise<AuthTokenResponsePassword> => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

