/* Luteach Platform — shell: Icon, Logo, Sidebar, TopBar */

function useLucide() { React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }); }
function Icon({ name, size = 20, className = '', style = {} }) {
  return <i data-lucide={name} className={className} style={{ width: size, height: size, display: 'inline-flex', ...style }}></i>;
}
const P_ICON = '../../assets/luteach-icon.jpg';
const P_LOGO = '../../assets/luteach-logo-orange.png';

const NAV = [
  ['Dashboard', 'layout-dashboard'],
  ['Matches', 'sparkles'],
  ['Luteachers', 'graduation-cap'],
  ['Students', 'users'],
  ['Reports', 'bar-chart-3'],
  ['Settings', 'settings'],
];

function Sidebar({ active, onNav }) {
  return (
    <aside style={{ width: 248, flex: 'none', background: 'var(--paper)', borderRight: '1px solid var(--sand-200)', height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 22px' }}>
        <img src={P_ICON} alt="" style={{ width: 34, height: 34, borderRadius: 9 }} />
        <img src={P_LOGO} alt="Luteach" style={{ height: 20 }} />
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV.map(([label, ic]) => {
          const on = active === label;
          return (
            <button key={label} onClick={() => onNav(label)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 'var(--r-md)',
              border: 'none', background: on ? 'var(--orange-100)' : 'transparent',
              color: on ? 'var(--orange-700)' : 'var(--ink-500)', font: 'var(--subtitle)', fontSize: 15, fontWeight: on ? 700 : 600,
              textAlign: 'left', transition: 'all .15s'
            }}
            onMouseEnter={e => { if (!on) e.currentTarget.style.background = 'var(--sand-100)'; }}
            onMouseLeave={e => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
              <Icon name={ic} size={19} /> {label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto' }}>
        <div className="card" style={{ padding: 16, background: 'var(--canvas-2)', boxShadow: 'none' }}>
          <div className="lt-caption" style={{ fontWeight: 700, color: 'var(--ink-700)' }}>Campus plan</div>
          <div className="lt-caption" style={{ marginTop: 2 }}>184 / 200 seats used</div>
          <div style={{ height: 6, borderRadius: 99, background: 'var(--sand-200)', marginTop: 10, overflow: 'hidden' }}>
            <div style={{ width: '92%', height: '100%', background: 'var(--grad-brand)' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 32px', borderBottom: '1px solid var(--sand-200)', background: 'var(--canvas)' }}>
      <h1 className="lt-h2" style={{ fontSize: 26, margin: 0 }}>{title}</h1>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Icon name="search" size={18} style={{ position: 'absolute', left: 14, color: 'var(--ink-400)' }} />
          <input placeholder="Search students, tutors…" style={{
            width: 280, padding: '11px 14px 11px 42px', borderRadius: 'var(--r-pill)', border: '1.5px solid var(--sand-300)',
            background: 'var(--paper)', font: 'var(--body-sm)', color: 'var(--ink-900)', outline: 'none'
          }} />
        </div>
        <button style={{ width: 42, height: 42, borderRadius: '50%', border: '1.5px solid var(--sand-300)', background: 'var(--paper)', display: 'grid', placeItems: 'center', color: 'var(--ink-500)' }}><Icon name="bell" size={19} /></button>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: '#fff', font: 'var(--font-display)', fontWeight: 700 }}>AL</div>
      </div>
    </div>
  );
}

Object.assign(window, { useLucide, Icon, Sidebar, TopBar, P_ICON, P_LOGO, NAV });
