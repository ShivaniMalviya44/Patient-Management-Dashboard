interface Props 
{
  count: number;
}

const PatientSummary = ({ count }: Props) => 
  <div className="summary">Total Patients: {count}</div>;

export default PatientSummary;