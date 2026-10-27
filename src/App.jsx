
import { useState } from "react";

import MainLayout from "./components/Mainlayout";

import Dashboard from "./pages/Dashboards";
import BudgetManagement from "./pages/BudgetManagement";
import Reports from "./pages/Report";
import Settings from "./pages/Settings/settings";
import Calendar from "./pages/Monitoring/calendar";
import auditTrail from "./pages/Reports/audittrail";

import "./styles/dashboard.css";

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const pages = {
    "Dashboard": Dashboard,
    "Budget Management": BudgetManagement,
    "Reports": Reports,
    "Settings": Settings,
    "Calendar": Calendar,
    "Audit Trail": auditTrail,
  };

  const ActivePage = pages[page];

  return (
    <MainLayout
      activePage={page}
      onPageChange={setPage}
    >
      {ActivePage ? (
        <ActivePage />
      ) : (
        <div className="page-placeholder">
          <h1>{page}</h1>
          <p>
            The {page} module is currently under
            development.
          </p>
        </div>
      )}
    </MainLayout>
  );
}
