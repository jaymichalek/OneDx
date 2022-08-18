using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OneDx.Models;
using OneDx.Repositories;

namespace OneDx.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiagnosisController : Controller
    {
        IOneDxRepository _oneDxRepository;

        public DiagnosisController(IOneDxRepository oneDxRepository)
        {
            _oneDxRepository = oneDxRepository;
        }

        [HttpGet]
        [Route("all")]
        public List<Diagnosis> GetAllDiagnoses()
        {
            return _oneDxRepository.GetAllDiagnoses();
        }

        [HttpGet]
        [Route("bypatient/{patientId}")]
        public List<Diagnosis> GetAllDiagnosisByPatient(int patientId)
        {
            return _oneDxRepository.GetAllDiagnosesByPatientId(patientId);
        }

        //Implement here (Use id instead) ------------------------------
        [HttpPost]
        [Route("create")]
        public Diagnosis CreateDiagnosis(Diagnosis diagnosis)
        {
            return _oneDxRepository.Insert(diagnosis);
        }

        [HttpPut]
        [Route("update")]
        public Diagnosis UpdateDiagnosis(Diagnosis diagnosis)
        {
            return _oneDxRepository.Update(diagnosis);
        }
        //Implement here (Use id instead) ------------------------------

        [HttpDelete]
        [Route("delete/{diagnosisId}")]
        public Diagnosis DeleteDiagnosis(int diagnosisId)
        {
            return _oneDxRepository.DeleteDiagnosis(diagnosisId);
        }
    }
}
