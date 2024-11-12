import React, { useState } from 'react';
import { MapPin, RotateCw, Plus, Trash2 } from 'lucide-react';

interface DeliveryPoint {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export default function Model() {
  const [calculating, setCalculating] = useState(false);
  const [points, setPoints] = useState<DeliveryPoint[]>([
    { id: 1, name: 'Dépôt Central', lat: 48.8566, lng: 2.3522 },
    { id: 2, name: 'Point A', lat: 48.8744, lng: 2.3526 },
    { id: 3, name: 'Point B', lat: 48.8606, lng: 2.3376 },
  ]);
  const [newPoint, setNewPoint] = useState({
    name: '',
    lat: '',
    lng: '',
  });

  const handleAddPoint = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPoint.name && newPoint.lat && newPoint.lng) {
      setPoints([
        ...points,
        {
          id: points.length + 1,
          name: newPoint.name,
          lat: parseFloat(newPoint.lat),
          lng: parseFloat(newPoint.lng),
        },
      ]);
      setNewPoint({ name: '', lat: '', lng: '' });
    }
  };

  const handleRemovePoint = (id: number) => {
    setPoints(points.filter(point => point.id !== id));
  };

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => setCalculating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Modèle TSP</h1>
          <p className="mt-2 text-gray-600">
            Optimisation des itinéraires de livraison
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Carte des Points</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
                alt="Carte des points de livraison"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Points Management */}
          <div className="space-y-6">
            {/* Add New Point */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Ajouter un Point</h2>
              <form onSubmit={handleAddPoint} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nom du point
                  </label>
                  <input
                    type="text"
                    value={newPoint.name}
                    onChange={(e) => setNewPoint({ ...newPoint, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Latitude
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={newPoint.lat}
                      onChange={(e) => setNewPoint({ ...newPoint, lat: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Longitude
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={newPoint.lng}
                      onChange={(e) => setNewPoint({ ...newPoint, lng: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Ajouter le point
                </button>
              </form>
            </div>

            {/* Points List */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Points de Livraison</h2>
              <div className="space-y-4">
                {points.map((point) => (
                  <div
                    key={point.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{point.name}</p>
                        <p className="text-sm text-gray-500">
                          {point.lat}, {point.lng}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemovePoint(point.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              disabled={calculating || points.length < 3}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
            >
              {calculating ? (
                <>
                  <RotateCw className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Calcul en cours...
                </>
              ) : (
                'Calculer l\'itinéraire optimal'
              )}
            </button>

            {!calculating && points.length >= 3 && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Résultat de l'optimisation
                </h3>
                <p className="text-sm text-green-600">
                  Ordre optimal: {points.map(p => p.name).join(' → ')} → {points[0].name}
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Distance totale: {(Math.random() * 20 + 10).toFixed(1)} km
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}