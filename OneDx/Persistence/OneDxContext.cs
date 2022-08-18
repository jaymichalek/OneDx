using Microsoft.EntityFrameworkCore;
using OneDx.Models;

namespace OneDx.Persistence
{
    public class OneDxContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Diagnosis> Diagnoses { get; set; }

        public OneDxContext(DbContextOptions<OneDxContext> options) : base(options)
        {

        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<Doctor>().HasData(
        //        new Doctor { FirstName = "John", LastName = "Smith" },
        //        new Doctor { FirstName = "Mark", LastName = "Adams" },
        //        new Doctor { FirstName = "Joe", LastName = "Webber" }
        //        );
        //    modelBuilder.Entity<Patient>().HasData(
        //        new Patient { FirstName = "Jane", LastName = "Doe", DateOfBirth = new DateTime(1990, 12, 01), Gender = Gender.Female, DoctorId = "09fefd59-a2e2-4a86-9e51-a6b4f38e4a84" },
        //        new Patient { FirstName = "John", LastName = "Doe", DateOfBirth = new DateTime(1991, 12, 18), Gender = Gender.Male, DoctorId = "cb6f049b-7890-4f87-8e13-25ef09ef535b" },
        //        new Patient { FirstName = "James", LastName = "Smith", DateOfBirth = new DateTime(1991, 10, 01), Gender = Gender.NonBinary, DoctorId = "cefec822-a5c0-41dc-9c22-ef6d1cf98f55" }
        //        );
        //    modelBuilder.Entity<Diagnosis>().HasData(
        //        new Diagnosis { DiagnosisCode = "I10", DiagnosisName = "Hypertension", PatientId =  },
        //        new Diagnosis { DiagnosisCode = "E11.9", DiagnosisName = "Diabetes Mellitus Type II", PatientId = },
        //        new Diagnosis { DiagnosisCode = "E78.5", DiagnosisName = "Hyperlipidemia", PatientId = }
        //        );

        //}

    }
}
