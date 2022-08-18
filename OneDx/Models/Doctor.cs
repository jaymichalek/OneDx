using Microsoft.AspNetCore.Identity;

namespace OneDx.Models
{
    public class Doctor : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Patient> Patients { get; set; }

        public Doctor()
        {

        }

        public Doctor(string firstName, string lastName, List<Patient> patients)
        {
            FirstName = firstName;
            LastName = lastName;
            Patients = patients;
        }
    }
}
