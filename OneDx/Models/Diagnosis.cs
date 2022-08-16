namespace OneDx.Models
{
    public class Diagnosis
    {
        public int DiagnosisId { get; set; }
        public string DiagnosisCode { get; set; }
        public string DiagnosisName { get; set; }
        public DateTime DiagnosisDate { get; set; }

        public Diagnosis()
        {

        }

        public Diagnosis(int diagnosisId, string diagnosisCode, string diagnosisName, DateTime diagnosisDate)
        {
            DiagnosisId = diagnosisId;
            DiagnosisCode = diagnosisCode;
            DiagnosisName = diagnosisName;
            DiagnosisDate = diagnosisDate;
        }
    }
}