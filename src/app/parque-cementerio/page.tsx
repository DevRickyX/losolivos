import Link from 'next/link';
import { Leaf, MapPin, Trees, Building2, HeartHandshake, Shield, Camera, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const spaces = [
  {
    title: 'Jardines y senderos',
    text: 'Áreas verdes con diseño paisajístico para caminar, meditar y recordar en tranquilidad.',
    icon: Trees,
  },
  {
    title: 'Capillas y salas',
    text: 'Capillas íntimas y salas de velación con tecnología para ceremonias presenciales y virtuales.',
    icon: Building2,
  },
  {
    title: 'Columbarios y lotes',
    text: 'Opciones de cenizarios, columbarios y lotes familiares con mantenimiento permanente.',
    icon: Shield,
  },
];

const services = [
  {
    title: 'Logística integral',
    description: 'Coordinamos permisos, trámites y acompañamos a la familia durante todo el proceso.',
  },
  {
    title: 'Ceremonias a medida',
    description: 'Homenajes al aire libre con música, flores y protocolos respetuosos con la naturaleza.',
  },
  {
    title: 'Recordatorios digitales',
    description: 'Señalización, streaming y memorial online para quienes no pueden asistir.',
  },
];

export default function ParqueCementerioPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="relative overflow-hidden bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-funeral-green/80 to-funeral-green-dark/90" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              <Leaf className="h-4 w-4" />
              <span>Espacios para el recuerdo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Parque Cementerio Los Olivos</h1>
            <p className="text-lg text-funeral-cream/90 max-w-2xl">
              Jardines, capillas y senderos diseñados para visitar y honrar a tus seres queridos con serenidad. Cuidamos cada
              detalle para que cada encuentro sea un homenaje al amor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light text-base">
                <Link href="/contacto">Agendar visita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green text-base">
                <a href="tel:+575000000000">Línea 24/7</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl" aria-hidden />
            <div className="relative rounded-3xl bg-white text-funeral-green shadow-2xl p-6 space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-funeral-green" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-funeral-green">Córdoba y Sucre</p>
                  <p className="text-xl font-semibold">Cercanía y accesos cómodos</p>
                </div>
              </div>
              <ul className="space-y-3 text-funeral-gray">
                {["Sedes con parqueaderos y accesibilidad", 'Zonas verdes con mantenimiento permanente', 'Seguridad y acompañamiento las 24 horas'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Leaf className="h-5 w-5 text-funeral-green mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button asChild className="w-full bg-funeral-green text-white hover:bg-funeral-green-light" size="lg">
                <Link href="/parque-cementerio#espacios">Explorar espacios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="espacios" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Zonas especiales</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Un lugar natural para recordar</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Espacios diseñados para caminar, agradecer y compartir en familia, con infraestructura moderna y naturaleza viva.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spaces.map((space) => (
              <div key={space.title} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <space.icon className="h-8 w-8 text-funeral-green" />
                <h3 className="text-xl font-semibold text-funeral-green">{space.title}</h3>
                <p className="text-funeral-gray">{space.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Servicios en el parque</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Acompañamiento en cada visita</h2>
            <p className="text-lg text-funeral-gray">
              Nuestro equipo logístico y ceremonial está listo para coordinar homenajes, mantenimiento y acompañamiento a las familias durante sus visitas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                title: 'Rutas acompañadas',
                text: 'Personal de guía y seguridad para acompañarte en cada recorrido.',
                icon: HeartHandshake,
              },
              {
                title: 'Horarios extendidos',
                text: 'Acceso en horarios amplios y ceremonias especiales en fechas significativas.',
                icon: Clock,
              }].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm border border-funeral-green/10">
                  <item.icon className="h-6 w-6 text-funeral-green mb-2" />
                  <h3 className="text-lg font-semibold text-funeral-green">{item.title}</h3>
                  <p className="text-funeral-gray text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                <Link href="/homenajes">Ver ceremonias en el parque</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-2xl p-6 border border-funeral-green/10 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Camera className="h-6 w-6 text-funeral-green" />
              <p className="text-sm font-semibold text-funeral-green">Qué encontrarás</p>
            </div>
            <ul className="space-y-3 text-funeral-gray">
              {services.map((service) => (
                <li key={service.title} className="rounded-2xl bg-funeral-cream/60 border border-funeral-green/10 p-4">
                  <p className="font-semibold text-funeral-green">{service.title}</p>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-4 text-funeral-green">
              <p className="font-semibold">Visitas guiadas</p>
              <p>Programa tu recorrido y conoce nuestros jardines y capillas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
