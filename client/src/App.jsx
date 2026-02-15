import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/DashboardLayout';

// Patient pages
import PatientDashboard from './pages/patient/PatientDashboard';
import SearchDoctors from './pages/patient/SearchDoctors';
import MyAppointments from './pages/patient/MyAppointments';
import MedicalRecords from './pages/patient/MedicalRecords';
import Prescriptions from './pages/patient/Prescriptions';

// Doctor pages
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorCalendar from './pages/doctor/DoctorCalendar';
import PatientsList from './pages/doctor/PatientsList';
import Consultation from './pages/doctor/Consultation';
import AIAssistant from './pages/doctor/AIAssistant';
import Teleconsultation from './pages/doctor/Teleconsultation';

// Clinic pages
import ClinicDashboard from './pages/clinic/ClinicDashboard';
import QueueManagement from './pages/clinic/QueueManagement';
import InventoryManagement from './pages/clinic/InventoryManagement';
import ClinicBilling from './pages/clinic/ClinicBilling';

// Pharmacist pages
import PharmacistDashboard from './pages/pharmacist/PharmacistDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Patient Dashboard */}
        <Route path="/patient" element={<DashboardLayout role="patient" />}>
          <Route index element={<PatientDashboard />} />
          <Route path="search" element={<SearchDoctors />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="records" element={<MedicalRecords />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="doctor/:id" element={<SearchDoctors />} />
          <Route path="profile" element={<PatientDashboard />} />
        </Route>

        {/* Doctor Dashboard */}
        <Route path="/doctor" element={<DashboardLayout role="doctor" />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="calendar" element={<DoctorCalendar />} />
          <Route path="patients" element={<PatientsList />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="teleconsultation" element={<Teleconsultation />} />
        </Route>

        {/* Clinic Dashboard */}
        <Route path="/clinic" element={<DashboardLayout role="clinic" />}>
          <Route index element={<ClinicDashboard />} />
          <Route path="queue" element={<QueueManagement />} />
          <Route path="practitioners" element={<ClinicDashboard />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="billing" element={<ClinicBilling />} />
        </Route>

        {/* Pharmacist Dashboard */}
        <Route path="/pharmacist" element={<DashboardLayout role="pharmacist" />}>
          <Route index element={<PharmacistDashboard />} />
          <Route path="prescriptions" element={<PharmacistDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
