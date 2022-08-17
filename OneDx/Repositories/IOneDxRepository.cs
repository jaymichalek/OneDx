using OneDx.Models;

namespace OneDx.Repositories
{
    public interface IOneDxRepository
    {

        public List<Doctor> GetAllDoctors();
        public Doctor GetDoctorById(int doctorId);
        public void Insert(Doctor doctor);
        public void Update(Doctor doctor);
        public void Delete(Doctor doctor);

        public List<Patient> GetAllPatients();
        public List<Patient> GetAllPatientsByDoctor(Doctor doctor);
        public Patient GetPatientById(int patientId);
        public void Insert(Patient patient);
        public void Update(Patient patient);
        public void Delete(Patient patient);

        public List<Diagnosis> GetAllDiagnoses();
        public List<Diagnosis> GetAllDiagnosesByPatient(Patient patient);
        public Diagnosis GetDiagnosisById(int id);
        public void Insert(Diagnosis diagnosis);
        public void Update(Diagnosis diagnosis);
        public void Delete(Diagnosis diagnosis);

    }
}
