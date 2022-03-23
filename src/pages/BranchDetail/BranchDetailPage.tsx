import { ArrowLeft, Gear, User } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import OnlineStatus from '../../components/OnlineStatus'
import { Branch } from '../../types/Branch'
import ActionButtons from './ActionButtons'
import BranchBpm from './BranchBpm'

const data: Branch = {
  id: '1234',
  name: 'Artigas 341',
  onlineStatus: {
    online: true,
    offlineAlert: false,
  },
  bpmAverage: 80,
  actions: [
    {
      id: '21hj4342',
      type: 'call',
      label: 'Llamar al 911',
      value: '911',
      isPrimary: true,
    },
    {
      id: 'sgsd234234',
      type: 'directions',
      label: 'Ir al lugar',
      value: '-34.87258543483492,-55.276035938987924',
      isPrimary: false,
    }
  ]
}

const topBar = (
  <div className="flex items-center justify-between">
    <Link to="/">
      <IconButton
        icon={ArrowLeft}
        onClick={console.log}
      />
    </Link>
    <IconButton
      icon={Gear}
      className="text-gray-800"
      onClick={console.log}
    />
  </div>
)

export default function BranchDetailPage() {

  const {
    name,
    onlineStatus,
    bpmAverage,
    actions,
  } = data;

  return (
    <>
      <Header
        topBar={topBar}
        title={name}
      />
      <div className="w-11/12 mx-auto">
        <OnlineStatus {...onlineStatus} />
        <h3 className="mb-4">Bpm en tiempo real</h3>
        <BranchBpm />
        <div className="h-5" />
        <ActionButtons actions={actions} />
      </div>
    </>
  )
}