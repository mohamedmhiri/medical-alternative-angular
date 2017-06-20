import { Availability } from './availability';
export class Doctor {
  _id: string
  firstName: string
  lastName: string
  email: string
  tel: string
  createdAt: Date
  updatedAt: Date
  availabilities: Availability[]
}