import Image from "next/image";

const services = [
  {
    n: "01",
    title: "Impuestos",
    body: "Asesoramiento tributario nacional, provincial y municipal. Planificación fiscal, declaraciones juradas, asistencia en inspecciones y auditoría tributaria.",
  },
  {
    n: "02",
    title: "Auditoría",
    body: "Auditoría de estados contables anuales e intermedios. Evaluación de control interno y revisión de cumplimiento previsional e impositivo.",
  },
  {
    n: "03",
    title: "Administración de Personal",
    body: "Liquidación de sueldos y cargas sociales, contratos, legajos, declaraciones laborales y atención de inspecciones.",
  },
  {
    n: "04",
    title: "Contabilidad",
    body: "Tercerización contable: registración, conciliación, estados contables, informes de gestión y flujos proyectados.",
  },
  {
    n: "05",
    title: "Servicios Jurídicos",
    body: "Recursos contra determinaciones de deuda, ley penal tributaria previsional y derecho societario (constitución, fusiones, adquisiciones).",
  },
  {
    n: "06",
    title: "Consultoría",
    body: "Operatorias de leasing, fideicomisos y reintegros de IVA de exportación.",
  },
];

const team = [
  {
    name: "David Ezequiel Ruano",
    role: "Contador Público — Socio",
    bio: "Contador Público (UNC). Ejerce la profesión de manera independiente desde 2012. Docente universitario en UNJu y UCSE en finanzas y mercado de capitales. Ex asesor técnico en el Honorable Senado de la Nación.",
    photo: "/team/david.png",
  },
  {
    name: "Francisco Rodríguez Correa",
    role: "Contador Público — Socio",
    bio: "Contador Público Nacional especializado en escalamiento empresarial. Capacitación en Escuela de Negocios de Barcelona, Universidad Nacional de Tucumán y Universidad Tecnológica Nacional. Foco en administración, reestructuración y ecosistema emprendedor.",
    photo: "/team/fran.png",
  },
];

export default function Home() {
  return (
    <main className="bg-bone text-ink">
      {/* Header */}
      <header className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between font-mono text-[13px] tracking-[0.18em] uppercase">
          <span>Estudio Roco &amp; Asociados</span>
          <nav className="hidden md:flex gap-8 text-ink-soft">
            <a href="#servicios" className="hover:text-ink">Servicios</a>
            <a href="#nosotros" className="hover:text-ink">Nosotros</a>
            <a href="#equipo" className="hover:text-ink">Equipo</a>
            <a href="#contacto" className="hover:text-ink">Contacto</a>
          </nav>
          <span className="text-ink-soft">San Salvador de Jujuy · AR</span>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-44">
          <p className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft mb-10">
            EST. 2010 · Estudio jurídico contable
          </p>
          <h1 className="font-serif font-light tracking-[-0.02em] leading-[0.95] text-[14vw] md:text-[9rem]">
            Estudio
            <br />
            <span className="italic text-moss">Roco</span>
            <span className="block italic text-moss text-[5vw] md:text-[2.75rem] mt-3 md:mt-4">
              &amp; Asociados
            </span>
          </h1>
          <p className="mt-12 max-w-xl text-lg md:text-xl leading-snug text-ink-soft">
            Estudio jurídico contable de Jujuy, especializado en impuestos.
            Asesoramiento integral en planificación impositiva, auditoría,
            contabilidad y derecho societario para empresas y particulares.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
              Servicios
            </h2>
            <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
              I — VI
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {services.map((s) => (
              <article key={s.n} className="border-t border-rule pt-6">
                <div className="flex items-baseline gap-6 mb-3">
                  <span className="font-mono text-[13px] tracking-[0.18em] text-ink-soft">
                    {s.n}
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-ink-soft leading-relaxed max-w-md">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
              Nosotros
            </span>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              <span className="float-left font-serif text-7xl leading-[0.85] mr-3 mt-1 text-ink">
                F
              </span>
              undado en 2010 en San Salvador de Jujuy, Estudio Roco &amp;
              Asociados es un estudio jurídico contable conducido por dos
              Contadores Públicos con formación complementaria entre la
              práctica académica, la experiencia institucional y la gestión
              empresarial.
            </p>
            <p>
              Asesoramos a empresas y particulares con un enfoque integral:
              planificación impositiva, auditoría, contabilidad y derecho
              societario, sostenidos en una práctica de capacitación continua
              y trato cercano con cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
              Equipo
            </h2>
            <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
              {team.length.toString().padStart(2, "0")} socios
            </span>
          </div>
          <ul className="divide-y divide-rule border-y border-rule">
            {team.map((p) => (
              <li key={p.name} className="py-10 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3 relative aspect-[4/5] overflow-hidden bg-rule">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover grayscale contrast-[1.05]"
                  />
                </div>
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
                    {p.name}
                  </span>
                  <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
                    {p.role}
                  </span>
                </div>
                <p className="md:col-span-6 text-ink-soft leading-relaxed">
                  {p.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
              Contacto
            </span>
          </div>
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[0.95]">
              Hablemos.
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 font-mono text-sm">
              <div>
                <dt className="text-[13px] tracking-[0.18em] uppercase text-ink-soft mb-1">
                  Mail
                </dt>
                <dd>
                  <a
                    href="mailto:davidruano@estudioroco.com.ar"
                    className="hover:text-moss"
                  >
                    davidruano@estudioroco.com.ar
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] tracking-[0.18em] uppercase text-ink-soft mb-1">
                  Teléfono
                </dt>
                <dd>
                  <a href="tel:+5493885053766" className="hover:text-moss">
                    +54 9 3885 05-3766
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[13px] tracking-[0.18em] uppercase text-ink-soft mb-1">
                  Dirección
                </dt>
                <dd className="leading-relaxed">
                  19 de Abril 683, 8° A · Edificio AMERIAN
                  <br />
                  San Salvador de Jujuy · Jujuy · Argentina
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[13px] tracking-[0.18em] uppercase text-ink-soft mb-1">
                  Horario
                </dt>
                <dd>Lun a Vie · 08:00 — 13:00 · 16:00 — 20:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[13px] tracking-[0.18em] uppercase text-ink-soft">
          <span>© {new Date().getFullYear()} Estudio Roco &amp; Asociados S.R.L.</span>
          <span>estudioroco.com.ar</span>
        </div>
      </footer>
    </main>
  );
}
