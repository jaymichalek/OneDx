using Microsoft.EntityFrameworkCore;
using OneDx.Models;

namespace OneDx.Data
{
    public class OneDxContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Diagnosis> Diagnoses { get; set; }

        public OneDxContext(DbContextOptions<OneDxContext> options) : base(options)
        {

        }
    }
}
