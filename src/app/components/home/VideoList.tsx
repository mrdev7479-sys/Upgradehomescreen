import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Heart } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface Video {
  id: number;
  title: string;
  views: string;
  likes: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Haaland Hat-trick vs Arsenal',
    views: '2.4M',
    likes: '145K',
    thumbnail: 'https://images.unsplash.com/photo-1657957746418-6a38df9e1ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 2,
    title: 'Best Goals of the Week',
    views: '1.8M',
    likes: '98K',
    thumbnail: 'https://images.unsplash.com/photo-1705593973313-75de7bf95b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 3,
    title: 'Top Saves & Dribbles',
    views: '980K',
    likes: '72K',
    thumbnail: 'https://images.unsplash.com/photo-1774344227964-24b6f78818ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 4,
    title: 'Mbappé Night Skills',
    views: '3.1M',
    likes: '210K',
    thumbnail: 'https://images.unsplash.com/photo-1710788617743-8b9ed4143325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 5,
    title: 'Epic Comeback Moments',
    views: '1.2M',
    likes: '86K',
    thumbnail: 'https://images.unsplash.com/photo-1763656812756-3539efd3e301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
];

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: index * 0.07 }}
      whileTap={{ scale: 0.96 }}
      style={{ width: 155, flexShrink: 0, cursor: 'pointer' }}
    >
      {/* Thumbnail — landscape */}
      <div
        style={{
          width: 155,
          height: 104,
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          border: '0.5px solid rgba(255,255,255,0.15)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)',
          }}
        />
        {/* Top gradient */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '30%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)',
          }}
        />

        {/* Play button */}
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -54%)',
            width: 34, height: 34, borderRadius: 17,
            background: 'rgba(255,255,255,0.20)',
            backdropFilter: 'blur(6px)',
            border: '1.5px solid rgba(255,255,255,0.40)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Play size={12} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
        </div>

        {/* Bottom stats row: views + likes */}
        <div
          style={{
            position: 'absolute', bottom: 6, left: 7, right: 7,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {/* Views */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Play size={8} color="rgba(255,255,255,0.75)" fill="rgba(255,255,255,0.75)" />
            <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 9, fontWeight: 700 }}>
              {video.views}
            </span>
          </div>

          {/* Likes — tappable heart */}
          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={(e) => { e.stopPropagation(); setLiked(l => !l); }}
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 3,
            }}
          >
            <motion.div
              animate={liked ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 0.25 }}
            >
              <Heart
                size={9}
                color={liked ? '#A78BFA' : 'rgba(255,255,255,0.72)'}
                fill={liked ? '#A78BFA' : 'none'}
              />
            </motion.div>
            <span
              style={{
                color: liked ? '#A78BFA' : 'rgba(255,255,255,0.75)',
                fontSize: 9,
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              {video.likes}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Title */}
      <p
        style={{
          color: 'rgba(255,255,255,0.70)',
          fontSize: 10.5,
          fontWeight: 500,
          marginTop: 6,
          lineHeight: 1.4,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {video.title}
      </p>
    </motion.div>
  );
}

export function VideoList() {
  return (
    <div>
      <SectionHeader icon="📈" title="Trending Reels" action="View All" />
      <div
        className="flex gap-3 overflow-x-auto"
        style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 4, scrollbarWidth: 'none' }}
      >
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} />
        ))}
      </div>
    </div>
  );
}
