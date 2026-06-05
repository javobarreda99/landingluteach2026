// @ts-nocheck
/* Luteach Landing — Nav, Hero, Stats, Universities, Benefits */

function useLucide() { React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }); }
function Icon({ name, size = 20, stroke, className = '', style = {} }) {
  const sw = stroke ? { strokeWidth: stroke } : {};
  return <i data-lucide={name} className={className} style={{ width: size, height: size, display: 'inline-flex', ...sw, ...style }}></i>;
}
const L_LOGO = 'assets/luteach-logo-orange.png';
const L_LOGO_W = 'assets/luteach-logo-white.png';
const L_ICON = 'assets/luteach-icon.jpg';

function Nav({ onScrollTo }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 500);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [['Desafío', 'desafios'], ['Cómo funciona', 'como'], ['Impacto', 'impacto'], ['Aliados', 'aliados']];
  const navTo = (id) => { setMenuOpen(false); onScrollTo(id); };
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--sand-200)' : '1px solid transparent', transition: 'all .25s' }}>
      <div className="lt-wrap" style={{ display: 'flex', alignItems: 'center', gap: 28, height: 72 }}>
        <a href="#" onClick={e => { e.preventDefault(); navTo('top'); }}><img src={scrolled ? L_LOGO : L_LOGO_W} alt="Luteach" style={{ height: 42 }} /></a>
        <nav className="nav-links" style={{ display: 'flex', gap: 24, marginLeft: 8 }}>
          {links.map(([l, id]) => (
            <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); onScrollTo(id); }}
              style={{ font: 'var(--subtitle)', fontSize: 14, fontWeight: 600, color: scrolled ? 'var(--ink-700)' : 'rgba(255,255,255,.85)' }}
              onMouseEnter={e => e.currentTarget.style.color = scrolled ? 'var(--orange-600)' : '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--ink-700)' : 'rgba(255,255,255,.85)'}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <a className="btn btn-ghost btn-sm" href="#" style={{ fontSize: 13, color: scrolled ? 'var(--ink-700)' : 'rgba(255,255,255,.85)', boxShadow: scrolled ? '' : 'inset 0 0 0 1.5px rgba(255,255,255,.35)' }}>Conviértete en Luteacher</a>
          <a className="btn btn-ghost btn-sm" href="#" style={{ fontSize: 13, color: scrolled ? 'var(--ink-700)' : 'rgba(255,255,255,.85)', boxShadow: scrolled ? '' : 'inset 0 0 0 1.5px rgba(255,255,255,.35)' }}>Iniciar sesión</a>
          <a className="btn btn-primary btn-sm" href="#" style={{ fontSize: 13 }}>Agenda una reunión</a>
          {/* Hamburger — shown on mobile via CSS, inline display:none hides on desktop */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'none', background: 'transparent',
              border: scrolled ? '1.5px solid var(--sand-300)' : '1.5px solid rgba(255,255,255,.35)',
              borderRadius: 8, padding: '7px 9px', cursor: 'pointer',
              color: scrolled ? 'var(--ink-700)' : '#fff',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name={menuOpen ? 'x' : 'menu'} size={20} stroke={2} />
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer ── */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: 72, left: 0, right: 0,
          background: 'rgba(14, 18, 30, 0.98)', backdropFilter: 'saturate(180%) blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,.12)', padding: '4px 20px 28px', zIndex: 48 }}>
          {links.map(([l, id]) => (
            <a key={id} href={'#' + id}
              onClick={e => { e.preventDefault(); navTo(id); }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '17px 0', color: 'rgba(255,255,255,.88)', fontSize: 17, fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,.07)', textDecoration: 'none',
                letterSpacing: '-0.01em' }}>
              {l}
              <Icon name="chevron-right" size={16} stroke={2.5} style={{ color: 'rgba(255,255,255,.3)' }} />
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
            <a href="#" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', border: '1px solid rgba(255,255,255,.18)', textAlign: 'center', justifyContent: 'center' }}>
              Conviértete en Luteacher
            </a>
            <a href="#" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.04)', color: 'rgba(255,255,255,.7)', border: '1px solid rgba(255,255,255,.1)', textAlign: 'center', justifyContent: 'center' }}>
              Iniciar sesión
            </a>
            <a href="#" className="btn btn-primary btn-lg" style={{ textAlign: 'center', justifyContent: 'center' }}>
              Agenda una reunión →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onScrollTo }) {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-hero)', paddingTop: 72 }}>
      <div style={{ position: 'absolute', top: -140, right: -80, width: 520, height: 520, borderRadius: '50%', background: 'var(--grad-trust)', opacity: .24, filter: 'blur(90px)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: -160, left: -120, width: 440, height: 440, borderRadius: '50%', background: 'var(--grad-brand)', opacity: .14, filter: 'blur(90px)', pointerEvents: 'none' }}></div>
      <div className="lt-wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.02fr', gap: 48, alignItems: 'center', padding: '64px 32px 80px', position: 'relative' }}>
        <div className="fade-up">
          <span className="badge" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.18)' }}>
            <Icon name="building-2" size={15} stroke={2} /> Bienestar para tus colaboradores y las comunidades donde operas
          </span>
          <h1 className="lt-display" style={{ fontSize: 58, margin: '20px 0 0', textWrap: 'balance', color: '#fff', lineHeight: 1.04 }}>
            Educación de calidad para quienes <span className="lt-grad-text">siempre estuvieron cerca</span>
          </h1>
          <p className="lt-body-lg" style={{ maxWidth: 500, marginTop: 18, color: 'rgba(255,255,255,.74)' }}>
            Luteach brinda reforzamiento académico de los hijos de tus colaboradores y tus comunidades, generando bienestar para las familias e impacto real para tu organización.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <a className="btn btn-primary btn-lg" href="#">Conversemos<Icon name="arrow-right" size={18} stroke={2} /></a>
            <button className="btn btn-lg" onClick={() => onScrollTo('impacto')} style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.2)' }}><Icon name="play" size={17} stroke={2} /> Nuestros resultados</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 36 }}>
           
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="fade-up hero-visual" style={{ position: 'relative', animationDelay: '.08s', height: 480 }}>
      {/* Main: virtual tutoring session */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: '0 28px 64px rgba(0,0,0,.5)', border: '1px solid rgba(255,255,255,.12)', background: 'var(--slate-800)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 13px', background: 'var(--slate-900)' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }}></span>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E' }}></span>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840' }}></span>
          <span style={{ marginLeft: 10, font: 'var(--caption)', color: 'rgba(255,255,255,.55)', fontSize: 12 }}>Sesión Luteach · Matemáticas</span>
        </div>
        <img src="assets/photo-session.png" alt="Tutoría virtual entre estudiante y Luteacher" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Stacked stat chips — bottom-left corner */}
      <div style={{ position: 'absolute', bottom: 0, left: -16, display: 'flex', flexDirection: 'column', gap: 8, zIndex: 3 }}>
        <div className="card" style={{ padding: '11px 15px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 16px 36px rgba(0,0,0,.35)', borderRadius: 'var(--r-md)' }}>
          <Icon name="trending-up" size={20} stroke={2} style={{ color: 'var(--success)' }} />
          <div>
            <div style={{ font: 'var(--caption)', fontWeight: 800, color: 'var(--ink-900)' }}>+87% de nuestros estudiante mejora su desempeño académico</div>
            <div className="lt-caption" style={{ fontSize: 11 }}>por encima del promedio de su aula</div>
          </div>
        </div>
        <div className="card" style={{ padding: '11px 15px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 16px 36px rgba(0,0,0,.35)', borderRadius: 'var(--r-md)' }}>
          <Icon name="badge-check" size={20} stroke={2} style={{ color: 'var(--blue-600)' }} />
          <div style={{ font: 'var(--caption)', fontWeight: 800, color: 'var(--ink-900)', fontSize: 12 }}>El tutor ideal para cada estudiante</div>
        </div>
      </div>
    </div>
  );
}

function CountUp({ target, prefix = '', suffix = '', format = false, duration = 1500 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const cur = Math.round(ease * target);
          setVal(cur);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const display = format ? val.toLocaleString('en-US') : val;
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function ImpactBand() {
  const stats = [
    { target: 40000, prefix: '+', suffix: '', format: true,  label: 'sesiones personalizadas que han impulsado el potencial de miles de jóvenes.' },
    { target: 1200,  prefix: '+', suffix: '', format: true,  label: 'hijos de colaboradores y becarios acompañados en su camino académico.' },
    { target: 300,   prefix: '+', suffix: '', format: false, label: 'Luteachers que capitalizan su conocimiento y están comprometidos con transformar oportunidades en resultados.' },
    { target: 87,    prefix: '',  suffix: '%',format: false, label: 'de nuestros estudiantes con notas por encima del promedio de su clase. El impacto no solo se promete; se demuestra.' },
  ];
  return (
    <section style={{ background: 'var(--slate-900)', padding: '64px 0', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div className="lt-wrap impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: '0 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
            <div style={{ width: 36, height: 3, background: 'var(--grad-brand)', borderRadius: 2, marginBottom: 16 }} />
            <div className="lt-display" style={{ fontSize: 52, lineHeight: 1, letterSpacing: '-0.03em',
              background: 'linear-gradient(120deg, #ffffff 20%, #F28705 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              <CountUp target={s.target} prefix={s.prefix} suffix={s.suffix} format={s.format} />
            </div>
            <div className="lt-caption" style={{ color: 'rgba(255,255,255,.52)', marginTop: 12, lineHeight: 1.55 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Universities() {
  const us = ['UPC', 'PUCP', 'UPCH', 'ULIMA', 'UNI', 'USIL'];
  return (
    <section style={{ background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)', borderBottom: '1px solid var(--sand-200)', padding: '30px 0' }}>
      <div className="lt-wrap" style={{ textAlign: 'center' }}>
        <div className="lt-overline" style={{ color: 'var(--ink-400)', marginBottom: 16 }}>Luteachers de las mejores universidades</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 22, opacity: .72 }}>
          {us.map(u => <span key={u} style={{ font: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--ink-500)', letterSpacing: '.02em' }}>{u}</span>)}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    ['home', 'Bienestar que llega a casa', 'Porque detrás de cada colaborador hay una familia y un futuro que también importa.'],
    ['sprout', 'Talento que inspira talento', 'Universitarios destacados acompañan a la próxima generación mientras desarrollan liderazgo y propósito.'],
    ['globe', 'Soluciones que crecen contigo', 'Somos más que un beneficio extendido para tus colaboradores, brindamos programas de reforzamiento en STEM que se adaptan a cada iniciativa y necesidad de tu organización.'],
    ['bar-chart-3', 'Impacto que trasciende los números', 'Convertimos historias de aprendizaje en indicadores que permiten demostrar resultados y tomar mejores decisiones.'],
  ];
  return (
    <section id="beneficios" style={{ padding: '104px 0', background: 'var(--canvas-2)', borderTop: '1px solid var(--sand-200)', borderBottom: '1px solid var(--sand-200)' }}>
      <div className="lt-wrap">
        <div style={{ maxWidth: 760, margin: '0 0 52px' }}>
          <div className="lt-overline">Por qué Luteach</div>
          <h2 className="lt-h1" style={{ margin: '16px 0 0', fontSize: 46, letterSpacing: '-0.02em' }}>Más que tutorías, construimos oportunidades.</h2>
          <p className="lt-body-lg" style={{ marginTop: 16, maxWidth: 580, color: 'var(--ink-500)' }}>Ayudamos a empresas y organizaciones a transformar su inversión en educación en bienestar para las familias, desarrollo del talento joven e impacto medible.</p>
        </div>
        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {items.map(([ic, t, d]) => (
            <div key={t} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div className="cat-tile" style={{ background: 'var(--grad-brand)', width: 48, height: 48 }}><Icon name={ic} size={24} stroke={2} /></div>
              <h3 className="lt-h3" style={{ fontSize: 19, marginTop: 18 }}>{t}</h3>
              <p className="lt-body-sm" style={{ marginTop: 10, color: 'var(--ink-500)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useLucide, Icon, Nav, Hero, ImpactBand, Universities, Benefits, L_LOGO, L_LOGO_W, L_ICON });
