// design-system-import-tester/src/components/FormComponentsPage.tsx
// Enhanced form components showcase with comprehensive examples
import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  CheckboxGroup,
} from "@serendipetey/components";
import { Download, Plus, ArrowRight, Save, Trash2, Edit } from "lucide-react";

export function FormComponentsPage() {
  // State for interactive demos
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    notifications: false,
    newsletter: false,
    updates: false,
    theme: "light",
    plan: "",
  });

  const [validationStates, setValidationStates] = useState({
    showPasswordError: false,
    showEmailSuccess: false,
    showNameWarning: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Trigger validation demonstrations
    if (field === "email" && value.includes("@")) {
      setValidationStates((prev) => ({ ...prev, showEmailSuccess: true }));
    }
    if (field === "password" && value.length > 0 && value.length < 8) {
      setValidationStates((prev) => ({ ...prev, showPasswordError: true }));
    } else if (field === "password") {
      setValidationStates((prev) => ({ ...prev, showPasswordError: false }));
    }
    if (field === "name" && value.length > 15) {
      setValidationStates((prev) => ({ ...prev, showNameWarning: true }));
    } else if (field === "name") {
      setValidationStates((prev) => ({ ...prev, showNameWarning: false }));
    }
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold mb-4">Form Components</h2>
        <p className="text-gray-600 mb-4">
          Interactive showcase of all design system form components with
          validation states and real behavior.
        </p>
        <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-md">
          <strong>Interactive Demo:</strong> Try typing in the inputs below to
          see validation states, hover over buttons, and interact with all
          components.
        </div>
      </div>

      {/* Buttons Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Buttons</h3>
        <p className="text-gray-600 mb-6">
          All button variants with different sizes and states
        </p>

        {/* All Variants */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Button Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="outline" appearance="ghost">
                Ghost Button
              </Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="cta">CTA Button</Button>
              <Button variant="success">Success Button</Button>
              <Button variant="warning">Warning Button</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="text-lg font-medium mb-3">Button Sizes</h4>
            <div className="flex items-center gap-3">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
              <Button variant="primary" size="xl">
                Extra Large
              </Button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h4 className="text-lg font-medium mb-3">Buttons with Icons</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                Add Item
              </Button>
              <Button
                variant="outline"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continue
              </Button>
              <Button variant="success" leftIcon={<Save className="w-4 h-4" />}>
                Save Changes
              </Button>
              <Button
                variant="outline"
                appearance="ghost"
                leftIcon={<Edit className="w-4 h-4" />}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                leftIcon={<Trash2 className="w-4 h-4" />}
              >
                Delete
              </Button>
              <Button variant="cta" leftIcon={<Download className="w-4 h-4" />}>
                Download Now
              </Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h4 className="text-lg font-medium mb-3">Button States</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" loading>
                Loading...
              </Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
              <Button variant="outline" appearance="ghost" loading disabled>
                Loading Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Input Components</h3>
        <p className="text-gray-600 mb-6">
          Input fields with validation states, hints, and interactive behavior
        </p>

        <div className="space-y-6 max-w-md">
          {/* Basic Input */}
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            hintText="This will be displayed on your profile"
            warning={
              validationStates.showNameWarning
                ? "Name seems quite long"
                : undefined
            }
          />

          {/* Email Input with Success State */}
          <Input
            label="Email Address"
            labelState="required"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            hintText="We'll never share your email with anyone"
            success={
              validationStates.showEmailSuccess
                ? "Valid email format!"
                : undefined
            }
          />

          {/* Password Input with Error State */}
          <Input
            label="Password"
            labelState="required"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            hintText="Must be at least 8 characters long"
            error={
              validationStates.showPasswordError
                ? "Password must be at least 8 characters"
                : undefined
            }
          />

          {/* Confirm Password */}
          <Input
            label="Confirm Password"
            labelState="required"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            error={
              formData.password !== formData.confirmPassword &&
              formData.confirmPassword
                ? "Passwords don't match"
                : undefined
            }
          />

          {/* Optional Input */}
          <Input
            label="Phone Number"
            labelState="optional"
            type="tel"
            placeholder="+1 (555) 123-4567"
            hintText="Used for account recovery only"
          />

          {/* Different Sizes */}
          <div className="space-y-3">
            <h4 className="text-lg font-medium">Input Sizes</h4>
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
            <Input size="xl" placeholder="Extra large input" />
          </div>
        </div>
      </div>

      {/* Select Components */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Select Components</h3>
        <p className="text-gray-600 mb-6">
          Dropdown select components with various options
        </p>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.country}
              onValueChange={(value: string) =>
                handleInputChange("country", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subscription Plan
            </label>
            <Select
              value={formData.plan}
              onValueChange={(value: string) =>
                handleInputChange("plan", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free Plan</SelectItem>
                <SelectItem value="basic">Basic Plan - $9/month</SelectItem>
                <SelectItem value="pro">Pro Plan - $29/month</SelectItem>
                <SelectItem value="enterprise">
                  Enterprise Plan - $99/month
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Checkbox Components */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Checkbox Components</h3>
        <p className="text-gray-600 mb-6">
          Individual checkboxes and grouped checkbox components
        </p>

        <div className="space-y-6">
          {/* Individual Checkboxes */}
          <div className="space-y-3">
            <h4 className="text-lg font-medium">Individual Checkboxes</h4>
            <Checkbox
              label="Enable notifications"
              checked={formData.notifications}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                handleCheckboxChange("notifications", !!checked)
              }
            />
            <Checkbox
              label="Subscribe to newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                handleCheckboxChange("newsletter", !!checked)
              }
              hintText="Get weekly updates about new features"
            />
            <Checkbox
              label="Receive product updates"
              checked={formData.updates}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                handleCheckboxChange("updates", !!checked)
              }
              success={
                formData.updates ? "Thanks for staying updated!" : undefined
              }
            />
            <Checkbox
              label="I agree to the terms and conditions"
              labelState="required"
              error="You must agree to continue"
            />
          </div>

          {/* Checkbox Group */}
          <div>
            <h4 className="text-lg font-medium mb-3">Checkbox Group</h4>
            <CheckboxGroup
              label="Select your interests"
              labelState="optional"
              hintText="Choose all that apply"
            >
              <div className="space-y-2">
                <Checkbox label="Technology" />
                <Checkbox label="Design" />
                <Checkbox label="Development" />
                <Checkbox label="Marketing" />
                <Checkbox label="Business" />
              </div>
            </CheckboxGroup>
          </div>

          {/* Checkbox Sizes */}
          <div>
            <h4 className="text-lg font-medium mb-3">Checkbox Sizes</h4>
            <div className="space-y-2">
              <Checkbox size="sm" label="Small checkbox" />
              <Checkbox size="md" label="Medium checkbox (default)" />
              <Checkbox size="lg" label="Large checkbox" />
              <Checkbox size="xl" label="Extra large checkbox" />
            </div>
          </div>
        </div>
      </div>

      {/* Radio Components */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Radio Components</h3>
        <p className="text-gray-600 mb-6">
          Radio button groups for single-selection choices
        </p>

        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Radio components are available in the
              design system but currently have TypeScript interface conflicts.
              They work correctly in runtime but need interface adjustments for
              full TypeScript compatibility.
            </p>
            <div className="mt-3">
              <p className="text-xs text-yellow-700">
                Available components: <code>RadioGroup</code>,{" "}
                <code>RadioItem</code> with variants and validation states
              </p>
            </div>
          </div>

          {/* Manual radio demo using HTML inputs for demonstration */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">
              Demo: Theme Preference (HTML Implementation)
            </h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="theme-demo"
                  value="light"
                  checked={formData.theme === "light"}
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm">Light Theme</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="theme-demo"
                  value="dark"
                  checked={formData.theme === "dark"}
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm">Dark Theme</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="theme-demo"
                  value="auto"
                  checked={formData.theme === "auto"}
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm">Auto (System Preference)</span>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Selected: <strong>{formData.theme}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Form Demo */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Complete Form Demo</h3>
        <p className="text-gray-600 mb-6">
          A complete interactive form showcasing all components working together
        </p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Current Form Data:</h4>
          <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="primary" leftIcon={<Save className="w-4 h-4" />}>
            Save Form
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                country: "",
                notifications: false,
                newsletter: false,
                updates: false,
                theme: "light",
                plan: "",
              });
              setValidationStates({
                showPasswordError: false,
                showEmailSuccess: false,
                showNameWarning: false,
              });
            }}
          >
            Reset Form
          </Button>
        </div>
      </div>
    </div>
  );
}
