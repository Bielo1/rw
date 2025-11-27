import { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Menu, X, CheckCircle, 
  Brain, DollarSign, Server, 
  Mic, Wifi, Battery, Signal, FileText
} from 'lucide-react';

// --- DATOS DE EJEMPLO PARA LOS CHATS ---
const chatPersonal = [
  { role: 'user', type: 'audio', content: 'Audio: "Recuérdame pagar la luz mañana y ¿qué me dijo Juan del proyecto X?"', time: '09:30' },
  { role: 'assistant', type: 'text', content: '✅ Listo. Recordatorio creado para pagar la luz mañana a las 9AM.', time: '09:30' },
  { role: 'assistant', type: 'text', content: '🧠 Sobre Juan y el proyecto X: El jueves pasado mencionó que "necesitamos aprobar el presupuesto antes del viernes".', time: '09:31' }
];

const chatNegocio = [
  { role: 'user', type: 'text', content: 'Hola, me interesa el paquete premium, ¿qué precio tiene?', time: '14:15' },
  { role: 'assistant', type: 'text', content: '¡Hola! 👋 El paquete Premium cuesta $99/mes. Incluye soporte 24/7 y todas las integraciones.', time: '14:15' },
  { role: 'assistant', type: 'text', content: '¿Te gustaría que te envíe un enlace de pago o prefieres ver el catálogo completo?', time: '14:16' },
  { role: 'assistant', type: 'file', fileName: 'Catalogo_Servicios_2025.pdf', size: '2.4 MB', time: '14:16' }
];

const chatInfra = [
  { role: 'user', type: 'text', content: '/status sistema', time: '18:00' },
  { role: 'assistant', type: 'text', content: '🤖 **Estado del Sistema rha.lat:**\n\n✅ n8n Workflows: Activo\n✅ EvolutionAPI: Conectado (Ping: 45ms)\n✅ Supabase DB: Saludable\n\nTodos los servicios operando normalmente.', time: '18:00' },
  { role: 'assistant', type: 'text', content: '💾 Último backup de base de datos: Hoy, 17:55 hrs.', time: '18:01' }
];


// --- COMPONENTE: BARRA DE LOGOS (Tech Stack) ---
// === CAMBIO REALIZADO: Colores invertidos para resaltar ===
const TechStackTicker = () => {
  const techs = ["n8n", "EvolutionAPI", "OpenAI", "Supabase", "Chatwoot", "Docker"];
  return (
    // Cambiado a fondo oscuro (bg-dark-grey) y un poco más de padding (py-10)
    <div className="py-10 bg-dark-grey">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Texto cambiado a beige claro */}
        <p className="text-sm font-bold text-beige/60 uppercase tracking-widest mb-6">
          Potenciado por infraestructura propia
        </p>
        {/* Nombres de tecnología cambiados a beige y sin escala de grises */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500">
          {techs.map((tech, index) => (
            <span key={index} className="text-lg md:text-2xl font-bold text-beige">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: BURBUJA DE MENSAJE (Auxiliar) ---
const MessageBubble = ({ message }) => {
  const isAssistant = message.role === 'assistant';
  const bubbleClass = isAssistant 
    ? 'bg-wa-incoming text-dark-grey rounded-tl-none' 
    : 'bg-wa-green-light text-dark-grey rounded-tr-none'; 
  
  const alignClass = isAssistant ? 'justify-start' : 'justify-end';

  return (
    <div className={`flex ${alignClass}`}>
      <div className={`${bubbleClass} p-2 px-3 rounded-lg max-w-[85%] shadow-sm text-sm relative`}>
        {isAssistant && <span className="text-wa-green-dark text-xs font-bold block mb-1">rha.bot</span>}
        
        {message.type === 'text' && <div className="whitespace-pre-line">{message.content}</div>}
        
        {message.type === 'audio' && (
          <div className="flex items-center gap-2 text-dark-grey/70">
            <Mic size={16} /> <span className="italic text-xs">{message.content}</span>
          </div>
        )}

        {message.type === 'file' && (
           <div className="flex items-center gap-3 bg-dark-grey/5 p-2 rounded-md mt-1">
             <div className="bg-beige p-2 rounded flex items-center justify-center text-dark-grey/70">
               <FileText size={20} />
             </div>
             <div className="overflow-hidden">
               <div className="font-semibold truncate">{message.fileName}</div>
               <div className="text-xs text-dark-grey/60">{message.size} • PDF</div>
             </div>
           </div>
        )}

        <span className="text-[10px] text-dark-grey/60 block text-right mt-1 flex justify-end items-center gap-1">
          {message.time} {!isAssistant && <span>✓✓</span>}
        </span>
      </div>
    </div>
  );
}


// --- COMPONENTE: MOCKUP DE WHATSAPP ---
const WhatsAppMockup = ({ chatData = [] }) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    // === CAMBIO REALIZADO: Borde más grueso ===
    // Se cambió 'border-2' por 'border-4' para hacerlo "un pelín más grueso".
    // El color ya es 'border-dark-grey', que coincide con el footer.
    <div className="relative mx-auto border-4 border-dark-grey rounded-[2rem] h-[600px] w-[300px] shadow-xl bg-dark-grey overflow-hidden z-10">
      
      {/* Pantalla */}
      <div className="h-full w-full bg-wa-bg flex flex-col relative rounded-[1.7rem] overflow-hidden">
        
        {/* Barra de Estado */}
        <div className="bg-wa-green-dark text-white px-5 py-2 flex justify-between items-center text-[10px] z-10 pt-3">
          <span>{getCurrentTime()}</span>
          <div className="flex items-center gap-1">
            <Signal size={10} />
            <Wifi size={10} />
            <Battery size={10} />
          </div>
        </div>

        {/* Cabecera */}
        <div className="bg-wa-green-dark text-white px-3 py-2 flex items-center gap-3 z-10 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center text-dark-grey font-bold text-xs">
            rb
          </div>
          <div className="flex-1 leading-tight">
            <div className="font-semibold text-sm">rha.bot</div>
            <div className="text-xs opacity-80">en línea</div>
          </div>
        </div>
        
        {/* Fondo */}
        <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-10 pointer-events-none"></div>

        {/* Mensajes */}
        <div className="flex-1 p-3 overflow-y-auto space-y-3 relative z-0 font-sans bg-transparent scrollbar-hide">
          {chatData.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}
        </div>

        {/* Barra de Entrada */}
        <div className="bg-[#F0F0F0] px-2 py-2 flex items-center gap-2 text-dark-grey/60 relative z-10 pb-4">
           <div className="bg-white rounded-full h-8 flex-1 px-4 flex items-center text-sm shadow-sm">Escribe un mensaje</div>
           <div className="w-8 h-8 rounded-full bg-wa-green-dark flex items-center justify-center text-white shadow-sm">
             <Mic size={16} />
           </div>
        </div>

      </div>
    </div>
  );
};

// --- COMPONENTE: SECCIÓN DE CARACTERÍSTICAS ---
const FeatureSection = ({ title, subtitle, description, features, badge, imagePosition = "right", mockupData }) => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-grey/5 border border-dark-grey/10 text-dark-grey text-sm font-semibold mb-6">
              {badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-3 leading-tight">
              {title}
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-dark-grey/80 mb-6">
              {subtitle}
            </h3>
            <p className="text-base text-dark-grey/70 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="text-dark-grey" size={18} />
                  </div>
                  <span className="text-dark-grey/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visualización (Mockup de Celular) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex justify-center py-8"
          >
            <WhatsAppMockup chatData={mockupData} />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-dark-grey text-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-beige block mb-6 tracking-tight lowercase">rha.lat</span>
            <p className="text-beige/70 text-sm leading-relaxed">
              El Sistema Operativo de WhatsApp. <br/>
              Tu segundo cerebro y tu mejor vendedor, viviendo en el mismo número.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-beige uppercase tracking-wider mb-6">Módulos</h3>
            <ul className="space-y-4 text-beige/70 text-sm">
              <li><a href="#" className="hover:text-beige transition">Asistente Personal</a></li>
              <li><a href="#" className="hover:text-beige transition">Ventas AI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-beige uppercase tracking-wider mb-6">Stack</h3>
            <ul className="space-y-4 text-beige/70 text-sm">
              <li><a href="#" className="hover:text-beige transition">n8n</a></li>
              <li><a href="#" className="hover:text-beige transition">Evolution API</a></li>
              <li><a href="#" className="hover:text-beige transition">Supabase</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-beige uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4 text-beige/70 text-sm">
              <li><a href="#" className="hover:text-beige transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-beige transition">Términos</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-beige/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-beige/50 text-sm">
            © {new Date().getFullYear()} rha.lat. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans selection:bg-dark-grey selection:text-beige">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-beige/90 backdrop-blur-md border-b border-dark-grey/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-dark-grey tracking-tight lowercase">rha.lat</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#personal" className="text-dark-grey/80 hover:text-dark-grey font-medium transition text-sm uppercase tracking-wider">Personal</a>
              <a href="#negocio" className="text-dark-grey/80 hover:text-dark-grey font-medium transition text-sm uppercase tracking-wider">Negocio</a>
              <button className="bg-dark-grey text-beige px-6 py-2.5 rounded-full font-bold text-sm hover:bg-dark-grey/90 transition shadow-lg shadow-dark-grey/10">
                Demo en Vivo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-grey">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-beige border-b border-dark-grey/5 px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#personal" className="text-dark-grey font-medium">Personal</a>
              <a href="#negocio" className="text-dark-grey font-medium">Negocio</a>
              <button className="bg-dark-grey text-beige px-6 py-3 rounded-full font-bold w-full">
                Demo en Vivo
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-grey/5 border border-dark-grey/10 text-dark-grey font-medium text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-grey opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dark-grey"></span>
              </span>
              Sistema Operativo de WhatsApp v3.0
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-dark-grey leading-tight mb-8"
            >
              El Agente Total: <br/>
              Personal + Negocio
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-grey/70 mb-10 leading-relaxed font-medium"
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
              <button className="px-8 py-4 bg-dark-grey text-beige text-lg font-bold rounded-full hover:bg-dark-grey/90 transition shadow-xl shadow-dark-grey/20 flex items-center justify-center gap-2">
                <Mic size={20}/> Hablar con rha.bot
              </button>
              <button className="px-8 py-4 bg-transparent text-dark-grey text-lg font-bold rounded-full border-2 border-dark-grey/20 hover:border-dark-grey transition flex items-center justify-center gap-2">
                <Server size={20}/> Ver Arquitectura
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- TECH STACK (Ahora resaltado) --- */}
      <TechStackTicker />

      {/* --- CARACTERÍSTICAS --- */}
      <div className="space-y-0 relative py-12">

        {/* 1. Asistente Personal */}
        <FeatureSection 
          title="Tu Segundo Cerebro"
          subtitle="Gestión de Vida & Productividad"
          description="Delega tu memoria. Reenvía audios, fotos o textos y el bot los organizará. Pregúntale cualquier cosa sobre tu pasado o agenda."
          badge="Módulo Personal"
          features={[
            "Captura Rápida de ideas y pendientes.",
            "Búsqueda Semántica en tu historial.",
            "Agenda Natural con Google Calendar.",
            "Briefing Diario automático a las 7AM."
          ]}
          imagePosition="right"
          mockupData={chatPersonal}
        />

        {/* 2. Recepcionista & Ventas */}
        <FeatureSection 
          title="Ventas en Autopiloto"
          subtitle="SaaS Agéntico Nivel 1"
          description="Tu primera línea de defensa. Filtra curiosos, califica leads reales y cierra ventas simples enviando catálogos y links de pago."
          badge="Módulo Negocio"
          features={[
            "Recepción y transcripción de audios.",
            "Cualificación BANT automática.",
            "Envío de Catálogo en el chat.",
            "Generación de Links de Pago."
          ]}
          imagePosition="left"
          mockupData={chatNegocio}
        />

        {/* 3. Infraestructura */}
        <FeatureSection 
          title="Tu Propia Nube"
          subtitle="Control total, costo marginal"
          description="Olvídate de pagar por usuario. Al usar tu propia VPS con n8n y EvolutionAPI, el costo es mínimo y los datos son tuyos."
          badge="Infraestructura"
          features={[
            "Datos en tu propio Supabase.",
            "Modelos flexibles (OpenAI, etc).",
            "Escalado humano con Chatwoot.",
            "Conexión con Google Drive."
          ]}
          imagePosition="right"
          mockupData={chatInfra}
        />

      </div>

      {/* --- CTA FINAL --- */}
      <section className="py-32 relative overflow-hidden bg-dark-grey text-beige">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            ¿Listo para clonarte?
          </h2>
          <p className="text-beige/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Implementa el Agente Total hoy mismo. Recupera tu tiempo personal y no pierdas ni una sola venta.
          </p>
          <button className="bg-beige text-dark-grey px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-white transition-all duration-300">
            Comenzar Implementación
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default App;