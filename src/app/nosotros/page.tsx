import Link from 'next/link';
import { HeartHandshake, Users, Building2, Sparkles, Award, PhoneCall, Leaf, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrganicImage } from '@/components/OrganicImage';

const values = [
  {
    title: 'Humanidad ante todo',
    description: 'Escuchamos y acompañamos a cada familia con empatía, respeto y calidez.',
    icon: HeartHandshake,
  },
  {
    title: 'Excelencia y detalle',
    description: 'Procesos impecables, logística ágil y ceremonias cuidadas de principio a fin.',
    icon: Sparkles,
  },
  {
    title: 'Confianza y transparencia',
    description: 'Información clara, asesoría honesta y cumplimiento en cada servicio.',
    icon: ShieldCheck,
  },
];

const milestones = [
  { title: '25+ años', text: 'de acompañar a familias en Córdoba y Sucre' },
  { title: '12 sedes', text: 'capillas, salas de velación y oficinas cercanas' },
  { title: '24/7', text: 'equipo disponible para respuestas inmediatas' },
];

export default function NosotrosPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="relative overflow-hidden bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-funeral-green/80 to-funeral-green-dark/90" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              <Building2 className="h-4 w-4" />
              <span>Somos Los Olivos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Un equipo dedicado a honrar la vida</h1>
            <p className="text-lg text-funeral-cream/90 max-w-2xl">
              Profesionales en previsión exequial, logística, ceremonias y acompañamiento emocional. Nuestra misión es
              transformar cada despedida en un homenaje al amor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light text-base">
                <Link href="/contacto">Hablar con un asesor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green text-base">
                <a href="tel:+575000000000">Línea 24/7</a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <OrganicImage
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo humano de Los Olivos acompañando a una familia"
              variant="left"
              caption="Profesionales en previsión, ceremonias y apoyo emocional"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {milestones.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 backdrop-blur p-5 border border-white/20">
                  <p className="text-3xl font-semibold text-funeral-yellow">{item.title}</p>
                  <p className="text-funeral-cream/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Nuestra esencia</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Cultura de servicio y cuidado</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Trabajamos en equipo para ofrecer respuestas claras, procesos ágiles y ceremonias llenas de significado. Cada familia recibe acompañamiento integral.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <value.icon className="h-8 w-8 text-funeral-green" />
                <h3 className="text-xl font-semibold text-funeral-green">{value.title}</h3>
                <p className="text-funeral-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-funeral-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Equipo humano</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Especialistas a tu lado</h2>
            <p className="text-lg text-funeral-gray">
              Tanatólogos, asesores de previsión, psicólogos y personal logístico se articulan para ofrecer acompañamiento completo antes, durante y después de cada ceremonia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                title: 'Formación continua',
                text: 'Capacitación en protocolos, atención al duelo y experiencias ceremoniales.',
                icon: Award,
              },
              {
                title: 'Comunicación clara',
                text: 'Actualizaciones constantes para que la familia se sienta informada y tranquila.',
                icon: PhoneCall,
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
                <Link href="/prevision-exequial">Ver planes de previsión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <Link href="/homenajes">Conocer homenajes</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-2xl p-6 border border-funeral-green/10 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-funeral-green" />
              <p className="text-sm font-semibold text-funeral-green">Cómo trabajamos</p>
            </div>
            <ul className="space-y-3 text-funeral-gray">
              {["Escuchamos las necesidades y expectativas", 'Definimos un plan ceremonial y logístico claro', 'Acompañamos a la familia durante todo el proceso'].map(
                (step) => (
                  <li key={step} className="rounded-2xl bg-funeral-cream/60 border border-funeral-green/10 p-4">
                    {step}
                  </li>
                ),
              )}
            </ul>
            <div className="rounded-2xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-4 text-funeral-green">
              <p className="font-semibold">Vocación de servicio</p>
              <p>Estamos listos para apoyarte en cualquier momento, con respuestas rápidas y claras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Conecta con nosotros</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Estamos cerca para acompañarte</h2>
          <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
            Sedes en Montería, Sincelejo y municipios de Córdoba y Sucre. Llámanos, agenda una visita o permítenos orientarte en línea.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
              <a href="tel:+575000000000">Llamar ahora</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
              <Link href="/contacto">Escribir a un asesor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
