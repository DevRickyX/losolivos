import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-funeral-green text-funeral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-funeral-yellow rounded-full flex items-center justify-center">
                <span className="text-funeral-green text-xl font-bold">LO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-funeral-yellow text-lg font-bold">Los Olivos</span>
                <span className="text-funeral-cream text-xs">Córdoba y Sucre</span>
              </div>
            </div>
            <p className="text-sm text-funeral-cream/80">
              Acompañándote con respeto y dignidad en los momentos más difíciles.
            </p>
          </div>

          <div>
            <h3 className="text-funeral-yellow font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm hover:text-funeral-yellow transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/prevision-exequial" className="text-sm hover:text-funeral-yellow transition-colors">
                  Previsión Exequial
                </Link>
              </li>
              <li>
                <Link href="/homenajes" className="text-sm hover:text-funeral-yellow transition-colors">
                  Homenajes
                </Link>
              </li>
              <li>
                <Link href="/parque-cementerio" className="text-sm hover:text-funeral-yellow transition-colors">
                  Parque Cementerio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-funeral-yellow font-semibold text-lg mb-4">Trámites</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tramites/pqrsf" className="text-sm hover:text-funeral-yellow transition-colors">
                  PQRSF
                </Link>
              </li>
              <li>
                <Link href="/tramites/solicitar-documentos" className="text-sm hover:text-funeral-yellow transition-colors">
                  Solicitar Documentos
                </Link>
              </li>
              <li>
                <Link href="/tramites/solicitud-lapidas" className="text-sm hover:text-funeral-yellow transition-colors">
                  Solicitud de Lápidas
                </Link>
              </li>
              <li>
                <Link href="/tramites/pagos-en-linea" className="text-sm hover:text-funeral-yellow transition-colors">
                  Pagos en Línea
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-funeral-yellow font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-funeral-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">24/7</p>
                  <p className="text-sm font-semibold">+57 123 456 7890</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-funeral-yellow flex-shrink-0 mt-0.5" />
                <p className="text-sm">contacto@losolivos.com</p>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-funeral-yellow flex-shrink-0 mt-0.5" />
                <p className="text-sm">Córdoba y Sucre, Colombia</p>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-funeral-cream hover:text-funeral-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-funeral-cream hover:text-funeral-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-funeral-cream hover:text-funeral-yellow transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-funeral-green-light mt-8 pt-8 text-center">
          <p className="text-sm text-funeral-cream/60">
            &copy; {new Date().getFullYear()} Funeraria Los Olivos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
