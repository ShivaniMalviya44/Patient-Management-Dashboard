import { useState } from "react";
import type { Patient } from "../types/Patient";

interface Props {
  onAdd: (patient: Patient) => void;
}

const AddPatient = ({ onAdd }: Props) => 
{
  const [id, setId] = useState<number | "">("");
  const [name, setName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => 
  {
    if (id === "" || id < 0) 
    {
      setError("Valid ID required");
      return;
    }

    if (!name.trim())
    {
      setError("Name cannot be empty");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name.trim())) 
    {
      setError("Name must contain only letters");
      return;
    }

    onAdd({ patientId: id, patientName: name, diagnosis });

    setError("");

    setId("");
    setName("");
    setDiagnosis("");
  };

  return (
    <div>
      <h2>Add Patient</h2>

      <input
        placeholder="ID"
        type="number"
        value={id}
        onChange={(e) =>
          setId(e.target.value === "" ? "" : Number(e.target.value))
        }
      />

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => 
        {
          setName(e.target.value);
          setError(""); 
        }}
      />

      <input
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddPatient;