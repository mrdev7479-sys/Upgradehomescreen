import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';

export default function App() {
  const [isGuest, setIsGuest] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#080608',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 500,
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: '#fff', fontSize: 24, fontWeight: 900, letterSpacing: -0.5 }}>90</span>
            
          </div>
          <span
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 12,
              fontWeight: 500,
              marginLeft: 4,
              borderLeft: '1px solid rgba(255,255,255,0.15)',
              paddingLeft: 10,
            }}
          >
            Design Preview
          </span>
        </div>

        {/* Mode Toggle */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            borderRadius: 24,
            padding: 3,
            gap: 2,
            backdropFilter: 'blur(20px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <button
            onClick={() => setIsGuest(false)}
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 7,
              paddingBottom: 7,
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              transition: 'all 0.25s ease',
              background: !isGuest ? 'linear-gradient(135deg, #7C3AED, #5B21B6)' : 'transparent',
              color: !isGuest ? '#fff' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: 0.2,
              boxShadow: !isGuest ? '0 4px 12px rgba(124,58,237,0.4)' : 'none',
            }}
          >
            User Mode
          </button>
          <button
            onClick={() => setIsGuest(true)}
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 7,
              paddingBottom: 7,
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              transition: 'all 0.25s ease',
              background: isGuest ? 'linear-gradient(135deg, #7C3AED, #5B21B6)' : 'transparent',
              color: isGuest ? '#fff' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: 0.2,
              boxShadow: isGuest ? '0 4px 12px rgba(124,58,237,0.4)' : 'none',
            }}
          >
            Guest Mode
          </button>
        </div>
      </div>

      {/* Phone Frame */}
      <div
        style={{
          position: 'relative',
          width: 390,
          height: 844,
          flexShrink: 0,
        }}
      >
        {/* Outer glow */}
        <div
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 52,
            background: 'transparent',
            boxShadow: '0 0 60px rgba(124,58,237,0.12), 0 30px 80px rgba(0,0,0,0.7)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Phone shell border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 50,
            border: '1.5px solid rgba(255,255,255,0.13)',
            background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />

        {/* Side buttons (decorative) */}
        <div
          style={{
            position: 'absolute',
            right: -4,
            top: 140,
            width: 4,
            height: 60,
            borderRadius: '0 3px 3px 0',
            background: 'rgba(255,255,255,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -4,
            top: 130,
            width: 4,
            height: 36,
            borderRadius: '3px 0 0 3px',
            background: 'rgba(255,255,255,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -4,
            top: 180,
            width: 4,
            height: 56,
            borderRadius: '3px 0 0 3px',
            background: 'rgba(255,255,255,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -4,
            top: 248,
            width: 4,
            height: 56,
            borderRadius: '3px 0 0 3px',
            background: 'rgba(255,255,255,0.12)',
          }}
        />

        {/* Dynamic island notch */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 30,
            borderRadius: 16,
            background: '#000',
            zIndex: 20,
            boxShadow: 'inset 0 0 6px rgba(255,255,255,0.04)',
          }}
        >
          {/* Camera + sensor dots */}
          <div
            style={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }} />
            <div style={{ width: 5, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
          </div>
        </div>

        {/* Screen */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 50,
            overflow: 'hidden',
            background: '#000',
          }}
        >
          <HomeScreen isGuest={isGuest} />
        </div>
      </div>

      {/* Bottom label */}
      <div
        style={{
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: 3, background: '#7C3AED', boxShadow: '0 0 8px rgba(124,58,237,0.6)' }} />
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 500 }}>
          90Plus HomeScreen — Design Mockup
        </span>
        <div style={{ width: 6, height: 6, borderRadius: 3, background: '#7C3AED', boxShadow: '0 0 8px rgba(124,58,237,0.6)' }} />
      </div>
    </div>
  );
}
