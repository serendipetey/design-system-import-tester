// design-system-import-tester/src/components/ImportValidator.tsx
import React, { useState, useEffect, useCallback } from "react";
import { CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react";

interface ImportTest {
  name: string;
  status: "loading" | "success" | "error" | "warning";
  message: string;
  details?: string;
}

export function ImportValidator() {
  const [tests, setTests] = useState<ImportTest[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runImportTests = useCallback(async () => {
    setIsRunning(true);
    const testResults: ImportTest[] = [];

    // Test 1: Design Tokens Package
    try {
      // Check if design tokens CSS is available in the DOM
      const designTokensLoaded =
        document.querySelector('link[href*="design-tokens"]') ||
        document.querySelector("style[data-tokens]") ||
        getComputedStyle(document.documentElement).getPropertyValue(
          "--color-primary-500"
        );

      if (designTokensLoaded) {
        testResults.push({
          name: "Design Tokens Package",
          status: "success",
          message: "Design tokens CSS is loaded",
        });
      } else {
        testResults.push({
          name: "Design Tokens Package",
          status: "warning",
          message: "Design tokens may not be loaded",
          details: "CSS custom properties not detected",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Design Tokens Package",
        status: "error",
        message: "Failed to check design tokens",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test 2: Components Package
    try {
      const componentsPackage = await import("@serendipetey/components");
      const availableComponents = Object.keys(componentsPackage);

      testResults.push({
        name: "Components Package",
        status: "success",
        message: `Successfully imported ${availableComponents.length} components`,
        details: `Available: ${availableComponents.slice(0, 5).join(", ")}${
          availableComponents.length > 5 ? "..." : ""
        }`,
      });
    } catch (error) {
      testResults.push({
        name: "Components Package",
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
          name: "Button Component",
          status: "success",
          message: "Button component imported successfully",
        });
      } else {
        testResults.push({
          name: "Button Component",
          status: "warning",
          message: "Button component not found in exports",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Button Component",
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
          name: "Input Component",
          status: "success",
          message: "Input component imported successfully",
        });
      } else {
        testResults.push({
          name: "Input Component",
          status: "warning",
          message: "Input component not found in exports",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Input Component",
        status: "error",
        message: "Failed to import Input component",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test 5: Form Components (Checkbox, Radio, Select)
    try {
      const { Checkbox, RadioGroup, RadioItem, CheckboxGroup, Select } =
        await import("@serendipetey/components");
      const formComponents = [
        { name: "Checkbox", component: Checkbox },
        { name: "RadioGroup", component: RadioGroup },
        { name: "RadioItem", component: RadioItem },
        { name: "CheckboxGroup", component: CheckboxGroup },
        { name: "Select", component: Select },
      ];

      const validComponents = formComponents.filter(
        (c) => typeof c.component === "function"
      );

      testResults.push({
        name: "Form Components",
        status:
          validComponents.length === formComponents.length
            ? "success"
            : "warning",
        message: `${validComponents.length}/${formComponents.length} form components available`,
        details: validComponents.map((c) => c.name).join(", "),
      });
    } catch (error) {
      testResults.push({
        name: "Form Components",
        status: "error",
        message: "Failed to import form components",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    setTests(testResults);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    runImportTests();
  }, [runImportTests]);

  const getStatusIcon = (status: ImportTest["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Import Validation
        </h2>
        <button
          onClick={runImportTests}
          disabled={isRunning}
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {isRunning && <Loader2 className="w-3 h-3 animate-spin" />}
          {isRunning ? "Running..." : "Re-run Tests"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50"
          >
            {getStatusIcon(test.status)}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-gray-900 truncate">
                {test.name}
              </h3>
              <p className="text-xs text-gray-600 truncate">{test.message}</p>
              {test.details && (
                <p
                  className="text-xs text-gray-500 truncate"
                  title={test.details}
                >
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
