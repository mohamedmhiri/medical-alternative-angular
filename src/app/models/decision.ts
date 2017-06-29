import { Patient } from './patient'
export class Decision {
  _id: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
  patient?: Patient
}