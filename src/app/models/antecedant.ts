import { Patient } from './patient';
export class Antecedant {
  _id: string
  allergies: string
  medicals: string
  treatment?: string
  surgical?: string
  type?: string
  createdAt?: Date
  updatedAt?: Date
  patient?: Patient
}