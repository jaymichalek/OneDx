using OneDx.Data;
using OneDx.Models;

namespace OneDx.Repositories
{
    public class OneDxRepository : IOneDxRepository
    {
        private readonly OneDxContext _context;

        public OneDxRepository(OneDxContext context)
        {
            _context = context;
        }

        //Doctors:

        public List<Doctor> GetAllDoctors()
        {
            return _context.Doctors.ToList();
        }

        public Doctor GetDoctorById(int doctorId)
        {
            return _context.Doctors.FirstOrDefault(d => d.Id == doctorId);
        }

        public Doctor Insert(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            _context.SaveChanges();
            return doctor;
        }

        public Doctor Update(Doctor doctor)
        {
            _context.Doctors.Update(doctor);
            _context.SaveChanges();
            return doctor;
        }

        public Doctor Delete(int doctorId)
        {
            Doctor doc = _context.Doctors.FirstOrDefault(d => d.Id == doctorId);
            _context.Doctors.Remove(doc);
            _context.SaveChanges();
            return doc;
        }

        //Patients:

        public List<Patient> GetAllPatients()
        {
            return _context.Patients.ToList();
        }

        public List<Patient> GetAllPatientsByDoctorId(int doctorId) 
        {
            return _context.Patients.ToList().FindAll(p => p.DoctorId == doctorId);
        }
        public Patient GetPatientById(int id)
        {
            return _context.Patients.FirstOrDefault(p => p.PatientId == id);
        }

        public Patient Insert(Patient patient)
        {
            _context.Patients.Add(patient);
            _context.SaveChanges();
            return patient;
        }

        public Patient Update(Patient patient)
        {
            _context.Patients.Update(patient);
            _context.SaveChanges();
            return patient;
        }

        public Patient DeletePatient(int patientId)
        {
            Patient pt = _context.Patients.FirstOrDefault(p => p.PatientId == patientId);
            _context.Patients.Remove(pt);
            _context.SaveChanges();
            return pt;
        }

        //Diagnoses:

        public List<Diagnosis> GetAllDiagnoses()
        {
            return _context.Diagnoses.ToList();
        }

        public List<Diagnosis> GetAllDiagnosesByPatientId(int patientId) 
        {
            return _context.Diagnoses.ToList().FindAll(d => d.PatientId == patientId);
        }

        public Diagnosis GetDiagnosisById(int diagnosisId)
        {
            return _context.Diagnoses.FirstOrDefault(d => d.DiagnosisId == diagnosisId);
        }

        public Diagnosis Insert(Diagnosis diagnosis)
        {
            _context.Diagnoses.Add(diagnosis);
            _context.SaveChanges();
            return diagnosis;
        }

        public Diagnosis Update(Diagnosis diagnosis)
        {
            _context.Diagnoses.Update(diagnosis);
            _context.SaveChanges();
            return diagnosis;
        }

        public Diagnosis DeleteDiagnosis(int diagnosisId)
        {
            Diagnosis dx = _context.Diagnoses.FirstOrDefault(d => d.DiagnosisId == diagnosisId);
            _context.Diagnoses.Remove(dx);
            _context.SaveChanges();
            return dx;
        }

        public Doctor? GetDoctorByEmail(string email)
        {
            return _context.Doctors.FirstOrDefault(d => d.Email == email);
        }
    }
}
