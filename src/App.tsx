// design-system-import-tester/src/App.tsx
import { useState } from "react";
import { ComponentTestLayout } from "./components/ComponentTestLayout";
import { ImportValidator } from "./components/ImportValidator";
import OverviewPage from "./components/OverviewPage";
import { FormComponentsPage } from "./components/FormComponentsPage";
import { DataComponentsPage } from "./components/DataComponentsPage";
import { NavigationComponentsPage } from "./components/NavigationComponentsPage";
import { LayoutComponentsPage } from "./components/LayoutComponentsPage";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("overview");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "overview":
        return <OverviewPage />;
      case "form":
        return <FormComponentsPage />;
      case "data":
        return <DataComponentsPage />;
      case "navigation":
        return <NavigationComponentsPage />;
      case "layout":
        return <LayoutComponentsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ComponentTestLayout
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        <div className="space-y-8">
          {/* Header - Only show on overview page */}
          {currentPage === "overview" && (
            <header className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Design System Import Tester
              </h1>
              <p className="text-gray-600">
                Validating published packages vs workspace versions
              </p>
            </header>
          )}

          {/* Import Validator Section - Show on all pages */}
          <div className="bg-white rounded-lg shadow-sm border">
            <ImportValidator />
          </div>

          {/* Current Page Content */}
          {renderCurrentPage()}
        </div>
      </ComponentTestLayout>
    </div>
  );
}

export default App;
