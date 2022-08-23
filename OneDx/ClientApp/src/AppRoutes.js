import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Doctors } from './components/Doctors';
import { Home } from "./components/Home";
import { CreateNewPatient } from './components/patientcomponents/CreateNewPatient';
import { Patients } from './components/Patients';
import { UpdatePatient }  from './components/patientcomponents/UpdatePatient';
import { Diagnosis } from './components/Diagnosis';
import { UpdateDiagnosis } from './components/diagnosiscomponents/UpdateDiagnosis';
import { AddDiagnosis } from './components/diagnosiscomponents/AddDiagnosis';


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
        path: '/create-patient',
        //requireAuth: true,
        element: <CreateNewPatient />
    },
    {
        path: '/edit-patient/:patientId',
        //requireAuth: true,
        element: <UpdatePatient />
    },
    {
        path: '/create-diagnosis',
        //requireAuth: true,
        element: <AddDiagnosis />
    },
    {
        path: '/edit-diagnosis/:diagnosisId',
        //requireAuth: true,
        element: <UpdateDiagnosis />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
