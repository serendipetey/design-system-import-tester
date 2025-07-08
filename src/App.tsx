// src/App.tsx
import { useState } from "react";
import { ComponentTestLayout } from "./components/ComponentTestLayout";
import { ImportValidator } from "./components/ImportValidator";
import { FormComponentsPage } from "./components/FormComponentsPage";
import { DataComponentsPage } from "./components/DataComponentsPage";
import { NavigationComponentsPage } from "./components/NavigationComponentsPage";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("form");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "form":
        return <FormComponentsPage />;
      case "data":
        return <DataComponentsPage />;
      case "navigation":
        return <NavigationComponentsPage />;
      default:
        return <FormComponentsPage />;
    }
  };

  return (
    <ComponentTestLayout
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    >
      <div className="space-y-8">
        {/* Import Validator Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <ImportValidator />
        </div>

        {/* Current Page Content */}
        {renderCurrentPage()}
      </div>
    </ComponentTestLayout>
  );
}

export default App;
