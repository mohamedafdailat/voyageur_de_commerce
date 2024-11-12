import React from 'react';
import { Package, Truck, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Package, label: 'Livraisons', value: '1,234', change: '+12%' },
    { icon: Truck, label: 'Véhicules', value: '45', change: '+3' },
    { icon: Clock, label: 'Temps moyen', value: '28 min', change: '-15%' },
    { icon: MapPin, label: 'Destinations', value: '89', change: '+7' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tableau de Bord
          </h1>
          <p className="text-lg text-gray-600">
            Supervision en temps réel de vos livraisons
          </p>
    </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-indigo-600" />
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Map Preview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Carte des Livraisons
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Carte des livraisons"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Activité Récente
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    Livraison #{Math.floor(Math.random() * 1000)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {index === 0
                      ? 'Il y a 5 minutes'
                      : index === 1
                      ? 'Il y a 15 minutes'
                      : 'Il y a 30 minutes'}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Complété
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}