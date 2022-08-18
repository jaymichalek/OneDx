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
        public Doctor? GetDoctorById(string id)
        {
            return oneDxRepository.GetDoctorById(id);
        }

        //Implement this here --------------------------------
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
        //Implement this here --------------------------------

        [HttpDelete]
        [Route("delete/{doctorId}")]
        public Doctor DeleteDoctor(string doctorId)
        {
            return oneDxRepository.Delete(doctorId);
        }
    }
}
