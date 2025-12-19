'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-funeral-green shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-funeral-yellow rounded-full flex items-center justify-center">
                <span className="text-funeral-green text-2xl font-bold">LO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-funeral-yellow text-xl font-bold">Los Olivos</span>
                <span className="text-funeral-cream text-xs">Córdoba y Sucre</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="/prevision-exequial"
              className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Previsión Exequial
            </Link>
            <Link
              href="/homenajes"
              className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Homenajes
            </Link>
            <Link
              href="/parque-cementerio"
              className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Parque Cementerio
            </Link>

            <div className="relative group">
              <button className="text-funeral-cream hover:text-funeral-yellow px-4 py-2 rounded-lg transition-colors font-medium flex items-center">
                Trámites
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-funeral-green-light rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/tramites/pqrsf"
                  className="block px-4 py-3 text-funeral-cream hover:text-funeral-yellow hover:bg-funeral-green transition-colors"
                >
                  Déjanos una PQRSF
                </Link>
                <Link
                  href="/tramites/solicitar-documentos"
                  className="block px-4 py-3 text-funeral-cream hover:text-funeral-yellow hover:bg-funeral-green transition-colors"
                >
                  Solicitar Documentos
                </Link>
                <Link
                  href="/tramites/solicitud-lapidas"
                  className="block px-4 py-3 text-funeral-cream hover:text-funeral-yellow hover:bg-funeral-green transition-colors"
                >
                  Solicitud de Lápidas
                </Link>
                <Link
                  href="/tramites/pagos-en-linea"
                  className="block px-4 py-3 text-funeral-cream hover:text-funeral-yellow hover:bg-funeral-green transition-colors rounded-b-lg"
                >
                  Hacer Pagos en Línea
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-funeral-cream hover:text-funeral-yellow"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-funeral-green-light">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-funeral-cream hover:text-funeral-yellow px-3 py-2 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block text-funeral-cream hover:text-funeral-yellow px-3 py-2 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/prevision-exequial"
              className="block text-funeral-cream hover:text-funeral-yellow px-3 py-2 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Previsión Exequial
            </Link>
            <Link
              href="/homenajes"
              className="block text-funeral-cream hover:text-funeral-yellow px-3 py-2 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Homenajes
            </Link>
            <Link
              href="/parque-cementerio"
              className="block text-funeral-cream hover:text-funeral-yellow px-3 py-2 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Parque Cementerio
            </Link>
            <div className="pt-2 pb-2">
              <p className="px-3 text-funeral-yellow font-semibold text-sm">Trámites</p>
              <Link
                href="/tramites/pqrsf"
                className="block text-funeral-cream hover:text-funeral-yellow px-6 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Déjanos una PQRSF
              </Link>
              <Link
                href="/tramites/solicitar-documentos"
                className="block text-funeral-cream hover:text-funeral-yellow px-6 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Documentos
              </Link>
              <Link
                href="/tramites/solicitud-lapidas"
                className="block text-funeral-cream hover:text-funeral-yellow px-6 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solicitud de Lápidas
              </Link>
              <Link
                href="/tramites/pagos-en-linea"
                className="block text-funeral-cream hover:text-funeral-yellow px-6 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hacer Pagos en Línea
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
