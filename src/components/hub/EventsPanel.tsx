import Icon from '@/components/ui/icon';
import { worldEvents } from '@/data/hub';

const EventsPanel = () => {
  return (
    <aside className="panel flex h-full flex-col gap-3 rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm text-foreground">Глобус событий</h3>
        <Icon name="Globe" size={16} className="animate-spin-slow text-primary" />
      </div>

      <div className="relative mx-auto my-1 flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full animate-spin-slow rounded-full border border-primary/20" />
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="text-2xl">🌍</span>
        </div>
        {worldEvents.map((e, i) => {
          const a = (i / worldEvents.length) * 2 * Math.PI;
          return (
            <span
              key={e.id}
              style={{ transform: `translate(${Math.cos(a) * 44}px, ${Math.sin(a) * 44}px)` }}
              className={`absolute h-2.5 w-2.5 animate-twinkle rounded-full ${e.dot}`}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto">
        {worldEvents.map((e) => (
          <button key={e.id} className="group rounded-2xl border border-border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${e.dot}`} />
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{e.type}</span>
            </div>
            <p className="mt-1 text-sm font-semibold leading-tight text-foreground">{e.title}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Icon name="Clock" size={11} /> {e.timer}
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">{e.reward}</span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default EventsPanel;
