import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const MASCOT_IMG = 'https://cdn.poehali.dev/projects/a9f13f90-d397-4edb-904a-bde4258bb7aa/files/df92f404-227f-4996-8b78-d9d8e5f32c8d.jpg';

const actions = [
  { id: 'path', emoji: '🎯', label: 'Путь дня', pulse: false },
  { id: 'reward', emoji: '🎁', label: 'Награда', pulse: true },
  { id: 'events', emoji: '📅', label: 'События', pulse: false },
];

interface MascotBarProps {
  onReward: () => void;
}

const MascotBar = ({ onReward }: MascotBarProps) => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="panel relative z-20 flex items-center gap-3 rounded-3xl p-3 md:gap-5 md:p-4">
      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-full bg-primary/15 blur-lg" />
        <div className="relative h-14 w-14 animate-float overflow-hidden rounded-full ring-2 ring-primary/20 md:h-16 md:w-16">
          <img src={MASCOT_IMG} alt="AI-Маскот" className="h-full w-full object-cover" />
        </div>
        {showHint && (
          <div className="animate-reveal absolute -top-2 left-16 hidden whitespace-nowrap rounded-2xl rounded-bl-none border border-border bg-card px-3 py-1.5 text-xs text-foreground shadow-md md:block">
            Готов исследовать новый район? ✨
          </div>
        )}
      </div>

      <div className="flex flex-1 items-center gap-2 overflow-hidden">
        <div className="hidden flex-1 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground sm:flex">
          <Icon name="Sparkles" size={15} className="text-primary" />
          <span>Спроси Капи о чём угодно...</span>
        </div>

        <div className="flex items-center gap-2">
          {actions.map((a) => (
            <button
              key={a.id}
              onClick={a.id === 'reward' ? onReward : undefined}
              className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 md:px-4 ${a.pulse ? 'bg-primary text-primary-foreground accent-glow' : 'bg-secondary text-foreground hover:bg-secondary/70'}`}
            >
              {a.pulse && <span className="pulse-ring absolute inset-0 rounded-full" />}
              <span>{a.emoji}</span>
              <span className="hidden md:inline">{a.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MascotBar;
