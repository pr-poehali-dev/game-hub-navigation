import { Mode, District } from '@/data/hub';

interface CentralSphereProps {
  mode: Mode;
  districts: District[];
  onSelect: (d: District) => void;
}

const CentralSphere = ({ mode, districts, onSelect }: CentralSphereProps) => {
  const isDiscovery = mode === 'discovery';
  const radius = 150;

  return (
    <div className="relative flex h-full min-h-[440px] w-full items-center justify-center">
      <div className="absolute h-[340px] w-[340px] rounded-full bg-primary/5 blur-3xl md:h-[460px] md:w-[460px]" />

      <div className="absolute h-[300px] w-[300px] animate-spin-slow rounded-full border border-primary/10 md:h-[420px] md:w-[420px]" />
      <div className="absolute h-[380px] w-[380px] animate-spin-rev rounded-full border border-border md:h-[520px] md:w-[520px]" />

      <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[420px] md:w-[420px]">
        <div className="group relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-primary accent-glow animate-breathe md:h-36 md:w-36">
          <span className="font-display text-3xl md:text-4xl">{isDiscovery ? '🏝️' : '🛰️'}</span>
          <span className="mt-1 px-2 text-center font-display text-[10px] uppercase tracking-wider text-primary-foreground/90 md:text-xs">
            {isDiscovery ? 'Остров Талантов' : 'Планетарная станция'}
          </span>
        </div>

        {districts.map((d, i) => {
          const angle = (i / districts.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <button
              key={`${mode}-${d.id}`}
              onClick={() => !d.locked && onSelect(d)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animationDelay: `${i * 0.07}s`,
              }}
              className="animate-reveal absolute left-1/2 top-1/2 -ml-9 -mt-9 md:-ml-11 md:-mt-11"
            >
              <div
                className={`relative flex h-[72px] w-[72px] flex-col items-center justify-center rounded-3xl bg-card panel transition-all duration-300 md:h-[88px] md:w-[88px] ${d.locked ? 'opacity-60' : 'hover:-translate-y-2 hover:scale-105 hover:accent-glow'}`}
              >
                <span className={`text-2xl md:text-3xl ${d.locked ? 'grayscale' : ''}`}>{d.emoji}</span>
                <span className="mt-0.5 max-w-[64px] truncate px-1 text-[8px] font-semibold text-muted-foreground md:text-[9px]">
                  {d.culture}
                </span>

                {d.locked && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-card/60 backdrop-blur-[2px]">
                    <span className="text-base opacity-70">🔒</span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CentralSphere;
