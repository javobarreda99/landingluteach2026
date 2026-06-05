/* Luteach Marketing Site — shared bits: Icon, NavBar, Footer, Logo */

// Lucide icon wrapper. Re-runs createIcons after every render.
function useLucide() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}
function Icon({ name, size = 20, stroke = 2, className = '', style = {} }) {
  return <i data-lucide={name} className={className}
    style={{ width: size, height: size, display: 'inline-flex', strokeWidth: stroke, ...style }}></i>;
}

const LOGO = '../../assets/luteach-logo-orange.png';
const LOGO_WHITE = '../../assets/luteach-logo-white.png';
const ICON = '../../assets/luteach-icon.jpg';

function Logo({ white = false, height = 30 }) {
  return <img src={white ? LOGO_WHITE : LOGO} alt="Luteach" style={{ height, width: 'auto', display: 'block' }} />;
}

function NavBar({ onDemo, onScrollTo }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.site-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    (el || window).addEventListener('scroll', fn); return () => (el || window).removeEventListener('scroll', fn);
  }, []);
  const links = [['Cómo funciona', 'how'], ['Cursos', 'subjects'], ['Planes', 'pricing']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(255,249,243,.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--sand-200)' : '1px solid transparent',
      transition: 'all .25s'
    }}>
      <div className="lt-wrap" style={{ display: 'flex', alignItems: 'center', gap: 28, height: 74 }}>
        <a href="#" onClick={e => { e.preventDefault(); onScrollTo('top'); }}><Logo height={30} /></a>
        <nav style={{ display: 'flex', gap: 26, marginLeft: 8 }} className="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); onScrollTo(id); }}
              style={{ font: 'var(--subtitle)', fontSize: 15, fontWeight: 600, color: 'var(--ink-700)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--orange-700)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-700)'}>{label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
          <a className="btn btn-ghost btn-sm" href="#">Iniciar sesión</a>
          <button className="btn btn-primary btn-sm" onClick={onDemo}>Agenda una demo</button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onScrollTo }) {
  const cols = [
    ['Producto', ['Cómo funciona', 'Cursos', 'Planes', 'Para colegios']],
    ['Luteach', ['Nosotros', 'Ser Luteacher', 'Trabaja con nosotros', 'Contacto']],
    ['Recursos', ['Centro de ayuda', 'Confianza y seguridad', 'Privacidad', 'Términos']],
  ];
  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff', padding: '64px 0 40px' }}>
      <div className="lt-wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <Logo white height={30} />
          <p style={{ font: 'var(--body-sm)', color: 'rgba(255,255,255,.6)', maxWidth: 250, marginTop: 16 }}>
            El tutor correcto, asignado por afinidad. Luteachers universitarios verificados para STEM.
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ font: 'var(--overline)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange-400)', marginBottom: 16 }}>{h}</div>
            {items.map(it => (
              <a key={it} href="#" style={{ display: 'block', font: 'var(--body-sm)', color: 'rgba(255,255,255,.72)', padding: '6px 0' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.72)'}>{it}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="lt-wrap" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.12)', font: 'var(--caption)', color: 'rgba(255,255,255,.5)' }}>
        <span>© 2026 Luteach. Todos los derechos reservados.</span>
        <span style={{ display: 'flex', gap: 18 }}><a href="#">Privacidad</a><a href="#">Términos</a><a href="#">Cookies</a></span>
      </div>
    </footer>
  );
}

Object.assign(window, { useLucide, Icon, Logo, NavBar, Footer, LOGO, LOGO_WHITE, ICON });
