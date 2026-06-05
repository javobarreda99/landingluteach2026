/* Luteach Marketing Site — Subjects (minimal), Pricing, CTA, DemoModal */

const SUBJECTS = [
  ['Programación', 'code-xml'],
  ['Matemáticas', 'sigma'],
  ['Física', 'atom'],
  ['Química', 'flask-conical'],
  ['Biología', 'dna'],
  ['Inglés', 'languages'],
];

function Subjects() {
  return (
    <section id="subjects" style={{ padding: '104px 0', background: 'var(--paper)' }}>
      <div className="lt-wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ maxWidth: 640 }}>
            <div className="lt-overline">Cursos</div>
            <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 44, letterSpacing: '-0.02em' }}>STEM, y las habilidades que vienen después.</h2>
          </div>
          <p className="lt-body" style={{ maxWidth: 320, margin: 0, color: 'var(--ink-500)' }}>Cada curso tiene su propio grupo de Luteachers universitarios verificados, listos para ser asignados.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid var(--sand-200)' }}>
          {SUBJECTS.map((s, i) => (
            <div key={s[0]} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '24px 4px', borderBottom: '1px solid var(--sand-200)', borderRight: (i % 3 !== 2) ? '1px solid var(--sand-200)' : 'none', paddingLeft: (i % 3 !== 0) ? 24 : 4 }}>
              <Icon name={s[1]} size={24} stroke={1.75} style={{ color: 'var(--orange-500)' }} />
              <span className="lt-h4" style={{ fontSize: 17 }}>{s[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ onDemo }) {
  const plans = [
    ['Aula', 'Para un solo departamento', '€290', '/mes', ['Hasta 30 estudiantes', '5 cursos activos', 'Asignación por afinidad', 'Reportes semanales'], false],
    ['Campus', 'Para toda la institución', '€740', '/mes', ['Estudiantes ilimitados', 'Todos los cursos STEM', 'Dashboard de progreso', 'Gerente de éxito dedicado', 'SSO y exportación de datos'], true],
    ['Red', 'Para redes multi-sede', 'A medida', '', ['Todo lo de Campus', 'Consolidado multi-sede', 'Integraciones a medida', 'SLA y onboarding'], false],
  ];
  return (
    <section id="pricing" style={{ padding: '104px 0', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 720, margin: '0 0 56px' }}>
          <div className="lt-overline">Planes</div>
          <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 44, letterSpacing: '-0.02em' }}>Planes transparentes, por institución.</h2>
          <p className="lt-body-lg" style={{ marginTop: 16, maxWidth: 560, color: 'var(--ink-500)' }}>Sin sorpresas por sesión. Elige el alcance que se ajusta a tus programas.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
          {plans.map(([name, sub, price, per, feats, featured]) => (
            <div key={name} style={{
              padding: 30, borderRadius: 'var(--r-lg)', background: 'var(--paper)',
              border: featured ? '1.5px solid var(--orange-500)' : '1px solid var(--sand-200)',
              boxShadow: featured ? 'var(--shadow-md)' : 'none', position: 'relative'
            }}>
              {featured && <span className="badge" style={{ background: 'var(--orange-100)', color: 'var(--orange-700)', position: 'absolute', top: 24, right: 24 }}>Más popular</span>}
              <div className="lt-h3" style={{ fontSize: 20 }}>{name}</div>
              <div style={{ font: 'var(--body-sm)', color: 'var(--ink-500)', marginTop: 4 }}>{sub}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '24px 0' }}>
                <span style={{ font: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--ink-900)' }}>{price}</span>
                <span style={{ font: 'var(--body)', color: 'var(--ink-400)' }}>{per}</span>
              </div>
              <button className={featured ? 'btn btn-primary' : 'btn btn-ghost'} style={{ width: '100%', justifyContent: 'center' }} onClick={onDemo}>
                {price === 'A medida' ? 'Contactar ventas' : 'Agenda una demo'}
              </button>
              <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 13 }}>
                {feats.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', font: 'var(--body-sm)', color: 'var(--ink-700)' }}>
                    <Icon name="check" size={17} stroke={2.25} style={{ color: 'var(--orange-500)', flex: 'none' }} />{f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onDemo }) {
  return (
    <section style={{ padding: '96px 0', background: 'var(--paper)' }}>
      <div className="lt-wrap">
        <div style={{ background: 'var(--grad-brand)', borderRadius: 'var(--r-xl)', padding: '64px 56px', position: 'relative', overflow: 'hidden' }}>
          <img src={ICON} alt="" style={{ position: 'absolute', right: -28, bottom: -28, width: 220, opacity: .16, borderRadius: 40 }} />
          <div style={{ position: 'relative', maxWidth: 600 }}>
            <h2 className="lt-h1" style={{ color: '#fff', fontSize: 40 }}>Asigna a tus estudiantes el tutor que encaja.</h2>
            <p style={{ font: 'var(--body-lg)', color: 'rgba(255,255,255,.9)', margin: '16px 0 30px' }}>Agenda una demo de 20 minutos y ve una asignación por afinidad en acción.</p>
            <button className="btn btn-dark btn-lg" onClick={onDemo}>Agenda una demo <Icon name="arrow-right" size={18} stroke={2} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(43,37,32,.45)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="fade-up" onClick={e => e.stopPropagation()} style={{ background: 'var(--paper)', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)', width: 460, maxWidth: '100%', padding: 32, position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'var(--sand-100)', border: 'none', width: 34, height: 34, borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'var(--ink-500)' }}><Icon name="x" size={18} stroke={2} /></button>
        {!sent ? (
          <React.Fragment>
            <Icon name="calendar-check" size={28} stroke={1.75} style={{ color: 'var(--orange-500)' }} />
            <h3 className="lt-h2" style={{ fontSize: 26, marginTop: 16 }}>Agenda una demo</h3>
            <p className="lt-body" style={{ margin: '6px 0 22px', color: 'var(--ink-500)' }}>Mira cómo Luteach asigna al tutor de mejor afinidad. Te contactamos en un día hábil.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="field"><label>Nombre del colegio</label><input placeholder="Colegio San Agustín" /></div>
              <div className="field"><label>Correo de trabajo</label><input placeholder="admin@colegio.edu" /></div>
              <div className="field"><label>Estudiantes a apoyar</label>
                <select defaultValue=""><option value="" disabled>Elige un rango</option><option>Menos de 50</option><option>50–200</option><option>200–1,000</option><option>1,000+</option></select>
              </div>
              <button className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 4 }} onClick={() => setSent(true)}>Solicitar demo <Icon name="arrow-right" size={18} stroke={2} /></button>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--success-bg)', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}><Icon name="check" size={28} stroke={2} style={{ color: 'var(--success)' }} /></div>
            <h3 className="lt-h2" style={{ fontSize: 26 }}>Solicitud recibida</h3>
            <p className="lt-body" style={{ margin: '8px 0 24px', color: 'var(--ink-500)' }}>Gracias — nuestro equipo te contactará en un día hábil para coordinar tu demo.</p>
            <button className="btn btn-ghost" style={{ justifyContent: 'center' }} onClick={onClose}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Subjects, Pricing, CTA, DemoModal });
