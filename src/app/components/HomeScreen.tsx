import { HomeHeader } from './home/HomeHeader';
import { WelcomeCarousel } from './home/WelcomeCarousel';
import { MatchList } from './home/MatchList';
import { VideoList } from './home/VideoList';
import { PlayerList } from './home/PlayerList';
import { TeamPitch } from './home/TeamPitch';

interface HomeScreenProps {
  isGuest?: boolean;
}

export function HomeScreen({ isGuest = false }: HomeScreenProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#080608',
        overflow: 'hidden',
      }}
    >
      {/* Purple Glow - Top */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,29,149,0.35), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple Glow - Right */}
      <div
        style={{
          position: 'absolute',
          top: 250,
          right: -120,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple Glow - Bottom Left */}
      <div
        style={{
          position: 'absolute',
          bottom: 150,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,33,182,0.2), transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Vignette effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal shimmer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Header */}
      <HomeHeader notificationCount={1} coins={4280} />

      {/* Scrollable Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          paddingTop: 88,
          paddingBottom: 90,
          scrollbarWidth: 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* 1. Welcome / Hero Carousel */}
          <WelcomeCarousel isGuest={isGuest} />

          {/* 2. Match List */}
          <MatchList />

          {/* 3. Video / Reels */}
          <VideoList />

          {/* 4. Player Cards */}
          <PlayerList />

          {/* 5. Team of the Month Pitch */}
          <TeamPitch />
        </div>
      </div>

      {/* Bottom Navigation Bar - Glassmorphism */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          background: 'rgba(13,10,20,0.95)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderTop: '0.5px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 -8px 32px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10,
          paddingLeft: 8,
          paddingRight: 8,
          zIndex: 40,
        }}
      >
        {[
          { icon: '🏠', label: 'Home', active: true },
          { icon: '📊', label: 'Matches', active: false },
          { icon: '🧠', label: 'Quiz', active: false },
          { icon: '👤', label: 'Profile', active: false },
          { icon: '🎬', label: 'Reels', active: false },
          { icon: '🏆', label: 'Stats', active: false },
        ].map((tab) => (
          <button
            key={tab.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              background: tab.active ? 'rgba(124,58,237,0.15)' : 'none',
              border: tab.active ? '0.5px solid rgba(167,139,250,0.2)' : 'none',
              cursor: 'pointer',
              padding: '8px 10px',
              borderRadius: 16,
              opacity: tab.active ? 1 : 0.5,
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>{tab.icon}</span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: tab.active ? '#A78BFA' : 'rgba(255,255,255,0.6)',
                letterSpacing: 0.3,
              }}
            >
              {tab.label}
            </span>
            {tab.active && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: 24,
                  height: 3,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #7C3AED, #A78BFA)',
                  boxShadow: '0 0 12px rgba(124,58,237,0.6), 0 0 24px rgba(124,58,237,0.3)',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* iPhone home indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 130,
          height: 5,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.3)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}