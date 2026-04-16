'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { getUser, signOut } from '@/app/api/users/auth';
import Image from 'next/image';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      
      console.log('Usuário autenticado:', user);
      if (!user) {
        router.push('/sign-in');
      } else {
        setUser(user);
      }
      
      setIsLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await signOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image width={10} height={10} src="/cake-factory-logo.svg" alt="Cake Factory" className="w-10 h-10" />
            <span className="text-xl font-bold bg-linear-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">Cake Factory</span>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-rose-300 hover:bg-rose-50 gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-linear-to-r from-rose-500/10 to-cyan-500/10 rounded-3xl border border-rose-200/50 p-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Bem-vindo ao Cake Factory! 👋
            </h1>
            <p className="text-lg text-slate-600 mb-4">
              Olá, <span className="font-semibold">{user?.email}</span>
            </p>
            <p className="text-slate-600">
              Você foi autenticado com sucesso no Supabase! Esta é uma página de dashboard de exemplo. 
              Em breve, você poderá gerenciar suas receitas, pedidos, clientes e inventário por aqui.
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Receitas', icon: '👨‍🍳', description: 'Gerencie suas receitas' },
              { title: 'Pedidos', icon: '📦', description: 'Acompanhe seus pedidos' },
              { title: 'Clientes', icon: '👥', description: 'Gerencie seus clientes' },
              { title: 'Inventário', icon: '📊', description: 'Controle seus ingredientes' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">✨ Próximas Funcionalidades</h3>
            <p className="text-blue-800 text-sm mb-4">
              Estamos desenvolvendo um dashboard completo com todas as funcionalidades necessárias para gerenciar sua fábrica de bolos.
            </p>
            <ul className="text-sm text-blue-800 space-y-2 ml-4">
              <li>✓ Autenticação com Supabase integrada</li>
              <li>✓ Gerenciamento de usuários e permissões</li>
              <li>✓ Integração com banco de dados PostgreSQL</li>
              <li>✓ Armazenamento em tempo real</li>
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="border-rose-300 hover:bg-rose-50">
                Voltar ao Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
