import { Patient } from './patient'
export class Treatment {
  _id: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
  patient?: Patient
}