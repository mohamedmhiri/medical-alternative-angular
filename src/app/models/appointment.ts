import { Patient } from './patient';
export class Appointment {
    _id: string
    createdAt?: Date
    updatedAt?: Date
    patient?: Patient
}