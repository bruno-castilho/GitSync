export interface PayloadNotificationsQueue {
  id: string
  type: 'error' | 'success'
  msg: string
  notificationConnectionID: string
}
