/* Luteach Marketing Site — Hero (affinity), LogoStrip, HowItWorks, Vetting
   Editorial, minimalist, trust-first. NOT a marketplace — we ASSIGN by affinity. */

function Hero({ onDemo, onScrollTo }) {
  return (
    <section id="top" style={{ background: 'var(--canvas)' }}>
      <div className="lt-wrap" style={{ display: 'grid', gridTemplateColumns: '1.04fr .96fr', gap: 56, alignItems: 'center', padding: '72px 32px 84px' }}>
        <div className="fade-up">
          <span className="badge" style={{ background: 'var(--orange-100)', color: 'var(--orange-700)' }}>
            <Icon name="shield-check" size={15} stroke={2} /> Para colegios e instituciones
          </span>
          <h1 className="lt-display" style={{ fontSize: 56, margin: '20px 0 0', letterSpacing: '-0.02em' }}>
            El tutor correcto,<br />asignado por <span className="lt-grad-text">afinidad</span>.
          </h1>
          <p className="lt-body-lg" style={{ maxWidth: 472, marginTop: 20, color: 'var(--ink-500)' }}>
            Cada estudiante aprende distinto. Por eso no los hacemos elegir de una lista:
            asignamos a cada uno el Luteacher universitario de mejor afinidad — según su
            perfil de aprendizaje, el curso y la personalidad.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
            <button className="btn btn-primary btn-lg" onClick={onDemo}>Agenda una demo <Icon name="arrow-right" size={18} stroke={2} /></button>
            <button className="btn btn-ghost btn-lg" onClick={() => onScrollTo('how')}>Cómo funciona</button>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 44 }}>
            {[['+40,000', 'clases dictadas'], ['4 niveles', 'de verificación'], ['87%', 'sobre el promedio']].map(([n, l]) => (
              <div key={l}>
                <div className="lt-h3" style={{ color: 'var(--ink-900)', fontSize: 26 }}>{n}</div>
                <div className="lt-caption" style={{ color: 'var(--ink-400)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <AffinityCard />
      </div>
    </section>
  );
}

function AffinityCard() {
  const factors = [
    ['Perfil de aprendizaje', 98],
    ['Dominio del curso', 95],
    ['Horario', 88],
    ['Personalidad', 93],
  ];
  return (
    <div className="fade-up" style={{ position: 'relative', animationDelay: '.08s' }}>
      <div className="card" style={{ padding: 26, borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div className="lt-overline" style={{ color: 'var(--ink-400)' }}>Match asignado</div>
          <span className="badge" style={{ background: 'var(--blue-100)', color: 'var(--blue-700)', marginLeft: 'auto' }}>
            <span className="dot" style={{ background: 'var(--blue-500)' }}></span>96% de afinidad
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 18, borderBottom: '1px solid var(--sand-100)' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: '#fff', font: 'var(--font-display)', fontWeight: 700, fontSize: 18, flex: 'none' }}>MV</div>
          <div style={{ flex: 1 }}>
            <div style={{ font: 'var(--subtitle)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)' }}>Mara V.</div>
            <div className="lt-caption">Ing. de Sistemas · UPC</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, font: 'var(--caption)', fontWeight: 700, color: 'var(--ink-700)' }}>
            <Icon name="star" size={14} stroke={2} style={{ color: 'var(--orange-400)' }} />4.9
          </span>
        </div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {factors.map(([label, pct]) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="lt-caption" style={{ color: 'var(--ink-700)', fontWeight: 600 }}>{label}</span>
                <span className="lt-caption" style={{ color: 'var(--ink-400)' }}>{pct}%</span>
              </div>
              <div style={{ height: 6, borderRadius: 99, background: 'var(--sand-100)', overflow: 'hidden' }}>
                <div style={{ width: pct + '%', height: '100%', background: 'var(--grad-brand)' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{ position: 'absolute', bottom: -20, left: -24, padding: '11px 15px', display: 'flex', alignItems: 'center', gap: 9, boxShadow: 'var(--shadow-md)', borderRadius: 'var(--r-lg)' }}>
        <Icon name="shield-check" size={20} stroke={2} style={{ color: 'var(--blue-600)' }} />
        <div style={{ font: 'var(--caption)', fontWeight: 700, color: 'var(--ink-900)' }}>Verificado en 4 niveles</div>
      </div>
    </div>
  );
}

function LogoStrip() {
  const schools = ['Colegio San Agustín', 'Innova Schools', 'Markham College', 'Colegio Roosevelt', 'Fundación Telefónica'];
  return (
    <section style={{ borderTop: '1px solid var(--sand-200)', borderBottom: '1px solid var(--sand-200)', padding: '30px 0', background: 'var(--paper)' }}>
      <div className="lt-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 22 }}>
        <span className="lt-caption" style={{ color: 'var(--ink-400)', whiteSpace: 'nowrap' }}>Confían en nosotros</span>
        {schools.map(s => (
          <span key={s} style={{ font: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--ink-400)' }}>{s}</span>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['Nos cuentas la necesidad', 'Comparte estudiantes, cursos y metas. Construimos el perfil de aprendizaje de cada uno.'],
    ['Asignamos por afinidad', 'Nuestro equipo asigna al Luteacher universitario de mejor afinidad — por perfil, curso, horario y personalidad.'],
    ['Mides el progreso', 'Reportes semanales de asistencia, notas y avance — listos para tu directorio o aliados.'],
  ];
  return (
    <section id="how" style={{ padding: '104px 0', background: 'var(--paper)' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <div className="lt-overline">Cómo funciona</div>
          <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 44, letterSpacing: '-0.02em' }}>De la solicitud a los resultados, con confianza en cada paso.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 52 }}>
          {steps.map(([t, d], i) => (
            <div key={t}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24 }}>
                <span style={{ font: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--orange-500)' }}>0{i + 1}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--sand-300)' }}></span>
              </div>
              <h3 className="lt-h3" style={{ fontSize: 21 }}>{t}</h3>
              <p className="lt-body" style={{ marginTop: 12, color: 'var(--ink-500)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vetting() {
  const levels = [
    ['graduation-cap', 'Académico', 'Estudiantes sobresalientes en su universidad, con dominio actualizado del curso.'],
    ['heart-handshake', 'Personalidad', 'Comunicadores empáticos y pacientes que explican como el tutor que siempre quisiste tener.'],
    ['shield-check', 'Seguridad', 'Identidad y antecedentes verificados antes de la primera sesión.'],
    ['target', 'Aptitud', 'Evaluados en su capacidad de enseñar, guiar y resolver dudas con claridad.'],
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 720, marginBottom: 60 }}>
          <div className="lt-overline" style={{ color: 'var(--blue-600)' }}>Confianza y seguridad</div>
          <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 44, letterSpacing: '-0.02em' }}>Cada Luteacher, verificado en cuatro niveles.</h2>
          <p className="lt-body-lg" style={{ marginTop: 16, maxWidth: 580, color: 'var(--ink-500)' }}>Antes de enseñar, cada uno pasa una evaluación en cuatro dimensiones — para que respaldes cada asignación con total confianza.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>
          {levels.map(([ic, t, d], i) => (
            <div key={t}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <span style={{ font: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--blue-600)' }}>0{i + 1}</span>
                <Icon name={ic} size={22} stroke={1.75} style={{ color: 'var(--blue-600)' }} />
              </div>
              <h3 className="lt-h4" style={{ fontSize: 17 }}>{t}</h3>
              <p className="lt-body-sm" style={{ marginTop: 8, color: 'var(--ink-500)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, AffinityCard, LogoStrip, HowItWorks, Vetting });
