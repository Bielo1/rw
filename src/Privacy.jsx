import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-dark-grey">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-dark-grey/5">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: Noviembre 2025</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2 text-dark-grey">1. Información que recopilamos</h2>
            <p>En rha.lat, recopilamos información necesaria para proporcionar nuestros servicios de automatización de WhatsApp, incluyendo números de teléfono, nombres de contacto y el contenido de los mensajes procesados por nuestros bots.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-dark-grey">2. Uso de la información</h2>
            <p>Utilizamos estos datos exclusivamente para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Procesar y responder mensajes automáticamente.</li>
              <li>Gestionar citas y recordatorios en su calendario.</li>
              <li>Mejorar nuestros modelos de inteligencia artificial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-dark-grey">3. Protección de datos</h2>
            <p>Sus datos se almacenan en servidores seguros y no se comparten con terceros no autorizados. Cumplimos con las normativas locales de protección de datos.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-dark-grey">4. Contacto</h2>
            <p>Para cualquier duda sobre esta política, contáctenos en: admin@rha.lat</p>
          </section>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100">
            <a href="/" className="text-blue-600 hover:underline">← Volver al Inicio</a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;