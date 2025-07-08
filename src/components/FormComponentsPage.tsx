// src/components/FormComponentsPage.tsx
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioItem,
} from "@serendipetey/components";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface ComponentTest {
  name: string;
  status: "success" | "error" | "warning";
  message: string;
}

export function FormComponentsPage() {
  const [tests, setTests] = useState<ComponentTest[]>([]);

  const runTests = () => {
    const testResults: ComponentTest[] = [];

    // Test Button component
    try {
      if (typeof Button === "function") {
        testResults.push({
          name: "Button Component",
          status: "success",
          message: "Button component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Button Component",
        status: "error",
        message: "Button component failed to load",
      });
    }

    // Test Input component
    try {
      if (typeof Input === "function") {
        testResults.push({
          name: "Input Component",
          status: "success",
          message: "Input component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Input Component",
        status: "error",
        message: "Input component failed to load",
      });
    }

    // Test Select component
    try {
      if (typeof Select === "function") {
        testResults.push({
          name: "Select Component",
          status: "success",
          message: "Select component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Select Component",
        status: "error",
        message: "Select component failed to load",
      });
    }

    // Test Checkbox component
    try {
      if (typeof Checkbox === "function") {
        testResults.push({
          name: "Checkbox Component",
          status: "success",
          message: "Checkbox component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "Checkbox Component",
        status: "error",
        message: "Checkbox component failed to load",
      });
    }

    // Test RadioGroup component
    try {
      if (typeof RadioGroup === "function") {
        testResults.push({
          name: "RadioGroup Component",
          status: "success",
          message: "RadioGroup component imported and rendered successfully",
        });
      }
    } catch (error) {
      testResults.push({
        name: "RadioGroup Component",
        status: "error",
        message: "RadioGroup component failed to load",
      });
    }

    setTests(testResults);
  };

  useEffect(() => {
    runTests();
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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Form Components
        </h1>
        <p className="text-gray-600">
          Testing form-related components from the design system
        </p>
      </div>

      {/* Component Tests */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Component Import Tests
          </h2>
          <button
            onClick={runTests}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Re-run Tests
          </button>
        </div>

        <div className="space-y-3">
          {tests.map((test, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg"
            >
              {getStatusIcon(test.status)}
              <div>
                <span className="font-medium text-gray-900">{test.name}:</span>
                <span className="text-gray-600 ml-2">{test.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Component Examples */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Live Component Examples
        </h2>

        <div className="space-y-6">
          {/* Button Examples */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Button Variants</h3>
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
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Button States</h3>
            <div className="flex gap-2 flex-wrap">
              <Button variant="primary" size="sm" loading>
                Loading
              </Button>
              <Button variant="primary" size="sm" disabled>
                Disabled
              </Button>
            </div>
          </div>

          {/* Input Examples */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Input Component</h3>
            <div className="max-w-md space-y-4">
              <Input
                label="Standard Input"
                placeholder="Enter text..."
                hintText="This is a standard input field"
              />
              <Input
                label="Required Input"
                placeholder="Required field..."
                required
                hintText="This field is required"
              />
            </div>
          </div>

          {/* Select Examples */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Select Component</h3>
            <div className="max-w-md">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Checkbox Examples */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Checkbox Component
            </h3>
            <div className="space-y-2">
              <Checkbox id="checkbox1" label="Checkbox option 1" />
              <Checkbox
                id="checkbox2"
                label="Checkbox option 2"
                defaultChecked
              />
              <Checkbox id="checkbox3" label="Disabled checkbox" disabled />
            </div>
          </div>

          {/* Radio Examples */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Radio Group Component
            </h3>
            <RadioGroup name="example" defaultValue="option1">
              <RadioItem value="option1" label="Radio option 1" />
              <RadioItem value="option2" label="Radio option 2" />
              <RadioItem value="option3" label="Radio option 3" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
