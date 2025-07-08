import React from "react";
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

export function FormComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Form Components</h2>
        <p className="text-gray-600 mb-6">
          Testing form components from the design system
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-3">Button</h3>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="cta">Call to Action</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Input</h3>
          <div className="space-y-4 max-w-md">
            <Input label="Default Input" placeholder="Enter text..." />
            <Input
              label="Required Input"
              labelState="required"
              placeholder="Required field"
            />
            <Input
              label="Input with Hint"
              hintText="This is helpful hint text"
              placeholder="With hint"
            />
            <Input
              label="Error State"
              error="This field has an error"
              placeholder="Error example"
            />
            <Input
              label="Success State"
              success="This field is valid"
              placeholder="Success example"
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Select</h3>
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
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Checkbox</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox1" />
              <label htmlFor="checkbox1">Default checkbox</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox2" defaultChecked />
              <label htmlFor="checkbox2">Checked checkbox</label>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Radio Group</h3>
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioItem value="option1" id="radio1" />
              <label htmlFor="radio1">Option 1</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioItem value="option2" id="radio2" />
              <label htmlFor="radio2">Option 2</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioItem value="option3" id="radio3" />
              <label htmlFor="radio3">Option 3</label>
            </div>
          </RadioGroup>
        </section>
      </div>
    </div>
  );
}
