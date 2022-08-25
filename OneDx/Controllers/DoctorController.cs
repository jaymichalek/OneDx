using Microsoft.AspNetCore.Mvc;
using OneDx.Models;
using OneDx.Repositories;

namespace OneDx.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorController : Controller
    {
        IOneDxRepository oneDxRepository;

        public DoctorController(IOneDxRepository oneDxRepository)
        {
            this.oneDxRepository = oneDxRepository;
        }

        [HttpGet]
        [Route("all")]
        public List<Doctor> GetAllDoctors()
        {
            return oneDxRepository.GetAllDoctors();
        }

        [HttpGet]
        [Route("edit/{id}")]
        public Doctor? GetDoctorById(int id)
        {
            return oneDxRepository.GetDoctorById(id);
        }
       
        [HttpPost]
        [Route("create")]
        public Doctor CreateDoctor(Doctor doctor)
        {
            return oneDxRepository.Insert(doctor);
        }

        [HttpPut]
        [Route("update")]
        public Doctor UpdateDoctor(Doctor doctor)
        {
            return oneDxRepository.Update(doctor);
        }

        [HttpDelete]
        [Route("delete/{doctorId}")]
        public Doctor DeleteDoctor(int doctorId)
        {
            return oneDxRepository.Delete(doctorId);
        }
    }
}
