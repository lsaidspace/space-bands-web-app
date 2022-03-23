export interface OnlineStatus {
  online: boolean;
  offlineAlert: boolean;
}

export interface Action {
  id: string;
  type: 'call' | 'directions';
  label: string;
  value: string;
  isPrimary: boolean;
}

export interface Branch {
  id: string;
  name: string;
  onlineStatus: OnlineStatus;
  bpmAverage: number;
  actions: Action[];
}