import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

interface Player {
  id: number;
  name: string;
  team: string;
  flag: string;
  position: string;
  positionColor: string;
  weeklyRating: string;
  overallRating: string;
  ratingColor: string;
  avatar: string;
  borderColor: string;
}

const players: Player[] = [
  {
    id: 1,
    name: 'Haaland',
    team: 'Man City',
    flag: '🇳🇴',
    position: 'ST',
    positionColor: '#FF7A3D',
    weeklyRating: '9.12',
    overallRating: '9.40',
    ratingColor: '#FFD700',
    avatar: 'https://images.unsplash.com/photo-1764842262144-e58d386299ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#FF7A3D',
  },
  {
    id: 2,
    name: 'Mbappé',
    team: 'Real Madrid',
    flag: '🇫🇷',
    position: 'LW',
    positionColor: '#11998E',
    weeklyRating: '8.81',
    overallRating: '9.10',
    ratingColor: '#32CD32',
    avatar: 'https://images.unsplash.com/photo-1653324502559-ae8d4aa4dd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#11998E',
  },
  {
    id: 3,
    name: 'Vinicius',
    team: 'Real Madrid',
    flag: '🇧🇷',
    position: 'LW',
    positionColor: '#32CD32',
    weeklyRating: '7.95',
    overallRating: '9.20',
    ratingColor: '#32CD32',
    avatar: 'https://images.unsplash.com/photo-1657957746418-6a38df9e1ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#32CD32',
  },
  {
    id: 4,
    name: 'De Bruyne',
    team: 'Man City',
    flag: '🇧🇪',
    position: 'CM',
    positionColor: '#8E54E9',
    weeklyRating: '7.01',
    overallRating: '9.10',
    ratingColor: '#8E54E9',
    avatar: 'https://images.unsplash.com/photo-1710788617743-8b9ed4143325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#8E54E9',
  },
  {
    id: 5,
    name: 'Saka',
    team: 'Arsenal',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    position: 'RW',
    positionColor: '#F5576C',
    weeklyRating: '7.81',
    overallRating: '8.70',
    ratingColor: '#F5576C',
    avatar: 'https://images.unsplash.com/photo-1705593973313-75de7bf95b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#F5576C',
  },
  {
    id: 6,
    name: 'Pedri',
    team: 'Barcelona',
    flag: '🇪🇸',
    position: 'CM',
    positionColor: '#11998E',
    weeklyRating: '7.54',
    overallRating: '8.80',
    ratingColor: '#11998E',
    avatar: 'https://images.unsplash.com/photo-1774344227964-24b6f78818ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    borderColor: '#11998E',
  },
];

function RatingBadge({ value, color }: { value: string; color: string }) {
  return (
    <div
      style={{
        minWidth: 36,
        height: 20,
        borderRadius: 6,
        background: `${color}22`,
        border: `1px solid ${color}45`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 4,
        paddingRight: 4,
      }}
    >
      <span style={{ color: color, fontSize: 9.5, fontWeight: 900, letterSpacing: 0.2 }}>{value}</span>
    </div>
  );
}

function PlayerCard({ player, index }: { player: Player; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: index * 0.07 }}
      whileTap={{ scale: 0.96 }}
      style={{
        width: 114,
        height: 158,
        borderRadius: 16,
        background: 'rgba(255,255,255,0.07)',
        border: '0.5px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        paddingTop: 8,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {/* Subtle glow from player accent color */}
      <div
        style={{
          position: 'absolute',
          top: -30,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${player.borderColor}18, transparent 70%)`,
          filter: 'blur(16px)',
          pointerEvents: 'none',
        }}
      />
      {/* Top highlight line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          right: '25%',
          height: 1,
          background: `linear-gradient(90deg, transparent, ${player.borderColor}35, transparent)`,
        }}
      />

      {/* Top row: two ratings */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 7,
        }}
      >
        <RatingBadge value={player.weeklyRating} color={player.ratingColor} />
        <RatingBadge value={player.overallRating} color="#FFD700" />
      </div>

      {/* Avatar */}
      <div
        style={{
          width: 66,
          height: 66,
          borderRadius: 33,
          border: `2px solid ${player.borderColor}`,
          overflow: 'hidden',
          boxShadow: `0 0 14px ${player.borderColor}35`,
          marginBottom: 8,
          flexShrink: 0,
        }}
      >
        <img
          src={player.avatar}
          alt={player.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Name */}
      <span
        style={{
          color: '#fff',
          fontSize: 12,
          fontWeight: 700,
          textAlign: 'center',
          letterSpacing: -0.2,
          lineHeight: 1.2,
        }}
      >
        {player.name}
      </span>

      {/* Team + Flag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}>
        <span style={{ fontSize: 10 }}>{player.flag}</span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9.5, fontWeight: 500 }}>{player.team}</span>
      </div>

      {/* Position badge */}
      <div
        style={{
          marginTop: 6,
          background: `${player.positionColor}1a`,
          border: `1px solid ${player.positionColor}38`,
          borderRadius: 8,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <span style={{ color: player.positionColor, fontSize: 10, fontWeight: 800, letterSpacing: 0.8 }}>
          {player.position}
        </span>
      </div>
    </motion.div>
  );
}

export function PlayerList() {
  return (
    <div>
      <SectionHeader icon="⭐" title="Player of the Week" action="View All" />
      <div
        className="flex gap-3 overflow-x-auto"
        style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 4, scrollbarWidth: 'none' }}
      >
        {players.map((player, i) => (
          <PlayerCard key={player.id} player={player} index={i} />
        ))}
      </div>
    </div>
  );
}
