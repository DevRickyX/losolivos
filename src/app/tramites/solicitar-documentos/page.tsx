import Link from 'next/link';
import { FileSignature, CheckCircle2, Clock4 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const documents = ['Certificados de afiliación y cobertura', 'Constancias de cremación o inhumación', 'Copias de contratos o actas de servicio', 'Constancias de pago y paz y salvo'];

export default function SolicitarDocumentosPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <FileSignature className="h-4 w-4" />
            <span>Solicitar documentos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold">Descarga certificados y soportes sin filas</h1>
          <p className="text-lg text-funeral-cream/90 max-w-3xl mx-auto">
            Recibe tus documentos oficiales en el correo o agenda su entrega presencial. Te guiaremos en cada paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light">
              <Link href="https://forms.gle/">Solicitar en línea</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green">
              <a href="mailto:documentos@losolivos.com">Enviar correo</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Disponibles</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Documentos que puedes solicitar</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Respaldo oficial para tus trámites personales, laborales o de servicios funerarios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc} className="rounded-2xl bg-funeral-cream p-4 border border-funeral-green/10 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-funeral-green mt-1" />
                <span className="text-funeral-gray">{doc}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-6 text-center text-funeral-green space-y-3">
            <p className="text-xl font-semibold">Tiempos de entrega</p>
            <p>Enviamos tus documentos en un plazo estimado de 24 a 72 horas hábiles.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                <Link href="tel:+575000000000">Llamar a un asesor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <Link href="https://forms.gle/">Enviar solicitud</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-funeral-green">
              <Clock4 className="h-4 w-4" />
              <span>Te mantendremos informado por correo o Whatsapp</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
