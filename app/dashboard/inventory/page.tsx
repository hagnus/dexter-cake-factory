'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Plus, Edit2, Trash2, ArrowLeft, AlertCircle } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minimumStock: number;
  category: string;
  lastUpdated: string;
}

// Sample data - in a real app, this would come from Supabase
const SAMPLE_INGREDIENTS: Ingredient[] = [
  {
    id: '1',
    name: 'Farinha de Trigo',
    quantity: 50,
    unit: 'kg',
    minimumStock: 20,
    category: 'Grãos',
    lastUpdated: '2026-04-15',
  },
  {
    id: '2',
    name: 'Açúcar Refinado',
    quantity: 15,
    unit: 'kg',
    minimumStock: 10,
    category: 'Açúcares',
    lastUpdated: '2026-04-14',
  },
  {
    id: '3',
    name: 'Ovos',
    quantity: 5,
    unit: 'dúzias',
    minimumStock: 10,
    category: 'Laticínios',
    lastUpdated: '2026-04-15',
  },
  {
    id: '4',
    name: 'Manteiga',
    quantity: 8,
    unit: 'kg',
    minimumStock: 5,
    category: 'Laticínios',
    lastUpdated: '2026-04-13',
  },
  {
    id: '5',
    name: 'Leite Integral',
    quantity: 12,
    unit: 'litros',
    minimumStock: 15,
    category: 'Laticínios',
    lastUpdated: '2026-04-12',
  },
  {
    id: '6',
    name: 'Chocolate em Pó',
    quantity: 6,
    unit: 'kg',
    minimumStock: 3,
    category: 'Ingredientes Especiais',
    lastUpdated: '2026-04-15',
  },
  {
    id: '7',
    name: 'Discos de Chocolate',
    quantity: 4,
    unit: 'kg',
    minimumStock: 2,
    category: 'Ingredientes Especiais',
    lastUpdated: '2026-04-14',
  },
  {
    id: '8',
    name: 'Fermento em Pó',
    quantity: 2,
    unit: 'kg',
    minimumStock: 1,
    category: 'Agentes Químicos',
    lastUpdated: '2026-04-10',
  },
];

const CATEGORIES = ['Todos', 'Grãos', 'Açúcares', 'Laticínios', 'Ingredientes Especiais', 'Agentes Químicos'];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [ingredients, setIngredients] = useState<Ingredient[]>(SAMPLE_INGREDIENTS);

  // Filter ingredients based on search and category
  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ingredient => {
      const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || ingredient.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [ingredients, searchTerm, selectedCategory]);

  // Get low stock ingredients
  const lowStockCount = ingredients.filter(ing => ing.quantity <= ing.minimumStock).length;

  const handleDelete = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <img src="/cake-factory-logo.svg" alt="Cake Factory" className="w-10 h-10" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Inventário</h1>
                <p className="text-xs text-slate-500">Gerenciamento de Ingredientes</p>
              </div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 gap-2">
            <Plus className="w-4 h-4" />
            Novo Ingrediente
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert for low stock */}
        {lowStockCount > 0 && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-amber-900">Estoque Baixo</p>
              <p className="text-sm text-amber-800">{lowStockCount} ingrediente(s) com estoque abaixo do mínimo.</p>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <Card className="mb-6 border-rose-200">
          <CardHeader>
            <CardTitle>Buscar Ingredientes</CardTitle>
            <CardDescription>Procure por ingredientes e filtre por categoria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Digite o nome do ingrediente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Resultados ({filteredIngredients.length})
            </h2>
          </div>

          {filteredIngredients.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-600">Nenhum ingrediente encontrado</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
              {filteredIngredients.map(ingredient => {
                const isLowStock = ingredient.quantity <= ingredient.minimumStock;
                return (
                  <Card
                    key={ingredient.id}
                    className={`border-rose-200 hover:shadow-lg transition-all ${
                      isLowStock ? 'border-amber-300 bg-amber-50/50' : ''
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-slate-900 text-lg">{ingredient.name}</h3>
                            <p className="text-sm text-slate-500">{ingredient.category}</p>
                          </div>
                          {isLowStock && (
                            <span className="px-3 py-1 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full">
                              Estoque Baixo
                            </span>
                          )}
                        </div>

                        {/* Stock Info */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3">
                            <p className="text-xs text-slate-600 font-medium">Quantidade</p>
                            <p className="text-2xl font-bold text-cyan-600">
                              {ingredient.quantity} <span className="text-lg text-slate-600">{ingredient.unit}</span>
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-3">
                            <p className="text-xs text-slate-600 font-medium">Mínimo</p>
                            <p className="text-2xl font-bold text-rose-600">
                              {ingredient.minimumStock} <span className="text-lg text-slate-600">{ingredient.unit}</span>
                            </p>
                          </div>
                        </div>

                        {/* Stock Bar */}
                        <div>
                          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full transition-all ${
                                isLowStock
                                  ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                                  : 'bg-gradient-to-r from-emerald-400 to-green-500'
                              }`}
                              style={{
                                width: `${Math.min((ingredient.quantity / (ingredient.minimumStock * 2)) * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Last Updated */}
                        <p className="text-xs text-slate-500">
                          Atualizado em: {new Date(ingredient.lastUpdated).toLocaleDateString('pt-BR')}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-slate-300 hover:bg-slate-50 gap-2"
                          >
                            <Edit2 className="w-4 h-4" />
                            Editar
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-red-300 hover:bg-red-50 text-red-600 hover:text-red-700 gap-2"
                            onClick={() => handleDelete(ingredient.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                            Deletar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            {
              label: 'Total de Ingredientes',
              value: ingredients.length,
              color: 'from-cyan-100 to-blue-100',
              textColor: 'text-cyan-600',
            },
            {
              label: 'Estoque Normal',
              value: ingredients.filter(ing => ing.quantity > ing.minimumStock).length,
              color: 'from-emerald-100 to-green-100',
              textColor: 'text-emerald-600',
            },
            {
              label: 'Estoque Baixo',
              value: lowStockCount,
              color: 'from-amber-100 to-orange-100',
              textColor: 'text-amber-600',
            },
            {
              label: 'Categorias',
              value: new Set(ingredients.map(ing => ing.category)).size,
              color: 'from-rose-100 to-pink-100',
              textColor: 'text-rose-600',
            },
          ].map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-slate-600 mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
