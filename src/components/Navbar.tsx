import React from 'react';
import { Menu, Truck, Package, MapPin, LogOut, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/accueil" className="flex items-center space-x-2">
              <Truck className="h-8 w-8" />
              <span className="font-bold text-xl">ExpressRoute</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/accueil"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/accueil') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/produits') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Produits
            </Link>
            <Link
              to="/commandes"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/commandes') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Commandes
            </Link>
            <Link
              to="/modele"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/modele') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Modèle TSP
            </Link>
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
            >
              <LogOut className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/accueil"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/accueil') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/produits') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Produits
            </Link>
            <Link
              to="/commandes"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/commandes') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Commandes
            </Link>
            <Link
              to="/modele"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/modele') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Modèle TSP
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
            >
              Déconnexion
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}