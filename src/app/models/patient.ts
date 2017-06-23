import { Antecedant } from './antecedant';
import { Consultation } from './consultation';
import { Appointment } from './appointment';
export class Patient {
  _id: string
  cin: string
  firstName: string
  lastName: string
  email?: string
  birthday?: string
  birthmonth?: string
  birthyear?: string
  birthCity?: string
  gender?: string
  country?: string
  city?: string
  address?: string
  gsm?: string
  gsm2?: string
  ssiType?: string
  ssiNum?: string
  createdAt?: Date
  updatedAt?: Date
  consultations?: Consultation[]
  antecedants?: Antecedant[]
  appointments?: Appointment[]
  constructor(
    _id?: string,
    cin?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    birthday?: string,
    birthmonth?: string,
    birthyear?: string,
    birthCity?: string,
    gender?: string,
    country?: string,
    city?: string,
    address?: string,
    gsm?: string,
    gsm2?: string,
    ssiType?: string,
    ssiNum?: string,
    createdAt?: Date,
    updatedAt?: Date,
    consultations?: Consultation[],
    antecedants?: Antecedant[],
    appointments?: Appointment[]
  ) { }
}