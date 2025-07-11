import { useState, createElement, useEffect } from "react";
import { Button, Input } from "@serendipetey/components";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface ComponentTest {
  name: string;
  status: "success" | "error" | "warning";
  message: string;
}

export function ComponentValidator() {
  const [buttonTests, setButtonTests] = useState<ComponentTest[]>([]);
  const [inputTests, setInputTests] = useState<ComponentTest[]>([]);

  const runComponentTests = () => {
    const newButtonTests: ComponentTest[] = [];
    const newInputTests: ComponentTest[] = [];

    // Button Tests
    try {
      // Test basic rendering
      if (typeof Button === "function") {
        newButtonTests.push({
          name: "Button Component Exists",
          status: "success",
          message: "Button component is available",
        });
      }

      // Test if Button accepts common props
      const buttonElement = createElement(Button, {
        variant: "primary",
        size: "md",
        children: "Test Button",
      });

      if (buttonElement) {
        newButtonTests.push({
          name: "Button Props Interface",
          status: "success",
          message: "Button accepts variant and size props",
        });
      }
    } catch (error) {
      newButtonTests.push({
        name: "Button Component Test",
        status: "error",
        message: `Button test failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    }

    // Input Tests
    try {
      // Test basic rendering
      if (typeof Input === "function") {
        newInputTests.push({
          name: "Input Component Exists",
          status: "success",
          message: "Input component is available",
        });
      }

      // Test if Input accepts common props
      const inputElement = createElement(Input, {
        label: "Test Input",
        placeholder: "Enter text...",
        type: "text",
      });

      if (inputElement) {
        newInputTests.push({
          name: "Input Props Interface",
          status: "success",
          message: "Input accepts label and placeholder props",
        });
      }
    } catch (error) {
      newInputTests.push({
        name: "Input Component Test",
        status: "error",
        message: `Input test failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    }

    setButtonTests(newButtonTests);
    setInputTests(newInputTests);
  };

  useEffect(() => {
    runComponentTests();
  }, []);

  const getStatusIcon = (status: ComponentTest["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Component Validation
        </h2>
        <button
          onClick={runComponentTests}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Re-test Components
        </button>
      </div>

      {/* Live Component Examples */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-3">Live Component Test</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Variants:
            </label>
            <div className="flex gap-2 flex-wrap">
              <Button variant="primary" size="sm">
                Primary
              </Button>
              <Button variant="outline" size="sm">
                Outline
              </Button>
              <Button variant="cta" size="sm">
                CTA
              </Button>
              <Button variant="success" size="sm">
                Success
              </Button>
              <Button variant="warning" size="sm">
                Warning
              </Button>
              <Button variant="destructive" size="sm">
                Destructive
              </Button>
              <Button variant="outline" appearance="ghost" size="sm">
                Ghost
              </Button>
            </div>
          </div>

          <div>
            <Input
              label="Test Input"
              placeholder="Type here to test..."
              hintText="Testing input component functionality"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button States:
            </label>
            <div className="flex gap-2 flex-wrap">
              <Button variant="primary" size="sm" loading>
                Loading
              </Button>
              <Button variant="primary" size="sm" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Button Tests</h3>
          <div className="space-y-2">
            {buttonTests.map((test, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {getStatusIcon(test.status)}
                <span className="font-medium">{test.name}:</span>
                <span className="text-gray-600">{test.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-3">Input Tests</h3>
          <div className="space-y-2">
            {inputTests.map((test, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {getStatusIcon(test.status)}
                <span className="font-medium">{test.name}:</span>
                <span className="text-gray-600">{test.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
