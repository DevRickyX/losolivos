import Link from 'next/link';
import {
  Heart,
  Clock,
  Shield,
  Phone,
  MapPin,
  Flower2,
  Users,
  Sparkles,
  Leaf,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <div className="bg-funeral-cream">
      <HeroSlider />

      <section className="-mt-10 bg-white shadow-lg relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 rounded-2xl border border-funeral-green/10 bg-funeral-green text-white px-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Phone className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.2em] text-funeral-yellow">Línea 24/7</p>
              <p className="text-xl font-semibold">+57 123 456 7890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-funeral-green/10 bg-funeral-yellow/20 px-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Shield className="h-6 w-6 text-funeral-green" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.2em] text-funeral-green">Previsión</p>
              <p className="text-xl font-semibold text-funeral-green">Planes personalizados</p>
            </div>
            <Button asChild variant="link" className="text-funeral-green font-semibold">
              <Link href="/prevision-exequial" className="flex items-center gap-1">
                Conoce más <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-funeral-green/10 bg-white px-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-funeral-green/10">
              <MapPin className="h-6 w-6 text-funeral-green" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.2em] text-funeral-green">Cobertura</p>
              <p className="text-xl font-semibold text-funeral-green">Córdoba y Sucre</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Servicios integrales</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Honramos la vida con detalles cuidados</h2>
            </div>
            <p className="text-funeral-gray max-w-xl text-lg">
              Acompañamos cada paso con logística impecable, ceremonias personalizadas y acompañamiento humano permanente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-funeral-green/15 hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <div className="w-14 h-14 bg-funeral-yellow/25 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Previsión exequial</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Planes flexibles con cobertura inmediata y acompañamiento 24/7.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-funeral-gray">
                <p>Protege a tu familia con asistencia jurídica, tanatopraxia y traslados.</p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/prevision-exequial">Ver planes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-funeral-green/15 hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <div className="w-14 h-14 bg-funeral-yellow/25 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Homenajes memorables</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Ceremonias diseñadas para celebrar la esencia de quienes amas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-funeral-gray">
                <p>Ambientación, música en vivo y acompañamiento emocional para cada familia.</p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/homenajes">Explorar homenajes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-funeral-green/15 hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <div className="w-14 h-14 bg-funeral-yellow/25 rounded-2xl flex items-center justify-center mb-4">
                  <Flower2 className="h-8 w-8 text-funeral-green" />
                </div>
                <CardTitle className="text-funeral-green text-2xl">Parque cementerio</CardTitle>
                <CardDescription className="text-funeral-gray">
                  Espacios naturales para el recuerdo, con capillas y zonas de reflexión.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-funeral-gray">
                <p>Jardines, columbarios y lotes con mantenimiento permanente y seguridad.</p>
                <Button asChild variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/parque-cementerio">Visitar parque</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-funeral-yellow">Experiencia Los Olivos</p>
              <h2 className="text-3xl md:text-4xl font-semibold">¿Por qué las familias nos eligen?</h2>
              <p className="text-funeral-cream/90 text-lg">
                Un equipo humano que responde con empatía, infraestructura moderna y procesos digitales que simplifican cada trámite.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{ icon: Clock, title: 'Disponibles siempre', text: 'Respuestas en minutos y acompañamiento continuo.' }, { icon: Users, title: 'Equipo especializado', text: 'Tanatólogos, asesores y psicólogos a tu servicio.' }, { icon: Sparkles, title: 'Detalles significativos', text: 'Decoración floral, música y protocolos personalizados.' }, { icon: Leaf, title: 'Espacios de paz', text: 'Jardines verdes, capillas y salas cómodas.' }].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white/5 p-4 backdrop-blur">
                    <item.icon className="h-8 w-8 text-funeral-yellow mb-3" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-funeral-cream/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="rounded-3xl bg-white text-funeral-green shadow-2xl p-8 space-y-6 border border-funeral-green/10">
                <h3 className="text-2xl font-semibold">Acompañamiento paso a paso</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-funeral-gray">
                  {[{ title: 'Respuesta inmediata', text: 'Coordinamos traslados y documentación desde el primer contacto.' },
                  { title: 'Logística impecable', text: 'Capillas, salas de velación y ceremonias religiosas o laicas.' },
                  { title: 'Soporte posterior', text: 'Asesoría en trámites legales y espacios de apoyo emocional.' },
                  { title: 'Atención humana', text: 'Equipo especializado disponible en todo momento.' }].map((step, index) => (
                    <div key={step.title} className="flex gap-3 items-start rounded-2xl bg-funeral-cream/60 border border-funeral-green/10 p-4">
                      <span
                        className={`mt-1 h-3 w-3 rounded-full ${index % 2 === 0 ? 'bg-funeral-green' : 'bg-funeral-yellow'}`}
                      />
                      <div>
                        <p className="font-semibold text-funeral-green">{step.title}</p>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                  <Link href="/nosotros">Conoce nuestro equipo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Gestiones en línea</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green mb-4">Trámites digitales sin filas</h2>
            <p className="text-funeral-gray text-lg max-w-2xl mx-auto">
              Resuelve solicitudes, pagos y documentos desde cualquier lugar con atención asistida por nuestro equipo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Button asChild size="lg" variant="outline" className="h-auto py-5 border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white flex flex-col gap-1 text-center">
              <Link href="/tramites/pqrsf">
                <span className="font-semibold text-lg">PQRSF</span>
                <span className="text-xs text-funeral-gray">Déjanos tus peticiones y sugerencias</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-auto py-5 border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white flex flex-col gap-1 text-center">
              <Link href="/tramites/solicitar-documentos">
                <span className="font-semibold text-lg">Documentos</span>
                <span className="text-xs text-funeral-gray">Solicita certificados y soportes</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-auto py-5 border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white flex flex-col gap-1 text-center">
              <Link href="/tramites/solicitud-lapidas">
                <span className="font-semibold text-lg">Lápidas</span>
                <span className="text-xs text-funeral-gray">Gestiona diseños y reposiciones</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-auto py-5 border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white flex flex-col gap-1 text-center">
              <Link href="/tramites/pagos-en-linea">
                <span className="font-semibold text-lg">Pagos</span>
                <span className="text-xs text-funeral-gray">Realiza pagos en línea con seguridad</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green mb-4">Estamos aquí para ayudarte</h2>
          <p className="text-funeral-gray text-lg mb-8">
            Escríbenos o llámanos en cualquier momento. Nuestro equipo te guía con empatía y respuestas claras.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-funeral-yellow rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-funeral-green" />
                </div>
                <div>
                  <p className="text-funeral-gray text-sm">Línea de Atención</p>
                  <p className="text-funeral-green font-semibold text-lg">+57 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-funeral-yellow rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-funeral-green" />
                </div>
                <div>
                  <p className="text-funeral-gray text-sm">Ubicación</p>
                  <p className="text-funeral-green font-semibold text-lg">Córdoba y Sucre</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                <a href="tel:+571234567890">Llamar ahora</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <Link href="/nosotros">Conoce nuestras sedes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
