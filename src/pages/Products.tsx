import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Ordinateur Portable Pro',
      price: 999.99,
      description: 'Ordinateur portable haute performance',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Smartphone 5G',
      price: 699.99,
      description: 'Dernier modèle avec appareil photo professionnel',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Tablette Tactile',
      price: 449.99,
      description: 'Parfaite pour les créatifs',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
      quantity: 0,
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: increment 
            ? product.quantity + 1 
            : Math.max(0, product.quantity - 1)
        };
      }
      return product;
    }));
  };

  const getTotalItems = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const getTotalPrice = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nos Produits</h1>
            <p className="mt-2 text-gray-600">
              Sélectionnez les produits à livrer
            </p>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
            <ShoppingCart className="h-6 w-6 text-indigo-600 mr-2" />
            <div>
              <p className="text-sm text-gray-600">Total articles: {getTotalItems()}</p>
              <p className="font-bold text-indigo-600">{getTotalPrice()}€</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    {product.price}€
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(product.id, false)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, true)}
                      className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200"
                    >
                      <Plus className="h-4 w-4 text-indigo-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}