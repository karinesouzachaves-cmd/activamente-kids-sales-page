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
  Lock,
  ChevronDown,
  Clock,
  Target,
  Frown,
  Smartphone,
  ListChecks,
  Printer,
  Smile,
} from "lucide-react";

import megaMockupAsset from "@/assets/mega-mockup.jpg.asset.json";
import capaActiva from "@/assets/capa-activa.jpg.asset.json";
import bono1 from "@/assets/bono-1.png.asset.json";
import bono2 from "@/assets/bono-2.png.asset.json";
import bono3 from "@/assets/bono-3.png.asset.json";
import bono4 from "@/assets/bono-4.png.asset.json";
import bono5 from "@/assets/bono-5.png.asset.json";
import bono6 from "@/assets/bono-6.png.asset.json";
import bono7 from "@/assets/bono-7.png.asset.json";
import bono8 from "@/assets/bono-8.png.asset.json";
import prueba1 from "@/assets/prueba-1.jpg.asset.json";
import prueba2 from "@/assets/prueba-2.jpg.asset.json";
import prueba3 from "@/assets/prueba-3.jpg.asset.json";

const megaMockup = megaMockupAsset.url;

const CHECKOUT_PRINCIPAL = "[URL_CHECKOUT_HOTMART]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActivaMente Kids — Sistema de Enfoque | +100 actividades" },
      {
        name: "description",
        content:
          "Más de 100 actividades imprimibles para estimular la atención, la memoria y el razonamiento de niños de 3 a 14 años. Descarga digital por US$ 9,90.",
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
    q: "¿Qué incluye exactamente por US$ 9,90?",
    a: "Incluye el sistema ActivaMente Kids completo: más de 100 actividades imprimibles para edades de 3 a 14 años, organizadas por habilidad, con acceso inmediato tras la compra.",
  },
  {
    q: "¿Los materiales complementarios están incluidos?",
    a: "Sí. Los 8 materiales complementarios están incluidos como bonos, sin costo adicional, junto con el sistema principal ActivaMente Kids.",
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
              ActivaMente Kids
            </span>
            <span className="rounded-full bg-sky-soft px-3 py-1.5 text-brand">
              +100 ACTIVIDADES
            </span>
            <span className="rounded-full bg-sun-soft px-3 py-1.5 text-coral">
              PARA NIÑOS DE 3 A 14 AÑOS
            </span>
            <span className="rounded-full bg-coral-soft px-3 py-1.5 text-coral">
              MATERIAL DIGITAL LISTO PARA IMPRIMIR
            </span>
          </div>

        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            ¿Te resulta familiar?
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              Icon: Puzzle,
              bg: "bg-sky-soft",
              fg: "text-brand",
              t: "Empieza una actividad… y enseguida pierde el interés.",
            },
            {
              Icon: Target,
              bg: "bg-sun-soft",
              fg: "text-coral",
              t: "Le cuesta mantenerse concentrado hasta terminar lo que empieza.",
            },
            {
              Icon: Frown,
              bg: "bg-coral-soft",
              fg: "text-coral",
              t: "Cuando algo parece difícil, puede frustrarse y querer abandonar.",
            },
            {
              Icon: Smartphone,
              bg: "bg-sky-soft",
              fg: "text-brand",
              t: "Y muchas veces la pantalla termina siendo la opción más fácil para mantenerlo entretenido.",
            },
          ].map(({ Icon, bg, fg, t }) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-3xl bg-cream p-5 text-left shadow-soft"
            >
              <span
                className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full ${bg} ${fg}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t}
              </p>
            </div>
          ))}
        </div>

        {/* MENSAJE DE VALOR */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-xl leading-snug font-extrabold text-balance sm:text-2xl lg:text-3xl">
            Más de 100 actividades creadas para estimular la{" "}
            <span className="font-extrabold text-brand">atención</span>, la{" "}
            <span className="font-extrabold text-coral">concentración</span>, la{" "}
            <span className="font-extrabold text-brand">memoria</span>, el{" "}
            <span className="font-extrabold text-coral">razonamiento lógico</span>, la coordinación
            motora fina, la asociación, las secuencias, las formas y los patrones.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todo ello a través de actividades pensadas para ayudar al niño a mantener la atención
            por más tiempo, involucrarse en lo que está haciendo, seguir instrucciones y avanzar en
            cada nuevo desafío sin perder el interés tan fácilmente.
          </p>
        </div>

        {/* PRIMER BLOQUE DE COMPRA */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center px-1">
          <p className="font-display text-5xl font-extrabold text-brand sm:text-6xl">US$ 9,90</p>
          <div className="mt-6 w-full">
            <a
              href={CHECKOUT_PRINCIPAL}
              className="block w-full rounded-full bg-coral px-6 py-5 text-center text-base font-extrabold tracking-wide text-white shadow-card transition hover:brightness-105 sm:text-lg"
            >
              QUIERO ACTIVAMENTE
            </a>
          </div>
          <p className="mt-4 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
            Descarga digital • Imprime y utiliza las actividades
          </p>
        </div>

      </section>

      {/* SOLUCIÓN */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-[2rem] bg-white p-4 shadow-card sm:p-6">
              <img
                src={capaActiva.url}
                alt="Portada del libro de actividades ActivaMente Kids"
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[520px] object-contain"
              />
            </div>

            <div>
              <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
                <span aria-hidden="true">⭐</span> ActivaMente Kids — +100 actividades
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Actividades para estimular la atención, la concentración, la memoria, el
                razonamiento lógico, las secuencias, los patrones, la asociación, la coordinación
                motora fina y otras habilidades importantes para el aprendizaje.
              </p>
            </div>
          </div>

          {/* Transición a los bonos */}
          <p className="mx-auto mt-12 max-w-2xl rounded-2xl bg-cream px-5 py-4 text-center text-base font-bold text-foreground shadow-card sm:text-lg">
            <span aria-hidden="true">🎁</span> Y además, recibirás{" "}
            <span className="rounded-lg bg-brand/10 px-1.5 py-0.5 font-extrabold text-brand">
              7 bonos especiales
            </span>{" "}
            para complementar su aprendizaje
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: bono1.url,
                nombre: "Bono 1 — Mi Momento Consciente",
                desc: "Actividades para ayudar al niño a reconocer sus emociones, conectar con su cuerpo y observar el mundo que lo rodea, desarrollando atención y conciencia de una manera sencilla y natural.",
              },
              {
                img: bono2.url,
                nombre: "Bono 2 — Calma en Acción",
                desc: "Actividades para ayudar al niño a reconocer el enojo, hacer una pausa y practicar estrategias de autorregulación para afrontar mejor esos momentos de emociones intensas.",
              },
              {
                img: bono3.url,
                nombre: "Bono 3 — Mi Pequeño Planificador",
                desc: "Un recurso visual para ayudar al niño a organizar su semana, crear rutinas y acompañar pequeñas responsabilidades, favoreciendo la organización y la autonomía.",
              },
              {
                img: bono4.url,
                nombre: "Bono 4 — Mi Diario de Fe y Gratitud",
                desc: "Un diario infantil para crear momentos de fe, reflexión y gratitud, ayudando al niño a expresar lo que siente, reconocer lo bueno de cada día y cultivar valores positivos.",
              },
              {
                img: bono5.url,
                nombre: "Bono 5 — Navidad Creativa",
                desc: "Actividades lúdicas y creativas para que los niños puedan aprender, crear y divertirse durante la Navidad, transformando esta época especial en nuevos momentos de aprendizaje.",
              },
              {
                img: bono6.url,
                nombre: "Bono 6 — Mi Libro de Hoy",
                desc: "Actividades para acompañar cada lectura y ayudar al niño a comprender, imaginar, interpretar y expresar lo que entendió, haciendo de la lectura una experiencia más participativa.",
              },
              {
                img: bono7.url,
                nombre: "Bono 7 — ¡Encuentra al Intruso!",
                desc: "Juegos visuales de observación para entrenar la atención, la memoria y el razonamiento lógico, desafiando al niño a observar, pensar y descubrir cuál elemento es diferente.",
              },
            ].map((b, index) => (
              <article
                key={b.nombre}
                className={`rounded-[1.6rem] bg-white p-3 shadow-card ${index === 6 ? "lg:col-start-2" : ""}`}
              >
                <img
                  src={b.img}
                  alt={b.nombre}
                  loading="lazy"
                  className="mx-auto h-60 w-full object-contain sm:h-72"
                />
                <h3 className="mt-3 text-base font-extrabold sm:text-lg">
                  <span aria-hidden="true">🎁</span> {b.nombre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </article>
            ))}
          </div>

          {/* CTA 1 */}
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center px-1 text-center">
            <a
              href={CHECKOUT_PRINCIPAL}
              className="inline-flex w-full items-center justify-center rounded-full bg-coral px-6 py-4 text-center font-display text-base leading-tight font-extrabold tracking-wide text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-lg"
            >
              QUIERO ACTÍVAMENTE KIDS
            </a>
            <p className="mt-3 text-xs font-semibold text-muted-foreground sm:text-sm">
              Acceso inmediato al material digital.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            Todo listo para imprimir, usar y disfrutar 💛
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Recibes todo el material en formato digital, con acceso inmediato después de la compra y
            la libertad de imprimir las actividades todas las veces que quieras.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              icon: ListChecks,
              t: "1. ELIGE LAS ACTIVIDADES",
              d: "Selecciona las actividades según la edad, el momento y las habilidades que quieras estimular.",
              tone: "sky",
            },
            {
              icon: Printer,
              t: "2. IMPRIME LAS VECES QUE QUIERAS",
              d: "El material es digital, así que puedes volver a imprimir tus actividades favoritas siempre que las necesites.",
              tone: "sun",
            },
            {
              icon: Smile,
              t: "3. APRENDE JUGANDO",
              d: "Transforma unos minutos del día en momentos de atención, descubrimiento y aprendizaje.",
              tone: "leaf",
            },
          ].map(({ icon: Icon, t, d, tone }) => (
            <article key={t} className="rounded-3xl bg-white p-6 text-center shadow-card">
              <span
                className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${toneMap[tone] ?? toneMap["sky"]}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-extrabold sm:text-lg">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>

        {/* FAJA DE BENEFICIOS */}
        <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-border bg-cream px-6 py-6 shadow-soft">
          <ul className="grid gap-4 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-4 sm:text-base">
            {[
              { label: "Formato digital", strong: false },
              { label: "Acceso inmediato", strong: false },
              { label: "Impresión ilimitada", strong: true },
              { label: "Para niños de 3 a 14 años", strong: false },
            ].map((b) => (
              <li key={b.label} className="flex items-center justify-center gap-2 text-center">
                <Check className="h-5 w-5 shrink-0 text-leaf" />
                <span className={b.strong ? "font-extrabold text-brand" : ""}>{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            Mira lo que dicen quienes ya están usando ActivaMente Kids 💛
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Familias que ya recibieron el material y comenzaron a disfrutar las actividades en casa.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
          {[prueba1.url, prueba2.url, prueba3.url].map((src, i) => (
            <figure key={src} className="rounded-3xl bg-cream p-3 shadow-soft">
              <img
                src={src}
                alt={`Conversación real de una familia usando ActivaMente Kids (${i + 1})`}
                loading="lazy"
                className="mx-auto h-[520px] w-full object-contain sm:h-[640px]"
              />
            </figure>
          ))}
        </div>

        {/* CTA 2 */}
        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center px-1 text-center">
          <a
            href={CHECKOUT_PRINCIPAL}
            className="inline-flex w-full items-center justify-center rounded-full bg-coral px-6 py-4 text-center font-display text-base leading-tight font-extrabold tracking-wide text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-lg"
          >
            QUIERO ACTÍVAMENTE KIDS
          </a>
          <p className="mt-3 text-xs font-semibold text-muted-foreground sm:text-sm">
            Acceso inmediato al material digital.
          </p>
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

      {/* CIERRE DE LA OFERTA */}
      <section className="bg-cream px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl lg:text-4xl">
            TODO ESTO PUEDE SER TUYO HOY
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ActivaMente Kids + 8 bonos para transformar pequeños momentos en nuevas oportunidades de
            aprender, pensar y divertirse.
          </p>
        </div>

        <div className="mx-auto mt-10 flex justify-center">
          <img
            src={megaMockup}
            alt="ActivaMente Kids y sus 8 bonos incluidos"
            loading="lazy"
            className="h-auto w-[95%] max-w-[700px] object-contain sm:w-full"
          />
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] bg-white p-7 shadow-card sm:p-10">
          <div className="flex items-center justify-between gap-4 text-sm font-bold sm:text-base">
            <span>ACTIVAMENTE KIDS</span>
            <span>US$ 9,90</span>
          </div>
          <p className="my-3 text-center font-display text-xl font-extrabold text-muted-foreground">
            +
          </p>
          <div className="flex items-center justify-between gap-4 text-sm font-bold sm:text-base">
            <span>8 BONOS (8 × US$ 3,90)</span>
            <span>US$ 31,20</span>
          </div>

          <hr className="my-6 border-border" />

          <div className="flex items-center justify-between gap-4 text-base font-extrabold sm:text-lg">
            <span>VALOR TOTAL DEL PACK</span>
            <span className="line-through">US$ 41,10</span>
          </div>

          <hr className="my-6 border-border" />

          <p className="text-center text-sm font-bold tracking-wide text-muted-foreground sm:text-base">
            PERO HOY TE LLEVAS TODO POR SOLO:
          </p>
          <p className="mt-2 text-center font-display text-5xl leading-none font-extrabold text-coral sm:text-6xl">
            US$ 9,90
          </p>
          <p className="mt-4 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
            US$ 9,90 + US$ 31,20 = US$ 41,10
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href={CHECKOUT_PRINCIPAL}
              className="inline-flex w-full max-w-xl items-center justify-center rounded-full bg-coral px-6 py-5 text-center font-display text-base leading-tight font-extrabold tracking-wide text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-xl"
            >
              QUIERO ACTIVAMENTE KIDS + 8 BONOS
            </a>
          </div>
          <p className="mt-4 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
            Acceso digital • Material imprimible • Para niños de 3 a 14 años
          </p>
        </div>
      </section>

      {/* VALOR */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 shadow-card sm:p-10">
          <h2 className="text-center text-2xl leading-tight font-extrabold sm:text-3xl">
            Todo esto por solo US$ 9,90
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
            <p className="font-display text-5xl font-extrabold text-brand">US$ 9,90</p>
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
            US$ 9,90
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
