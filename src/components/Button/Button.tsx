import { Icon } from 'phosphor-react';
import { JsxElement } from 'typescript';

interface IconButtonProps {
  icon?: Icon;
  onClick?: () => void;
  className?: string;
  children?: string | JsxElement;
  size?: 'small' | 'normal';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
}

const sizesClasses = {
  small: 'px-2 py-1.5 gap-x-1.5',
  normal: 'px-3 py-2 gap-x-2.5 text-lg',
}

const iconSizes = {
  small: 20,
  normal: 24,
}

export default function IconButton({
  icon: Icon,
  onClick,
  className = '',
  children,
  size = 'normal',
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        clickable inline-flex items-center rounded-md disabled:opacity-60
        ${sizesClasses[size]}
        ${className}
      `}
      onClick={onClick}
    >
      {Icon ? <Icon size={iconSizes[size]}/> : null}
      <div className="flex-1">
        {children}
      </div>
    </button>
  );
}