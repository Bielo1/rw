import { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Menu, X, CheckCircle, ArrowRight, 
  Brain, Briefcase, Mic, Database, 
  Calendar, DollarSign, MessageCircle, Server
} from 'lucide-react';

// --- COMPONENTE: BARRA DE LOGOS (Tech Stack) ---
const TechStackTicker = () => {
  const techs = ["n8n", "EvolutionAPI", "OpenAI", "Supabase", "Chatwoot", "Docker"];
  return (
    <div className="py-8 bg-gray-50/50 border-y border-gray-100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          Potenciado por tu propia infraestructura
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, index) => (
            <span key={index} className="text-lg md:text-xl font-bold text-gray-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: SECCIÓN DE CARACTERÍSTICAS ---
const FeatureSection = ({ title, subtitle, description, features, icon: Icon, imagePosition = "right", badge }) => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              {Icon && <Icon size={16} />}
              {badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
              {subtitle}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visualización Abstracta (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-2xl border border-gray-700 transform hover:scale-[1.02] transition duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-3xl" />
              
              {/* Simulación de Chat */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden h-80 md:h-[500px] flex flex-col p-6 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
                
                {/* Mensajes Simulados */}
                <div className="space-y-4 mt-8 text-sm">
                  <div className="flex justify-end">
                    <div className="bg-green-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg">
                      <div className="flex items-center gap-2 mb-1 opacity-75 text-xs"><Mic size={12}/> Audio 0:15</div>
                      (Audio enviado por el usuario)
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white p-3 rounded-2xl rounded-tl-none max-w-[80%] shadow-lg">
                      <span className="text-blue-400 text-xs font-bold block mb-1">RHA.BOT</span>
                      Entendido. Agendé tu cita para el martes a las 4PM y envié el catálogo de zapatos rojos al cliente.
                    </div>
                  </div>
                  
                  {/* Elemento Flotante Decorativo */}
                  <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="text-purple-400" size={16} />
                      <span className="text-gray-300 font-mono text-xs">Supabase Memory Updated</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold text-white block mb-6 tracking-tight">RHA.LAT</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              El Sistema Operativo de WhatsApp. <br/>
              Tu segundo cerebro y tu mejor vendedor, viviendo en el mismo número.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">Módulos</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Asistente Personal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Ventas AI</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Soporte Nivel 1</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">Stack Tecnológico</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">n8n Workflows</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Evolution API</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Supabase Vector</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Términos de Uso</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} RHA.LAT Inc. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition">Contacto</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // El fondo "mosaico" se aplica aquí
    <div className="font-sans text-gray-900 bg-[#f8f9fa] bg-[url('/fondo.png')] bg-repeat">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">RHA.LAT</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#personal" className="text-gray-600 hover:text-blue-600 font-medium transition">Personal</a>
              <a href="#negocio" className="text-gray-600 hover:text-blue-600 font-medium transition">Negocio</a>
              <a href="#infra" className="text-gray-600 hover:text-blue-600 font-medium transition">Infraestructura</a>
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg shadow-gray-900/20 border border-gray-800">
                Demo en Vivo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#personal" className="text-gray-600 font-medium">Personal</a>
              <a href="#negocio" className="text-gray-600 font-medium">Negocio</a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
                Demo en Vivo
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sistema Operativo de WhatsApp v3.0
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-8"
            >
              El Agente Total: <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Personal + Negocio
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              Un solo número que actúa como tu <strong>Segundo Cerebro</strong> y la <strong>Primera Línea de Ventas</strong> de tu empresa. 
              <br className="hidden md:block"/>
              Sin costos por usuario. Multimodal nativo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                <MessageCircle size={20}/> Hablar con el Bot
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 text-lg font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Server size={20}/> Ver Arquitectura
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- TECH STACK --- */}
      <TechStackTicker />

      {/* --- CARACTERÍSTICAS --- */}
      <div className="space-y-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none h-32"></div>

        {/* 1. Asistente Personal */}
        <FeatureSection 
          title="Tu Segundo Cerebro"
          subtitle="Gestión de Vida & Productividad"
          description="Delega tu memoria. Reenvía audios, fotos o textos y el bot los organizará. Pregúntale cualquier cosa sobre tu pasado o agenda y te responderá buscando en tu historial semántico."
          badge="Módulo Personal"
          icon={Brain}
          features={[
            "Captura Rápida: Guarda ideas y pendientes al vuelo.",
            "Búsqueda Semántica (RAG): '¿Qué me dijo Juan el jueves?'",
            "Agenda Natural: Integración total con Google Calendar.",
            "Briefing Diario: Resumen automático cada mañana a las 7AM."
          ]}
          imagePosition="right"
        />

        {/* 2. Recepcionista & Ventas */}
        <FeatureSection 
          title="Ventas en Autopiloto"
          subtitle="SaaS Agéntico Nivel 1"
          description="Tu primera línea de defensa. Filtra curiosos, califica leads reales y cierra ventas simples enviando catálogos y links de pago automáticamente."
          badge="Módulo Negocio"
          icon={DollarSign}
          features={[
            "Recepción Multimodal: Entiende y transcribe audios de clientes.",
            "Cualificación BANT: Presupuesto, Autoridad, Necesidad, Tiempo.",
            "Envío de Catálogo: Fotos y precios directo en el chat.",
            "Cierre de Pagos: Generación de QR/Links y confirmación."
          ]}
          imagePosition="left"
        />

        {/* 3. Infraestructura */}
        <FeatureSection 
          title="Tu Propia Nube"
          subtitle="Sin costos ocultos por 'asiento'"
          description="Olvídate de pagar $99/mes por usuario en Salesforce o Intercom. Al usar tu propia VPS con n8n y EvolutionAPI, el costo es marginal y el control es tuyo."
          badge="Infraestructura"
          icon={Server}
          features={[
            "Control Total de Datos: Todo vive en tu Supabase.",
            "Modelos Flexibles: Usa OpenAI, Claude o Llama local.",
            "Escalado a Humano: Transferencia inteligente a Chatwoot.",
            "Archivos: Envío de PDFs y Docs desde Google Drive."
          ]}
          imagePosition="right"
        />

      </div>

      {/* --- CTA FINAL --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          {/* Patrón de fondo simple */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            ¿Listo para clonarte?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Implementa el Agente Total hoy mismo. Recupera tu tiempo personal y no pierdas ni una sola venta.
          </p>
          <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 border-b-4 border-gray-200 active:border-b-0 active:translate-y-1">
            Comenzar Implementación
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default App;