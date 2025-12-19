import Link from 'next/link';
import { CreditCard, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  'Ingresa tus datos y número de contrato',
  'Elige método de pago: tarjeta, PSE o transferencia',
  'Recibe comprobante y confirmación inmediata',
];

export default function PagosEnLineaPage() {
  return (
    <div className="bg-funeral-cream">
      <section className="bg-gradient-to-br from-funeral-green via-funeral-green-light to-funeral-green-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <CreditCard className="h-4 w-4" />
            <span>Pagos en línea</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold">Paga tus planes y servicios de forma segura</h1>
          <p className="text-lg text-funeral-cream/90 max-w-3xl mx-auto">
            Realiza tus pagos desde cualquier lugar. Procesamiento cifrado y soporte si tienes dudas durante el proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-funeral-yellow text-funeral-green hover:bg-funeral-yellow-light">
              <Link href="https://payu.com/">Ir a plataforma de pagos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funeral-green">
              <a href="tel:+575000000000">Necesito ayuda</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-funeral-green">Cómo pagar</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-funeral-green">Proceso sencillo y protegido</h2>
            <p className="text-lg text-funeral-gray max-w-3xl mx-auto">
              Aceptamos pagos con tarjeta, PSE y transferencias. Recibirás confirmación automática y soporte inmediato si lo necesitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step} className="rounded-3xl border border-funeral-green/10 bg-funeral-cream p-6 space-y-3 shadow-sm">
                <CheckCircle2 className="h-8 w-8 text-funeral-green" />
                <p className="text-lg text-funeral-green font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-funeral-yellow/20 border border-funeral-yellow/50 p-6 text-center text-funeral-green space-y-3">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <Shield className="h-5 w-5" />
              <span>Seguridad garantizada</span>
            </div>
            <p>Usamos plataformas certificadas con cifrado y validación antifraude.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-funeral-green text-white hover:bg-funeral-green-light">
                <Link href="/tramites/pagos-en-linea">Realizar pago</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-funeral-green text-funeral-green hover:bg-funeral-green hover:text-white">
                <a href="mailto:pagos@losolivos.com">Escribir soporte</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
