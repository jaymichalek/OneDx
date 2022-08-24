import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Doctors } from './components/Doctors';
import { Home } from "./components/Home";
import { CreateNewPatient } from './components/patientcomponents/CreateNewPatient';
import { Patients } from './components/Patients';
import { UpdatePatient }  from './components/patientcomponents/UpdatePatient';
import { Diagnosis } from './components/Diagnosis';
import { UpdateDiagnosis } from './components/diagnosiscomponents/UpdateDiagnosis';
import { AddDiagnosis } from './components/diagnosiscomponents/AddDiagnosis';
import { UpdateDoctor } from './components/doctorcomponents/UpdateDoctor';
import { AddDoctor } from './components/doctorcomponents/AddDoctor';

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/listdoctors',
        //requireAuth: true,
        element: <Doctors />
    },
    {
        path: '/listpatients',
        //requireAuth: true,
        element: <Patients />
    },
    {
        path: '/listdiagnosis',
        //requireAuth: true,
        element: <Diagnosis />
    },
    {
        path: '/create-doctor',
        //requireAuth: true,
        element: <AddDoctor />
    },
    {
        path: '/create-patient',
        //requireAuth: true,
        element: <CreateNewPatient />
    },
    {
        path: '/create-diagnosis',
        //requireAuth: true,
        element: <AddDiagnosis />
    },
    {
        path: '/edit-doctor/:id',
        //requireAuth: true,
        element: <UpdateDoctor />
    },
    {
        path: '/edit-patient/:patientId',
        //requireAuth: true,
        element: <UpdatePatient />
    },
    {
        path: '/edit-diagnosis/:diagnosisId',
        //requireAuth: true,
        element: <UpdateDiagnosis />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
