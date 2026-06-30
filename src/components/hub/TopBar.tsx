import Icon from '@/components/ui/icon';
import { Mode, currencies } from '@/data/hub';

interface TopBarProps {
  mode: Mode;
  setMode: (m: Mode) => void;
  level: number;
}

const TopBar = ({ mode, setMode, level }: TopBarProps) => {
  const nameWeight = Math.min(900, 400 + level * 100);

  return (
    <header className="relative z-30 flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary accent-glow">
          <Icon name="Hexagon" size={20} className="text-primary-foreground" />
        </div>
        <div className="hidden sm:block">
          <h1 className="font-display text-base leading-none text-foreground">Nexus</h1>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">BRICS+ Hub</p>
        </div>
      </div>

      <div className="flex items-center rounded-full bg-secondary p-1 text-xs font-semibold">
        <button
          onClick={() => setMode('discovery')}
          className={`rounded-full px-3 py-1.5 transition-all md:px-5 ${mode === 'discovery' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Discovery
        </button>
        <button
          onClick={() => setMode('impact')}
          className={`rounded-full px-3 py-1.5 transition-all md:px-5 ${mode === 'impact' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Impact
        </button>
      </div>

      <div className="hidden items-center gap-2 lg:flex">
        {currencies.map((c) => (
          <div key={c.id} className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
            <span className="text-sm">{c.emoji}</span>
            <span className="text-sm font-bold text-foreground">{c.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-2.5">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-primary">
          <Icon name="Bell" size={17} />
        </button>
        <button className="hidden h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-primary sm:flex">
          <Icon name="ShieldCheck" size={17} />
        </button>
        <button className="hidden h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-primary sm:flex">
          <Icon name="Settings" size={17} />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-secondary py-1 pl-1 pr-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm">🧑‍🚀</div>
          <div className="hidden text-right leading-tight md:block">
            <p className="text-sm text-foreground" style={{ fontWeight: nameWeight, fontFamily: 'Unbounded' }}>Ари</p>
            <p className="text-[10px] text-primary">LVL {level}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
