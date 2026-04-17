export const StarBg = ({ className, fill }: { className?: string; fill: string }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" fill={fill} />
    </svg>
);