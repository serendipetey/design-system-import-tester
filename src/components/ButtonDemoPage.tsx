// design-system-import-tester/src/components/ButtonDemoPage.tsx
import React from "react";
import { ButtonStatesShowcase } from "./ButtonStatesShowcase";

export function ButtonDemoPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Button Component Showcase
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          Comprehensive demonstration of the design system's button component
          across all states and variants. Test both visual consistency and
          interactive behavior.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Button Variants</div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">States Each</div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600">Size Options</div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">✓</div>
            <div className="text-sm text-gray-600">Icon Support</div>
          </div>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
          🎯 Implementation Notes
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
          <div>
            <strong>Primary 5 Variants:</strong>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              <li>Primary - Main actions</li>
              <li>Outline - Secondary actions</li>
              <li>CTA - Call-to-action emphasis</li>
              <li>Ghost - Subtle interactions</li>
              <li>Destructive - Delete/remove actions</li>
            </ul>
          </div>
          <div>
            <strong>Usage Guidelines:</strong>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              <li>Success/Warning variants available but less common</li>
              <li>Icon-only buttons need aria-label for accessibility</li>
              <li>Loading state automatically disables interaction</li>
              <li>All buttons maintain theme colors when disabled</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Showcase */}
      <ButtonStatesShowcase />

      {/* Technical Details */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Technical Implementation
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Component Usage</h4>
            <pre className="bg-white p-3 rounded border text-xs overflow-x-auto">
              {`import { Button } from "@serendipetey/components";

// Basic usage
<Button variant="primary">Save</Button>

// With icon
<Button 
  variant="cta" 
  leftIcon={<Download />}
>
  Download
</Button>

// Loading state
<Button loading={isLoading}>
  Submit
</Button>`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Available Props</h4>
            <div className="bg-white p-3 rounded border text-xs">
              <div className="space-y-1">
                <div>
                  <code>variant</code>: primary | outline | cta | ghost |
                  destructive | success | warning
                </div>
                <div>
                  <code>size</code>: sm | md | lg | xl
                </div>
                <div>
                  <code>loading</code>: boolean
                </div>
                <div>
                  <code>disabled</code>: boolean
                </div>
                <div>
                  <code>leftIcon</code>: ReactNode
                </div>
                <div>
                  <code>rightIcon</code>: ReactNode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
