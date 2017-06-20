import { Test } from './test';
import { Patient } from './patient';
export class Consultation {
  _id: string
  motif: string
  anamnese: string
  diagnosis: string
  decision?: string
  treatment?: string
  createdAt?: Date
  updatedAt?: Date
  patient?: Patient
  test?: Test
}