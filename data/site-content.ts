export type PackageId = "basic" | "intermediate" | "advanced";

export const siteContent = {
  nav: [
    ["Servicios", "#servicios"], ["Proceso", "#proceso"], ["Resultados", "#resultados"],
    ["Paquetes", "#paquetes"], ["Contacto", "#contacto"],
  ],
  hero: {
    eyebrow: "ESTRATEGIA · CONTENIDO · META ADS",
    title: "Convertimos atención digital en crecimiento real.",
    text: "Creamos contenido, campañas y estrategias digitales diseñadas para conectar marcas con clientes reales.",
    indicators: ["Estrategia personalizada", "Contenido profesional", "Resultados medibles"],
  },
  services: [
    { title: "Meta Ads", text: "Campañas que buscan clientes, no solamente likes.", featured: true },
    { title: "Estrategia digital", text: "Una ruta clara para conectar objetivos, audiencias y contenido." },
    { title: "Diseño de contenido", text: "Sistemas visuales reconocibles, consistentes y listos para publicar." },
    { title: "Reels y video vertical", text: "Ideas, guiones y edición pensados para detener el scroll." },
    { title: "Administración de redes", text: "Planeación y ejecución coordinada para Facebook e Instagram." },
    { title: "Análisis de métricas", text: "Lecturas útiles de alcance, interacción y conversión; sin métricas de vanidad." },
    { title: "Soluciones personalizadas", text: "Un alcance diseñado alrededor del momento real de tu marca." },
  ],
  process: [
    ["Diagnóstico", "Entendemos el negocio, la audiencia y el punto de partida."],
    ["Planeación", "Definimos mensajes, canales, formatos y una ruta de acción."],
    ["Creación y lanzamiento", "Producimos, revisamos y activamos contenido y campañas."],
    ["Medición y optimización", "Leemos señales, aprendemos y ajustamos las siguientes decisiones."],
  ],
  caseStudy: {
    client: "Dr. Erick Gutiérrez",
    specialty: "Odontología estética y diseño de sonrisa.",
    challenge: "Construir una presencia digital más clara y capaz de atraer consultas relevantes.",
    strategy: "Desarrollamos una estrategia de contenido apoyada por campañas de Meta Ads para ampliar el alcance y atraer pacientes calificados.",
    result: "Una comunicación más consistente y una base medible para optimizar contenido y publicidad, sin prometer resultados artificiales.",
  },
  packages: [
    { id: "basic" as PackageId, label: "BÁSICO", price: "$7,000", description: "Presencia constante con una base publicitaria.", features: ["8 publicaciones", "5 posts o carruseles", "3 reels", "Instagram espejeado en Facebook", "1 campaña de Meta Ads"] },
    { id: "intermediate" as PackageId, label: "INTERMEDIO", price: "$11,000", description: "Más frecuencia, análisis y acompañamiento.", badge: "MÁS SOLICITADO", features: ["12 publicaciones", "6 posts o carruseles", "6 reels", "Instagram espejeado en Facebook", "2 campañas de Meta Ads", "Reporte mensual", "Recomendaciones"] },
    { id: "advanced" as PackageId, label: "AVANZADO", price: "$15,000", description: "Una operación de contenido y pauta más profunda.", features: ["16 publicaciones", "8 posts o carruseles", "8 reels", "Contenido diferente para Facebook e Instagram", "Campaña avanzada de Meta Ads", "Pruebas A/B", "Videollamada mensual"] },
  ],
  faqs: [
    ["¿La inversión de Meta Ads está incluida?", "No. La inversión publicitaria se paga directamente a Meta. Como referencia, el presupuesto sugerido es de $2,000 a $6,000 MXN mensuales, según objetivos y alcance."],
    ["¿Ustedes toman fotografías y videos?", "La producción se define según las necesidades del proyecto y puede cotizarse dentro de una solución personalizada."],
    ["¿Puedo personalizar un paquete?", "Sí. Podemos ajustar entregables y construir un alcance acorde con las prioridades de tu marca."],
    ["¿Cuándo comienzan a trabajar?", "Después de confirmar alcance, disponibilidad y materiales, acordamos contigo una fecha de arranque."],
    ["¿Trabajan fuera de Chihuahua?", "Sí. La estrategia, coordinación y operación digital pueden trabajarse a distancia."],
    ["¿Garantizan ventas?", "No prometemos resultados que dependen de múltiples factores. Sí ofrecemos estrategia, ejecución y optimización basada en datos."],
  ],
  contacts: {
    digital: [["Fer Ibaven", "6142562234"], ["Adriana Gaona", "6141205915"]],
    sales: [["Ana Silva", "6145775999"], ["Antonio Flores", "6141330500"]],
    instagram: "@adfer_marketing", facebook: "AdFerMarketing",
  },
};
