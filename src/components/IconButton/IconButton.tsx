import { Icon } from 'phosphor-react';

interface IconButtonProps {
  icon: Icon;
  onClick: () => void;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  onClick,
  className,
}: IconButtonProps) {
  return (
    <div
      className={`
        clickable p-3 inline-flex text-xl
        ${className}
      `}
      onClick={onClick}
    >
      <Icon size={32}/>
    </div>
  )
}