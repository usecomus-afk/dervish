'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  DERVISH_THOUGHT_BUBBLES,
  NEFS_STATIONS,
  DIVINE_PRESENCES,
  TREATISE_CHAPTERS
} from '../data/dervishWisdom';

type TabKey = 'baloncuk' | 'icyolculuk' | 'zikir' | 'irfan';

interface DhikrOption {
  id: string;
  title: string;
  arabic: string;
  dervishSecret: string;
  sourceNote: string;
}

const DHIKR_OPTIONS: DhikrOption[] = [
  {
    id: 'kelime-i-tevhid',
    title: 'Lâ ilâhe illallâh',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    dervishSecret:
      'Önce "Lâ ilâhe" diyerek kalp sarayındaki bütün sahte putları (heva, hırs, para, makam ve benlik iddiasını) süpür; ardından "İllallâh" ile gönül tahtına yalnızca O’nun nurunu yerleştir.',
    sourceNote: 'Şâh-ı Nakşibend & Dergâh Zikir Meclisleri'
  },
  {
    id: 'ism-i-hu',
    title: 'Yâ Hû',
    arabic: 'يَا هُوَ',
    dervishSecret:
      'Çekirdek etrafında semâ eden elektronlardan uzayda genişleyen galaksilere kadar her zerre kendi lisanıyla "Hû" zikrini çeker. Dışarıdaki kâinatın zikrini duymak için önce içindeki zerrelerin "Hû" nefesine katıl.',
    sourceNote: 'el-İsrâ, 17/44 & Kuantum Mikro Evrenin Zikri'
  },
  {
    id: 'lafzatullah',
    title: 'Allah',
    arabic: 'اللَّهُ',
    dervishSecret:
      'Güneş ile ayna arasındaki toz temizlenmedikçe güneş aynada görünmez. Her "Allah" deyişinde aradaki benlik tozunu sil ki geriye yalnızca Yaradan kalsın.',
    sourceNote: 'Niyâzî-i Mısrî & Hallâc-ı Mansûr Teslimiyeti'
  },
  {
    id: 'halk-i-cedid',
    title: 'Yâ Hayy Yâ Kayyûm',
    arabic: 'يَا حَيُّ يَا قَيُّومُ',
    dervishSecret:
      'Yaratılış tek seferlik bir hadise değildir; bir nefes alırken âlem fenâ bulur, nefes verirken "Halk-ı Cedîd" ile yeniden inşâ olunur. Bu zikri her nefes alışında yeniden doğuş bilinciyle çek.',
    sourceNote: 'Muhyiddin İbnü’l-Arabî · Tecellî-i Dâim & Halk-ı Cedîd'
  }
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('baloncuk');
  const [sceneIndex, setSceneIndex] = useState<number>(0);
  const [selectedNefsStep, setSelectedNefsStep] = useState<number>(1);
  const [selectedDhikrId, setSelectedDhikrId] = useState<string>('kelime-i-tevhid');
  const [dhikrCount, setDhikrCount] = useState<number>(0);
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const [draftNote, setDraftNote] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [saveFeedback, setSaveFeedback] = useState<string>('');

  const currentBubble = DERVISH_THOUGHT_BUBBLES[sceneIndex] || DERVISH_THOUGHT_BUBBLES[0];
  const currentNefs = NEFS_STATIONS.find((s) => s.step === selectedNefsStep) || NEFS_STATIONS[0];
  const currentDhikr = DHIKR_OPTIONS.find((d) => d.id === selectedDhikrId) || DHIKR_OPTIONS[0];

  useEffect(() => {
    try {
      const savedDhikr = localStorage.getItem('kalbiselim_dhikr');
      if (savedDhikr) {
        const parsed = parseInt(savedDhikr, 10);
        if (!isNaN(parsed)) setDhikrCount(parsed);
      }
      const savedNefs = localStorage.getItem('kalbiselim_nefs_step');
      if (savedNefs) {
        const parsedStep = parseInt(savedNefs, 10);
        if (parsedStep >= 1 && parsedStep <= 7) setSelectedNefsStep(parsedStep);
      }
      const savedNotes = localStorage.getItem('kalbiselim_reflections_v1');
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes) as Record<string, string>;
        setReflections(parsedNotes);
        const initialNote = parsedNotes[DERVISH_THOUGHT_BUBBLES[0].id] || '';
        setDraftNote(initialNote);
        setIsSaved(Boolean(initialNote));
      }
    } catch {
      // Ignore storage access errors in restricted webviews
    } finally {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const existing = reflections[currentBubble.id] || '';
    setDraftNote(existing);
    setIsSaved(Boolean(existing));
    setSaveFeedback('');
  }, [sceneIndex, currentBubble.id, mounted, reflections]);

  const handleSaveReflection = (customText?: string) => {
    const isClearing = customText === '';
    const rawText = customText !== undefined ? customText : draftNote;
    const textToSave = rawText.trim();
    const updated = { ...reflections };
    if (isClearing) {
      delete updated[currentBubble.id];
      setDraftNote('');
      setIsSaved(false);
      setSaveFeedback('');
    } else {
      updated[currentBubble.id] = textToSave || currentBubble.contemplationPrompts[0];
      if (!textToSave) {
        setDraftNote(currentBubble.contemplationPrompts[0]);
      } else if (customText !== undefined) {
        setDraftNote(textToSave);
      }
      setIsSaved(true);
      setSaveFeedback('Gönül defterinize kaydedildi');
    }
    setReflections(updated);
    try {
      localStorage.setItem('kalbiselim_reflections_v1', JSON.stringify(updated));
    } catch {
      setSaveFeedback('Kayıt hatası oluştu');
    }
  };

  const handleSelectNefs = (step: number) => {
    setSelectedNefsStep(step);
    try {
      localStorage.setItem('kalbiselim_nefs_step', step.toString());
    } catch {
      // Ignore storage errors
    }
  };

  const handleIncrementDhikr = () => {
    const next = dhikrCount + 1;
    setDhikrCount(next);
    try {
      localStorage.setItem('kalbiselim_dhikr', next.toString());
    } catch {
      // Ignore storage errors
    }
  };

  const handleResetDhikr = () => {
    setDhikrCount(0);
    try {
      localStorage.setItem('kalbiselim_dhikr', '0');
    } catch {
      // Ignore storage errors
    }
  };

  if (!mounted) {
    return (
      <main className="container" aria-busy="true">
        <section className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div className="badge" style={{ marginBottom: 12 }}>
            <span className="badge-dot" />
            <span>Yükleniyor</span>
          </div>
          <p className="font-serif" style={{ color: 'var(--p-text)', fontSize: 17, fontWeight: 600 }}>
            Kalb-i Selim · Dervişin Tefekkür Dünyası Hazırlanıyor...
          </p>
        </section>
      </main>
    );
  }

  const savedReflectionEntries = DERVISH_THOUGHT_BUBBLES.filter((b) => reflections[b.id]);

  return (
    <main className="container">
      {/* Header: Dervişin Hâl Aynası */}
      <header className="card" style={{ padding: '18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              position: 'relative',
              width: 68,
              height: 68,
              flexShrink: 0,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--p-green)',
              boxShadow: '0 2px 10px rgba(59, 109, 17, 0.18)'
            }}
          >
            <Image
              src="/dervish.png"
              alt="Derviş Portresi"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
              <span className="badge">
                <span className="badge-dot" />
                Edep Yâ Hû &middot; Vahdet-i Vücûd
              </span>
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--p-text)',
                lineHeight: 1.25,
                letterSpacing: '-0.01em'
              }}
            >
              Kalb-i Selim &middot; <span style={{ fontStyle: 'italic', color: 'var(--p-green)' }}>Derviş</span>
            </h1>
            <p
              style={{
                fontSize: 12.5,
                color: 'var(--p-text-muted)',
                lineHeight: 1.45,
                marginTop: 3
              }}
            >
              Günlük hayatın içinde her varlıkta O&apos;nu gören bir dervişin idrak ve tefekkür yolculuğu
            </p>
          </div>
        </div>
      </header>

      {/* Primary Navigation (4 Tabs, PurelyAdmin Standard >=44px) */}
      <nav
        aria-label="Ana Bölümler"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('baloncuk')}
          className={`touch-btn ${activeTab === 'baloncuk' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 12.5, padding: '8px 4px' }}
        >
          Düşünce Balonu
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('icyolculuk')}
          className={`touch-btn ${activeTab === 'icyolculuk' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 12.5, padding: '8px 4px' }}
        >
          İç Yolculuk
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('zikir')}
          className={`touch-btn ${activeTab === 'zikir' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 12.5, padding: '8px 4px' }}
        >
          Zikir &amp; Nefes
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('irfan')}
          className={`touch-btn ${activeTab === 'irfan' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: 12.5, padding: '8px 4px' }}
        >
          İrfan Heybesi
        </button>
      </nav>

      {/* TAB 1: DÜŞÜNCE BALONCUKLARI */}
      {activeTab === 'baloncuk' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Daily Moments Selector */}
          <div className="card" style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span className="section-label">
                GÜNLÜK HAYATTA 7 TEFEKKÜR ANI
              </span>
              <span style={{ fontSize: 12, color: 'var(--p-text-muted)', fontWeight: 500 }}>
                {sceneIndex + 1} / {DERVISH_THOUGHT_BUBBLES.length}
              </span>
            </div>
            <div className="step-grid-7">
              {DERVISH_THOUGHT_BUBBLES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSceneIndex(idx)}
                  aria-label={`${idx + 1}. Tefekkür Anı`}
                  className={`step-slot-btn ${idx === sceneIndex ? 'step-slot-btn-active' : ''}`}
                  style={{ flexDirection: 'column', gap: 2, padding: '6px 0' }}
                >
                  <span aria-hidden="true" style={{ fontSize: 15, lineHeight: 1 }}>
                    {item.sceneIcon}
                  </span>
                  <span style={{ fontSize: 11, lineHeight: 1 }}>{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scene Context & Dervish Thought Bubble */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                background: 'var(--p-cream-dark)',
                border: '1px solid var(--p-border)',
                borderRadius: 10,
                padding: '10px 14px',
                fontSize: 13,
                color: 'var(--p-text)',
                lineHeight: 1.5
              }}
            >
              <strong style={{ color: 'var(--p-green)' }}>
                {currentBubble.sceneIcon} {currentBubble.timeOfDay}:
              </strong>{' '}
              {currentBubble.dailyScene}
            </div>

            {/* Thought Bubble Trail Dots */}
            <div className="bubble-trail" aria-hidden="true">
              <span className="bubble-dot-sm" />
              <span className="bubble-dot-lg" />
            </div>

            {/* Primary Thought Bubble */}
            <article className="thought-bubble" aria-label="Dervişin Düşünce Baloncuğu">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span className="badge">
                  <span className="badge-dot" />
                  Dervişin Tefekkürü
                </span>
                <span className="section-label">Hâl İdraki</span>
              </div>

              <p
                className="font-serif"
                style={{
                  fontSize: 17.5,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'var(--p-text)',
                  lineHeight: 1.6,
                  marginBottom: 14
                }}
              >
                &ldquo;{currentBubble.dervishThought}&rdquo;
              </p>

              {/* Inner Heart Whisper: PurelyAdmin Terracotta Soft Box */}
              <div className="whisper-bubble">
                <strong style={{ color: 'var(--p-terracotta-dark)', fontStyle: 'normal', fontSize: 12 }}>
                  Kalp Fısıltısı:{' '}
                </strong>
                &ldquo;{currentBubble.innerWhisper}&rdquo;
              </div>
            </article>
          </div>

          {/* Digested Sufi Wisdom */}
          <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <span className="section-label" style={{ color: 'var(--p-green)' }}>
                Dervişin Sindirdiği İrfan
              </span>
              <span style={{ fontSize: 11.5, color: 'var(--p-text-muted)', textAlign: 'right' }}>
                {currentBubble.sourceMaster}
              </span>
            </div>

            <h2
              className="font-serif"
              style={{ fontSize: 18.5, fontWeight: 600, color: 'var(--p-text)' }}
            >
              {currentBubble.digestedWisdomTitle}
            </h2>

            <p style={{ fontSize: 13.5, color: 'var(--p-text-muted)', lineHeight: 1.65 }}>
              {currentBubble.digestedWisdomBody}
            </p>

            <blockquote
              style={{
                marginTop: 4,
                padding: '12px 14px',
                background: 'var(--p-cream-dark)',
                borderRadius: 8,
                border: '1px solid var(--p-border)',
                fontSize: 13,
                color: 'var(--p-text)',
                fontWeight: 500,
                lineHeight: 1.55
              }}
            >
              <span style={{ color: 'var(--p-green)', marginRight: 6 }}>✦</span>
              {currentBubble.sacredReference}
            </blockquote>
          </article>

          {/* Self-Inquiry & Inner Journey Prompt */}
          <article
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              border: '1px solid var(--p-green-border)'
            }}
          >
            <span className="badge badge-terracotta" style={{ alignSelf: 'flex-start' }}>
              <span className="badge-dot badge-dot-terracotta" />
              Kendi İç Yolculuğuna Soru
            </span>

            <p
              className="font-serif"
              style={{ fontSize: 16.5, fontWeight: 600, color: 'var(--p-text)', lineHeight: 1.5 }}
            >
              {currentBubble.selfInquiryQuestion}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="section-label">
                Tefekkür Tohumları (Dokunarak notunuza ekleyebilirsiniz):
              </span>
              {currentBubble.contemplationPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => handleSaveReflection(prompt)}
                  className="touch-btn btn-secondary"
                  style={{
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    fontSize: 13,
                    lineHeight: 1.45,
                    padding: '10px 14px'
                  }}
                >
                  <span style={{ color: 'var(--p-green)', flexShrink: 0 }}>◈</span>
                  <span>{prompt}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="inner-journey-note"
                className="section-label"
                style={{ color: 'var(--p-text)' }}
              >
                Bu An İçin Kendi İç Muhasebe Notum:
              </label>
              <textarea
                id="inner-journey-note"
                className="textarea-input"
                placeholder="Dervişin bu düşüncesi senin kalbinde neyi uyandırdı? Buraya iç sesini yaz..."
                value={draftNote}
                onChange={(e) => {
                  setDraftNote(e.target.value);
                  setIsSaved(false);
                  setSaveFeedback('');
                }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => handleSaveReflection()}
                  className="touch-btn btn-primary"
                  style={{ flex: 1 }}
                >
                  {isSaved ? '✓ Kaydedildi' : 'Gönül Defterine Kaydet'}
                </button>
                {reflections[currentBubble.id] && (
                  <button
                    type="button"
                    onClick={() => handleSaveReflection('')}
                    className="touch-btn btn-secondary"
                  >
                    Temizle
                  </button>
                )}
              </div>
              {saveFeedback && (
                <p style={{ fontSize: 12.5, color: 'var(--p-green)', fontWeight: 600 }}>
                  ✓ {saveFeedback}
                </p>
              )}
            </div>
          </article>

          {/* Prev / Next Moment Navigation */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button
              type="button"
              onClick={() =>
                setSceneIndex((prev) => (prev === 0 ? DERVISH_THOUGHT_BUBBLES.length - 1 : prev - 1))
              }
              className="touch-btn btn-secondary"
            >
              ← Önceki An
            </button>
            <button
              type="button"
              onClick={() =>
                setSceneIndex((prev) => (prev === DERVISH_THOUGHT_BUBBLES.length - 1 ? 0 : prev + 1))
              }
              className="touch-btn btn-primary"
            >
              Sonraki An →
            </button>
          </div>
        </section>
      )}

      {/* TAB 2: İÇ YOLCULUK */}
      {activeTab === 'icyolculuk' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Nefsin Yedi Mertebesi */}
          <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <span className="badge" style={{ marginBottom: 6 }}>
                <span className="badge-dot" />
                Men Arefe Nefsehû Fekad Arefe Rabbehû
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: 19, fontWeight: 600, color: 'var(--p-text)' }}
              >
                Nefsin Yedi Mertebesi (Etvâr-ı Seb&apos;a)
              </h2>
              <p style={{ fontSize: 13, color: 'var(--p-text-muted)', marginTop: 4, lineHeight: 1.5 }}>
                &ldquo;Kendini bilen Rabbini bilir.&rdquo; Şu an kendi iç yolculuğunda hangi nefis durağını tefekkür ediyorsun?
              </p>
            </div>

            <div className="step-grid-7">
              {NEFS_STATIONS.map((station) => (
                <button
                  key={station.step}
                  type="button"
                  onClick={() => handleSelectNefs(station.step)}
                  className={`step-slot-btn ${
                    selectedNefsStep === station.step ? 'step-slot-btn-active' : ''
                  }`}
                  aria-label={`${station.step}. Mertebe: ${station.name}`}
                >
                  {station.step}
                </button>
              ))}
            </div>

            <div
              style={{
                padding: 16,
                background: 'var(--p-cream-dark)',
                borderRadius: 10,
                border: '1px solid var(--p-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="section-label" style={{ color: 'var(--p-green)' }}>
                  {currentNefs.step}. DURAK
                </span>
                <span style={{ fontSize: 12, color: 'var(--p-terracotta-dark)', fontWeight: 600 }}>
                  {currentNefs.subtitle}
                </span>
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: 18, fontWeight: 600, color: 'var(--p-text)' }}
              >
                {currentNefs.name}
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--p-text-muted)', lineHeight: 1.55 }}>
                {currentNefs.description}
              </p>
              <div
                style={{
                  marginTop: 4,
                  paddingTop: 10,
                  borderTop: '1px solid var(--p-border)',
                  fontSize: 13,
                  color: 'var(--p-text)',
                  lineHeight: 1.5
                }}
              >
                <strong style={{ color: 'var(--p-green)' }}>Günlük Hayattaki İşareti: </strong>
                {currentNefs.dailyLifeSign}
              </div>
              <div className="whisper-bubble" style={{ marginTop: 4 }}>
                <strong style={{ color: 'var(--p-terracotta-dark)', fontStyle: 'normal' }}>
                  Dervişin Notu:{' '}
                </strong>
                {currentNefs.dervishAdvice}
              </div>
            </div>
          </article>

          {/* Merâtibü'l-Vücûd */}
          <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <span className="badge badge-terracotta" style={{ marginBottom: 6 }}>
                <span className="badge-dot badge-dot-terracotta" />
                İbnü&apos;l-Arabî &middot; Hazrât-ı Hams
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: 19, fontWeight: 600, color: 'var(--p-text)' }}
              >
                Merâtibü&apos;l-Vücûd (Beş İlahî Mertebe)
              </h2>
              <p style={{ fontSize: 13, color: 'var(--p-text-muted)', marginTop: 4, lineHeight: 1.5 }}>
                Mutlak gaybdan şehadet âlemine uzanan tecelli silsilesi ve İnsan-ı Kâmil&apos;in cem makamı:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DIVINE_PRESENCES.map((item) => (
                <div
                  key={item.level}
                  style={{
                    padding: 14,
                    background: 'var(--p-surface)',
                    borderRadius: 8,
                    border: '1px solid var(--p-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong
                      className="font-serif"
                      style={{ fontSize: 16, color: 'var(--p-green)' }}
                    >
                      {item.realm}
                    </strong>
                    <span className="section-label">{item.level}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--p-text-muted)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                  <p style={{ fontSize: 12.5, color: 'var(--p-terracotta-dark)', marginTop: 2, fontWeight: 500 }}>
                    ✦ İdrak: {item.dailyReflection}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Kullanıcının Gönül Defteri */}
          <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2
              className="font-serif"
              style={{ fontSize: 18.5, fontWeight: 600, color: 'var(--p-text)' }}
            >
              Gönül Defterim (Kaydedilen Tefekkür Notlarım)
            </h2>
            {savedReflectionEntries.length === 0 ? (
              <div
                style={{
                  padding: 20,
                  background: 'var(--p-cream-dark)',
                  borderRadius: 8,
                  border: '1px dashed var(--p-border)',
                  textAlign: 'center',
                  color: 'var(--p-text-muted)',
                  fontSize: 13.5,
                  lineHeight: 1.5
                }}
              >
                Henüz kaydedilmiş bir tefekkür notunuz bulunmuyor. &ldquo;Düşünce Balonu&rdquo; sekmesinde dervişin sorularına kendi iç yanıtınızı yazarak kaydedebilirsiniz.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {savedReflectionEntries.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: 14,
                      background: 'var(--p-cream-dark)',
                      borderRadius: 8,
                      border: '1px solid var(--p-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6
                    }}
                  >
                    <span className="section-label" style={{ color: 'var(--p-green)' }}>
                      {item.sceneIcon} {item.timeOfDay}
                    </span>
                    <p
                      className="font-serif"
                      style={{ fontSize: 14.5, fontStyle: 'italic', color: 'var(--p-text)', lineHeight: 1.55 }}
                    >
                      &ldquo;{reflections[item.id]}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>
      )}

      {/* TAB 3: ZİKİR & NEFES */}
      {activeTab === 'zikir' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Dhikr Thought Bubble */}
          <article className="thought-bubble">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span className="badge">
                <span className="badge-dot" />
                Zikir Tefekkürü
              </span>
              <span className="section-label">Halk-ı Cedîd</span>
            </div>
            <p
              className="font-serif"
              style={{ fontSize: 15.5, fontStyle: 'italic', color: 'var(--p-text)', lineHeight: 1.6 }}
            >
              &ldquo;{currentDhikr.dervishSecret}&rdquo;
            </p>
            <p style={{ fontSize: 12, color: 'var(--p-text-muted)', marginTop: 8, fontWeight: 500 }}>
              — {currentDhikr.sourceNote}
            </p>
          </article>

          {/* Dhikr Selector */}
          <div className="card" style={{ padding: '14px 16px' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: 10 }}>
              ZİKİR VİRDİNİ SEÇİN
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {DHIKR_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedDhikrId(option.id)}
                  className={`touch-btn ${
                    selectedDhikrId === option.id ? 'btn-primary' : 'btn-secondary'
                  }`}
                  style={{ fontSize: 13 }}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dhikr Circle */}
          <article
            className="card"
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            <div>
              <p
                style={{
                  fontSize: 28,
                  direction: 'rtl',
                  fontFamily: 'Traditional Arabic, serif',
                  color: 'var(--p-green)',
                  marginBottom: 6
                }}
              >
                {currentDhikr.arabic}
              </p>
              <h2
                className="font-serif"
                style={{ fontSize: 21, fontWeight: 600, color: 'var(--p-text)' }}
              >
                {currentDhikr.title}
              </h2>
              <p style={{ fontSize: 12.5, color: 'var(--p-text-muted)', marginTop: 4 }}>
                Her nefeste &ldquo;Halk-ı Cedîd&rdquo; (yeni yaratılış) idrakiyle kalbini arındır
              </p>
            </div>

            <button
              type="button"
              onClick={handleIncrementDhikr}
              aria-label="Zikir sayacını artır"
              style={{
                width: 176,
                height: 176,
                margin: '0 auto',
                borderRadius: '50%',
                background: 'var(--p-surface)',
                border: '3px solid var(--p-green)',
                boxShadow: '0 6px 24px rgba(59, 109, 17, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease'
              }}
            >
              <span
                className="font-serif"
                style={{ fontSize: 46, fontWeight: 700, color: 'var(--p-text)', lineHeight: 1 }}
              >
                {dhikrCount}
              </span>
              <span
                className="section-label"
                style={{ color: 'var(--p-green)', marginTop: 6, fontWeight: 700 }}
              >
                KALP İLE DOKUN
              </span>
            </button>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={handleIncrementDhikr}
                className="touch-btn btn-primary"
                style={{ flex: 1 }}
              >
                +1 Zikir Çek
              </button>
              <button
                type="button"
                onClick={handleResetDhikr}
                className="touch-btn btn-secondary"
                style={{ width: 110 }}
              >
                Sıfırla
              </button>
            </div>
          </article>
        </section>
      )}

      {/* TAB 4: İRFAN HEYBESİ */}
      {activeTab === 'irfan' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <article className="card">
            <span className="badge" style={{ marginBottom: 6 }}>
              <span className="badge-dot" />
              Vahdet-i Vücûd &middot; Hakikat Risalesi
            </span>
            <h2
              className="font-serif"
              style={{ fontSize: 19, fontWeight: 600, color: 'var(--p-text)' }}
            >
              Dervişin İrfan Heybesi (10 Hakikat Faslı)
            </h2>
            <p style={{ fontSize: 13, color: 'var(--p-text-muted)', marginTop: 4, lineHeight: 1.5 }}>
              Dervişin hayata bakışını şekillendiren ve sindirdiği tasavvuf risalesinin temel fasılları:
            </p>
          </article>

          {/* Mutually Exclusive Native <details name="irfan-fasillari"> Accordions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TREATISE_CHAPTERS.map((ch, idx) => (
              <details
                key={ch.number}
                className="disclosure-item"
                name="irfan-fasillari"
                open={idx === 0}
              >
                <summary className="disclosure-summary">
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <strong style={{ color: 'var(--p-green)', marginRight: 6 }}>
                      {ch.number}.
                    </strong>
                    <span className="font-serif" style={{ fontSize: 16, fontWeight: 600 }}>
                      {ch.title}
                    </span>
                  </span>
                  <span className="section-label" style={{ color: 'var(--p-green)', flexShrink: 0 }}>
                    OKU ▾
                  </span>
                </summary>
                <div
                  style={{
                    padding: '0 16px 16px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    borderTop: '1px solid var(--p-border)'
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: 'var(--p-terracotta-dark)',
                      fontWeight: 600,
                      marginTop: 10
                    }}
                  >
                    {ch.subtitle}
                  </span>
                  <p style={{ fontSize: 13.5, color: 'var(--p-text-muted)', lineHeight: 1.6 }}>
                    {ch.summary}
                  </p>
                  <div className="whisper-bubble">
                    <strong style={{ color: 'var(--p-terracotta-dark)', fontStyle: 'normal' }}>
                      Dervişin İdraki:{' '}
                    </strong>
                    {ch.dervishNote}
                  </div>
                  <blockquote
                    style={{
                      padding: '10px 12px',
                      background: 'var(--p-cream-dark)',
                      borderRadius: 8,
                      fontSize: 12.5,
                      color: 'var(--p-text)',
                      border: '1px solid var(--p-border)'
                    }}
                  >
                    <span style={{ color: 'var(--p-green)', marginRight: 6 }}>✦</span>
                    {ch.keyQuote}
                  </blockquote>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '16px 0 10px 0' }}>
        <p
          className="font-serif"
          style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--p-text-muted)', lineHeight: 1.4 }}
        >
          Kalb-i Selim &middot; &ldquo;Nereye dönerseniz dönünüz, Allah&apos;ın vechi oradadır&rdquo; (el-Bakara, 2/115)
        </p>
      </footer>
    </main>
  );
}
