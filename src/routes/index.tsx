import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain,
  Sparkles,
  Puzzle,
  Hand,
  BookOpen,
  Lightbulb,
  Check,
  ShieldCheck,
  Download,
  Printer,
  Baby,
  Lock,
  ChevronDown,
  Clock,
  Heart,
} from "lucide-react";

import megaMockupAsset from "@/assets/mega-mockup.jpg.asset.json";
import productoPrincipal from "@/assets/producto-principal.jpg";
import bono1 from "@/assets/bono-1.png.asset.json";
import bono2 from "@/assets/bono-2.png.asset.json";
import bono3 from "@/assets/bono-3.png.asset.json";
import bono4 from "@/assets/bono-4.png.asset.json";
import bono5 from "@/assets/bono-5.png.asset.json";
import bono6 from "@/assets/bono-6.png.asset.json";
import bono7 from "@/assets/bono-7.png.asset.json";
import bono8 from "@/assets/bono-8.png.asset.json";

const megaMockup = megaMockupAsset.url;

const CHECKOUT_PRINCIPAL = "[URL_CHECKOUT_HOTMART]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActivaMente Kids — Sistema de Enfoque | +100 actividades" },
      {
        name: "description",
        content:
          "Más de 100 actividades imprimibles para estimular la atención, la memoria y el razonamiento de niños de 3 a 14 años. Descarga digital por R$ 9,90.",
      },
      { property: "og:title", content: "ActivaMente Kids — Sistema de Enfoque" },
      {
        property: "og:description",
        content:
          "+100 actividades para estimular la atención, la memoria y el razonamiento mientras aprende y se divierte. Edades 3 a 14 años.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

/* ---------------------------------- data --------------------------------- */

const habilidades = [
  {
    icon: Brain,
    title: "Atención y concentración",
    text: "Actividades que invitan a sostener la mirada y el interés en una sola tarea, poco a poco y sin presión.",
    tone: "sky",
  },
  {
    icon: Sparkles,
    title: "Memoria y percepción",
    text: "Juegos de observación, parejas y diferencias que entrenan el recuerdo y el detalle visual.",
    tone: "sun",
  },
  {
    icon: Puzzle,
    title: "Lógica y razonamiento",
    text: "Secuencias, patrones y retos sencillos para que descubra el porqué de cada respuesta.",
    tone: "coral",
  },
  {
    icon: Hand,
    title: "Coordinación y motricidad",
    text: "Trazos, laberintos y recortes que acompañan el pulso, la mano y la precisión.",
    tone: "leaf",
  },
  {
    icon: BookOpen,
    title: "Aprendizaje",
    text: "Contenidos que combinan letras, números y vocabulario con el juego cotidiano.",
    tone: "sky",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento crítico",
    text: "Preguntas abiertas y pequeños desafíos para comparar, elegir y explicar sus ideas.",
    tone: "sun",
  },
];

const bonos = [
  {
    img: bono1.url,
    title: "MI MOMENTO CONSCIENTE",
    text: "Actividades para ayudar al niño a descubrir sus emociones, conectar con su cuerpo y observar con más atención el mundo que lo rodea.",
    benefit:
      "Favorece el autoconocimiento, la observación y la conciencia de sus emociones y sensaciones.",
  },
  {
    img: bono2.url,
    title: "CALMA EN ACCIÓN",
    text: "Actividades para reconocer el enojo, hacer una pausa y practicar estrategias sencillas de autorregulación.",
    benefit:
      "Ayuda al niño a reconocer lo que siente y descubrir formas más conscientes de responder a sus emociones.",
  },
  {
    img: bono3.url,
    title: "MI PEQUEÑO PLANIFICADOR",
    text: "Actividades de organización, planificación y rutinas pensadas especialmente para niños.",
    benefit:
      "Estimula la organización, la autonomía y la creación de pequeñas rutinas para el día a día.",
  },
  {
    img: bono4.url,
    title: "MI DIARIO DE FE Y GRATITUD",
    text: "Un diario infantil con propuestas de fe, reflexión y gratitud para acompañar pequeños momentos de la rutina.",
    benefit:
      "Crea un espacio para expresar pensamientos, reconocer cosas buenas del día y cultivar la gratitud.",
  },
  {
    img: bono5.url,
    title: "NAVIDAD CREATIVA",
    text: "Actividades lúdicas y creativas para disfrutar, aprender y crear durante la Navidad.",
    benefit:
      "Combina creatividad, aprendizaje y diversión a través de actividades inspiradas en la época navideña.",
  },
  {
    img: bono6.url,
    title: "MI LIBRO DE HOY",
    text: "Actividades para comprender, imaginar y disfrutar cada lectura de una forma más participativa.",
    benefit:
      "Estimula la comprensión, la imaginación y la conexión del niño con lo que está leyendo.",
  },
  {
    img: bono7.url,
    title: "¡ENCUENTRA AL INTRUSO!",
    text: "Juegos y desafíos visuales para observar, comparar y descubrir qué elemento no pertenece al grupo.",
    benefit: "Ejercita la atención, la lógica, la observación y la memoria de una forma divertida.",
  },
  {
    img: bono8.url,
    title: "LECTORES BRILLANTES",
    text: "Actividades para fortalecer la lectura, la comprensión y la confianza mientras el niño practica de forma progresiva y entretenida.",
    benefit:
      "Ayuda a practicar habilidades lectoras y de comprensión mediante diferentes tipos de actividades.",
  },
];

const faqs = [
  {
    q: "¿Es un producto físico o digital?",
    a: "Es 100% digital. Después de la compra recibes el acceso para descargar los archivos en formato PDF. No se envía nada por correo postal.",
  },
  {
    q: "¿Necesito imprimir las actividades?",
    a: "Puedes imprimirlas en casa o en cualquier copistería, en hojas comunes tamaño carta o A4. También puedes usarlas en una tablet con una app de escritura, si prefieres no imprimir.",
  },
  {
    q: "¿Qué incluye exactamente por R$ 9,90?",
    a: "Incluye el sistema ActivaMente Kids completo: más de 100 actividades imprimibles para edades de 3 a 14 años, organizadas por habilidad, con acceso inmediato tras la compra.",
  },
  {
    q: "¿Los materiales complementarios están incluidos?",
    a: "No. Los 8 materiales complementarios son opcionales y se adquieren por separado, a R$ 3,90 cada uno. El sistema principal funciona perfectamente por sí solo.",
  },
  {
    q: "¿Sirve para varios niños?",
    a: "Sí. Al ser imprimible, puedes reimprimir las actividades tantas veces como quieras para tus hijos o tu grupo en casa.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "El acceso llega al correo electrónico usado en la compra, justo después de confirmarse el pago.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Cuentas con 7 días de garantía. Si consideras que no es para ti, solicitas el reembolso dentro de ese plazo y se te devuelve el valor pagado.",
  },
];

const toneMap: Record<string, string> = {
  sky: "bg-sky-soft text-brand",
  sun: "bg-sun-soft text-coral",
  coral: "bg-coral-soft text-coral",
  leaf: "bg-leaf-soft text-leaf",
};

/* -------------------------------- components ------------------------------ */

function CtaPrincipal({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_PRINCIPAL}
      className={`inline-flex w-full max-w-xl items-center justify-center rounded-full bg-coral px-6 py-4 text-center font-display text-base leading-tight font-extrabold tracking-wide text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-lg ${className}`}
    >
      QUIERO ACTIVAMENTE KIDS POR US$ 9,90
    </a>
  );
}

function MicroTextos() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground sm:text-sm">
      <span className="inline-flex items-center gap-1.5">
        <Lock className="h-4 w-4 shrink-0 text-leaf" /> Compra 100% segura
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Download className="h-4 w-4 shrink-0 text-brand" /> Producto digital · acceso inmediato
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ShieldCheck className="h-4 w-4 shrink-0 text-coral" /> 7 días de garantía
      </span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="min-w-0 font-display text-base font-bold text-foreground sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={CHECKOUT_PRINCIPAL}
        className="flex w-full items-center justify-center rounded-full bg-coral px-4 py-3.5 text-center font-display text-sm leading-tight font-extrabold tracking-wide text-white shadow-card"
      >
        QUIERO ACTIVAMENTE KIDS POR US$ 9,90
      </a>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Landing() {
  return (
    <main className="bg-cream text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-soft blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-sun-soft blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-wide text-brand shadow-soft sm:text-sm">
            ActivaMente Kids — Sistema de Enfoque
          </span>

          <h1 className="mt-6 text-3xl leading-[1.15] font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Convierte{" "}
            <span className="rounded-xl bg-sun-soft px-2 py-0.5 text-coral">
              unos minutos al día
            </span>{" "}
            en un{" "}
            <span className="relative inline-block text-brand">
              entrenamiento divertido para su mente
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-soft"
              />
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Más de 100 actividades para estimular la atención, la memoria, el razonamiento y otras
            habilidades cognitivas mientras aprende y se divierte.
          </p>
        </div>

        {/* MEGA MOCKUP */}
        <div className="relative mx-auto mt-8 w-[95%] max-w-[750px] min-[900px]:w-[700px] sm:mt-10">
          <img
            src={megaMockup}
            alt="ActivaMente Kids y sus materiales complementarios: portadas de las actividades imprimibles para niños"
            width={1536}
            height={1024}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center px-1">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold tracking-wide sm:text-sm">
            <span className="rounded-full bg-white px-3 py-1.5 text-brand shadow-soft">
              ACTIVAMENTE KIDS
            </span>
            <span className="rounded-full bg-sky-soft px-3 py-1.5 text-brand">
              +100 ACTIVIDADES
            </span>
            <span className="rounded-full bg-sun-soft px-3 py-1.5 text-coral">
              PARA NIÑOS DE 3 A 14 AÑOS
            </span>
            <span className="rounded-full bg-coral-soft px-3 py-1.5 text-coral">
              PRODUCTO DIGITAL E IMPRIMIBLE
            </span>
          </div>

          <p className="font-display text-sm font-bold text-muted-foreground">
            Precio de lanzamiento
          </p>
          <p className="font-display text-5xl font-extrabold text-brand sm:text-6xl">US$ 9,90</p>

          <div className="mt-6 w-full">
            <CtaPrincipal />
          </div>
          <p className="mt-4 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
            Acceso digital • Material imprimible • Para niños de 3 a 14 años
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            ¿Cada vez es más difícil mantener su atención en una actividad?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            No estás sola ni solo. Muchas familias viven las mismas escenas cada tarde, y no se
            trata de falta de cariño ni de paciencia: simplemente hay mucho ruido alrededor.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "Empieza algo con entusiasmo y a los pocos minutos ya está en otra cosa.",
            "Las pantallas ganan siempre, y después cuesta volver a la calma.",
            "Repetir la misma indicación tres o cuatro veces se volvió rutina.",
            "Te gustaría acompañarlo, pero no sabes por dónde empezar ni qué proponerle.",
            "Buscas actividades en internet y pierdes más tiempo eligiendo que jugando.",
            "Quieres momentos juntos que sumen, no solo llenar el rato.",
          ].map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-3xl bg-cream p-5 text-left shadow-soft"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-coral-soft text-coral">
                <Heart className="h-4 w-4" />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base font-bold text-brand sm:text-lg">
          La buena noticia: la atención también se entrena, y se entrena mejor jugando.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-4 shadow-card">
            <img
              src={productoPrincipal}
              alt="Hojas de actividades imprimibles de ActivaMente Kids"
              width={1200}
              height={1008}
              loading="lazy"
              className="h-auto w-full rounded-[1.4rem] object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
              Conoce ActivaMente Kids
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un sistema de enfoque pensado para casa: actividades listas para imprimir, organizadas
              por habilidad y por edad, para que cada día tengas algo bueno que proponer en pocos
              minutos.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: Puzzle, t: "Más de 100 actividades organizadas por habilidad" },
                { icon: Baby, t: "Pensadas para edades de 3 a 14 años" },
                { icon: Printer, t: "Imprimibles en casa, cuantas veces quieras" },
                { icon: Download, t: "Digital: acceso inmediato tras la compra" },
                { icon: Clock, t: "Práctico: eliges e imprimes en menos de 2 minutos" },
                { icon: Sparkles, t: "Divertido: aprende sin darse cuenta de que aprende" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed text-foreground sm:text-base">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            Seis habilidades que se entrenan jugando
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cada actividad tiene una intención clara detrás del juego.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {habilidades.map(({ icon: Icon, title, text, tone }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-cream p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${toneMap[tone] ?? toneMap["sky"]}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PASOS */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
            Empezar es muy fácil
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Accede",
              d: "Compras y recibes el acceso digital al instante en tu correo.",
            },
            {
              n: "2",
              t: "Elige",
              d: "Seleccionas la actividad según la edad y la habilidad que quieras trabajar.",
            },
            {
              n: "3",
              t: "Activa su mente",
              d: "Imprimes, se sientan juntos y en pocos minutos ya está jugando y aprendiendo.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl bg-white p-6 text-center shadow-card">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-lg font-extrabold text-brand-foreground">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center px-1">
          <CtaPrincipal />
          <MicroTextos />
        </div>
      </section>

      {/* TIEMPO */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-sky-soft px-6 py-12 text-center shadow-soft sm:px-12">
          <h2 className="text-2xl leading-tight font-extrabold text-balance text-brand sm:text-3xl">
            Menos tiempo buscando qué hacer. Más momentos para aprender y compartir.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Todo está listo y ordenado: abres, eliges e imprimes. El tiempo que antes se iba
            buscando ideas ahora se queda con quien más importa.
          </p>
        </div>
      </section>

      {/* COMPLEMENTOS */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            ¿Quieres llevar la experiencia aún más lejos?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estos son materiales complementarios, opcionales e independientes.
          </p>
          <p className="mx-auto mt-5 max-w-2xl rounded-3xl bg-sun-soft px-5 py-4 text-sm leading-relaxed font-bold text-coral sm:text-base">
            Importante: estos materiales <u>no están incluidos</u> en los R$ 9,90 de ActivaMente
            Kids. Cada uno se adquiere por separado a R$ 3,90. El sistema principal funciona
            completo por sí solo.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {complementos.map((c, i) => (
            <article
              key={c.title}
              className="flex flex-col rounded-3xl border border-border bg-cream p-6 shadow-soft"
            >
              <h3 className="font-display text-base leading-snug font-extrabold text-brand">
                {c.title}
              </h3>
              <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <p className="mt-4 font-display text-2xl font-extrabold text-coral">R$ 3,90</p>
              <a
                href={`[INSERTAR AQUÍ URL DEL CHECKOUT HOTMART DE ${c.title}]`}
                className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-coral px-4 py-3 text-center text-sm font-extrabold tracking-wide text-coral transition-colors duration-200 hover:bg-coral hover:text-white"
              >
                AÑADIR POR R$ 3,90
              </a>
              <span className="sr-only">Material complementario número {i + 1}</span>
            </article>
          ))}
        </div>
      </section>

      {/* VALOR */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 shadow-card sm:p-10">
          <h2 className="text-center text-2xl leading-tight font-extrabold sm:text-3xl">
            Todo esto por solo R$ 9,90
          </h2>
          <ul className="mt-7 space-y-3">
            {[
              "Sistema ActivaMente Kids completo, con más de 100 actividades",
              "Organizadas por habilidad cognitiva y por franja de edad (3 a 14 años)",
              "Archivos imprimibles en casa, reutilizables cuantas veces quieras",
              "Acceso digital inmediato después de la compra",
              "Instrucciones simples para acompañar sin complicarte",
              "7 días de garantía",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="min-w-0 text-sm leading-relaxed sm:text-base">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center">
            <p className="font-display text-5xl font-extrabold text-brand">R$ 9,90</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Pago único · producto digital
            </p>
            <div className="mt-6 w-full">
              <CtaPrincipal />
            </div>
            <MicroTextos />
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
            ¿Para quién es ActivaMente Kids?
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "Madres y padres de niños de 3 a 14 años que quieren actividades con propósito.",
            "Familias que buscan alternativas atractivas frente al exceso de pantallas.",
            "Quien quiere acompañar el aprendizaje en casa sin preparar nada desde cero.",
            "Docentes y educadores que necesitan material listo para el aula o el refuerzo.",
            "Quien busca momentos tranquilos y compartidos en la rutina diaria.",
            "Familias que prefieren un recurso económico, reutilizable y siempre disponible.",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-3xl bg-cream p-5 shadow-soft">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <Check className="h-4 w-4" />
              </span>
              <p className="min-w-0 text-sm leading-relaxed sm:text-base">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-3xl grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-[2rem] bg-leaf-soft p-6 shadow-soft sm:gap-7 sm:p-10">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-dashed border-leaf bg-white text-leaf sm:h-24 sm:w-24">
            <span className="text-center font-display text-xs leading-tight font-extrabold">
              7<br />
              DÍAS
            </span>
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-extrabold sm:text-2xl">Garantía de 7 días</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
              Prueba el material con tranquilidad. Si en 7 días consideras que no es lo que
              buscabas, solicitas el reembolso y se te devuelve el valor pagado.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-16 pb-28 sm:px-6 sm:py-20 md:pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            Hoy puede ser el día en que jugar y aprender vuelvan a ir de la mano.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Unos minutos al día, una hoja a la vez, y muchos momentos juntos que valen la pena.
          </p>
          <p className="mt-8 font-display text-5xl font-extrabold text-brand sm:text-6xl">
            R$ 9,90
          </p>
          <div className="mt-6 w-full max-w-xl">
            <CtaPrincipal />
          </div>
          <MicroTextos />
        </div>

        <footer className="mx-auto mt-14 max-w-3xl border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
          <p className="font-bold text-foreground">ActivaMente Kids — Sistema de Enfoque</p>
          <p className="mt-2">
            Producto digital imprimible de carácter educativo y recreativo. No sustituye
            orientación, evaluación ni acompañamiento profesional de ningún tipo.
          </p>
        </footer>
      </section>

      <FloatingCta />
    </main>
  );
}
