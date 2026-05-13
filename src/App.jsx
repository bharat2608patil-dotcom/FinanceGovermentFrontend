import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './App.css';

// --- REGISTRY IMPORTS ---
import { 
  Layout, 
  ComplianceDashboard, 
  ComplianceCreate, 
  DisplayAllCompliance, 
  DisplayOneRecord, 
  ComplianceEdit,
  AuditDashboard,
  AuditCreate,
  DisplayAllAudits,
  AuditEdit,
  ReportDetails,
  CreateReport,
  ReportsDashboard,
  AnalyticsDashboard,
  AuditDetails
} from './core/registry'; 

// --- ADMIN PAGES ---
import AdminDashboard from './pages/admin/AdminDashboard';
import Analytics from './pages/admin/Analytics';
import AuditLogs from './pages/admin/AuditLogs';
import CitizenManagement from './pages/admin/CitizenManagement';
import CreateOfficer from './pages/admin/CreateOfficer';
import DocumentVerification from './pages/admin/DocumentVerification';
import Settings from './pages/admin/Settings';
import UserDetails from './pages/admin/UserDetails';
import UsersPage from './pages/admin/UsersPage';

// --- PROGRAM MANAGER PAGES ---
import AllocateResources from './pages/programManager/AllocateResources';
import BudgetSummary from './pages/programManager/BudgetSummary';
import CreateBudget from './pages/programManager/CreateBudget';
import CreatePrograms from './pages/programManager/CreatePrograms';

// --- FINANCIAL OFFICER PAGES ---
import GrantSubsidyPage from './pages/financialofficer/GrantSubsidyPage';
import OfficerAllApplications from './pages/financialofficer/OfficerAllApplications';
import OfficerApplications from './pages/financialofficer/OfficerApplications';
import VerifyDisclosure from './pages/financialofficer/VerifyDisclosure';
import VerifyTaxation from './pages/financialofficer/VerifyTaxation';

// --- CITIZEN PAGES ---
import CitizenPrograms from './pages/citizen/CitizenPrograms';
import CitizenSearchPage from './pages/citizen/CitizenSearchPage';
import CreateDisclosure from './pages/citizen/CreateDisclosure';
import CreateTaxation from './pages/citizen/CreateTaxation';
import Documents from './pages/citizen/Documents';
import MyDisclosures from './pages/citizen/MyDisclosures';
import MyTaxations from './pages/citizen/MyTaxations';
import PaymentScreen from './pages/citizen/PaymentScreen';
import Profile from './pages/citizen/Profile';
import Registration from './pages/citizen/Registration';

// --- AUTH PAGES ---
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Placeholder for missing components
const Placeholder = ({ title }) => <div className="p-4"><h1>{title}</h1><p>Module coming soon.</p></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* --- DEFAULT REDIRECT --- */}
          <Route path="/" element={<Navigate to="/compliance" replace />} />

          {/* --- COMPLIANCE ROUTES --- */}
          <Route path="/compliance" element={<ComplianceDashboard />} />
          <Route path="/compliance/create" element={<ComplianceCreate />} />
          <Route path="/compliance/list" element={<DisplayAllCompliance />} />
          <Route path="/compliance/:id" element={<DisplayOneRecord />} />
          <Route path="/compliance/:id/edit" element={<ComplianceEdit />} />

          {/* --- AUDIT & REPORTS ROUTES --- */}
          <Route path="/audit" element={<AuditDashboard />} />
          <Route path="/audit/create" element={<AuditCreate />} />
          <Route path="/audit/list" element={<DisplayAllAudits />} />
          <Route path="/audit/:id" element={<AuditDetails />} />
          <Route path="/audit/:id/edit" element={<AuditEdit />} />
          <Route path="/reports" element={<ReportsDashboard />} />
          <Route path="/reports/create" element={<CreateReport />} />
          <Route path="/reports/analytics" element={<AnalyticsDashboard />} />
          <Route path="/reports/:id" element={<ReportDetails />} />

          {/* --- BUDGET & PROGRAM ROUTES --- */}
          <Route path="/create-budget" element={<CreateBudget />} />
          <Route path="/allocate-resources" element={<AllocateResources />} />
          <Route path="/budget-summary" element={<BudgetSummary />} />
          <Route path="/create-programs" element={<CreatePrograms />} />

          {/* --- ADMIN ROUTES --- */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/users/:id" element={<UserDetails />} />
          <Route path="/admin/users/edit/:id" element={<UserDetails />} /> {/* Mapping to UserDetails as fallback */}
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/create-officer" element={<CreateOfficer />} />
          <Route path="/admin/citizen-management" element={<CitizenManagement />} />
          <Route path="/admin/document-verification" element={<DocumentVerification />} />
          <Route path="/admin/audit-logs" element={<AuditLogs />} />
          <Route path="/admin/settings" element={<Settings />} />

          {/* --- OFFICER ROUTES --- */}
          <Route path="/officer/applications" element={<OfficerApplications />} />
          <Route path="/officer/all-applications" element={<OfficerAllApplications />} />
          <Route path="/officer/citizen-search" element={<CitizenSearchPage />} />
          <Route path="/officer/grant-subsidy" element={<GrantSubsidyPage />} />
          <Route path="/officer/verify-taxation" element={<VerifyTaxation />} />
          <Route path="/officer/verify-disclosure" element={<VerifyDisclosure />} />
          <Route path="/officer/reports" element={<Placeholder title="Financial Summary & Reports" />} />

          {/* --- CITIZEN ROUTES --- */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/citizen/programs" element={<CitizenPrograms defaultView="available" />} />
          <Route path="/citizen/my-applications" element={<CitizenPrograms defaultView="my-applications" />} />
          <Route path="/citizen/create-disclosure" element={<CreateDisclosure />} />
          <Route path="/citizen/create-taxation" element={<CreateTaxation />} />
          <Route path="/citizen/my-taxation-history" element={<MyTaxations />} />
          <Route path="/citizen/payment-screen" element={<PaymentScreen />} />
          <Route path="/citizen/my-disclosure-history" element={<MyDisclosures />} />

          {/* --- AUTH & UTILS --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* --- CATCH ALL --- */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ maxWidth: "500px", minWidth: "max-content" }}
      />
    </Router>
  );
}

export default App;
