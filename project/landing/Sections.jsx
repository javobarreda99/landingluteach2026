// @ts-nocheck
/* Luteach Landing — Steps, Cursos, Testimonials, Audiences, CTA, Footer */

function Steps() {
  var factors = [
    { icon: 'brain', label: 'Perfil de aprendizaje', pct: 98 },
    { icon: 'book-open-check', label: 'Dominio del curso', pct: 95 },
    { icon: 'calendar-clock', label: 'Disponibilidad horaria', pct: 88 },
    { icon: 'heart-handshake', label: 'Compatibilidad de personalidad', pct: 93 },
  ];
  var feat1 = [
    { icon: 'clock', title: 'Horas bajo demanda', body: 'Las horas se utilizan cuando realmente se necesitan. Ya sea para planes GRUPALES como INDIVIDUALES.' },
    { icon: 'target', title: 'Programas a medida', body: 'Un mismo programa puede beneficiar a diferentes grupos de interés.' },
    { icon: 'users', title: 'Múltiples beneficiarios', body: 'Hijos de colaboradores, becarios y comunidades.' },
    { icon: 'zap', title: 'Flexible y escalable', body: 'Adapta el programa a las necesidades de tu organización.' },
  ];
  var feat3 = [
    { icon: 'layout-dashboard', title: 'Dashboard personalizado', body: 'Visualiza el avance de cada estudiante en tiempo real.' },
    { icon: 'trending-up', title: 'Reportes de progreso', body: 'Asistencia, utilización de horas y evolución académica.' },
    { icon: 'file-check', title: 'Lineamientos ESG', body: 'Fortalece programas de bienestar, becas y desarrollo territorial.' },
    { icon: 'bar-chart-2', title: 'Indicadores de impacto', body: 'Transforma historias de aprendizaje en resultados medibles.' },
  ];
  var kpis = [
    { value: '121', label: 'Estudiantes activos', icon: 'users', change: '+18%' },
    { value: '92%', label: 'Mejora de notas', icon: 'trending-up', change: '+8%' },
    { value: '96%', label: 'Satisfacción', icon: 'star', change: '+4%' },
  ];
  var bars = [40, 55, 48, 62, 70, 68, 80, 92];
  var students = [['Ana R.', 88], ['Carlos M.', 74], ['Sofia P.', 92]];
  var connector = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, padding: '8px 0' }}>
      <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, var(--sand-300), var(--orange-400))' }}></div>
      <Icon name="chevron-down" size={18} stroke={2.5} style={{ color: 'var(--orange-400)' }} />
    </div>
  );
  return (
    <section id="como" style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 680, marginBottom: 80 }}>
          <div className="lt-overline" style={{ color: 'var(--orange-500)', marginBottom: 14 }}>Cómo funciona</div>
          <h2 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: '0 0 20px', lineHeight: 1.1 }}>
            Flexibilidad para generar impacto.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-500)', margin: 0, maxWidth: 580 }}>
            Las organizaciones adquieren paquetes de horas y los distribuyen entre colaboradores, becarios y comunidades según sus necesidades. Nosotros nos encargamos del resto.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--sand-200)', borderRadius: 24, padding: '56px 60px', boxShadow: '0 2px 40px rgba(20,27,43,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 96, fontWeight: 900, color: 'var(--sand-200)', letterSpacing: '-0.06em', lineHeight: 1, marginBottom: 24, fontFamily: 'var(--font-display,sans-serif)' }}>01</div>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', color: 'var(--ink-900)', lineHeight: 1.2 }}>Tú decides dónde generar oportunidades</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-500)', margin: '0 0 28px' }}>
                Utiliza las horas bajo demanda y asígnalas a quienes más las necesiten. Un mismo programa puede beneficiar a hijos de colaboradores, becarios y jóvenes de comunidades de influencia.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--orange-100)', color: 'var(--orange-700)', borderRadius: 99, padding: '6px 14px', fontSize: 13, fontWeight: 600 }}>
                <Icon name="package" size={14} stroke={2} />
                Compra flexible de horas
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {feat1.map(function(f) {
                return (
                  <div key={f.title} style={{ background: 'var(--canvas-2)', borderRadius: 18, padding: '22px 20px', border: '1px solid var(--sand-200)', transition: 'box-shadow .2s' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', marginBottom: 14 }}>
                      <Icon name={f.icon} size={18} stroke={2} style={{ color: '#fff' }} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-900)', marginBottom: 6, lineHeight: 1.3 }}>{f.title}</div>
                    <p style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink-400)', margin: 0 }}>{f.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {connector}
          <div style={{ background: 'var(--ink-900)', borderRadius: 24, padding: '56px 60px', boxShadow: '0 8px 60px rgba(20,27,43,0.22)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 96, fontWeight: 900, color: 'rgba(255,255,255,.06)', letterSpacing: '-0.06em', lineHeight: 1, marginBottom: 24, fontFamily: 'var(--font-display,sans-serif)' }}>02</div>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', color: '#fff', lineHeight: 1.2 }}>Conectamos a cada estudiante con el mentor adecuado</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.6)', margin: '0 0 28px' }}>
                Asignamos a cada estudiante el Luteacher de mayor afinidad, considerando el curso, los horarios, el perfil de aprendizaje y la personalidad.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(242,135,5,.18)', border: '1px solid rgba(242,135,5,.3)', color: 'var(--orange-400)', borderRadius: 99, padding: '6px 14px', fontSize: 13, fontWeight: 600, fontStyle: 'italic' }}>
                Porque todos aprendemos de manera diferente.
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,.07)', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', padding: '28px', backdropFilter: 'blur(16px)', boxShadow: '0 20px 60px rgba(0,0,0,.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>Tu match asignado</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(242,135,5,.2)', border: '1px solid rgba(242,135,5,.35)', borderRadius: 99, padding: '5px 12px' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange-400)' }}></div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--orange-400)' }}>96% de afinidad</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 22, borderBottom: '1px solid rgba(255,255,255,.08)', marginBottom: 22 }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', flex: 'none', border: '2px solid rgba(255,255,255,.15)', boxShadow: '0 4px 16px rgba(0,0,0,.3)' }}>
                    <img src="assets/luteacher-1.png" alt="Sebastian R." style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 3 }}>Sebastian R.</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.42)' }}>Ing. de Sistemas · UPC</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icon name="star" size={13} stroke={2} style={{ color: 'var(--orange-400)' }} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>4.9</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {factors.map(function(f) {
                    return (
                      <div key={f.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.6)' }}>{f.label}</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--orange-400)' }}>{f.pct}%</span>
                        </div>
                        <div style={{ height: 5, borderRadius: 99, background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}>
                          <div style={{ width: f.pct + '%', height: '100%', background: 'var(--grad-brand)', borderRadius: 99 }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {connector}
          <div style={{ background: 'var(--paper)', border: '1px solid var(--sand-200)', borderRadius: 24, padding: '56px 60px', boxShadow: '0 2px 40px rgba(20,27,43,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 96, fontWeight: 900, color: 'var(--sand-200)', letterSpacing: '-0.06em', lineHeight: 1, marginBottom: 24, fontFamily: 'var(--font-display,sans-serif)' }}>03</div>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', color: 'var(--ink-900)', lineHeight: 1.2 }}>Mide y demuestra el impacto</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-500)', margin: '0 0 32px' }}>
                Accede a un dashboard personalizado con seguimiento uno a uno, asistencia, progreso académico y utilización de horas para evidenciar resultados.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {feat3.map(function(f) {
                  return (
                    <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--canvas-2)', border: '1px solid var(--sand-200)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                        <Icon name={f.icon} size={16} stroke={1.9} style={{ color: 'var(--orange-500)' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-900)', marginBottom: 4 }}>{f.title}</div>
                        <p style={{ fontSize: 13, color: 'var(--ink-400)', margin: 0, lineHeight: 1.5 }}>{f.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ background: 'var(--canvas-2)', borderRadius: 18, border: '1px solid var(--sand-200)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(20,27,43,0.08)' }}>
              <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--sand-200)', padding: '11px 18px', display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }}></div>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }}></div>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }}></div>
                <span style={{ marginLeft: 10, fontSize: 12, color: 'var(--ink-400)', fontWeight: 500 }}>Dashboard · Tu Programa 2026</span>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 12 }}>
                  {kpis.map(function(k) {
                    return (
                      <div key={k.label} style={{ background: 'var(--paper)', borderRadius: 12, padding: '14px', border: '1px solid var(--sand-200)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                          <Icon name={k.icon} size={13} stroke={2} style={{ color: 'var(--orange-500)' }} />
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#16A34A', background: '#F0FDF4', borderRadius: 99, padding: '2px 6px' }}>{k.change}</span>
                        </div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{k.value}</div>
                        <div style={{ fontSize: 10, color: 'var(--ink-400)', marginTop: 2 }}>{k.label}</div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ background: 'var(--paper)', borderRadius: 12, border: '1px solid var(--sand-200)', padding: '14px 16px', marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-700)' }}>Progreso académico</span>
                    <span style={{ fontSize: 10, color: 'var(--ink-400)' }}>8 semanas</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 52 }}>
                    {bars.map(function(h, i) {
                      return (
                        <div key={i} style={{ flex: 1, height: h + '%', borderRadius: '4px 4px 0 0', background: i === 7 ? 'var(--grad-brand)' : (i >= 5 ? 'var(--orange-200,#fed7aa)' : 'var(--sand-200)') }}></div>
                      );
                    })}
                  </div>
                </div>
                <div style={{ background: 'var(--paper)', borderRadius: 12, border: '1px solid var(--sand-200)', overflow: 'hidden' }}>
                  <div style={{ padding: '9px 14px', borderBottom: '1px solid var(--sand-100)', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Estudiantes</span>
                    <span style={{ fontSize: 10, color: 'var(--ink-400)' }}>Progreso</span>
                  </div>
                  {students.map(function(row) {
                    return (
                      <div key={row[0]} style={{ padding: '9px 14px', borderBottom: '1px solid var(--sand-100)', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>{row[0].charAt(0)}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-700)', flex: 1 }}>{row[0]}</span>
                        <div style={{ width: 60, height: 5, borderRadius: 99, background: 'var(--sand-100)', overflow: 'hidden' }}>
                          <div style={{ width: row[1] + '%', height: '100%', background: 'var(--grad-brand)' }}></div>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--orange-500)', minWidth: 28, textAlign: 'right' }}>{row[1]}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CURSOS = [
  ['Matemáticas', 'assets/course-icon-math.png', 'Álgebra · Geometría · Cálculo', 'Fortalecemos las bases que acompañarán a los estudiantes durante toda su trayectoria educativa.'],
  ['Física', 'assets/course-icon-physics.png', 'Mecánica · Electricidad · Termodinámica', 'Ayudamos a convertir conceptos complejos en aprendizajes más claros y accesibles.'],
  ['Programación', 'assets/course-icon-programming-2.png', 'Python · Java · C++', 'Desarrollamos habilidades digitales esenciales para el futuro.'],
  ['Química', 'assets/course-icon-chemistry.png', 'General · Orgánica', 'Reforzamos conocimientos fundamentales para carreras STEM y ciencias de la salud.'],
  ['Inglés', 'assets/course-icon-english.png', 'Conversación · Académico · Negocios', 'Impulsamos una habilidad clave para desenvolverse en un mundo cada vez más global.'],
];

function Cursos() {
  return (
    <section id="cursos" style={{ padding: '104px 0', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 52px' }}>
          <div className="lt-overline">Áreas de acompañamiento</div>
          <h2 className="lt-h1" style={{ margin: '12px 0 16px' }}>Aprender STEM no tiene por qué ser difícil.</h2>
          <p className="lt-body-lg" style={{ color: 'var(--ink-500)' }}>
            Brindamos acompañamiento académico personalizado para ayudar a cada estudiante a comprender mejor sus cursos, fortalecer su confianza y alcanzar sus metas académicas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {CURSOS.map(([name, img, sub, desc]) => (
            <div key={name} className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <img src={img} alt={name} style={{ width: 52, height: 52, borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }} />
                <div>
                  <div className="lt-h4" style={{ fontSize: 17 }}>{name}</div>
                  <div className="lt-caption" style={{ marginTop: 3, color: 'var(--ink-400)' }}>{sub}</div>
                </div>
              </div>
              <p className="lt-body-sm" style={{ color: 'var(--ink-500)' }}>{desc}</p>
            </div>
          ))}
          <div className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column', background: 'transparent', border: '1.5px dashed var(--sand-300)', boxShadow: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
              <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 52, height: 52, flexShrink: 0 }}>
                <Icon name="layers" size={26} />
              </div>
              <div>
                <div className="lt-h4" style={{ fontSize: 17 }}>Y mucho más</div>
                <div className="lt-caption" style={{ marginTop: 3, color: 'var(--ink-400)' }}>Estadística · Biología · Economía</div>
              </div>
            </div>
            <p className="lt-body-sm" style={{ color: 'var(--ink-500)' }}>Otras áreas disponibles bajo demanda. Porque cada estudiante tiene desafíos y objetivos diferentes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function ImpactGallery() {
  return (
    <section id="impacto" style={{ padding: '86px 0', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div className="lt-overline">Nuestro impacto</div>
          <h2 className="lt-h1" style={{ margin: '12px 0 0' }}>Detrás de cada nota, una <span className="lt-grad-text">historia</span>.</h2>
          <p className="lt-body-lg" style={{ marginTop: 16 }}>
            Conoce a los Luteachers y estudiantes que forman parte de nuestros programas.
            Sube tus fotos de impacto para mostrar el rostro humano de tu iniciativa.
          </p>
          <div style={{ display: 'flex', gap: 30, marginTop: 28 }}>
            {[['+30', 'programas activos'], ['+15k', 'sesiones dictadas'], ['92%', 'mejora de notas']].map(([n, l]) => (
              <div key={l}>
                <div className="lt-h2" style={{ color: 'var(--orange-600)', fontSize: 28 }}>{n}</div>
                <div className="lt-caption">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, height: 420 }}>
          <image-slot id="impacto-1" shape="rounded" radius="18" placeholder="Foto de profesores"
            style={{ gridRow: '1 / 3', width: '100%', height: '100%', borderRadius: 18, border: '1.5px dashed var(--sand-300)', fontSize: '12px' }}></image-slot>
          <image-slot id="impacto-2" shape="rounded" radius="18" placeholder="Sesión"
            style={{ width: '100%', height: '100%', borderRadius: 18, border: '1.5px dashed var(--sand-300)', fontSize: '12px' }}></image-slot>
          <image-slot id="impacto-3" shape="rounded" radius="18" placeholder="Estudiantes"
            style={{ width: '100%', height: '100%', borderRadius: 18, border: '1.5px dashed var(--sand-300)', fontSize: '12px' }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  var t = [
    ['assets/testimonioblanca.png', 'Blanca, mamá de Belén', 'Matemáticas',
      'Me encanta ver el progreso de mi hija reflejado en sus notas del cole, pero también como persona. Ha ganado muchísimas confianza y afronta mejor los problemas que se presentan día a día.'],
    ['assets/testimoniomanuel.png', 'Manuel, papá de Macarena', 'Cálculo',
      'Mi experiencia en Luteach es extraordinaria, es un equipo que siempre está dispuesto a atender mis inquietudes a través de su trato y reportes inteligentes. Son muy flexibles y hacen que aprender sea entretenido. Macarena ha ganado muchísima seguridad.'],
    ['assets/richardtestimonio.png', 'Richard, papá de Patrick', 'Programación en Python',
      'Encontrar al tutor ideal y que tenga empatía por mi hijo y su educación ha sido realmente gratificante. No es sencillo encontrar personas así, y es ahí donde radica el valor de los Luteachers.'],
  ];
  return (
    <section id="opiniones" style={{ background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)', padding: '86px 0' }}>
      <div className="lt-wrap">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
          <div className="lt-overline">Testimonios</div>
          <h2 className="lt-h1" style={{ margin: '12px 0 0' }}>La tranquilidad se nota en casa.</h2>
          <p className="lt-body-lg" style={{ marginTop: 14, color: 'var(--ink-500)' }}>Porque cuando los hijos entienden, ganan confianza. Y cuando los padres ven que van por buen camino, sienten un alivio que no tiene precio.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {t.map(function(item, idx) {
            return (
              <div key={idx} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={item[0]} alt={item[1]} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', borderBottom: '1px solid var(--sand-200)' }} />
                <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                    <Icon name="star" size={16} style={{ color: 'var(--orange-400)' }} />
                    <Icon name="star" size={16} style={{ color: 'var(--orange-400)' }} />
                    <Icon name="star" size={16} style={{ color: 'var(--orange-400)' }} />
                    <Icon name="star" size={16} style={{ color: 'var(--orange-400)' }} />
                    <Icon name="star" size={16} style={{ color: 'var(--orange-400)' }} />
                  </div>
                  <p className="lt-body" style={{ color: 'var(--ink-700)', fontStyle: 'italic' }}>"{item[3]}"</p>
                  <div style={{ marginTop: 'auto', paddingTop: 18 }}>
                    <div style={{ font: 'var(--subtitle)', fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{item[1]}</div>
                    <div className="lt-caption">{item[2]}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function FinalCTA() {
  var cols = [
    ['Producto', ['Cómo funciona', 'Cursos', 'Beneficios', 'Reportes de impacto']],
    ['Luteach', ['Sobre nosotros', 'Para empresas', 'Programas de impacto', 'Contacto']],
    ['Legal', ['Política de privacidad', 'Términos y condiciones', 'Aviso legal']],
  ];
  var socials = [
    { icon: 'linkedin', label: 'LinkedIn' },
    { icon: 'instagram', label: 'Instagram' },
    { icon: 'message-circle', label: 'WhatsApp' },
  ];
  return (
    <footer style={{ background: 'var(--grad-brand)', position: 'relative', overflow: 'hidden' }}>
      <div className="lt-wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 96, paddingBottom: 64, textAlign: 'center' }}>
        <img src={L_LOGO_W} alt="Luteach" style={{ height: 34, marginBottom: 40 }} />
        <h2 style={{ color: '#fff', fontSize: 52, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: 680, margin: '0 auto 40px' }}>
          Invierte en las familias de tus colaboradores. Multiplica su impacto
        </h2>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <a className="btn btn-dark btn-lg" href="#">
            Agenda una reunión <Icon name="arrow-right" size={18} />
          </a>
          <a className="btn btn-lg" href="#" style={{ background: 'rgba(255,255,255,.18)', color: '#fff', border: '1px solid rgba(255,255,255,.35)', backdropFilter: 'blur(8px)' }}>
            <Icon name="message-circle" size={18} /> Escríbenos por WhatsApp
          </a>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 72 }}>
          {socials.map(function(s) {
            return (
              <a key={s.label} href="#" title={s.label} style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', display: 'grid', placeItems: 'center', color: '#fff' }}
                onMouseEnter={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,.28)'; }}
                onMouseLeave={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,.15)'; }}>
                <Icon name={s.icon} size={18} stroke={1.9} />
              </a>
            );
          })}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.2)', paddingTop: 52, display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, textAlign: 'left' }}>
          <div>
            <p style={{ font: 'var(--body-sm)', color: 'rgba(255,255,255,.7)', maxWidth: 260, margin: 0 }}>
              Transformamos oportunidades en impacto. Educación para colaboradores, becarios y comunidades, impulsada por universitarios destacados.
            </p>
          </div>
          {cols.map(function(col) {
            return (
              <div key={col[0]}>
                <div style={{ font: 'var(--overline)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 14, fontSize: 11 }}>{col[0]}</div>
                {col[1].map(function(it) {
                  return (
                    <a key={it} href="#" style={{ display: 'block', font: 'var(--body-sm)', color: 'rgba(255,255,255,.8)', padding: '5px 0' }}
                      onMouseEnter={function(e) { e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={function(e) { e.currentTarget.style.color = 'rgba(255,255,255,.8)'; }}>
                      {it}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.2)', font: 'var(--caption)', color: 'rgba(255,255,255,.55)' }}>
          <span>© 2026 Luteach. Transformando oportunidades en impacto.</span>
          <span>Lima, Perú</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -30, left: 0, right: 0, textAlign: 'center', zIndex: 0, pointerEvents: 'none', lineHeight: 1, overflow: 'hidden' }}>
        <span style={{ fontSize: 180, fontWeight: 900, color: 'rgba(0,0,0,.12)', letterSpacing: '-0.04em', fontFamily: 'var(--font-display,sans-serif)', whiteSpace: 'nowrap' }}>LUTEACH</span>
      </div>
    </footer>
  );
}

function LFooter({ onScrollTo }) { return null; }

function Partners() {
  const logos = [
    'bcp', 'perumin', 'minas', 'wim', 'vr','fundacioneducacion', 'tbird', 'utecu', 'canvia', 'platzi',
  , 'hultprize', 'utec', 'ylai', 'startglobal', 'eo', 'camarasuiza',
  ];
  const trackRef = React.useRef(null);
  const drag = React.useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const paused = React.useRef(false);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf;
    const tick = () => {
      if (el && !paused.current && !drag.current.down) {
        el.scrollLeft += 0.5;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onDown = (e) => {
    const el = trackRef.current;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const el = trackRef.current;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onUp = () => { drag.current.down = false; };

  // Duplicate the list so the auto-scroll loops seamlessly
  const loop = [...logos, ...logos];

  return (
    <section id="aliados" style={{ background: 'var(--paper)', borderTop: '1px solid var(--sand-200)', borderBottom: '1px solid var(--sand-200)', padding: '64px 0', overflow: 'hidden' }}>
      <div className="lt-wrap" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="lt-overline" style={{ color: 'var(--blue-600)' }}>Nuestros aliados</div>
          <h2 className="lt-h2" style={{ margin: '12px 0 0' }}>Organizaciones que nos respaldan.</h2>
        </div>
        <p className="lt-body" style={{ maxWidth: 360, margin: 0, color: 'var(--ink-500)' }}>
          
        </p>
      </div>
      <div
        ref={trackRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        style={{
          display: 'flex', gap: 18, overflowX: 'auto', cursor: 'grab',
          padding: '4px 32px', scrollbarWidth: 'none', msOverflowStyle: 'none',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
          maskImage: 'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        {loop.map((name, i) => (
          <div key={name + i} style={{
            flex: 'none', width: 260, minHeight: 140, display: 'grid', placeItems: 'center',
            padding: '24px 28px', background: 'var(--canvas-2)', border: '1px solid var(--sand-200)',
            borderRadius: 'var(--r-lg)', userSelect: 'none',
          }}>
            <img src={`assets/aliado-${name}.png`} alt={name} draggable={false}
              style={{ maxWidth: '100%', maxHeight: 96, objectFit: 'contain', display: 'block', pointerEvents: 'none' }} />
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Steps, Cursos, Testimonials, Partners, FinalCTA, LFooter });
