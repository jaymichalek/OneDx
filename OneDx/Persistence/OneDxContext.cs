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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Entity<Doctor>()
            //    .HasMany(d => d.Patients)
            //    .WithOne(p => p.Doctor)
            //    .IsRequired();
            modelBuilder.Entity<Doctor>().HasData(
                new Doctor { FirstName = "John", LastName = "Smith" },
                new Doctor { FirstName = "Mark", LastName = "Adams" },
                new Doctor { FirstName = "Joe", LastName = "Webber" }
                );
            //modelBuilder.Entity<Patient>().HasData(
            //    new Patient { FirstName = "Jane", LastName = "Doe", DateOfBirth = new DateTime(1990, 12, 01), Gender = Gender.Female },
            //    new Patient { FirstName = "John", LastName = "Doe", DateOfBirth = new DateTime(1991, 12, 18), Gender = Gender.Male },
            //    new Patient { FirstName = "James", LastName = "Smith", DateOfBirth = new DateTime(1991, 10, 01), Gender = Gender.NonBinary }
            //    );
            //modelBuilder.Entity<Diagnosis>().HasData(
            //    new Diagnosis { DiagnosisCode = "I10", DiagnosisName = "Hypertension" },
            //    new Diagnosis { DiagnosisCode = "E11.9", DiagnosisName = "Diabetes Mellitus Type II" },
            //    new Diagnosis { DiagnosisCode = "E78.5", DiagnosisName = "Hyperlipidemia" }
            //    );
        }

    }
}
