namespace OneDx.Models
{
    public class Diagnosis
    {
        public int DiagnosisId { get; set; }
        public string DiagnosisCode { get; set; }
        public string DiagnosisName { get; set; }
        public DateTime DiagnosisDate { get; set; }
        public Patient? Patient { get; set; }
        public int PatientId { get; set; }

        public Diagnosis()
        {

        }

        public Diagnosis(int diagnosisId, string diagnosisCode, string diagnosisName, DateTime diagnosisDate, Patient patient, int patientId)
        {
            DiagnosisId = diagnosisId;
            DiagnosisCode = diagnosisCode;
            DiagnosisName = diagnosisName;
            DiagnosisDate = diagnosisDate;
            Patient = patient;
            PatientId = patientId;
        }
    }
}