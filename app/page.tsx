'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Cake,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  Store,
  UtensilsCrossed,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Cake,
      title: 'Gestão de Receitas',
      description: 'Crie e organize suas receitas de bolos com ingredientes e instruções detalhadas.',
    },
    {
      icon: ShoppingCart,
      title: 'Pedidos',
      description: 'Gerencie todos os pedidos dos clientes com rastreamento em tempo real.',
    },
    {
      icon: Users,
      title: 'Clientes',
      description: 'Mantenha um banco de dados completo de seus clientes e histórico de pedidos.',
    },
    {
      icon: Package,
      title: 'Inventário',
      description: 'Controle seus ingredientes e produtos com alertas de reposição automática.',
    },
    {
      icon: Store,
      title: 'Vendas Online',
      description: 'Venda seus bolos pela internet com integração de pagamento e entrega.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Gestão de Menu',
      description: 'Configure e organize os tipos de bolos disponíveis com preços e descrições.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios',
      description: 'Visualize métricas de desempenho, vendas e tendências do negócio.',
    },
    {
      icon: Settings,
      title: 'Configurações',
      description: 'Personalize sua fábrica com preços, categorias e preferências.',
    },
  ];

  const benefits = [
    'Interface intuitiva e fácil de usar',
    'Controle total do seu negócio',
    'Geração de relatórios automática',
    'Suporte prioritário 24/7',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-rose-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/cake-factory-logo.svg" alt="Cake Factory" className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">Cake Factory</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Funcionalidades
            </a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">
              Vantagens
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contato
            </a>
          </div>
          <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0" asChild>
            <Link href="/sign-in">Entrar</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Gerencie sua{' '}
                <span className="bg-gradient-to-r from-rose-500 via-cyan-500 to-yellow-400 bg-clip-text text-transparent">
                  Fábrica de Bolos
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Uma plataforma completa para organizar receitas, gerenciar pedidos, controlar inventário e
                acompanhar o crescimento do seu negócio. Tudo em um só lugar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 group">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-300 hover:bg-rose-50"
              >
                Ver Demo
              </Button>
            </div>

            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-300/20 via-cyan-300/20 to-yellow-300/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-rose-200 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl">
                  <Cake className="w-8 h-8 text-rose-600 mb-2" />
                  <p className="font-semibold text-slate-900">Receitas</p>
                  <p className="text-sm text-slate-600 mt-1">Sem limite</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                  <ShoppingCart className="w-8 h-8 text-cyan-600 mb-2" />
                  <p className="font-semibold text-slate-900">Pedidos</p>
                  <p className="text-sm text-slate-600 mt-1">Rastreamento</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <Users className="w-8 h-8 text-yellow-600 mb-2" />
                  <p className="font-semibold text-slate-900">Clientes</p>
                  <p className="text-sm text-slate-600 mt-1">Histórico</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                  <Package className="w-8 h-8 text-emerald-600 mb-2" />
                  <p className="font-semibold text-slate-900">Inventário</p>
                  <p className="text-sm text-slate-600 mt-1">Controle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Funcionalidades Poderosas</h2>
          <p className="text-lg text-slate-600">Tudo que você precisa para gerenciar sua fábrica de bolos com eficiência</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: 'from-rose-100 to-pink-100', icon: 'text-rose-600' },
              { bg: 'from-cyan-100 to-blue-100', icon: 'text-cyan-600' },
              { bg: 'from-yellow-100 to-amber-100', icon: 'text-yellow-600' },
              { bg: 'from-emerald-100 to-green-100', icon: 'text-emerald-600' },
              { bg: 'from-purple-100 to-pink-100', icon: 'text-purple-600' },
              { bg: 'from-indigo-100 to-cyan-100', icon: 'text-indigo-600' },
              { bg: 'from-orange-100 to-rose-100', icon: 'text-orange-600' },
              { bg: 'from-teal-100 to-green-100', icon: 'text-teal-600' },
            ];
            const color = colors[index % colors.length];
            return (
              <Card key={index} className="border-rose-200 hover:shadow-lg hover:border-rose-300 transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${color.icon}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-rose-100/40 via-cyan-100/40 to-yellow-100/40 rounded-3xl border border-rose-200/60 p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Por que escolher a Cake Factory?</h2>
              <ul className="space-y-4">
                {[
                  'Ganhe tempo automatizando tarefas repetitivas',
                  'Diminua desperdício com controle de inventário',
                  'Aumente vendas com melhor gestão de clientes',
                  'Tome decisões baseadas em dados e relatórios',
                  'Acesse de qualquer lugar, a qualquer hora',
                  'Suporte dedicado sempre disponível',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-200">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-600 uppercase tracking-wide font-semibold">Estatísticas</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">500+</p>
                    <p className="text-slate-600">Usuários ativos</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">10K+</p>
                    <p className="text-slate-600">Pedidos processados</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">99.9%</p>
                    <p className="text-slate-600">Tempo de atividade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 rounded-3xl p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pronto para começar?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de padarias e fabricantes de bolos que já usam a Cake Factory para gerenciar seus
            negócios.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-slate-50 text-rose-600 border-0 font-semibold"
          >
            Começar Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/cake-factory-logo.svg" alt="Cake Factory" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent">Cake Factory</span>
              </div>
              <p className="text-sm text-slate-600">Gerencie sua fábrica de bolos com modernidade.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-slate-900">Preços</a></li>
                <li><a href="#" className="hover:text-slate-900">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Sobre</a></li>
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Privacidade</a></li>
                <li><a href="#" className="hover:text-slate-900">Termos</a></li>
                <li><a href="#" className="hover:text-slate-900">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-rose-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2026 Petit Boulangeria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
