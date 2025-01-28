import {create} from 'zustand'
import { Patient } from './types'

type PatientState = {
    patients: Patient[]
}

export const usePatienStore = create<PatientState> (() => ({
    patients: []
})) 