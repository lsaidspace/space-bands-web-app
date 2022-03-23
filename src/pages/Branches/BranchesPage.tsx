import { User } from 'phosphor-react'
import { Link } from 'react-router-dom'
import BranchItem from '../../components/BranchItem'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import { Branch } from '../../types/Branch'

const data = [
  {
    id: '123',
    name: 'Artigas 341',
    onlineStatus: {
      online: true,
      offlineAlert: false,
    },
    bpmAverage: 80,
    actions: [],
  },
  {
    id: '1234',
    name: 'Artigas 341',
    onlineStatus: {
      online: true,
      offlineAlert: false,
    },
    bpmAverage: 80,
    actions: [],
  },
  {
    id: '12355',
    name: 'Artigas 341',
    onlineStatus: {
      online: true,
      offlineAlert: false,
    },
    bpmAverage: 80,
    actions: [],
  }
]

const topBar = (
  <div className="text-right">
    <IconButton
      icon={User}
      onClick={console.log}
    />
  </div>
)

export default function BranchesPage() {

  return (
    <>
      <Header
        topBar={topBar}
        title="Sucursales"
      />
      <div className="divide-y">
        {data.map((branch: Branch) => (
          <Link
            to={`/branches/${branch.id}`}
            key={branch.id}
            className="block"
          >
            <BranchItem {...branch} />
          </Link>
        ))}
      </div>
    </>
  )
}