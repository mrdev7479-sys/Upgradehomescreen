import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeCarouselProps {
  isGuest?: boolean;
}

const slides = [
  {
    id: 0,
    kicker: 'WELCOME BACK',
    title: 'Hey Ahmed! 👋',
    subtitle: "You're on a 🔥 7-day streak! Keep it up.",
    cta: 'View Profile',
    gradient: 'linear-gradient(135deg, #0a0a12 0%, #151525 100%)',
    accent: '#7C3AED',
    glow1Color: '#7C3AED',
    glow2Color: '#A78BFA',
    badge: { text: 'LVL 12', bg: 'rgba(124,58,237,0.18)', color: '#A78BFA', border: 'rgba(167,139,250,0.3)' },
    ctaGradient: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
    ctaColor: '#fff',
  },
  {
    id: 1,
    kicker: 'DAILY REWARD',
    title: '🎰 Lucky Wheel',
    subtitle: 'Spin & Win up to 500 Coins daily',
    cta: 'Spin Now',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #2a1200 100%)',
    accent: '#FF7A3D',
    glow1Color: '#FF7A3D',
    glow2Color: '#FF4500',
    badge: { text: 'AVAILABLE', bg: 'rgba(255,122,61,0.2)', color: '#FF7A3D', border: 'rgba(255,122,61,0.35)' },
    ctaGradient: 'linear-gradient(135deg, #FF7A3D, #e05a1f)',
    ctaColor: '#000',
  },
  {
    id: 2,
    kicker: 'PREDICTIONS',
    title: '⚽ Predict Today',
    subtitle: '5 matches remaining to predict',
    cta: 'Predict Now',
    gradient: 'linear-gradient(135deg, #001a15 0%, #002a20 100%)',
    accent: '#11998E',
    glow1Color: '#11998E',
    glow2Color: '#00C9FF',
    badge: { text: '5 LEFT', bg: 'rgba(17,153,142,0.2)', color: '#11998E', border: 'rgba(17,153,142,0.35)' },
    ctaGradient: 'linear-gradient(135deg, #11998E, #0d7a72)',
    ctaColor: '#fff',
  },
  {
    id: 3,
    kicker: 'DAILY QUIZ',
    title: '🧠 Daily Quiz',
    subtitle: 'Test your football knowledge',
    cta: 'Start Quiz',
    gradient: 'linear-gradient(135deg, #0a0020 0%, #150040 100%)',
    accent: '#8E54E9',
    glow1Color: '#8E54E9',
    glow2Color: '#DA22FF',
    badge: { text: 'NEW', bg: 'rgba(142,84,233,0.2)', color: '#8E54E9', border: 'rgba(142,84,233,0.35)' },
    ctaGradient: 'linear-gradient(135deg, #8E54E9, #6a34c9)',
    ctaColor: '#fff',
  },
  {
    id: 4,
    kicker: 'LEADERBOARD',
    title: '🏆 You\'re #42',
    subtitle: 'Compete with the best fans',
    cta: 'See Rankings',
    gradient: 'linear-gradient(135deg, #1a0010 0%, #2a0020 100%)',
    accent: '#F5576C',
    glow1Color: '#F5576C',
    glow2Color: '#F093FB',
    badge: { text: 'RANK #42', bg: 'rgba(245,87,108,0.2)', color: '#F5576C', border: 'rgba(245,87,108,0.35)' },
    ctaGradient: 'linear-gradient(135deg, #F5576C, #d0364a)',
    ctaColor: '#fff',
  },
];

const guestSlide = {
  gradient: 'linear-gradient(135deg, #0a0a12 0%, #151525 100%)',
  glow1Color: '#7C3AED',
  glow2Color: '#A78BFA',
};

export function WelcomeCarousel({ isGuest = false }: WelcomeCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isGuest) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % slides.length);
      }, 5000);
    }
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isGuest]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    startAuto();
  };

  if (isGuest) {
    return (
      <div className="px-4">
        <div
          style={{
            height: 240,
            borderRadius: 24,
            background: guestSlide.gradient,
            position: 'relative',
            overflow: 'hidden',
            border: '0.5px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Glow orbs */}
          <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: `radial-gradient(circle, ${guestSlide.glow1Color}30, transparent 70%)`, top: -80, right: -60, filter: 'blur(30px)' }} />
          <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, ${guestSlide.glow2Color}25, transparent 70%)`, bottom: -60, left: -40, filter: 'blur(30px)' }} />
          {/* Shimmer sweep */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)', pointerEvents: 'none' }} />
          {/* Glass overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(1px)' }} />
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-6">
            <div>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>90+ SPORTS</span>
              <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 900, marginTop: 10, letterSpacing: -0.5, lineHeight: 1.2 }}>
                Join the Game 🎮
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>
                Predict matches, earn coins, compete with fans worldwide
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                  borderRadius: 14,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                  paddingBottom: 12,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 0.3,
                  boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                }}
              >
                Get Started
              </button>
              <button
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                  paddingBottom: 12,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div
        style={{
          height: 240,
          borderRadius: 24,
          overflow: 'hidden',
          position: 'relative',
          border: '0.5px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[current].id}
            initial={{ x: direction * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              inset: 0,
              background: slides[current].gradient,
            }}
          >
            {/* Glow orbs */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${slides[current].glow1Color}35, transparent 70%)`,
                top: -80,
                right: -60,
                filter: 'blur(35px)',
              }}
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${slides[current].glow2Color}28, transparent 70%)`,
                bottom: -60,
                left: -40,
                filter: 'blur(30px)',
              }}
            />
            {/* Shimmer sweep */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.04) 50%, transparent 75%)', pointerEvents: 'none' }} />
            {/* Glass layer */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.015)' }} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-5 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: 900, letterSpacing: 2.5 }}>
                    {slides[current].kicker}
                  </span>
                  <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 900, marginTop: 6, letterSpacing: -0.4, lineHeight: 1.2 }}>
                    {slides[current].title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, marginTop: 6, lineHeight: 1.5 }}>
                    {slides[current].subtitle}
                  </p>
                </div>
                {/* Badge */}
                <div
                  style={{
                    background: slides[current].badge.bg,
                    border: `1px solid ${slides[current].badge.border}`,
                    borderRadius: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    marginTop: 2,
                  }}
                >
                  <span style={{ color: slides[current].badge.color, fontSize: 10, fontWeight: 800, letterSpacing: 0.5 }}>
                    {slides[current].badge.text}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* CTA */}
                <button
                  style={{
                    background: slides[current].ctaGradient,
                    borderRadius: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 11,
                    paddingBottom: 11,
                    color: slides[current].ctaColor,
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    boxShadow: `0 4px 16px ${slides[current].glow1Color}40`,
                  }}
                >
                  {slides[current].cta}
                </button>

                {/* Dot indicators */}
                <div className="flex items-center gap-1.5 mr-1">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        width: i === current ? 20 : 6,
                        height: 6,
                        borderRadius: 3,
                        background: i === current ? slides[current].accent : 'rgba(255,255,255,0.25)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
