import Icon from '@/components/ui/icon';
import { Direction, DirectionId, directions } from '@/data/hub';

interface DirectionViewProps {
  directionId: DirectionId;
  onBack: () => void;
}

const difficultyStyle: Record<string, string> = {
  'Лёгкий':  'bg-emerald-50 text-emerald-700',
  'Средний': 'bg-amber-50   text-amber-700',
  'Сложный': 'bg-rose-50    text-rose-700',
};

const DirectionView = ({ directionId, onBack }: DirectionViewProps) => {
  const d: Direction = directions[directionId];

  const completedTracks = d.tracks.filter(t => t.done).length;
  const trackProgress = Math.round((completedTracks / d.tracks.length) * 100);

  return (
    <div className="animate-zoom-district fixed inset-0 z-50 overflow-y-auto bg-background">
      {/* Ambient gradient header */}
      <div className={`relative bg-gradient-to-br ${d.heroBg} pb-8 pt-6`}>
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {/* Back */}
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <Icon name="ArrowLeft" size={15} />
            Назад
          </button>

          {/* Hero */}
          <div className="flex items-end gap-5">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg text-4xl md:h-24 md:w-24 md:text-5xl">
                {d.emoji}
              </div>
            </div>
            <div className="pb-1">
              <span className={`text-xs font-bold uppercase tracking-widest ${d.accentText}`}>
                Лес Талантов · направление
              </span>
              <h1 className="font-display text-3xl text-foreground md:text-4xl">{d.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: d.stat1Label, value: d.stat1Value },
              { label: d.stat2Label, value: d.stat2Value },
              { label: d.stat3Label, value: d.stat3Value },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/70 px-4 py-3 text-center backdrop-blur-sm shadow-sm">
                <p className="font-display text-xl text-foreground">{s.value}</p>
                <p className="text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 md:px-6">

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="mb-3 font-display text-base text-foreground">Достижения</h2>
          <div className="grid grid-cols-4 gap-3">
            {d.achievements.map((a, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 0.06}s` }}
                className={`animate-reveal flex flex-col items-center gap-1.5 rounded-2xl border p-3 text-center transition-all ${
                  a.earned
                    ? `${d.accentBg} ${d.accentBorder}`
                    : 'border-border bg-secondary/40 opacity-50 grayscale'
                }`}
              >
                <span className="text-2xl">{a.icon}</span>
                <span className={`text-[10px] font-semibold ${a.earned ? d.accentText : 'text-muted-foreground'}`}>
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning path */}
        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-base text-foreground">Учебный путь</h2>
            <span className={`text-xs font-semibold ${d.accentText}`}>{completedTracks} / {d.tracks.length} модулей</span>
          </div>
          {/* Overall track bar */}
          <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${trackProgress}%`, background: d.accent }}
            />
          </div>
          <div className="space-y-3">
            {d.tracks.map((t, i) => (
              <div
                key={t.id}
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                className={`animate-reveal flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                  t.done
                    ? `${d.accentBg} ${d.accentBorder}`
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    t.done ? `${d.accentText} bg-white shadow-sm` : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {t.done ? <Icon name="Check" size={16} /> : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{t.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.subtitle}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Неделя {t.week}</p>
                  {t.done
                    ? <p className={`text-xs font-semibold ${d.accentText}`}>Готово ✓</p>
                    : <p className="text-xs text-muted-foreground">{t.total} заданий</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quests */}
        <section>
          <h2 className="mb-3 font-display text-base text-foreground">Квесты</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {d.quests.map((q, i) => (
              <button
                key={q.id}
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                className="animate-reveal panel group flex flex-col rounded-3xl p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${d.accentBg}`}
                    style={{ color: d.accent }}
                  >
                    <Icon name={q.icon} size={18} fallback="Star" />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${difficultyStyle[q.difficulty]}`}>
                    {q.difficulty}
                  </span>
                </div>

                <h4 className="font-display text-[15px] text-foreground">{q.title}</h4>
                <p className="mt-1 flex-1 text-xs text-muted-foreground leading-relaxed">{q.desc}</p>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-bold" style={{ color: d.accent }}>{q.reward}</span>
                    <span className="text-muted-foreground">{q.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${q.progress}%`, background: d.accent }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DirectionView;
