import type { Patient } from "../types/Patient";

export const usePatientCount = (patients: Patient[]) => 
{
  return patients.length;
};