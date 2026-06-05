/* Luteach Platform — Booking modal + index App pieces */

function BookingModal({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => { if (open) setStep(0); }, [open]);
  if (!open) return null;
  const tutor = ['Mara V.', 'Computer Science', 'TU Delft', '4.9', 'code-xml', 'cat-code'];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(43,37,32,.45)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="fade-up" onClick={e => e.stopPropagation()} style={{ background: 'var(--paper)', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)', width: 480, maxWidth: '100%', overflow: 'hidden' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 24, borderBottom: '1px solid var(--sand-100)' }}>
          <div className="cat-tile" style={{ background: `var(--${tutor[5]})`, width: 48, height: 48 }}><Icon name={tutor[4]} size={24} /></div>
          <div style={{ flex: 1 }}>
            <div className="lt-h3" style={{ fontSize: 19 }}>{tutor[0]}</div>
            <div className="lt-caption">{tutor[1]} · {tutor[2]}</div>
          </div>
          <span className="badge" style={{ background: 'var(--orange-100)', color: 'var(--orange-700)' }}>
            <Icon name="star" size={13} style={{ color: 'var(--orange-500)' }} /> {tutor[3]}
          </span>
          <button onClick={onClose} style={{ background: 'var(--sand-100)', border: 'none', width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'var(--ink-500)' }}><Icon name="x" size={16} /></button>
        </div>
        <div style={{ padding: 24 }}>
          {step === 0 && (
            <React.Fragment>
              <div className="lt-overline" style={{ marginBottom: 14 }}>Choose a time</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                {['Mon 10:00', 'Mon 14:00', 'Tue 09:00', 'Tue 16:00', 'Wed 11:00', 'Thu 15:00'].map((t, i) => (
                  <Slot key={t} label={t} defaultOn={i === 2} />
                ))}
              </div>
              <div className="field" style={{ marginTop: 18 }}><label>Note for the Luteacher (optional)</label>
                <input placeholder="Focus on derivatives before the midterm…" /></div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} onClick={() => setStep(1)}>
                Confirm match <Icon name="arrow-right" size={18} />
              </button>
            </React.Fragment>
          )}
          {step === 1 && (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div className="cat-tile" style={{ background: 'var(--success)', width: 56, height: 56, margin: '0 auto 16px' }}><Icon name="check" size={28} /></div>
              <h3 className="lt-h2" style={{ fontSize: 24 }}>Match confirmed</h3>
              <p className="lt-body" style={{ margin: '8px 0 22px' }}>Liam is matched with Mara for <strong>Tue 09:00</strong>. Both have been notified.</p>
              <button className="btn btn-ghost" style={{ justifyContent: 'center' }} onClick={onClose}>Back to dashboard</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Slot({ label, defaultOn }) {
  const [on, setOn] = React.useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} style={{
      padding: '12px 8px', borderRadius: 'var(--r-md)', font: 'var(--body-sm)', fontWeight: 700,
      border: on ? '2px solid var(--orange-500)' : '1.5px solid var(--sand-300)',
      background: on ? 'var(--orange-100)' : 'var(--paper)', color: on ? 'var(--orange-700)' : 'var(--ink-700)', cursor: 'pointer'
    }}>{label}</button>
  );
}

function Placeholder({ title }) {
  return (
    <div style={{ padding: 32 }}>
      <div className="card" style={{ padding: 56, textAlign: 'center', borderStyle: 'dashed', boxShadow: 'none', background: 'var(--canvas-2)' }}>
        <div className="cat-tile" style={{ background: 'var(--grad-brand-soft)', width: 52, height: 52, margin: '0 auto 16px' }}><Icon name="hammer" size={26} style={{ color: 'var(--orange-700)' }} /></div>
        <h3 className="lt-h3">{title}</h3>
        <p className="lt-body" style={{ maxWidth: 380, margin: '8px auto 0' }}>This screen isn't part of the provided source. Share real {title.toLowerCase()} screens and we'll build them out faithfully.</p>
      </div>
    </div>
  );
}

Object.assign(window, { BookingModal, Placeholder });
