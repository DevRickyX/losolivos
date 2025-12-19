import Link from 'next/link';
import { Heart, Clock, Shield, Phone, MapPin, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="bg-funeral-cream">
      <section className="relative bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Funeraria Los Olivos
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-funeral-yellow font-semibold">
              Córdoba y Sucre
            </p>
            <p className="text-lg md:text-xl mb-8 text-funeral-cream/90 max-w-3xl mx-auto">
              Acompañándote con dignidad, respeto y amor en los momentos más difíciles.
              Servicio disponible las 24 horas del día, los 365 días del año.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light font-semibold text-lg">
                <Link href="/prevision-exequial">Previsión Exequial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-yellow text-funeral-yellow hover:bg-funeral-yellow hover:text-funeral-green font-semibold text-lg">
                <Link href="/nosotros">Conócenos</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-2 text-funeral-yellow">
              <Phone className="h-6 w-6" />
              <span className="text-xl font-semibold">Línea 24/7: +57 123 456 7890</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-funeral-green mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-funeral-gray text-lg">
              Servicios integrales para honrar la memoria de tus seres queridos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-funeral-green/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-funeral-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Previsión Exequial</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Planifica con anticipación y protege a tu familia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-funeral-gray mb-4">
                  Planes personalizados que se ajustan a tus necesidades y presupuesto.
                </p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/prevision-exequial">Ver Planes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-funeral-green/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-funeral-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Homenajes</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Ceremonias personalizadas y significativas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-funeral-gray mb-4">
                  Creamos homenajes únicos que celebran la vida de tu ser querido.
                </p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/homenajes">Conocer Más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-funeral-green/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-funeral-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Flower2 className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Parque Cementerio</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Un lugar de paz y descanso eterno
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-funeral-gray mb-4">
                  Espacios naturales diseñados para el recuerdo y la reflexión.
                </p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/parque-cementerio">Visitar Parque</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-funeral-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-funeral-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-funeral-yellow">Disponibilidad 24/7</h3>
              <p className="text-funeral-cream/80">
                Estamos disponibles las 24 horas del día, todos los días del año.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-funeral-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-funeral-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-funeral-yellow">Atención Personalizada</h3>
              <p className="text-funeral-cream/80">
                Cada familia recibe un trato único y especial adaptado a sus necesidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-funeral-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-funeral-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-funeral-yellow">Presencia Regional</h3>
              <p className="text-funeral-cream/80">
                Servicio en Córdoba y Sucre con instalaciones modernas y confortables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-funeral-green mb-6">
              ¿Necesitas Realizar un Trámite?
            </h2>
            <p className="text-funeral-gray text-lg mb-8 max-w-2xl mx-auto">
              Facilitamos tus gestiones con nuestras plataformas digitales
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white h-auto py-4">
                <Link href="/tramites/pqrsf" className="flex flex-col items-center">
                  <span className="font-semibold">PQRSF</span>
                  <span className="text-xs mt-1">Peticiones y Quejas</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white h-auto py-4">
                <Link href="/tramites/solicitar-documentos" className="flex flex-col items-center">
                  <span className="font-semibold">Documentos</span>
                  <span className="text-xs mt-1">Solicitar Documentos</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white h-auto py-4">
                <Link href="/tramites/solicitud-lapidas" className="flex flex-col items-center">
                  <span className="font-semibold">Lápidas</span>
                  <span className="text-xs mt-1">Solicitud de Lápidas</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white h-auto py-4">
                <Link href="/tramites/pagos-en-linea" className="flex flex-col items-center">
                  <span className="font-semibold">Pagos</span>
                  <span className="text-xs mt-1">Pagos en Línea</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-funeral-green mb-6">
            Contáctanos
          </h2>
          <p className="text-funeral-gray text-lg mb-8">
            Estamos aquí para acompañarte en todo momento
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-funeral-yellow rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-funeral-green" />
                </div>
                <div className="text-left">
                  <p className="text-funeral-gray text-sm">Línea de Atención</p>
                  <p className="text-funeral-green font-semibold text-lg">+57 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-funeral-yellow rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-funeral-green" />
                </div>
                <div className="text-left">
                  <p className="text-funeral-gray text-sm">Ubicación</p>
                  <p className="text-funeral-green font-semibold text-lg">Córdoba y Sucre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
