import { userItem } from '../interfaces/main';

export function filterUsersList(filter: string, list: userItem[]) {
  return list.filter(user =>
    `${user.name.firstname} ${user.name.lastname}`.toLowerCase().includes(filter.toLowerCase()) ||
    user.email.toLowerCase().includes(filter.toLowerCase()) ||
    user.phone.toLowerCase().includes(filter.toLowerCase())
  )
}