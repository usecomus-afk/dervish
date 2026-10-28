'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DAILY_REFLECTIONS = [
  {
    source: 'Şuara Suresi 88-89',
    arabic: 'يَوْمَ لَا يَنْفَعُ مَالٌ وَلَا بَنُونَ إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ',
    meaning: 'O gün ne mal fayda verir, ne de evlatlar. Ancak Allah’a selim bir kalp ile gelenler müstesna.',
  },
  {
    source: 'Hadis-i Şerif (Buhârî)',
    arabic: 'أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ',
    meaning: 'Dikkat edin! Vücutta öyle bir et parçası vardır ki, o iyi olursa bütün vücut iyi olur; o bozulursa bütün vücut bozulur. Dikkat edin, o kalptir!',
  },
  {
    source: 'Hikmet Sözü',
    arabic: 'طَهِّرْ قَلْبَكَ مِنْ سِوَى اللّٰهِ',
    meaning: 'Kalp hanesini mâsivâdan (Allah’tan gayrısından) arındır ki, oraya sır ve huzur tecelli etsin.',
  }
];

export default function HomePage() {
  const [dhikrCount, setDhikrCount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'zikir' | 'tefekkur' | 'hakkinda'>('zikir');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('kalbiselim_dhikr');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) setDhikrCount(parsed);
    }
  }, []);

  const handleIncrement = () => {
    const next = dhikrCount + 1;
    setDhikrCount(next);
    localStorage.setItem('kalbiselim_dhikr', next.toString());
  };

  const handleReset = () => {
    if (confirm('Zikir sayacını sıfırlamak istiyor musunuz?')) {
      setDhikrCount(0);
      localStorage.setItem('kalbiselim_dhikr', '0');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="container">
      {/* Header */}
      <header className="card" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-gold)' }}>
            <Image
              src="/dervish.png"
              alt="Kalb-i Selim Dervish Logo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
          Kalb-i Selim
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          Derviş Gönül Rehberi &middot; v1.0.0 iOS
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <button
          type="button"
          onClick={() => setActiveTab('zikir')}
          className={`touch-btn ${activeTab === 'zikir' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 14 }}
        >
          Tesbihat
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('tefekkur')}
          className={`touch-btn ${activeTab === 'tefekkur' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 14 }}
        >
          Tefekkür
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('hakkinda')}
          className={`touch-btn ${activeTab === 'hakkinda' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 14 }}
        >
          Hakkında
        </button>
      </nav>

      {/* Main Content Area */}
      {activeTab === 'zikir' && (
        <section className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>
              Günün Zikri
            </span>
            <h2 style={{ fontSize: 20, marginTop: 4 }}>Lâ ilâhe illallâh</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
              &ldquo;Kalpler ancak Allah&apos;ı anmakla huzur bulur.&rdquo; (Ra&apos;d, 28)
            </p>
          </div>

          <div
            onClick={handleIncrement}
            style={{
              width: 170,
              height: 170,
              margin: '0 auto',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #21262d 0%, #161b22 100%)',
              border: '3px solid var(--accent-gold)',
              boxShadow: '0 0 24px rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'transform 0.1s ease',
            }}
          >
            <span style={{ fontSize: 44, fontWeight: 800, color: 'var(--text-primary)' }}>
              {dhikrCount}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
              DOKUN
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleIncrement}
              className="touch-btn btn-primary"
              style={{ flex: 1 }}
            >
              +1 Çek
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="touch-btn btn-secondary"
              style={{ width: 100 }}
            >
              Sıfırla
            </button>
          </div>
        </section>
      )}

      {activeTab === 'tefekkur' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {DAILY_REFLECTIONS.map((item, idx) => (
            <article key={idx} className="card">
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
                {item.source}
              </span>
              <p style={{ fontSize: 18, direction: 'rtl', margin: '10px 0', fontFamily: 'Traditional Arabic, serif', color: '#e6edf3' }}>
                {item.arabic}
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.meaning}
              </p>
            </article>
          ))}
        </section>
      )}

      {activeTab === 'hakkinda' && (
        <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontSize: 18, color: 'var(--accent-gold)' }}>Kalb-i Selim Nedir?</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Kalb-i Selim; kin, kibir, haset ve riyadan arınmış, yaratılmış her varlığa şefkat ve merhametle bakan, ilahi rızayı hayatın merkezine almış arı-duru bir gönüldür.
          </p>
          <div style={{ padding: 12, background: 'var(--bg-secondary)', borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              <strong>Paket Kimliği:</strong> com.kalbiselim.dervis<br />
              <strong>Derleme:</strong> iOS .ipa Sideload &amp; TestFlight Uyumlu<br />
              <strong>Platform:</strong> Next.js + Capacitor
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '12px 0' }}>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Kalb-i Selim &middot; Dervish iOS
        </p>
      </footer>
    </main>
  );
}
