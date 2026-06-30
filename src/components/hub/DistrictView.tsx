import Icon from '@/components/ui/icon';
import { District, districtQuests } from '@/data/hub';

interface DistrictViewProps {
  district: District;
  onBack: () => void;
  onQuest: (title: string) => void;
}

const difficultyColor: Record<string, string> = {
  'Лёгкий': 'text-emerald-600 bg-emerald-50',
  'Средний': 'text-amber-600 bg-amber-50',
  'Сложный': 'text-rose-600 bg-rose-50',
};

const DistrictView = ({ district, onBack, onQuest }: DistrictViewProps) => {
  return (
    <div className="animate-zoom-district fixed inset-0 z-50 overflow-y-auto bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-10">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад к карте мира
        </button>

        <div className="panel mb-6 flex items-center gap-5 rounded-3xl p-6 md:p-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-primary text-4xl accent-glow md:h-24 md:w-24 md:text-5xl">
            {district.emoji}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{district.culture}</span>
            <h2 className="font-display text-2xl text-foreground md:text-3xl">{district.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">Исследуй район и выполняй квесты, чтобы открыть новые территории</p>
          </div>
        </div>

        <h3 className="mb-3 flex items-center gap-2 font-display text-lg text-foreground">
          <Icon name="Map" size={18} className="text-primary" />
          Квесты района
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {districtQuests.map((q, i) => (
            <button
              key={q.id}
              onClick={() => onQuest(q.title)}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              className="animate-reveal panel group flex flex-col rounded-3xl p-5 text-left transition-all hover:-translate-y-1 hover:accent-glow"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={q.icon} size={20} fallback="Star" />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${difficultyColor[q.difficulty]}`}>
                  {q.difficulty}
                </span>
              </div>
              <h4 className="font-display text-base text-foreground">{q.title}</h4>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{q.desc}</p>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-primary">{q.reward}</span>
                  <span className="text-muted-foreground">{q.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${q.progress}%` }} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictView;
