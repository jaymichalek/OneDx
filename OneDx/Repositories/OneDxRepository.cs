using Microsoft.EntityFrameworkCore;
using OneDx.Models;
using OneDx.Persistence;

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
            return _context.Doctors.Find(doctorId);
        }

        public void Insert(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            _context.SaveChanges();
        }

        public void Update(Doctor doctor)
        {
            _context.Doctors.Update(doctor);
            _context.SaveChanges();
        }

        public void Delete(Doctor doctor)
        {
            Doctor doc = _context.Doctors.Find(doctor);
            _context.Doctors.Remove(doctor);
            _context.SaveChanges();
        }

        //Patients:

        public List<Patient> GetAllPatients()
        {
            return _context.Patients.ToList();
        }

        public List<Patient> GetAllPatientsByDoctor(Doctor doctor) 
        {
            return _context.Patients.ToList().FindAll(p => p.Doctor == doctor);
        }

        public Patient GetPatientById(int patientId)
        {
            return _context.Patients.Find(patientId);
        }

        public void Insert(Patient patient)
        {
            _context.Patients.Add(patient);
            _context.SaveChanges();
        }

        public void Update(Patient patient)
        {
            _context.Patients.Update(patient);
            _context.SaveChanges();
        }

        public void Delete(Patient patient)
        {
            Patient pt = _context.Patients.Find(patient);
            _context.Patients.Remove(pt);
            _context.SaveChanges();
        }

        //Diagnoses:

        public List<Diagnosis> GetAllDiagnoses()
        {
            return _context.Diagnoses.ToList();
        }

        public List<Diagnosis> GetAllDiagnosesByPatient(Patient patient) 
        {
            return _context.Diagnoses.ToList().FindAll(d => d.Patient == patient);
        }

        public Diagnosis GetDiagnosisById(int diagnosisId)
        {
            return _context.Diagnoses.Find(diagnosisId);
        }

        public void Insert(Diagnosis diagnosis)
        {
            _context.Diagnoses.Add(diagnosis);
            _context.SaveChanges();
        }

        public void Update(Diagnosis diagnosis)
        {
            _context.Diagnoses.Update(diagnosis);
            _context.SaveChanges();
        }

        public void Delete(Diagnosis diagnosis)
        {
            Diagnosis dx = _context.Diagnoses.Find(diagnosis);
            _context.Diagnoses.Remove(dx);
            _context.SaveChanges();
        }

    }
}
