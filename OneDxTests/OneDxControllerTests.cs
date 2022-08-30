using Moq;
using NUnit.Framework.Internal;
using OneDx.Controllers;
using OneDx.Models;
using OneDx.Repositories;

namespace OneDxTests
{
    public class OneDxControllerTests
    {
        private Mock<IOneDxRepository> mockRepo;

        //Doctor SetUp
        private DoctorController doctorController;
        private List<Doctor> doctors;
        private Doctor testDoctor;
        private Doctor newDoctor;

        //Patient SetUp
        private PatientController patientController;
        private List<Patient> patients;
        private Patient testPatient;
        private Patient newPatient;
        private List<Patient> patientsByDoctorOne;

        //Diagnosis SetUp
        private DiagnosisController diagnosisController;
        private List<Diagnosis> diagnoses;
        private Diagnosis testDiagnosis;
        private Diagnosis fakeDiagnosis;
        private List<Diagnosis> diagnosisPatientOne;

        [SetUp]
        public void Setup()
        {
            mockRepo = new Mock<IOneDxRepository>();

            doctorController = new DoctorController(mockRepo.Object);
            doctors = new List<Doctor>();
            testDoctor = new Doctor { Id = 1, FirstName = "John", LastName = "Smith", Email = "johnsmith@test.com" };
            doctors.Add(testDoctor);
            newDoctor = new Doctor { Id = 2, FirstName = "Max", LastName = "Samuel", Email = "maxsamuel@test.com" };

            patientController = new PatientController(mockRepo.Object);
            patients = new List<Patient>();
            testPatient = new Patient { PatientId = 1, FirstName = "Jane", LastName = "Doe", DateOfBirth = new DateTime(1986, 08, 18), Gender = Gender.Female, DoctorId = 1 };
            patients.Add(testPatient);
            newPatient = new Patient { PatientId = 2, FirstName = "John", LastName = "Jones", DateOfBirth = DateTime.Now.AddYears(-28), Gender = Gender.NonBinary, DoctorId = 1 };
            patientsByDoctorOne = new List<Patient>();
            patientsByDoctorOne.Add(testPatient);
            patientsByDoctorOne.Add(newPatient);

            diagnosisController = new DiagnosisController(mockRepo.Object);
            diagnoses = new List<Diagnosis>();
            testDiagnosis = new Diagnosis { DiagnosisId = 1, DiagnosisCode = "I10", DiagnosisName = "Hypertension, unspecified", DiagnosisDate = new DateTime(2022, 08, 01), PatientId = 1 };
            diagnoses.Add(testDiagnosis);
            fakeDiagnosis = new Diagnosis { DiagnosisId = 2, DiagnosisCode = "E11.9", DiagnosisName = "Diabetes Mellitus Type II", DiagnosisDate = new DateTime(2022, 08, 18), PatientId = 1 };
            diagnosisPatientOne = new List<Diagnosis>();
            diagnosisPatientOne.Add(testDiagnosis);
            diagnosisPatientOne.Add(fakeDiagnosis);
        }

        /**
            Doctor Controller Tests
        **/
        [Test]
        public void GetAllDoctors_CallsRepo_ReturnsList()
        {
            //Arrange
            mockRepo.Setup(x => x.GetAllDoctors()).Returns(doctors);
            //Act
            List<Doctor> result = doctorController.GetAllDoctors();
            //Assert
            mockRepo.Verify(repo => repo.GetAllDoctors(), Times.Once());
            Assert.That(result, Is.EquivalentTo(doctors));
        }

        [Test]
        public void GetDoctorById_CallsRepo_ReturnsDoctor()
        {
            //Arrange
            mockRepo.Setup(x => x.GetDoctorById(1)).Returns(testDoctor);
            //Act
            Doctor result = doctorController.GetDoctorById(1);
            //Assert
            mockRepo.Verify(repo => repo.GetDoctorById(1), Times.Once());
            Assert.That(result, Is.EqualTo(testDoctor));
        }

        [Test]
        public void GetDoctorByEmail_CallsRepo_ReturnsDoctor()
        {
            //Arrange
            mockRepo.Setup(x => x.GetDoctorByEmail("johnsmith@test.com")).Returns(testDoctor);
            //Act
            Doctor result = doctorController.GetDoctorByEmail("johnsmith@test.com");
            //Assert
            mockRepo.Verify(repo => repo.GetDoctorByEmail("johnsmith@test.com"), Times.Once());
            Assert.That(result, Is.EqualTo(testDoctor));
        }

        [Test]
        public void CreateDoctor_CallsRepo_ReturnsDoctor()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Insert(newDoctor)).Returns(newDoctor);
            //Act
            Doctor returnedDoctor = doctorController.CreateDoctor(newDoctor);
            //Assert
            mockRepo.Verify(repo => repo.Insert(newDoctor), Times.Once());
            Assert.That(returnedDoctor, Is.EqualTo(newDoctor));
        }

        [Test]
        public void UpdateDoctor_CallsRepo_ReturnsDoctor()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Update(newDoctor)).Returns(newDoctor);
            //Act
            Doctor result = doctorController.UpdateDoctor(newDoctor);
            //Assert
            mockRepo.Verify(repo => repo.Update(newDoctor), Times.Once());
            Assert.That(result, Is.EqualTo(newDoctor));
        }

        [Test]
        public void DeleteDoctor_CallsRepo_ReturnsDeletedDoctor()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Delete(2)).Returns(newDoctor);
            //Act
            Doctor result = doctorController.DeleteDoctor(2);
            //Assert
            mockRepo.Verify(repo => repo.Delete(2), Times.Once());
            Assert.That(result, Is.EqualTo(newDoctor));
        }

        /**
            Patient Controller Tests
        **/
        [Test]
        public void GetAllPatients_CallsRepo_ReturnsList()
        {
            //Arrange
            mockRepo.Setup(x => x.GetAllPatients()).Returns(patients);
            //Act
            List<Patient> result = patientController.GetAllPatients();
            //Assert
            mockRepo.Verify(repo => repo.GetAllPatients(), Times.Once());
            Assert.That(result, Is.EquivalentTo(patients));
        }

        [Test]
        public void GetPatientById_CallsRepo_ReturnsPatient()
        {
            //Arrange
            mockRepo.Setup(x => x.GetPatientById(1)).Returns(testPatient);
            //Act
            Patient result = patientController.GetPatientById(1);
            //Assert
            mockRepo.Verify(repo => repo.GetPatientById(1), Times.Once());
            Assert.That(result, Is.EqualTo(testPatient));
        }

        [Test]
        public void GetPatientByDoctorId_CallsRepo_ReturnsPatient()
        {
            //Arrange
            mockRepo.Setup(x => x.GetAllPatientsByDoctorId(1)).Returns(patientsByDoctorOne);
            //Act
            List<Patient> result = patientController.GetPatientByDoctorId(1);
            //Assert
            mockRepo.Verify(repo => repo.GetAllPatientsByDoctorId(1), Times.Once());
            Assert.That(result, Is.EqualTo(patientsByDoctorOne));
        }

        [Test]
        public void CreatePatient_CallsRepo_ReturnsPatient()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Insert(newPatient)).Returns(newPatient);
            //Act
            Patient returnedPatient = patientController.CreatePatient(newPatient);
            //Assert
            mockRepo.Verify(repo => repo.Insert(newPatient), Times.Once());
            Assert.That(returnedPatient, Is.EqualTo(newPatient));
        }

        [Test]
        public void UpdatePatient_CallsRepo_ReturnsPatient()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Update(newPatient)).Returns(newPatient);
            //Act
            Patient result = patientController.UpdatePatient(newPatient);
            //Assert
            mockRepo.Verify(repo => repo.Update(newPatient), Times.Once());
            Assert.That(result, Is.EqualTo(newPatient));
        }

        [Test]
        public void DeletePatient_CallsRepo_ReturnsDeletedPatient()
        {
            //Arrange
            mockRepo.Setup(repo => repo.DeletePatient(2)).Returns(newPatient);
            //Act
            Patient result = patientController.DeletePatient(2);
            //Assert
            mockRepo.Verify(repo => repo.DeletePatient(2), Times.Once());
            Assert.That(result, Is.EqualTo(newPatient));
        }

        /**
            Diagnosis Controller Tests
        **/
        [Test]
        public void GetAllDiagnosis_CallsRepo_ReturnsList()
        {
            //Arrange
            mockRepo.Setup(x => x.GetAllDiagnoses()).Returns(diagnoses);
            //Act
            List<Diagnosis> result = diagnosisController.GetAllDiagnoses();
            //Assert
            mockRepo.Verify(repo => repo.GetAllDiagnoses(), Times.Once());
            Assert.That(result, Is.EquivalentTo(diagnoses));
        }

        [Test]
        public void GetDiagnosisById_CallsRepo_ReturnsDiagnosis()
        {
            //Arrange
            mockRepo.Setup(x => x.GetDiagnosisById(1)).Returns(testDiagnosis);
            //Act
            Diagnosis result = diagnosisController.GetDiagnosisById(1);
            //Assert
            mockRepo.Verify(repo => repo.GetDiagnosisById(1), Times.Once());
            Assert.That(result, Is.EqualTo(testDiagnosis));
        }

        [Test]
        public void GetAllDiagnosisByPatient_CallsRepo_ReturnsList()
        {
            //Arrange
            mockRepo.Setup(x => x.GetAllDiagnosesByPatientId(1)).Returns(diagnosisPatientOne);
            //Act
            List<Diagnosis> result = diagnosisController.GetAllDiagnosisByPatient(1);
            //Assert
            mockRepo.Verify(repo => repo.GetAllDiagnosesByPatientId(1), Times.Once());
            Assert.That(result, Is.EqualTo(diagnosisPatientOne));
        }

        [Test]
        public void CreateDiagnosis_CallsRepo_ReturnsDiagnosis()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Insert(fakeDiagnosis)).Returns(fakeDiagnosis);
            //Act
            Diagnosis returnedDiagnosis = diagnosisController.CreateDiagnosis(fakeDiagnosis);
            //Assert
            mockRepo.Verify(repo => repo.Insert(fakeDiagnosis), Times.Once());
            Assert.That(returnedDiagnosis, Is.EqualTo(fakeDiagnosis));
        }

        [Test]
        public void CreateDiagnosisForPatient_CallsRepo_ReturnsDiagnosis()
        {
            //Arrange
            int patientId = 1;
            fakeDiagnosis = new Diagnosis { DiagnosisId = 2, DiagnosisCode = "E11.9", DiagnosisName = "Diabetes Mellitus Type II", DiagnosisDate = new DateTime(2022, 08, 18), PatientId = patientId };
            mockRepo.Setup(repo => repo.Insert(patientId, fakeDiagnosis)).Returns(fakeDiagnosis);
            //Act
            Diagnosis returnedDiagnosis = diagnosisController.CreateDiagnosis(patientId, fakeDiagnosis);
            //Assert
            mockRepo.Verify(repo => repo.Insert(patientId, fakeDiagnosis), Times.Once());
            Assert.That(returnedDiagnosis, Is.EqualTo(fakeDiagnosis));
        }

        [Test]
        public void UpdateDiagnosis_CallsRepo_ReturnsDiagnosis()
        {
            //Arrange
            mockRepo.Setup(repo => repo.Update(fakeDiagnosis)).Returns(fakeDiagnosis);
            //Act
            Diagnosis result = diagnosisController.UpdateDiagnosis(fakeDiagnosis);
            //Assert
            mockRepo.Verify(repo => repo.Update(fakeDiagnosis), Times.Once());
            Assert.That(result, Is.EqualTo(fakeDiagnosis));
        }

        [Test]
        public void DeleteDiagnosis_CallsRepo_ReturnsDeletedDiagnosis()
        {
            //Arrange
            mockRepo.Setup(repo => repo.DeleteDiagnosis(1)).Returns(fakeDiagnosis);
            //Act
            Diagnosis result = diagnosisController.DeleteDiagnosis(1);
            //Assert
            mockRepo.Verify(repo => repo.DeleteDiagnosis(1), Times.Once());
            Assert.That(result, Is.EqualTo(fakeDiagnosis));
        }
    }

}