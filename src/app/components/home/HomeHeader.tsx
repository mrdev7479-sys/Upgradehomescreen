import { motion } from 'motion/react';
import { Settings, Search, Bell } from 'lucide-react';

interface HomeHeaderProps {
  notificationCount?: number;
  coins?: number;
}

export function HomeHeader({ notificationCount = 1, coins = 4280 }: HomeHeaderProps) {
  return (
    <div
      className="absolute top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(13,10,20,0.92)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Fake Status Bar */}
      <div className="flex items-center justify-between px-5" style={{ height: 28, paddingTop: 6 }}>
        <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <div className="flex items-end gap-[2px]">
            {[40, 55, 70, 85].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: h * 0.08,
                  borderRadius: 1,
                  background: i < 3 ? '#fff' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
          {/* WiFi */}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M7 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white" />
            <path d="M4.5 6.5C5.3 5.7 6.1 5.3 7 5.3s1.7.4 2.5 1.2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M2.5 4.5C3.8 3.2 5.3 2.5 7 2.5s3.2.7 4.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {/* Battery */}
          <div className="flex items-center">
            <div style={{ width: 22, height: 11, borderRadius: 3, border: '1px solid rgba(255,255,255,0.7)', padding: 1.5, display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '75%', height: '100%', borderRadius: 1.5, background: '#fff' }} />
            </div>
            <div style={{ width: 2, height: 5, borderRadius: 1, background: 'rgba(255,255,255,0.5)', marginLeft: 1 }} />
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="flex items-center justify-between px-4" style={{ height: 56 }}>
        {/* Settings */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <Settings size={18} color="rgba(255,255,255,0.9)" />
        </motion.button>

        {/* Center: Coins Badge */}
        <div className="flex items-center">
          {/* Coins Badge */}
          <motion.div
            className="flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, rgba(212,160,23,0.22) 0%, rgba(255,200,50,0.12) 100%)',
              border: '1px solid rgba(212,160,23,0.40)',
              borderRadius: 24,
              paddingLeft: 10,
              paddingRight: 14,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            {/* Lightning bolt icon */}
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #F5C518, #D4A017)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 8px rgba(245,197,24,0.55)',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 11, lineHeight: 1 }}>⚡</span>
            </div>
            <span style={{ color: '#F5C518', fontSize: 14, fontWeight: 800, letterSpacing: 0.3 }}>
              {coins.toLocaleString()} coins
            </span>
          </motion.div>
        </div>

        {/* Right: Search + Notifications */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.88 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              background: 'rgba(255,255,255,0.07)',
              border: '0.5px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Search size={17} color="rgba(255,255,255,0.9)" />
          </motion.button>

          {/* Notification button with pulsing badge */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.88 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                background: 'rgba(255,255,255,0.07)',
                border: '0.5px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bell size={17} color="rgba(255,255,255,0.9)" />
            </motion.button>
            {/* Pulsing badge */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 4,
                right: 4,
                minWidth: 16,
                height: 16,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                border: '1.5px solid rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(124,58,237,0.6), 0 0 24px rgba(124,58,237,0.3)',
              }}
            >
              <span style={{ color: '#fff', fontSize: 9, fontWeight: 800 }}>
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}