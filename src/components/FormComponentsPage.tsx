// design-system-import-tester/src/components/FormComponentsPage.tsx
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

export function FormComponentsPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Form Components</h2>
        <p className="text-gray-600 mb-6">
          Testing form components from the design system
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Inputs</h3>
          <div className="space-y-4 max-w-md">
            <Input
              label="Name"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              hintText="We'll never share your email"
            />
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              hintText="Password must be at least 8 characters long"
              error="Password must be at least 8 characters"
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Select</h3>
          <div className="max-w-md">
            <Select value={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Checkbox</h3>
          <div className="space-y-4">
            <Checkbox
              label="I agree to the terms and conditions"
              checked={checkboxChecked}
              onCheckedChange={setCheckboxChecked}
            />
            <Checkbox label="Subscribe to newsletter" defaultChecked={false} />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Checkbox Group</h3>
          <CheckboxGroup label="Select your interests">
            <div className="space-y-2">
              <Checkbox label="Technology" />
              <Checkbox label="Design" />
              <Checkbox label="Development" />
            </div>
          </CheckboxGroup>
        </section>
      </div>
    </div>
  );
}
