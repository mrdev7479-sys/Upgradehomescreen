interface SectionHeaderProps {
  icon?: string;
  title: string;
  action?: string;
  badge?: string;
  onAction?: () => void;
}

export function SectionHeader({ icon, title, action, badge, onAction }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 mb-3">
      <div className="flex items-center gap-2">
        {icon && <span style={{ fontSize: 18 }}>{icon}</span>}
        <span style={{ color: '#fff', fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>
          {title}
        </span>
      </div>
      {action && (
        <button
          onClick={onAction}
          style={{ color: '#A78BFA', fontSize: 13, fontWeight: 600 }}
          className="active:opacity-70 transition-opacity"
        >
          {action}
        </button>
      )}
      {badge && (
        <div
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '0.5px solid rgba(167,139,250,0.3)',
            borderRadius: 20,
            padding: '3px 12px',
            color: 'rgba(167,139,250,0.9)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          {badge}
        </div>
      )}
    </div>
  );
}
