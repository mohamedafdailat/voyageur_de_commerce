import React, { useState } from 'react';
import { Package, MapPin, Clock, Search } from 'lucide-react';

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: '1234',
      client: 'Marie Dupont',
      address: '15 Rue de la Paix, Paris',
      status: 'En cours',
      time: '10:30',
      priority: 'Haute',
    },
    {
      id: '1235',
      client: 'Jean Martin',
      address: '8 Avenue des Champs-Élysées, Paris',
      status: 'En attente',
      time: '11:45',
      priority: 'Normale',
    },
    {
      id: '1236',
      client: 'Sophie Bernard',
      address: '25 Boulevard Haussmann, Paris',
      status: 'Livré',
      time: '09:15',
      priority: 'Basse',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'En attente':
        return 'bg-red-100 text-red-800';
      case 'Livré':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Haute':
        return 'text-red-600';
      case 'Normale':
        return 'text-yellow-600';
      case 'Basse':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Commandes</h1>
          <p className="mt-2 text-gray-600">
            Gérez et suivez toutes vos livraisons
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-lg shadow p-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Rechercher une commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white shadow rounded-lg">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Commande
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Adresse
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Priorité
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Package className="h-5 w-5 text-gray-400 mr-2" />
                              <div className="text-sm font-medium text-gray-900">
                                #{order.id}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {order.client}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                              <div className="text-sm text-gray-900">
                                {order.address}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div
                              className={`text-sm font-medium ${getPriorityColor(
                                order.priority
                              )}`}
                            >
                              {order.priority}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}