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
        [Route("edit/{diagnosisId}")]
        public Diagnosis GetDiagnosisById(int diagnosisId)
        {
            return _oneDxRepository.GetDiagnosisById(diagnosisId);
        }

        [HttpGet]
        [Route("bypatient/{patientId}")]
        public List<Diagnosis> GetAllDiagnosisByPatient(int patientId)
        {
            return _oneDxRepository.GetAllDiagnosesByPatientId(patientId);
        }

        [HttpPost]
        [Route("create")]
        public Diagnosis CreateDiagnosis(Diagnosis diagnosis)
        {
            return _oneDxRepository.Insert(diagnosis);
        }

        [HttpPost]
        [Route("createforpatient/{patientId}")]
        public Diagnosis CreateDiagnosis(int patientId, Diagnosis diagnosis)
        {
            return _oneDxRepository.Insert(patientId, diagnosis);
        }

        [HttpPut]
        [Route("update")]
        public Diagnosis UpdateDiagnosis(Diagnosis diagnosis)
        {
            return _oneDxRepository.Update(diagnosis);
        }

        [HttpDelete]
        [Route("delete/{diagnosisId}")]
        public Diagnosis DeleteDiagnosis(int diagnosisId)
        {
            return _oneDxRepository.DeleteDiagnosis(diagnosisId);
        }
    }
}
