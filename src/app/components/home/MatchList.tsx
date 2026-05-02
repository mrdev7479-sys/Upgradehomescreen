import { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface Match {
  id: number;
  league: string;
  homeName: string;
  homeAbbr: string;
  awayName: string;
  awayAbbr: string;
  homeColor: string;
  awayColor: string;
  status: 'LIVE' | 'FT' | 'UPCOMING';
  homeScore?: number;
  awayScore?: number;
  minute?: string;
  kickoff?: string;
}

const matches: Match[] = [
  {
    id: 1,
    league: 'Premier League',
    homeName: 'Man City',
    homeAbbr: 'MCY',
    awayName: 'Arsenal',
    awayAbbr: 'ARS',
    homeColor: '#6CABDD',
    awayColor: '#EF0107',
    status: 'LIVE',
    homeScore: 2,
    awayScore: 1,
    minute: "65'",
  },
  {
    id: 2,
    league: 'La Liga',
    homeName: 'Real Madrid',
    homeAbbr: 'RMA',
    awayName: 'Barcelona',
    awayAbbr: 'FCB',
    homeColor: '#FEBE10',
    awayColor: '#A50044',
    status: 'LIVE',
    homeScore: 1,
    awayScore: 1,
    minute: "72'",
  },
  {
    id: 3,
    league: 'Champions League',
    homeName: 'PSG',
    homeAbbr: 'PSG',
    awayName: 'Bayern',
    awayAbbr: 'BAY',
    homeColor: '#004170',
    awayColor: '#DC052D',
    status: 'FT',
    homeScore: 0,
    awayScore: 1,
  },
  {
    id: 4,
    league: 'Serie A',
    homeName: 'Juventus',
    homeAbbr: 'JUV',
    awayName: 'Inter',
    awayAbbr: 'INT',
    homeColor: '#E8E8E8',
    awayColor: '#0068A8',
    status: 'UPCOMING',
    kickoff: '21:00',
  },
  {
    id: 5,
    league: 'Bundesliga',
    homeName: 'Dortmund',
    homeAbbr: 'BVB',
    awayName: 'Leipzig',
    awayAbbr: 'RBL',
    homeColor: '#FDE100',
    awayColor: '#DD0741',
    status: 'LIVE',
    homeScore: 3,
    awayScore: 2,
    minute: "88'",
  },
];

function TeamLogo({ abbr, color }: { abbr: string; color: string }) {
  return (
    <div
      style={{
        width: 38,
        height: 38,
        borderRadius: 19,
        background: `linear-gradient(135deg, ${color}28 0%, ${color}14 100%)`,
        border: `1.5px solid ${color}55`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 2px 10px ${color}25`,
      }}
    >
      <span style={{ color: color, fontSize: 9.5, fontWeight: 900, letterSpacing: 0.2 }}>{abbr}</span>
    </div>
  );
}

function MatchCard({ match, index }: { match: Match; index: number }) {
  const [starred, setStarred] = useState(false);
  const isLive = match.status === 'LIVE';
  const isFT = match.status === 'FT';

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.38, delay: index * 0.07 }}
      whileTap={{ scale: 0.97 }}
      style={{
        width: 210,
        flexShrink: 0,
        borderRadius: 16,
        background: isLive
          ? 'linear-gradient(145deg, rgba(124,58,237,0.18) 0%, rgba(76,29,149,0.12) 100%)'
          : 'rgba(255,255,255,0.07)',
        border: isLive
          ? '0.5px solid rgba(167,139,250,0.3)'
          : '0.5px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        boxShadow: isLive
          ? '0 4px 24px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        padding: '11px 13px 12px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Live top glow line */}
      {isLive && (
        <div
          style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: 1.5,
            background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.7), transparent)',
          }}
        />
      )}

      {/* Row 1: time/status + star */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {isLive && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: 11, fontWeight: 700 }}>
                {match.minute}
              </span>
              {/* Pulsing live dot */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.15, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                style={{
                  width: 7, height: 7, borderRadius: 4,
                  background: '#A78BFA',
                  boxShadow: '0 0 6px rgba(167,139,250,0.7)',
                }}
              />
              {/* Second dot (matching image style) */}
              <motion.div
                animate={{ opacity: [0.5, 0.15, 0.5] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: 0.25 }}
                style={{
                  width: 5, height: 5, borderRadius: 3,
                  background: 'rgba(167,139,250,0.55)',
                }}
              />
            </>
          )}
          {isFT && (
            <span
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 8,
                paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2,
                color: 'rgba(255,255,255,0.45)',
                fontSize: 10, fontWeight: 800, letterSpacing: 1,
              }}
            >
              FT
            </span>
          )}
          {match.status === 'UPCOMING' && (
            <span
              style={{
                background: 'rgba(124,58,237,0.15)',
                border: '0.5px solid rgba(167,139,250,0.3)',
                borderRadius: 8,
                paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2,
                color: '#A78BFA',
                fontSize: 10, fontWeight: 700,
              }}
            >
              {match.kickoff}
            </span>
          )}
        </div>

        {/* Star favorite button */}
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={(e) => { e.stopPropagation(); setStarred(s => !s); }}
          style={{ background: 'none', border: 'none', padding: 2, cursor: 'pointer', lineHeight: 1 }}
        >
          <Star
            size={15}
            color={starred ? '#FFD700' : 'rgba(255,255,255,0.35)'}
            fill={starred ? '#FFD700' : 'none'}
          />
        </motion.button>
      </div>

      {/* Row 2: logos + score */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Home team */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flex: 1 }}>
          <TeamLogo abbr={match.homeAbbr} color={match.homeColor} />
          <span style={{ color: 'rgba(255,255,255,0.60)', fontSize: 9.5, fontWeight: 600, textAlign: 'center' }}>
            {match.homeName}
          </span>
        </div>

        {/* Score / VS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingBottom: 16 }}>
          {match.status !== 'UPCOMING' ? (
            <>
              <span style={{ color: '#fff', fontSize: 23, fontWeight: 900, letterSpacing: -0.5 }}>
                {match.homeScore}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18, fontWeight: 300 }}>-</span>
              <span style={{ color: '#fff', fontSize: 23, fontWeight: 900, letterSpacing: -0.5 }}>
                {match.awayScore}
              </span>
            </>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
              VS
            </span>
          )}
        </div>

        {/* Away team */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flex: 1 }}>
          <TeamLogo abbr={match.awayAbbr} color={match.awayColor} />
          <span style={{ color: 'rgba(255,255,255,0.60)', fontSize: 9.5, fontWeight: 600, textAlign: 'center' }}>
            {match.awayName}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function MatchList() {
  return (
    <div>
      <SectionHeader title="Important Matches" action="View All" />
      <div
        className="flex gap-3 overflow-x-auto"
        style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 4, scrollbarWidth: 'none' }}
      >
        {matches.map((match, i) => (
          <MatchCard key={match.id} match={match} index={i} />
        ))}
      </div>
    </div>
  );
}
