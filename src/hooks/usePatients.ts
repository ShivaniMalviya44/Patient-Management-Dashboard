import { useState } from "react";
import type { Patient } from "../types/Patient";

export const usePatients = () => 
{
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Patient) => 
  {
    const exists = patients.some(p => p.patientId === patient.patientId);

    if (exists) 
    {
       alert("Patient ID already exists!");
       return;
    }

    setPatients([...patients, patient]);
  };

  return { patients, addPatient };
};