import { useState, useMemo } from "react";
import AddPatient from "./components/AddPatient";
import PatientGrid from "./components/PatientGrid";
import PatientSummary from "./components/PatientSummary";
import { usePatients } from "./hooks/usePatients";
import { usePatientCount } from "./hooks/usePatientCount";

function App() 
{
  const { patients, addPatient } = usePatients();
  const [search, setSearch] = useState("");

  const filteredPatients = useMemo(() => 
  {
    return patients.filter(
      (p) =>
        p.patientName.toLowerCase().includes(search.toLowerCase()) ||
        p.diagnosis.toLowerCase().includes(search.toLowerCase())
    );
  }, [patients, search]);

  const count = usePatientCount(patients);

  return (
    <div>
      <h1>Patient Management Dashboard</h1>

      <AddPatient onAdd={addPatient} />

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <PatientSummary count={count} />

      <PatientGrid patients={filteredPatients} />
    </div>
  );
}

export default App;