using OneDx.Models;

namespace OneDx.Repositories
{
    public interface IOneDxRepository
    {

        public List<Doctor> GetAllDoctors();
        public Doctor GetDoctorById(int doctorId); 
        public Doctor Insert(Doctor doctor);
        public Doctor Update(Doctor doctor);
        public Doctor Delete(int doctorId);

        public List<Patient> GetAllPatients();
        public List<Patient> GetAllPatientsByDoctorId(int doctorId);
        public Patient GetPatientById(int id);
        public Patient Insert(Patient patient);
        public Patient Update(Patient patient);
        public Patient DeletePatient(int patientId);

        public List<Diagnosis> GetAllDiagnoses();
        public List<Diagnosis> GetAllDiagnosesByPatientId(int patientId);
        public Diagnosis GetDiagnosisById(int id);
        public Diagnosis Insert(Diagnosis diagnosis);
        public Diagnosis Update(Diagnosis diagnosis);
        public Diagnosis DeleteDiagnosis(int diagnosisId);

    }
}
