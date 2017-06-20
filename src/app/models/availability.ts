import { Doctor } from './doctor';
export class Availability {
  _id: string
  startsAt: Date
  endsAt: Date
  createdAt: Date
  updatedAt: Date
  doctor: Doctor
}