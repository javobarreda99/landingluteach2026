/* Luteach Platform — Login screen + Dashboard content */

function Login({ onSignIn }) {
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* form */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 9%', background: 'var(--canvas)' }}>
        <img src={P_LOGO} alt="Luteach" style={{ height: 30, width: 'auto', alignSelf: 'flex-start', marginBottom: 40 }} />
        <h1 className="lt-h1" style={{ fontSize: 34 }}>Welcome back.</h1>
        <p className="lt-body" style={{ margin: '8px 0 30px' }}>Sign in to manage your matches and track progress.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 380 }}>
          <div className="field"><label>Work email</label><input defaultValue="admin@lincolnstem.edu" /></div>
          <div className="field"><label>Password</label><input type="password" defaultValue="password" /></div>
          <button className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 6 }} onClick={onSignIn}>
            Sign in <Icon name="arrow-right" size={18} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--sand-200)' }}></div>
            <span className="lt-caption">or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--sand-200)' }}></div>
          </div>
          <button className="btn btn-ghost" style={{ justifyContent: 'center' }} onClick={onSignIn}>
            <Icon name="building-2" size={18} /> Continue with school SSO
          </button>
          <p className="lt-caption" style={{ textAlign: 'center', marginTop: 6 }}>New institution? <a href="#" style={{ color: 'var(--orange-700)', fontWeight: 700 }}>Book a demo</a></p>
        </div>
      </div>
      {/* brand panel */}
      <div style={{ background: 'var(--grad-brand)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <img src={P_ICON} alt="" style={{ position: 'absolute', right: -50, bottom: -50, width: 300, opacity: .2, borderRadius: 56 }} />
        <div style={{ color: '#fff', maxWidth: 380, position: 'relative' }}>
          <div style={{ font: 'var(--overline)', letterSpacing: '.14em', textTransform: 'uppercase', opacity: .85, marginBottom: 14 }}>Luteach for institutions</div>
          <div className="lt-h1" style={{ color: '#fff', fontSize: 36 }}>“We matched 180 students in a term — and saw grades climb.”</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 26 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.25)' }}></div>
            <div>
              <div style={{ font: 'var(--subtitle)', fontWeight: 700, color: '#fff' }}>Ana López</div>
              <div style={{ font: 'var(--body-sm)', color: 'rgba(255,255,255,.8)' }}>STEM Director · Lincoln Academy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  ['Active matches', '184', 'sparkles', '+12 this week', 'var(--cat-code)'],
  ['Sessions this month', '1,206', 'calendar-check', '+8%', 'var(--cat-math)'],
  ['Avg. match time', '19h', 'timer', '−3h vs last', 'var(--cat-physics)'],
  ['Students improving', '92%', 'trending-up', '+4 pts', 'var(--cat-bio)'],
];

function StatCard({ label, value, icon, delta, grad }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="cat-tile" style={{ background: grad, width: 42, height: 42 }}><Icon name={icon} size={21} /></div>
        <span className="lt-caption" style={{ color: 'var(--success)', fontWeight: 700 }}>{delta}</span>
      </div>
      <div className="lt-h1" style={{ fontSize: 34, marginTop: 16 }}>{value}</div>
      <div className="lt-caption" style={{ marginTop: 2 }}>{label}</div>
    </div>
  );
}

const TUTORS = [
  ['Mara V.', 'Computer Science', 'TU Delft', '4.9', 'code-xml', 'cat-code', 'Programming'],
  ['Diego R.', 'Mathematics', 'UPC Barcelona', '4.8', 'sigma', 'cat-math', 'Math'],
  ['Sofia L.', 'Physics', 'ETH Zürich', '5.0', 'atom', 'cat-physics', 'Physics'],
  ['Tomás N.', 'Chemistry', 'Univ. Complutense', '4.7', 'flask-conical', 'cat-chem', 'Chemistry'],
];

function Dashboard({ onBook }) {
  return (
    <div style={{ padding: 32, overflowY: 'auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginBottom: 26 }}>
        {STATS.map(s => <StatCard key={s[0]} label={s[0]} value={s[1]} icon={s[2]} delta={s[3]} grad={s[4]} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
        <PendingMatches onBook={onBook} />
        <TopTutors onBook={onBook} />
      </div>
    </div>
  );
}

function PendingMatches({ onBook }) {
  const rows = [
    ['Liam Carter', 'Calculus I — needs help before midterm', 'Math', 'cat-math', '96%'],
    ['Noor Hassan', 'Intro to Python — first session', 'Programming', 'cat-code', '94%'],
    ['Eva Sánchez', 'Mechanics — exam prep', 'Physics', 'cat-physics', '91%'],
  ];
  return (
    <div className="card" style={{ padding: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <h3 className="lt-h3" style={{ margin: 0 }}>Pending matches</h3>
        <span className="badge" style={{ background: 'var(--warning-bg)', color: 'var(--warning)', marginLeft: 10 }}>3 to review</span>
        <a href="#" style={{ marginLeft: 'auto', font: 'var(--caption)', fontWeight: 700, color: 'var(--orange-700)' }}>View all</a>
      </div>
      {rows.map((r, i) => (
        <div key={r[0]} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 4px', borderTop: i ? '1px solid var(--sand-100)' : 'none' }}>
          <div className="cat-tile" style={{ background: `var(--${r[3]})`, width: 40, height: 40 }}><Icon name="user" size={20} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: 'var(--subtitle)', fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{r[0]}</div>
            <div className="lt-caption" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r[1]}</div>
          </div>
          <span className="badge" style={{ background: 'var(--orange-100)', color: 'var(--orange-700)' }}>{r[4]} fit</span>
          <button className="btn btn-primary btn-sm" onClick={onBook}>Match</button>
        </div>
      ))}
    </div>
  );
}

function TopTutors({ onBook }) {
  return (
    <div className="card" style={{ padding: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <h3 className="lt-h3" style={{ margin: 0 }}>Top Luteachers</h3>
        <a href="#" style={{ marginLeft: 'auto', font: 'var(--caption)', fontWeight: 700, color: 'var(--orange-700)' }}>Browse</a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {TUTORS.slice(0, 4).map(t => (
          <div key={t[0]} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="cat-tile" style={{ background: `var(--${t[5]})`, width: 38, height: 38 }}><Icon name={t[4]} size={19} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ font: 'var(--subtitle)', fontSize: 14.5, fontWeight: 700, color: 'var(--ink-900)' }}>{t[0]}</div>
              <div className="lt-caption">{t[1]} · {t[2]}</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, font: 'var(--caption)', fontWeight: 700, color: 'var(--ink-700)' }}>
              <Icon name="star" size={13} style={{ color: 'var(--orange-400)' }} />{t[3]}
            </span>
          </div>
        ))}
      </div>
      <button className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={onBook}>
        <Icon name="sparkles" size={16} /> Auto-match a student
      </button>
    </div>
  );
}

Object.assign(window, { Login, Dashboard, STATS, TUTORS });
