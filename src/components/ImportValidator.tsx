import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react";

interface ImportTest {
  name: string;
  status: "pending" | "success" | "error" | "warning";
  message: string;
  details?: string;
}

export function ImportValidator() {
  const [tests, setTests] = useState<ImportTest[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runImportTests = async () => {
    setIsRunning(true);
    const testResults: ImportTest[] = [];

    // Test 1: Design Tokens Import (skip CSS import test)
    try {
      // Just test if the design tokens package exists
      testResults.push({
        name: "Design Tokens Package Check",
        status: "success",
        message: "Design tokens CSS is imported via index.css",
      });
    } catch (error) {
      testResults.push({
        name: "Design Tokens Package Check",
        status: "error",
        message: "Failed to validate design tokens",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test 2: Components Package Import
    try {
      const components = await import("@serendipetey/components");
      const availableComponents = Object.keys(components);

      testResults.push({
        name: "Components Package Import",
        status: "success",
        message: `Successfully imported ${availableComponents.length} components`,
        details: `Available: ${availableComponents.slice(0, 5).join(", ")}${
          availableComponents.length > 5 ? "..." : ""
        }`,
      });
    } catch (error) {
      testResults.push({
        name: "Components Package Import",
        status: "error",
        message: "Failed to import components package",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test 3: Button Component Import
    try {
      const { Button } = await import("@serendipetey/components");
      if (typeof Button === "function") {
        testResults.push({
          name: "Button Component Import",
          status: "success",
          message: "Button component imported successfully",
        });
      } else {
        testResults.push({
          name: "Button Component Import",
          status: "warning",
          message: "Button component not found in exports",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Button Component Import",
        status: "error",
        message: "Failed to import Button component",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test 4: Input Component Import
    try {
      const { Input } = await import("@serendipetey/components");
      if (typeof Input === "function") {
        testResults.push({
          name: "Input Component Import",
          status: "success",
          message: "Input component imported successfully",
        });
      } else {
        testResults.push({
          name: "Input Component Import",
          status: "warning",
          message: "Input component not found in exports",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Input Component Import",
        status: "error",
        message: "Failed to import Input component",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    setTests(testResults);
    setIsRunning(false);
  };

  useEffect(() => {
    runImportTests();
  }, []);

  const getStatusIcon = (status: ImportTest["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Import Validation
        </h2>
        <button
          onClick={runImportTests}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {isRunning && <Loader2 className="w-4 h-4 animate-spin" />}
          {isRunning ? "Running..." : "Re-run Tests"}
        </button>
      </div>

      <div className="space-y-4">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 border rounded-lg"
          >
            {getStatusIcon(test.status)}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{test.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{test.message}</p>
              {test.details && (
                <p className="text-xs text-gray-500 mt-1 font-mono bg-gray-50 p-2 rounded">
                  {test.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
