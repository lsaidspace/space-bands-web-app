import { CaretRight, MapPin } from 'phosphor-react';
import { Branch } from '../../types/Branch';
import Bpm from '../Bpm';
import OnlineStatus from '../OnlineStatus';

export default function BranchItem({
  name,
  onlineStatus,
  bpmAverage,
}: Branch) {
  return (
    <div className="flex items-center py-3 px-3 clickable">
      <MapPin
        size={30}
        className="mr-6"
      />
      <div className="space-y-1">
        <h3>{name}</h3>
        <div className="flex items-center gap-4">
          <OnlineStatus {...onlineStatus} />
          <Bpm value={bpmAverage} />
        </div>
      </div>
      <CaretRight
        size={24}
        className="ml-auto"
        weight="bold"
      />
    </div>
  );
}