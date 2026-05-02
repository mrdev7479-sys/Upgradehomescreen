import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

interface PitchPlayer {
  name: string;
  short: string;
  rating: number;
  position: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

// 4-3-3 formation: GK left → FWD right (landscape) - Organized positions
const pitchPlayers: PitchPlayer[] = [
  // GK
  { name: 'Ederson', short: 'EDR', rating: 87, position: 'GK', x: 10, y: 50 },
  // DEF (4) - Better spacing
  { name: 'Alexander-Arnold', short: 'TAA', rating: 86, position: 'RB', x: 26, y: 12 },
  { name: 'Ruben Dias', short: 'DIA', rating: 88, position: 'CB', x: 26, y: 36 },
  { name: 'Gabriel', short: 'GAB', rating: 86, position: 'CB', x: 26, y: 64 },
  { name: 'Alphonso Davies', short: 'DAV', rating: 85, position: 'LB', x: 26, y: 88 },
  // MID (3) - Triangle formation
  { name: 'Rodri', short: 'ROD', rating: 91, position: 'DM', x: 46, y: 50 },
  { name: 'De Bruyne', short: 'KDB', rating: 91, position: 'CM', x: 56, y: 32 },
  { name: 'Pedri', short: 'PED', rating: 88, position: 'CM', x: 56, y: 68 },
  // FWD (3) - Attack line
  { name: 'Saka', short: 'SAK', rating: 87, position: 'RW', x: 76, y: 14 },
  { name: 'Haaland', short: 'HAL', rating: 93, position: 'ST', x: 80, y: 50 },
  { name: 'Vinicius', short: 'VIN', rating: 92, position: 'LW', x: 76, y: 86 },
];

function PitchSVG() {
  return (
    <svg
      viewBox="0 0 160 100"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Shadow filter for lines */}
        <filter id="lineShadow">
          <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodColor="rgba(0,0,0,0.5)" />
        </filter>
      </defs>

      {/* Outer border - thicker for realism */}
      <rect x="2" y="2" width="156" height="96" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" fill="none" rx="0.5" filter="url(#lineShadow)" />

      {/* Center line */}
      <line x1="80" y1="2" x2="80" y2="98" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" filter="url(#lineShadow)" />

      {/* Center circle */}
      <circle cx="80" cy="50" r="12" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Center spot */}
      <circle cx="80" cy="50" r="0.8" fill="rgba(255,255,255,0.6)" filter="url(#lineShadow)" />

      {/* Left penalty area */}
      <rect x="2" y="22" width="22" height="56" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Left goal area (6-yard box) */}
      <rect x="2" y="35" width="10" height="30" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Left goal - more 3D appearance */}
      <rect x="0.5" y="41" width="3" height="18" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" fill="rgba(255,255,255,0.08)" />
      <line x1="0.5" y1="41" x2="2.5" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" />
      <line x1="0.5" y1="59" x2="2.5" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" />

      {/* Left penalty spot */}
      <circle cx="14" cy="50" r="0.8" fill="rgba(255,255,255,0.6)" filter="url(#lineShadow)" />

      {/* Left penalty arc (D) */}
      <path d="M 24 36 A 13 13 0 0 0 24 64" stroke="rgba(255,255,255,0.42)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Right penalty area */}
      <rect x="136" y="22" width="22" height="56" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Right goal area (6-yard box) */}
      <rect x="148" y="35" width="10" height="30" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Right goal - more 3D appearance */}
      <rect x="156.5" y="41" width="3" height="18" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" fill="rgba(255,255,255,0.08)" />
      <line x1="159.5" y1="41" x2="157.5" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" />
      <line x1="159.5" y1="59" x2="157.5" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" />

      {/* Right penalty spot */}
      <circle cx="146" cy="50" r="0.8" fill="rgba(255,255,255,0.6)" filter="url(#lineShadow)" />

      {/* Right penalty arc (D) */}
      <path d="M 136 36 A 13 13 0 0 1 136 64" stroke="rgba(255,255,255,0.42)" strokeWidth="0.5" fill="none" filter="url(#lineShadow)" />

      {/* Corner arcs - all four corners */}
      <path d="M 2 6 A 4 4 0 0 1 6 2" stroke="rgba(255,255,255,0.35)" strokeWidth="0.45" fill="none" filter="url(#lineShadow)" />
      <path d="M 154 2 A 4 4 0 0 1 158 6" stroke="rgba(255,255,255,0.35)" strokeWidth="0.45" fill="none" filter="url(#lineShadow)" />
      <path d="M 2 94 A 4 4 0 0 0 6 98" stroke="rgba(255,255,255,0.35)" strokeWidth="0.45" fill="none" filter="url(#lineShadow)" />
      <path d="M 158 94 A 4 4 0 0 0 154 98" stroke="rgba(255,255,255,0.35)" strokeWidth="0.45" fill="none" filter="url(#lineShadow)" />
    </svg>
  );
}

function PlayerNode({ player, index }: { player: PitchPlayer; index: number }) {
  const ratingColor =
    player.rating >= 90
      ? '#FFD700'
      : player.rating >= 85
        ? '#32CD32'
        : '#11998E';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07, type: 'spring', stiffness: 180, damping: 12 }}
      style={{
        position: 'absolute',
        left: `${player.x}%`,
        top: `${player.y}%`,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
      }}
    >
      {/* Player shadow on grass */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 10px)',
          width: 50,
          height: 12,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)',
          filter: 'blur(4px)',
          zIndex: -1,
        }}
      />

      {/* Avatar circle */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 100%)',
            border: '2.5px solid rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(0,0,0,0.6), 0 0 12px rgba(255,255,255,0.15), inset 0 2px 4px rgba(255,255,255,0.2)',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)',
            position: 'relative',
          }}
        >
          {/* Inner glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)',
            }}
          />
          <span style={{ color: '#fff', fontSize: 11.5, fontWeight: 900, position: 'relative', zIndex: 1, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{player.short}</span>
        </div>

        {/* Rating badge */}
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            right: -6,
            width: 22,
            height: 22,
            borderRadius: 11,
            background: `linear-gradient(135deg, ${ratingColor} 0%, ${ratingColor}CC 100%)`,
            border: '2px solid rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 3px 8px ${ratingColor}70, 0 0 12px ${ratingColor}40`,
          }}
        >
          <span style={{ color: '#000', fontSize: 8, fontWeight: 900, textShadow: '0 0.5px 1px rgba(255,255,255,0.3)' }}>{player.rating}</span>
        </div>
      </div>

      {/* Name label */}
      <div
        style={{
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: 7,
          paddingLeft: 7,
          paddingRight: 7,
          paddingTop: 3,
          paddingBottom: 3,
          maxWidth: 65,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 9,
            fontWeight: 800,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            textAlign: 'center',
            letterSpacing: '0.3px',
          }}
        >
          {player.name.split(' ').slice(-1)[0]}
        </span>
      </div>
    </motion.div>
  );
}

export function TeamPitch() {
  return (
    <div className="px-4">
      <SectionHeader icon="🏆" title="Team of the Month" badge="4-3-3" />
      <div
        style={{
          width: '100%',
          aspectRatio: '1.6 / 1',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.1)',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
        }}
      >
        {/* Realistic pitch background with better gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #165a2f 0%, #1a6634 20%, #1e7239 40%, #1e7239 60%, #1a6634 80%, #165a2f 100%)',
          }}
        />

        {/* Professional grass stripes pattern */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${i * 6.25}%`,
              width: '6.25%',
              background:
                i % 2 === 0
                  ? 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)'
                  : 'linear-gradient(90deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.04) 100%)',
              borderLeft: i % 2 === 0 ? '0.5px solid rgba(255,255,255,0.02)' : '0.5px solid rgba(0,0,0,0.02)',
            }}
          />
        ))}

        {/* Stadium lighting effect - Center spotlight */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '85%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, rgba(120,255,120,0.05) 30%, transparent 70%)',
            filter: 'blur(25px)',
            pointerEvents: 'none',
          }}
        />

        {/* Corner shadows for depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.15) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* SVG pitch lines */}
        <PitchSVG />

        {/* Player nodes */}
        {pitchPlayers.map((player, i) => (
          <PlayerNode key={player.short} player={player} index={i} />
        ))}
      </div>
    </div>
  );
}