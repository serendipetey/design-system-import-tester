import { ComponentValidator } from "./components/ComponentValidator";
import { ImportValidator } from "./components/ImportValidator";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Design System Import Tester
          </h1>
          <p className="text-gray-600">
            Validating published packages vs workspace versions
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <ImportValidator />
          <ComponentValidator />
        </div>
      </div>
    </div>
  );
}

export default App;
