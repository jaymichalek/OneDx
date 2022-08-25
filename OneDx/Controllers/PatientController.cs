using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OneDx.Models;
using OneDx.Repositories;

namespace OneDx.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatientController : Controller
    {
        IOneDxRepository _oneDxRepository;

        public PatientController(IOneDxRepository oneDxRepository)
        {
            _oneDxRepository = oneDxRepository;
        }

        [HttpGet]
        [Route("all")]
        public List<Patient> GetAllPatients()
        {
            return _oneDxRepository.GetAllPatients();
        }

        [HttpGet]
        [Route("edit/{patientId}")]
        public Patient GetPatientById(int patientId)
        {
            return _oneDxRepository.GetPatientById(patientId);
        }

        [HttpGet]
        [Route("bydoctor/{doctorId}")]
        public List<Patient> GetPatientByDoctorId(int doctorId)
        {
            return _oneDxRepository.GetAllPatientsByDoctorId(doctorId);
        }
        
        [HttpPost]
        [Route("create")]
        public Patient CreatePatient(Patient patient)
        {
            return _oneDxRepository.Insert(patient);
        }

        [HttpPut]
        [Route("update")]
        public Patient UpdatePatient(Patient patient)
        {
            return _oneDxRepository.Update(patient);
        }

        [HttpDelete]
        [Route("delete/{patientId}")]
        public Patient DeletePatient(int patientId)
        {
            return _oneDxRepository.DeletePatient(patientId);
        }
    }
}
