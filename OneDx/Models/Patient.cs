using System.Reflection;

namespace OneDx.Models
{
    public class Patient
    {
        public int PatientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age => this.CalculateAge(DateOfBirth);
        public Gender Gender { get; set; }
        public Doctor Doctor { get; set; }
        public string DoctorId { get; set; }
        public ICollection<Diagnosis> Diagnoses { get; set; }

        public Patient()
        {

        }

        public Patient(int patientId, string firstName, string lastName, DateTime dateOfBirth, Gender gender, Doctor doctor, string doctorId, ICollection<Diagnosis> diagnoses)
        {
            PatientId = patientId;
            FirstName = firstName;
            LastName = lastName;
            DateOfBirth = dateOfBirth;
            Gender = gender;
            Doctor = doctor;
            DoctorId = doctorId;
            Diagnoses = diagnoses;
        }

        protected int CalculateAge(DateTime dateOfBirth)
        {
            var currentDate = DateTime.Now;
            var age = currentDate.Year - dateOfBirth.Year;

            //Check if birthday has already passed this year:
            if (currentDate.Month < dateOfBirth.Month || (currentDate.Month == dateOfBirth.Month && currentDate.Day < dateOfBirth.Day))
            {
                age--;
            }

            return age;
        }
    }
}