import Icon from '@/components/ui/icon';
import { Mode, DirectionId } from '@/data/hub';

const discoveryBranches: { name: string; leaves: string[]; dir: DirectionId }[] = [
  { name: 'Творчество', leaves: ['🎨', '🎭', '🎵'], dir: 'creativity' },
  { name: 'Наука',      leaves: ['🔬', '🧪'],       dir: 'science' },
  { name: 'Спорт',      leaves: ['⚽', '🏃'],       dir: 'sport' },
  { name: 'Лидерство',  leaves: ['👑'],              dir: 'leadership' },
];

const impactSkills = [
  { name: 'Аналитика',    level: 8 },
  { name: 'Коммуникация', level: 6 },
  { name: 'Стратегия',    level: 7 },
  { name: 'Менторство',   level: 4 },
];

interface TalentPanelProps {
  mode: Mode;
  onDirection: (id: DirectionId) => void;
}

const TalentPanel = ({ mode, onDirection }: TalentPanelProps) => {
  const isDiscovery = mode === 'discovery';

  return (
    <aside className="panel flex h-full flex-col gap-3 rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm text-foreground">
          {isDiscovery ? 'Лес Талантов' : 'Небесная карта'}
        </h3>
        <Icon name={isDiscovery ? 'TreePine' : 'Sparkles'} size={16} className="text-primary" />
      </div>

      {isDiscovery ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 py-2">
          <div className="text-5xl animate-float">🌳</div>
          <div className="w-full space-y-2">
            {discoveryBranches.map((b) => (
              <button
                key={b.name}
                onClick={() => onDirection(b.dir)}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-secondary/50 px-3 py-2 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
              >
                <span className="text-xs font-semibold text-foreground">{b.name}</span>
                <div className="flex items-center gap-1">
                  <span className="flex gap-0.5 text-base">
                    {b.leaves.map((l, i) => (
                      <span key={i} className="animate-breathe" style={{ animationDelay: `${i * 0.3}s` }}>{l}</span>
                    ))}
                  </span>
                  <Icon name="ChevronRight" size={13} className="ml-1 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-2 py-2">
          <div className="relative mx-auto mb-2 h-20 w-full overflow-hidden rounded-2xl bg-primary/5">
            {[...Array(14)].map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 animate-twinkle rounded-full bg-primary"
                style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 90}%`, animationDelay: `${i * 0.2}s` }}
              />
            ))}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-primary">✦</span>
          </div>
          {impactSkills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-secondary/50 px-3 py-2">
              <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                <span>{s.name}</span>
                <span className="text-primary">LVL {s.level}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.level * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default TalentPanel;
