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
    <header className="relative z-30 flex items-center justify-between gap-4 px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 animate-breathe">
          <div className="absolute inset-0 rotate-45 rounded-lg bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-500 neon-glow" />
          <div className="absolute inset-[3px] rotate-45 rounded-md bg-gradient-to-tr from-fuchsia-300/40 to-transparent" />
        </div>
        <div className="hidden sm:block">
          <h1 className="font-display text-lg leading-none text-gradient">NEXUS</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">BRICS+ HUB</p>
        </div>
      </div>

      <div className="glass flex items-center rounded-full p-1 text-xs font-semibold">
        <button
          onClick={() => setMode('discovery')}
          className={`rounded-full px-3 py-1.5 transition-all md:px-5 ${mode === 'discovery' ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white neon-glow' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Discovery
        </button>
        <button
          onClick={() => setMode('impact')}
          className={`rounded-full px-3 py-1.5 transition-all md:px-5 ${mode === 'impact' ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-background gold-glow' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Impact
        </button>
      </div>

      <div className="hidden items-center gap-2 lg:flex">
        {currencies.map((c) => (
          <div key={c.id} className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5">
            <span className="text-sm">{c.emoji}</span>
            <span className={`text-sm font-bold ${c.color}`}>{c.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-fuchsia-300">
          <Icon name="Bell" size={17} />
        </button>
        <button className="glass hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-fuchsia-300 sm:flex">
          <Icon name="Shield" size={17} />
        </button>
        <button className="glass hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-fuchsia-300 sm:flex">
          <Icon name="Settings" size={17} />
        </button>
        <div className="glass flex items-center gap-2 rounded-full py-1 pl-1 pr-3">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-500 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-sm">🧑‍🚀</div>
          </div>
          <div className="hidden text-right leading-tight md:block">
            <p className="text-sm" style={{ fontWeight: nameWeight, fontFamily: 'Unbounded' }}>Ари</p>
            <p className="text-[10px] text-amber-300">LVL {level}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
