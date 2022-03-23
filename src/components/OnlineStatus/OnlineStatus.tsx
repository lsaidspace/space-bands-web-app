import { WifiHigh, WifiX } from 'phosphor-react'

interface OnlineStatusProps {
  online: boolean;
  offlineAlert: boolean;
}

export default function OnlineStatus({ online, offlineAlert }: OnlineStatusProps) {

  const color = offlineAlert
    ? `var(--jelo-alert)`
    : '#333';

  const Icon = online ? WifiHigh : WifiX;
  const offlineOk = !online && !offlineAlert;

  return (
    <div
      className={`
        inline-flex items-center gap-1
        ${offlineOk ? 'opacity-60' : ''}
      `}
      style={{ color }}
    >
      <Icon />
      {online ? 'Online' : 'Offline'}
    </div>
  );
}