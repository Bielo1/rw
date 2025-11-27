import { useState } from 'react';
import { motion } from "framer-motion";
import { Menu, X, CheckCircle, ArrowRight } from 'lucide-react';

// --- COMPONENTE: BARRA DE LOGOS ---
const LogoTicker = () => {
  const logos = ["Empresa A", "TechCorp", "GlobalSoft", "Innovate", "FutureData", "CloudSystems"];
  return (
    <div className="py-10 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
          Empresas líderes que confían en rha.lat
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {logos.map((logo, index) => (
            <span key={index} className="text-xl md:text-2xl font-bold text-gray-400">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: SECCIÓN DE CARACTERÍSTICAS (Feature) ---
const FeatureSection = ({ title, description, features, imagePosition = "right" }) => {
  return (
    <div className="py-20 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 flex items-center text-blue-600 font-bold hover:text-blue-800 transition group">
              Conocer más <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Imagen (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-2 shadow-2xl border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm rounded-2xl" /> {/* Efecto cristal simple */}
              <div className="relative bg-white rounded-xl overflow-hidden h-64 md:h-96 flex items-center justify-center text-gray-400">
                {/* Aquí iría la captura de pantalla real de tu software */}
                <span className="text-lg">Captura de Pantalla: {title}</span>
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
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Logo y Resumen */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold text-white block mb-4">rha.lat</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              La plataforma de mensajería omnicanal diseñada para escalar tus ventas y soporte.
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} rha.lat Inc.
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Producto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Características</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Integraciones</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Precios</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API Docs</a></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Recursos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Comunidad</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Términos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Seguridad</a></li>
            </ul>
          </div>

        </div>

        {/* Barra inferior con Redes Sociales (Placeholder) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            {/* Iconos simples usando texto por ahora, puedes reemplazarlos con Lucide Icons */}
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
          <div className="text-gray-500 text-xs">
            Hecho con ❤️ en Bolivia
          </div>
        </div>

      </div>
    </footer>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-[#f8f9fa] bg-[url('/fondo.png')] bg-repeat">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">rha.lat</span>
            </div>

            {/* Enlaces Desktop */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition">Soluciones</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition">Precios</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition">Recursos</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Prueba Gratis
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Soluciones</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Precios</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Recursos</a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full">
                Prueba Gratis
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Hero */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-10"
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Impulsa tu negocio con <span className="text-blue-600">IA y Automatización</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Centraliza tus canales de mensajería, automatiza respuestas y escala tu soporte al cliente con la plataforma líder en el mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-600/20">
                  Comenzar Ahora
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 text-lg font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                  Agendar Demo
                </button>
              </div>
            </motion.div>

            {/* Imagen Hero (Placeholder) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Círculo decorativo de fondo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 -z-10 transform scale-110"></div>
              
              {/* Aquí iría tu imagen de producto */}
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md transform rotate-[-2deg] hover:rotate-0 transition duration-500">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  Dashboard Preview
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </header>

{/* --- SOCIAL PROOF --- */}
      <LogoTicker />

      {/* --- CARACTERÍSTICAS --- */}
      <section id="features" className="space-y-10">
        
        <FeatureSection 
          title="Bandeja de entrada unificada"
          description="Deja de saltar entre pestañas. Conecta WhatsApp, Messenger, Instagram, Telegram y Email en una sola plataforma colaborativa diseñada para equipos de alto rendimiento."
          features={[
            "Historial de conversación unificado por cliente.",
            "Asignación automática de chats a agentes.",
            "Notas internas y menciones de equipo."
          ]}
          imagePosition="right"
        />

        <FeatureSection 
          title="Automatización con IA y Chatbots"
          description="Reduce el tiempo de respuesta y califica leads automáticamente 24/7. Deja que la IA maneje las preguntas frecuentes y pasa a los humanos solo lo importante."
          features={[
            "Constructor de flujos visual (Drag & Drop).",
            "Integración nativa con ChatGPT y Dialogflow.",
            "Transferencia inteligente a agentes humanos."
          ]}
          imagePosition="left"
        />

        <FeatureSection 
          title="Analíticas que impulsan el crecimiento"
          description="Toma decisiones basadas en datos. Mide el tiempo de respuesta, la satisfacción del cliente y el rendimiento de tu equipo en tiempo real."
          features={[
            "Reportes de CSAT (Satisfacción del cliente).",
            "Métricas de productividad por agente.",
            "Exportación de datos para BI."
          ]}
          imagePosition="right"
        />

      </section>

      {/* --- FOOTER --- */}
      <Footer />

    </div>
  );
}

export default App;