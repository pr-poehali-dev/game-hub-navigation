import Icon from '@/components/ui/icon';
import { Mode } from '@/data/hub';

const discoveryBranches = [
  { name: 'Творчество', leaves: ['🎨', '🎭', '🎵'] },
  { name: 'Наука', leaves: ['🔬', '🧪'] },
  { name: 'Спорт', leaves: ['⚽', '🏃'] },
  { name: 'Лидерство', leaves: ['👑'] },
];

const impactSkills = [
  { name: 'Аналитика', level: 8 },
  { name: 'Коммуникация', level: 6 },
  { name: 'Стратегия', level: 7 },
  { name: 'Менторство', level: 4 },
];

const TalentPanel = ({ mode }: { mode: Mode }) => {
  const isDiscovery = mode === 'discovery';

  return (
    <aside className="glass-strong flex h-full flex-col gap-3 rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm text-gradient">
          {isDiscovery ? 'Лес Талантов' : 'Небесная карта'}
        </h3>
        <Icon name={isDiscovery ? 'TreePine' : 'Sparkles'} size={16} className="text-fuchsia-300" />
      </div>

      {isDiscovery ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 py-2">
          <div className="text-5xl animate-float">🌳</div>
          <div className="w-full space-y-2">
            {discoveryBranches.map((b) => (
              <div key={b.name} className="glass flex items-center justify-between rounded-2xl px-3 py-2">
                <span className="text-xs font-semibold">{b.name}</span>
                <span className="flex gap-1 text-base">
                  {b.leaves.map((l, i) => (
                    <span key={i} className="animate-breathe" style={{ animationDelay: `${i * 0.3}s` }}>{l}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-2 py-2">
          <div className="relative mx-auto mb-2 h-20 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-900/40 to-transparent">
            {[...Array(14)].map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 animate-twinkle rounded-full bg-fuchsia-200"
                style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 90}%`, animationDelay: `${i * 0.2}s` }}
              />
            ))}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">✦</span>
          </div>
          {impactSkills.map((s) => (
            <div key={s.name} className="glass rounded-2xl px-3 py-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>{s.name}</span>
                <span className="text-amber-300">LVL {s.level}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500" style={{ width: `${s.level * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default TalentPanel;
