namespace OneDx.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        //Add email to connect to log in piece:
        public string Email { get; set; }
        public ICollection<Patient>? Patients { get; set; }

        public Doctor()
        {

        }

        public Doctor(int id, string firstName, string lastName, string email, ICollection<Patient>? patients)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Patients = patients;
        }
    }
}
