import { useMemo } from 'react';
import { NavigationArrow, PhoneCall } from 'phosphor-react';
import Button from '../../components/Button';
import { Action } from '../../types/Branch';

export interface ActionButtonsProps {
  actions: Action[],
}

const mapActionTypeIcons = {
  call: PhoneCall,
  directions: NavigationArrow,
}

function ActionButton(action: Action) {

  const url = useMemo(() => {
    const actionUrls = {
      call: `tel:${action.value}`,
      directions: `https://www.google.com/maps/dir/?api=1&destination=${action.value}`,
    };
    return actionUrls[action.type];
  }, [action]);

  return (
    <a href={url}>
      <Button
        onClick={console.log}
        icon={mapActionTypeIcons[action.type]}
        className={`
          w-full
          ${action.isPrimary ? 'bg-jelo-accent-500 text-white' : 'border'}
        `}
      >
        {action.label}
      </Button>
    </a>
  );
}

export default function ActionButtons({ actions }: ActionButtonsProps) {

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-5">
      {actions.map(action => (
        <ActionButton
          key={action.id}
          {...action}
        />
      ))}
    </div>
  )
}