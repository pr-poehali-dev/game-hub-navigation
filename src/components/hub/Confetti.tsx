import { useEffect, useState } from 'react';

const SYMBOLS = ['💎', '⚡', '🌐', '🪷', '🪆', '🕉️', '🎋', '🦁', '🔮', '✦'];

interface Piece {
  id: number;
  left: number;
  symbol: string;
  delay: number;
  duration: number;
}

const Confetti = ({ trigger }: { trigger: number }) => {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const next = Array.from({ length: 40 }, (_, i) => ({
      id: trigger * 100 + i,
      left: Math.random() * 100,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      delay: Math.random() * 0.4,
      duration: 1.8 + Math.random() * 1.4,
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 3600);
    return () => clearTimeout(t);
  }, [trigger]);

  if (pieces.length === 0) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[60] animate-[twinkle_0.5s_ease] bg-primary/10" />
      <div className="pointer-events-none fixed inset-0 z-[61] overflow-hidden">
        {pieces.map((p) => (
          <span
            key={p.id}
            className="absolute -top-10 text-2xl"
            style={{
              left: `${p.left}%`,
              animation: `confetti-fall ${p.duration}s ${p.delay}s cubic-bezier(0.2,0.6,0.4,1) forwards`,
            }}
          >
            {p.symbol}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg) scale(0.6); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateY(105vh) rotate(540deg) scale(1.1); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Confetti;