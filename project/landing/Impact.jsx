// @ts-nocheck
/* Luteach Landing — Secciones de impacto B2B (pitch BBVA / ONGs)
   Desafíos · El Puente · Casos de impacto · ODS */

function Desafios() {
  var stats = [
    { n: '3 de 4', label: 'Brecha de aprendizaje', d: 'jóvenes no desarrollan las competencias fundamentales en Matemáticas y Ciencias (STEM).', src: 'PISA 2022' },
    { n: '+50%', label: 'Abandono STEM', d: 'abandona carreras STEM antes de graduarse.', src: 'World Bank 2024' },
    { n: '53.5%', label: 'Escasez de talento', d: 'de las empresas no encuentra el talento que necesita por falta de habilidades blandas.', src: 'Arcos Dorados 2025' },
    { n: '+10 h', label: 'Carga familiar', d: 'a la semana dedican los padres al acompañamiento académico de sus hijos. Una carga adicional que impacta su bienestar, tiempo libre y desempeño laboral.' },
  ];
  return (
    <section id="desafios" style={{ padding: '104px 0', background: 'var(--ink-900)', color: '#fff' }}>
      <div className="lt-wrap">
        <div className="desafios-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 72 }}>
          <div>
            <div className="lt-overline" style={{ color: 'var(--orange-400)', marginBottom: 16 }}>El desafío</div>
            <h2 className="lt-h1" style={{ color: '#fff', margin: 0, fontSize: 46, letterSpacing: '-0.02em' }}>
              El talento existe. Las oportunidades no siempre.
            </h2>
          </div>
          <div>
            <p className="lt-body-lg" style={{ color: 'rgba(255,255,255,.58)', margin: '0 0 28px' }}>
              Las organizaciones están formadas por personas. Y detrás de cada colaborador hay una familia y un futuro por construir.
            </p>
            <div style={{ borderLeft: '3px solid var(--orange-400)', paddingLeft: 24 }}>
              <p style={{ margin: 0, fontSize: 26, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.02em',
                background: 'linear-gradient(120deg, #ffffff 30%, #F28705 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                En Luteach creemos que impulsar la productividad y el bienestar comienza por invertir en lo que más valoran las personas: sus familias y las oportunidades de sus hijos.
              </p>
            </div>
          </div>
        </div>
        <div className="desafios-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,.1)' }}>
          {stats.map(function(s, i) {
            return (
              <div key={s.label} style={{ padding: '40px 32px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 14 }}>{s.label}</div>
                <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1, color: 'var(--orange-400)', letterSpacing: '-0.03em', marginBottom: 12 }}>{s.n}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,.6)', margin: '0 0 12px' }}>{s.d}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,.06)', borderRadius: 99, padding: '3px 10px' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.04em' }}>{s.src}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ElPuente() {
  return (
    <section style={{ padding: '104px 0 80px', background: 'var(--ink-900)', overflow: 'hidden' }}>
      <style>{`
        @keyframes ltCircFlow { to { stroke-dashoffset: -18; } }
        .lt-cf1 { stroke-dasharray: 10 8; animation: ltCircFlow 1.1s linear infinite; animation-delay: -0.0s; }
        .lt-cf2 { stroke-dasharray: 10 8; animation: ltCircFlow 1.1s linear infinite; animation-delay: -0.37s; }
        .lt-cf3 { stroke-dasharray: 10 8; animation: ltCircFlow 1.1s linear infinite; animation-delay: -0.73s; }
      `}</style>
      <div className="lt-wrap">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 72px' }}>
          <div className="lt-overline" style={{ color: 'var(--orange-400)' }}>LA SOLUCIÓN. El ecosistema Luteach</div>
          <h2 className="lt-h1" style={{ color: '#fff', margin: '16px 0 16px', fontSize: 52, letterSpacing: '-0.025em' }}>
            Un círculo virtuoso de impacto.
          </h2>
          <p className="lt-body-lg" style={{ color: 'rgba(255,255,255,.55)', maxWidth: 520, margin: '0 auto' }}>
            Quién impulsa, quién crece y quién transforma.
          </p>
        </div>

        {/* ── 3 Detailed Cards ── */}
        <div className="elpuente-cards" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 0, alignItems: 'stretch' }}>

          {/* Organizaciones */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-xl)', border: '1px solid rgba(255,255,255,0.09)', padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 44, height: 44, flex: 'none' }}>
                <Icon name="building-2" size={22} stroke={1.9} />
              </div>
              <div>
                <div className="lt-overline" style={{ color: 'var(--orange-400)' }}>Quién impulsa</div>
                <div className="lt-h3" style={{ fontSize: 19, margin: 0, color: '#fff' }}>Organizaciones</div>
              </div>
            </div>
            <p className="lt-body" style={{ color: 'rgba(255,255,255,0.6)', flex: 1 }}>
              Empresas e instituciones que invierten en lo que más valoran sus profesionales y grupos de interés: sus familias y sus comunidades, generando bienestar e impacto sostenible.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
              {['Empresas', 'Fundaciones y ONGs', 'Instituciones educativas'].map(function(t) {
                return (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name="check" size={14} stroke={2.5} style={{ color: 'var(--orange-500)', flex: 'none' }} />
                    <span className="lt-body-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>{t}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connector → financia */}
          <div className="elpuente-connector" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 18px', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(242,135,5,0.14)', border: '1.5px solid rgba(242,135,5,0.45)', display: 'grid', placeItems: 'center', boxShadow: '0 0 20px rgba(242,135,5,0.28)' }}>
              <Icon name="arrow-right" size={24} stroke={2.5} style={{ color: 'var(--orange-400)' }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '.1em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>financia</span>
          </div>

          {/* Estudiantes (highlighted) */}
          <div style={{ background: 'linear-gradient(135deg,rgba(242,135,5,0.13),rgba(242,135,5,0.03))', borderRadius: 'var(--r-xl)', border: '1px solid rgba(242,135,5,0.22)', padding: '32px 28px', display: 'flex', flexDirection: 'column', boxShadow: '0 16px 60px rgba(242,135,5,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(242,135,5,0.15)' }}>
              <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 44, height: 44, flex: 'none' }}>
                <Icon name="users-round" size={22} stroke={1.9} />
              </div>
              <div>
                <div className="lt-overline" style={{ color: 'var(--orange-400)' }}>Quién crece</div>
                <div className="lt-h3" style={{ fontSize: 19, margin: 0, color: '#fff' }}>Estudiantes</div>
              </div>
            </div>
            <p className="lt-body" style={{ color: 'rgba(255,255,255,0.7)', flex: 1 }}>
              Niños y jóvenes que desarrollan su potencial mediante un acompañamiento académico personalizado y mentorías que fortalecen su confianza y habilidades.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
              {['Mejor desempeño académico en ciencias', 'Mayor acceso a oportunidades', 'Desarrolllo de habilidades para el futuro'].map(function(t) {
                return (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name="check" size={14} stroke={2.5} style={{ color: 'var(--orange-400)', flex: 'none' }} />
                    <span className="lt-body-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{t}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connector ← acompaña */}
          <div className="elpuente-connector" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 18px', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(242,135,5,0.14)', border: '1.5px solid rgba(242,135,5,0.45)', display: 'grid', placeItems: 'center', boxShadow: '0 0 20px rgba(242,135,5,0.28)' }}>
              <Icon name="arrow-left" size={24} stroke={2.5} style={{ color: 'var(--orange-400)' }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '.1em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>acompaña</span>
          </div>

          {/* Luteachers */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-xl)', border: '1px solid rgba(255,255,255,0.09)', padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 44, height: 44, flex: 'none' }}>
                <Icon name="graduation-cap" size={22} stroke={1.9} />
              </div>
              <div>
                <div className="lt-overline" style={{ color: 'var(--orange-400)' }}>Quién transforma</div>
                <div className="lt-h3" style={{ fontSize: 19, margin: 0, color: '#fff' }}>Luteachers</div>
              </div>
            </div>
            <p className="lt-body" style={{ color: 'rgba(255,255,255,0.6)', flex: 1 }}>
              Universitarios destacados que enseñan, inspiran y al mismo tiempo desarrollan liderazgo, comunicación y experiencia profesional.
            </p>
            <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(242,135,5,0.1)', borderRadius: 'var(--r-md)', border: '1px solid rgba(242,135,5,0.2)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 5 }}>Desarrollo mutuo</div>
              <p className="lt-body-sm" style={{ margin: 0, color: 'rgba(255,255,255,0.48)' }}>Cada estudiante recibe al Luteacher ideal, mientras que los Luteachers fortalecen habilidades que los acompañarán toda su vida y que el mercado laboral requiere.</p>
            </div>
          </div>
        </div>

        {/* ── EPIC CIRCLE ── */}
        {/* Geometry: center (360,245), ring r=195, nodes at 270°/30°/150°, arcs skip ±20° from each node */}
        <div style={{ position: 'relative', maxWidth: 840, paddingBottom: '72.2%', height: 0, margin: '80px auto 0' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <svg viewBox="0 0 720 520" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <radialGradient id="ecoCG" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(242,135,5,0.24)" />
                  <stop offset="100%" stopColor="rgba(242,135,5,0)" />
                </radialGradient>
                <marker id="ltArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <path d="M0,1.5 L9,5 L0,8.5 Z" fill="rgba(242,135,5,0.95)" />
                </marker>
                <filter id="ltGl" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Rings */}
              <circle cx="360" cy="245" r="195" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeDasharray="6 7" />
              <circle cx="360" cy="245" r="195" fill="none" stroke="rgba(242,135,5,0.06)" strokeWidth="52" />
              <circle cx="360" cy="245" r="90" fill="url(#ecoCG)" />
              <circle cx="360" cy="245" r="90" fill="none" stroke="rgba(242,135,5,0.15)" strokeWidth="1" strokeDasharray="3 9" />

              {/* Ghost arc trails — CCW flow: Org→Est (left), Est→LT (bottom), LT→Org (right) */}
              <path d="M 293 62 A 195 195 0 0 0 168 279" stroke="rgba(242,135,5,0.16)" strokeWidth="2" fill="none" />
              <path d="M 235 394 A 195 195 0 0 0 485 394" stroke="rgba(242,135,5,0.16)" strokeWidth="2" fill="none" />
              <path d="M 552 279 A 195 195 0 0 0 427 62"  stroke="rgba(242,135,5,0.16)" strokeWidth="2" fill="none" />

              {/* Animated flow arcs */}
              <path className="lt-cf1" d="M 293 62 A 195 195 0 0 0 168 279" stroke="var(--orange-400)" strokeWidth="3" fill="none" markerEnd="url(#ltArr)" filter="url(#ltGl)" />
              <path className="lt-cf2" d="M 235 394 A 195 195 0 0 0 485 394" stroke="var(--orange-400)" strokeWidth="3" fill="none" markerEnd="url(#ltArr)" filter="url(#ltGl)" />
              <path className="lt-cf3" d="M 552 279 A 195 195 0 0 0 427 62"  stroke="var(--orange-400)" strokeWidth="3" fill="none" markerEnd="url(#ltArr)" filter="url(#ltGl)" />

              {/* Labels — Org→Est upper-left, Est→LT bottom-center, LT→Org upper-right */}
              <rect x="87" y="107" width="156" height="42" rx="13" fill="rgba(242,135,5,0.18)" stroke="rgba(242,135,5,0.4)" strokeWidth="1" />
              <text x="165" y="123" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">IMPULSAN</text>
              <text x="165" y="139" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">OPORTUNIDADES</text>

              <rect x="270" y="447" width="180" height="42" rx="13" fill="rgba(242,135,5,0.18)" stroke="rgba(242,135,5,0.4)" strokeWidth="1" />
              <text x="360" y="463" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">RECIBEN</text>
              <text x="360" y="479" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">ACOMPAÑAMIENTO</text>

              <rect x="487" y="107" width="136" height="42" rx="13" fill="rgba(242,135,5,0.18)" stroke="rgba(242,135,5,0.4)" strokeWidth="1" />
              <text x="555" y="123" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">PRÓXIMOS</text>
              <text x="555" y="139" fill="rgba(255,255,255,0.92)" fontSize="12" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">LÍDERES</text>
            </svg>

            {/* Center badge */}
            <div style={{ position: 'absolute', top: '47.1%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', pointerEvents: 'none' }}>
              <img src="assets/luteach-logo-white.png" alt="Luteach" style={{ height: 22, opacity: 0.45, display: 'block', margin: '0 auto 6px' }} />
              <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '.14em', textTransform: 'uppercase' }}>ecosistema</div>
            </div>

            {/* Node: Organizaciones — top center, 270° → SVG (360,50) */}
            <div style={{ position: 'absolute', top: '9.6%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2 }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', margin: '0 auto 10px', boxShadow: '0 0 56px rgba(242,135,5,0.6)', border: '2.5px solid rgba(242,135,5,0.65)' }}>
                <Icon name="building-2" size={34} stroke={1.7} style={{ color: '#fff' }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>Organizaciones</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', marginTop: 3, whiteSpace: 'nowrap' }}>Invierten</div>
            </div>

            {/* Node: Luteachers — bottom right, 30° → SVG (529,342) */}
            <div style={{ position: 'absolute', top: '65.9%', left: '73.5%', transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2 }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg,#D97706,#FCD34D)', display: 'grid', placeItems: 'center', margin: '0 auto 10px', boxShadow: '0 0 56px rgba(217,119,6,0.55)', border: '2.5px solid rgba(217,119,6,0.6)' }}>
                <Icon name="graduation-cap" size={34} stroke={1.7} style={{ color: '#fff' }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap' }}>Luteachers</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', marginTop: 3, whiteSpace: 'nowrap' }}>Enseñan y se desarrollan</div>
            </div>

            {/* Node: Estudiantes — bottom left, 150° → SVG (191,342) */}
            <div style={{ position: 'absolute', top: '65.9%', left: '26.5%', transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2 }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg,#6D28D9,#A78BFA)', display: 'grid', placeItems: 'center', margin: '0 auto 10px', boxShadow: '0 0 56px rgba(109,40,217,0.55)', border: '2.5px solid rgba(109,40,217,0.6)' }}>
                <Icon name="rocket" size={34} stroke={1.7} style={{ color: '#fff' }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap' }}>Estudiantes</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', marginTop: 3, whiteSpace: 'nowrap' }}>Aprenden y crecen</div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: 36, fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700 }}>
          Y el ciclo vuelve a empezar
        </p>

      </div>
    </section>
  );
}

function CasosImpacto() {
  var casos = [
    {
      img: 'assets/caso-colaborador.png',
      icon: 'users-round',
      tag: 'Bienestar familiar',
      title: 'Para las familias',
      body: 'Los hijos de los colaboradores reciben el acompañamiento que necesitan para fortalecer su aprendizaje y ganar confianza. Para sus padres, significa la tranquilidad de saber que la organización también invierte en lo que más valoran.',
    },
    {
      img: 'assets/bcarios.jpg',
      icon: 'graduation-cap',
      tag: 'Desarrollo del talento',
      title: 'Para la próxima generación',
      body: 'Becarios y estudiantes fortalecen sus conocimientos en áreas STEM y otras disciplinas, desarrollando las habilidades y la confianza necesarias para construir un mejor futuro.',
    },
    {
      img: 'assets/caso-comunidad.png',
      icon: 'globe',
      tag: 'Desarrollo territorial',
      title: 'Para las comunidades y grupos de interés',
      body: 'Las organizaciones transforman programas educativos en oportunidades para jóvenes de sus zonas de influencia, contribuyendo al desarrollo local y fortaleciendo relaciones comunitarias basadas en la confianza y el largo plazo.',
    },
  ];
  return (
    <section id="impacto" style={{ padding: '104px 0', background: 'var(--paper)' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 760, margin: '0 0 52px' }}>
          <div className="lt-overline">Valor que trasciende</div>
          <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 46, letterSpacing: '-0.02em' }}>El impacto de la educación va mucho más allá del aula.</h2>
          <p className="lt-body-lg" style={{ marginTop: 16, maxWidth: 640, color: 'var(--ink-500)' }}>
            Generamos bienestar para las familias, oportunidades para la próxima generación y desarrollo para las comunidades donde construimos futuro.
          </p>
        </div>
        <div className="casos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {casos.map(function(c) {
            return (
              <div key={c.title} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden', background: 'var(--canvas-2)' }}>
                  <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span className="badge" style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(16,21,31,.72)', color: '#fff', backdropFilter: 'blur(4px)' }}>{c.tag}</span>
                </div>
                <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 36, height: 36, flex: 'none' }}>
                      <Icon name={c.icon} size={18} stroke={1.9} />
                    </div>
                    <h3 className="lt-h3" style={{ fontSize: 17, margin: 0 }}>{c.title}</h3>
                  </div>
                  <p className="lt-body-sm" style={{ marginTop: 4, color: 'var(--ink-500)', flex: 1 }}>{c.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ODS() {
  var goals = [
    { num: '4', icon: 'book-open-check', color: '#C5192D', name: 'Educación de calidad',
      body: 'Fortalecemos capacidades y ampliamos el acceso a oportunidades educativas para estudiantes, becarios y comunidades.' },
    { num: '5', icon: 'users-round', color: '#FF3A21', name: 'Igualdad de género',
      body: 'Promovemos una mayor participación y desarrollo de niñas y jóvenes, especialmente en áreas STEM.' },
    { num: '8', icon: 'briefcase', color: '#A21942', name: 'Trabajo decente y crecimiento económico',
      body: 'Impulsamos habilidades para la empleabilidad, el aprendizaje continuo y el desarrollo del talento del futuro.' },
    { num: '10', icon: 'scale', color: '#DD1367', name: 'Reducción de desigualdades',
      body: 'Acercamos oportunidades educativas a jóvenes y comunidades con menor acceso a servicios de calidad.' },
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--ink-900)', color: '#fff' }}>
      <div className="lt-wrap">
        <div className="ods-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <div className="lt-overline" style={{ color: 'var(--orange-400)' }}>ESG y sostenibilidad</div>
            <h2 className="lt-h1" style={{ color: '#fff', margin: '16px 0 0', fontSize: 46, letterSpacing: '-0.02em' }}>
              Impacto que puedes medir. Evidencia que puedes reportar.
            </h2>
          </div>
          <p className="lt-body-lg" style={{ color: 'rgba(255,255,255,.66)', margin: 0 }}>
            Ayudamos a empresas, fundaciones y organizaciones a convertir la educación en una herramienta de bienestar, desarrollo territorial y creación de valor compartido.
          </p>
        </div>
        <div className="ods-goals" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
          {goals.map(function(g) {
            return (
              <div key={g.num} style={{ background: 'rgba(255,255,255,.05)', borderRadius: 'var(--r-xl)', border: '1px solid rgba(255,255,255,.1)', padding: '28px 22px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: g.color, display: 'grid', placeItems: 'center', flex: 'none' }}>
                    <Icon name={g.icon} size={19} stroke={1.9} style={{ color: '#fff' }} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 13, color: g.color, letterSpacing: '.04em' }}>ODS {g.num}</div>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 10, lineHeight: 1.35 }}>{g.name}</div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,.55)', margin: 0, flex: 1 }}>{g.body}</p>
              </div>
            );
          })}
        </div>
        <div className="ods-bottom" style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--r-xl)', border: '1px solid rgba(255,255,255,.1)', padding: '32px 36px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Icon name="bar-chart-2" size={22} stroke={1.75} style={{ color: 'var(--orange-400)' }} />
              <div className="lt-h3" style={{ fontSize: 18, margin: 0, color: '#fff' }}>Más allá de los ODS</div>
            </div>
            <div className="lt-caption" style={{ color: 'rgba(255,255,255,.4)' }}>Sostenibilidad y Responsabilidad Social</div>
          </div>
          <p className="lt-body" style={{ color: 'rgba(255,255,255,.66)', margin: 0 }}>
            Generamos información y evidencia que fortalecen programas de bienestar, inversión social, relaciones comunitarias y estrategias ESG.
          </p>
        </div>
      </div>
    </section>
  );
}


function QuienesSon() {
  var rasgos = [
    ['award', 'Sobresalientes académicamente'],
    ['shield-check', 'Evaluados integralmente'],
    ['messages-square', 'Explican con claridad'],
    ['heart', 'Ya estuvieron en tus zapatos'],
  ];
  return (
    <section id="quienes" style={{ padding: '72px 0 52px', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap">
        <div className="quienes-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="lt-overline">Nuestros Luteachers</div>
            <h2 className="lt-h1" style={{ margin: '14px 0 24px', fontSize: 40, letterSpacing: '-0.02em' }}>
              Los mejores estudiantes enseñan hoy. Los mejores profesionales lideran mañana.
            </h2>
            <div className="quienes-traits" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {rasgos.map(function(item) {
                var ic = item[0], t = item[1];
                return (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: 'var(--paper)', borderRadius: 'var(--r-md)', border: '1px solid var(--sand-200)' }}>
                    <Icon name={ic} size={18} stroke={1.75} style={{ color: 'var(--orange-500)', flex: 'none' }} />
                    <span className="lt-body-sm" style={{ fontWeight: 600, color: 'var(--ink-800)' }}>{t}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ height: 380, borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="assets/luteacher-1.png" alt="Luteacher" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="card" style={{ position: 'absolute', bottom: 16, right: -16, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-md)', borderRadius: 'var(--r-lg)' }}>
              <Icon name="badge-check" size={18} stroke={2} style={{ color: 'var(--blue-600)' }} />
              <div style={{ font: 'var(--caption)', fontWeight: 700, color: 'var(--ink-900)' }}>Luteacher verificado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Luteachers() {
  var team = [
    { img: 'assets/luteacher-lucia.png', name: 'Lucía Llerena', years: '2020 – 2022', carrera: 'Ingeniera Química', ahora: 'Máster en Maastricht University', quote: 'Ser Luteacher me enseñó algo que ninguna clase me había dado antes: si no puedes explicar una idea compleja de forma simple, todavía no la entiendes del todo. Esa habilidad terminó convirtiéndose en una de las más importantes en mi desarrollo profesional. Desde entonces, no solo mejoré mi forma de aprender, sino también de pensar. Hoy esa base me acompaña en cada proyecto que lidero, y me ha abierto nuevas oportunidades, como cursar actualmente una maestría en economía circular en Maastricht.' },
    { img: 'assets/luteacher-marco.png', name: 'Marco Córdova', years: '2021 – 2023', carrera: 'Ingeniero Ambiental', ahora: 'Cofundador de Natek', quote: 'Ingresé a Luteach mientras estudiaba Ingeniería Ambiental en UTEC, buscando una oportunidad para compartir conocimientos. Con el tiempo descubrí que enseñar era mucho más que explicar conceptos: era aprender a escuchar, comunicar y liderar. Esta experiencia fortaleció habilidades que luego fueron clave en mi trabajo como investigador, gestor de proyectos y cofundador de Natek Systems.' },
    { img: 'assets/luteacher-fernanda.png', name: 'Fernanda Matallana', years: '2021 – 2023', carrera: 'Ingeniera Civil', ahora: 'Ingeniera en Ausenco', quote: 'Mi paso por Luteach fue una experiencia que me marcó académica y profesionalmente. Ser Luteacher me desafió a descomponer ideas complejas en conceptos simples y concretos. Fue ahí donde me apropié de una idea que me acompaña hasta hoy: “si puedes explicarle algo a un niño pequeño, entonces verdaderamente dominas el tema”. Hoy aplico ese mismo enfoque en mi día a día en Ausenco.' },
    { img: 'assets/luteacher-alberto.png', name: 'Alberto García', years: '2019 – 2021', carrera: 'Ingeniero Mecánico', ahora: 'Ingeniero de Innovación en NEXA Resources', quote: 'Ser parte de Luteach fue clave en mi formación. Empecé enseñando mientras era estudiante y eso no solo me ayudó a mantener el primer puesto de mi carrera, sino a entender de verdad lo que aprendía. Hoy lidero proyectos de innovación en NEXA, y estoy seguro de que gran parte de ese crecimiento viene de las horas que pasé enseñando.' },
    { img: 'assets/luteacher-valeria.png', name: 'Valeria Abad', years: '2019 – 2022', carrera: 'Ingeniera Mecánica', ahora: 'Ingeniera en Lima Airport Partners', quote: 'Ingresé a Luteach para generar un ingreso adicional, pero terminé llevándome mucho más. Descubrí el valor de la empatía y la capacidad de explicar conceptos complejos de forma sencilla. Esta experiencia fortaleció mis habilidades de comunicación, liderazgo y trabajo con personas — competencias clave en mi participación en la ampliación del Aeropuerto Jorge Chávez.' },
  ];

  /* ── state: idx always 0‥team.length-1, gen increments on each nav to trigger animation ── */
  var st = React.useState({ idx: 0, gen: 0, dir: 1 });
  var slide = st[0];
  var setSlide = st[1];

  var stMob = React.useState(function() { return window.innerWidth <= 900; });
  var isMob = stMob[0];
  var setIsMob = stMob[1];

  React.useEffect(function() {
    function fn() { setIsMob(window.innerWidth <= 900); }
    window.addEventListener('resize', fn);
    return function() { window.removeEventListener('resize', fn); };
  }, []);

  /* auto‑advance every 12 s */
  React.useEffect(function() {
    var t = setInterval(function() {
      setSlide(function(s) { return { idx: (s.idx + 1) % team.length, gen: s.gen + 1, dir: 1 }; });
    }, 12000);
    return function() { clearInterval(t); };
  }, []);

  function goNext() {
    setSlide(function(s) { return { idx: (s.idx + 1) % team.length, gen: s.gen + 1, dir: 1 }; });
  }
  function goPrev() {
    setSlide(function(s) { return { idx: (s.idx - 1 + team.length) % team.length, gen: s.gen + 1, dir: -1 }; });
  }
  function goTo(i) {
    setSlide(function(s) { return { idx: i, gen: s.gen + 1, dir: i >= s.idx ? 1 : -1 }; });
  }

  /* build visible cards for this frame */
  var perView = isMob ? 1 : 3;
  var visible = [];
  for (var j = 0; j < perView; j++) {
    visible.push({ item: team[(slide.idx + j) % team.length], uid: slide.gen * 10 + j });
  }

  var btnShared = { width: 48, height: 48, borderRadius: '50%', border: 'none', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
    position: 'absolute', top: '38%', transform: 'translateY(-50%)', zIndex: 10,
    transition: 'opacity .2s, background .2s' };
  var btnPrev = { width: btnShared.width, height: btnShared.height, borderRadius: btnShared.borderRadius,
    border: '1.5px solid rgba(255,255,255,.18)', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'absolute',
    top: '38%', transform: 'translateY(-50%)', zIndex: 10, transition: 'opacity .2s, background .2s',
    left: 8, background: 'rgba(14,18,30,.82)', boxShadow: '0 4px 20px rgba(0,0,0,.5)',
    backdropFilter: 'blur(8px)' };
  var btnNext = { width: btnShared.width, height: btnShared.height, borderRadius: btnShared.borderRadius,
    border: 'none', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'absolute',
    top: '38%', transform: 'translateY(-50%)', zIndex: 10, transition: 'opacity .2s, background .2s',
    right: 8, background: 'var(--grad-brand)', boxShadow: '0 4px 24px rgba(242,135,5,.5)' };

  return (
    <section id=”luteachers” style={{ padding: '104px 0 80px', background: 'var(--ink-900)', color: '#fff', overflow: 'hidden' }}>

      <div className=”lt-wrap”>
        <div style={{ maxWidth: 760, marginBottom: 52 }}>
          <div className=”lt-overline” style={{ color: 'var(--orange-400)' }}>De las aulas al impacto</div>
          <h2 className=”lt-h1” style={{ color: '#fff', margin: '16px 0 0', fontSize: 46, letterSpacing: '-0.02em' }}>
            Enseñar es una de las experiencias que más acelera el crecimiento profesional.
          </h2>
          <p className=”lt-body-lg” style={{ color: 'rgba(255,255,255,.6)', marginTop: 16, maxWidth: 600 }}>
            Muchos de nuestros Luteachers hoy destacan en empresas, universidades y organizaciones de primer nivel.
          </p>
        </div>
      </div>

      {/* ── Card strip with overlaid arrows ── */}
      <div style={{ position: 'relative', padding: '0 20px' }}>

        {/* ← prev */}
        <button onClick={goPrev}
          style={btnPrev}
          onMouseEnter={function(e){ e.currentTarget.style.background='rgba(255,255,255,.14)'; }}
          onMouseLeave={function(e){ e.currentTarget.style.background='rgba(14,18,30,.82)'; }}>
          <Icon name=”chevron-left” size={22} stroke={2.5} />
        </button>

        {/* cards */}
        <div style={{ display: 'flex', gap: 16, padding: '0 44px' }}>
          {visible.map(function(v) {
            var item = v.item;
            var cls = slide.dir >= 0 ? 'lt-sr' : 'lt-sl';
            return (
              <div key={v.uid} className={cls}
                style={{ flex: 1, minWidth: 0, borderRadius: 20, overflow: 'hidden',
                  background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
                  display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
                  <img src={item.img} alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .45s ease' }}
                    onMouseEnter={function(e){ e.currentTarget.style.transform='scale(1.06)'; }}
                    onMouseLeave={function(e){ e.currentTarget.style.transform='scale(1)'; }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 55%)', pointerEvents: 'none' }}></div>
                  <span style={{ position: 'absolute', top: 14, left: 14,
                    background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,.2)', color: '#fff',
                    borderRadius: 99, padding: '4px 12px', fontSize: 12, fontWeight: 600 }}>
                    Luteacher · {item.years}
                  </span>
                </div>
                <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: '#fff', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{item.name}</h3>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.38)', marginBottom: 12 }}>{item.carrera}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.07)', marginBottom: 14 }}>
                    <Icon name=”briefcase” size={13} stroke={2} style={{ color: 'var(--orange-400)', flex: 'none' }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange-300)' }}>{item.ahora}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Icon name=”quote” size={14} stroke={1.5} style={{ color: 'var(--orange-400)', marginBottom: 6 }} />
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,.58)', fontStyle: 'italic', margin: 0 }}>”{item.quote}”</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* → next */}
        <button onClick={goNext}
          style={btnNext}
          onMouseEnter={function(e){ e.currentTarget.style.opacity='.82'; }}
          onMouseLeave={function(e){ e.currentTarget.style.opacity='1'; }}>
          <Icon name=”chevron-right” size={22} stroke={2.5} />
        </button>
      </div>

      {/* ── Dots ── */}
      <div className=”lt-wrap” style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 28, gap: 8 }}>
        {team.map(function(_, i) {
          return (
            <button key={i} onClick={function(){ goTo(i); }}
              style={{ height: 8, width: i === slide.idx ? 28 : 8, borderRadius: 99,
                background: i === slide.idx ? 'var(--orange-400)' : 'rgba(255,255,255,.22)',
                border: 'none', cursor: 'pointer', padding: 0, transition: 'all .3s ease' }} />
          );
        })}
      </div>
    </section>
  );
}

Object.assign(window, { Desafios, ElPuente, QuienesSon, Luteachers, CasosImpacto, ODS });
