import Link from 'next/link';
import { Heart, Music, Flower2, Sparkles, Camera, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Ceremonias con significado',
    text: 'Rituales personalizados con símbolos, lecturas y acompañamiento espiritual o laico.',
    icon: Sparkles,
  },
  {
    title: 'Música que acompaña',
    text: 'Ensambles en vivo, coros y playlists curadas para evocar recuerdos y gratitud.',
    icon: Music,
  },
  {
    title: 'Escenografías florales',
    text: 'Diseños botánicos, altares de luz y arreglos sostenibles que enaltecen cada homenaje.',
    icon: Flower2,
  },
];

const tributes = [
  {
    name: 'Homenaje Esencia',
    description: 'Un espacio sereno para agradecer la vida, con ambientación floral y acompañamiento cercano.',
    items: ['Ambientación floral esencial', 'Lecturas y palabras de despedida guiadas', 'Memorial digital con mensajes de la familia'],
  },
  {
    name: 'Homenaje Raíces',
    description: 'Ceremonia que honra la historia familiar, integrando símbolos, música y recuerdos compartidos.',
    items: ['Música en vivo (dueto acústico)', 'Video conmemorativo', 'Zona de memorias con fotografías y velas'],
  },
  {
    name: 'Homenaje Aurora',
    description: 'Una experiencia luminosa al amanecer o atardecer, con rituales de gratitud y acompañamiento emocional.',
    items: ['Ceremonia al aire libre o capilla', 'Guía emocional y ritual de luz', 'Registro fotográfico y streaming'],
  },
];

export default function HomenajesPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="relative overflow-hidden bg-gradient-to-r from-funeral-green via-funeral-green-light to-funeral-green-dark text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-funeral-green/80 to-funeral-green-dark/90" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              <Heart className="h-4 w-4" />
              <span>Un homenaje al amor</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Ceremonias que celebran la esencia de cada vida</h1>
            <p className="text-lg text-funeral-cream/90 max-w-2xl">
              Diseñamos experiencias memorables con flores, música y símbolos que reflejan la historia única de tus seres
              queridos. Cada detalle honra el amor que permanece.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light text-base">
                <Link href="/contacto">Coordinar un homenaje</Link>
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
                <Sparkles className="h-6 w-6 text-funeral-green" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-funeral-green">Cuidado integral</p>
                  <p className="text-xl font-semibold">Curamos cada detalle</p>
                </div>
              </div>
              <ul className="space-y-3 text-funeral-gray">
                {["Decoración floral boutique", 'Protocolo ceremonial y guiones personalizados', 'Asistencia emocional para la familia', 'Transmisión en vivo y recordatorios digitales'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Flower2 className="h-5 w-5 text-funeral-green mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button asChild className="w-full bg-funeral-green text-white hover:bg-funeral-green-light" size="lg">
                <Link href="/homenajes#tributos">Ver experiencias</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Experiencias</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Homenajes guiados por amor y gratitud</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Integramos música, flores, palabras y tecnología para que cada familia pueda despedirse con serenidad y sentirse acompañada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <item.icon className="h-8 w-8 text-funeral-green" />
                <h3 className="text-xl font-semibold text-funeral-green">{item.title}</h3>
                <p className="text-funeral-gray">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tributos" className="py-16 bg-funeral-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Diseños de homenaje</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Elige la atmósfera que mejor refleja su historia</h2>
              <p className="text-lg text-funeral-gray">
                Adaptamos cada homenaje a la personalidad y legado de tus seres queridos. Coordinamos música, palabras, flores y tecnología para compartir el recuerdo con quienes no pueden estar presentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                  <Link href="/contacto">Hablar con un asesor ceremonial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <a href="tel:+575000000000">Línea inmediata</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                title: 'Guiones y palabras',
                text: 'Curaduría de discursos, lecturas y rituales según la cultura y creencias.',
                icon: Users,
              },
              {
                title: 'Recuerdos digitales',
                text: 'Streaming, memorial online y cápsulas de video para compartir con la familia.',
                icon: Camera,
              },
              {
                title: 'Floristería consciente',
                text: 'Diseños sostenibles con especies locales y arreglos personalizados.',
                icon: Flower2,
              },
              {
                title: 'Música emotiva',
                text: 'Cuerdas, coros o playlists con canciones que acompañen el recuerdo.',
                icon: Music,
              }].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm border border-funeral-green/10">
                  <item.icon className="h-6 w-6 text-funeral-green mb-2" />
                  <h3 className="text-lg font-semibold text-funeral-green">{item.title}</h3>
                  <p className="text-funeral-gray text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tributes.map((tribute) => (
              <div key={tribute.name} className="rounded-3xl border border-funeral-green/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-funeral-green mb-2">{tribute.name}</h3>
                <p className="text-funeral-gray mb-4">{tribute.description}</p>
                <ul className="space-y-3 text-funeral-gray">
                  {tribute.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-funeral-green mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                  <Link href="/contacto">Solicitar propuesta</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
