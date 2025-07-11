// design-system-import-tester/src/components/ButtonStatesShowcase.tsx
import React, { useState } from "react";
import { Button } from "@serendipetey/components";
import { Download, Edit, Trash2, Plus, Save } from "lucide-react";

export function ButtonStatesShowcase() {
  // State for interactive loading demo
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const handleButtonClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));

    // Simulate async operation (3 seconds)
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };

  const resetAllLoading = () => {
    setLoadingStates({});
  };

  const isLoading = (buttonId: string) => loadingStates[buttonId] || false;

  return (
    <div className="space-y-12">
      {/* Section 1: Static States Overview */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Button States Overview
          </h3>
          <p className="text-gray-600">
            Complete visual reference showing all button variants across all
            states and appearances
          </p>
        </div>

        {/* Four-column layout: Enabled, Ghost, Disabled, Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Enabled Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 text-center pb-2 border-b">
              Enabled
            </h4>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                Primary Button
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
              <Button variant="cta" className="w-full">
                CTA Button
              </Button>
              <Button variant="success" className="w-full">
                Success Button
              </Button>
              <Button variant="warning" className="w-full">
                Warning Button
              </Button>
              <Button variant="destructive" className="w-full">
                Destructive Button
              </Button>
            </div>
          </div>

          {/* Ghost Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 text-center pb-2 border-b">
              Ghost
            </h4>
            <div className="space-y-3">
              <Button variant="primary" appearance="ghost" className="w-full">
                Primary Ghost
              </Button>
              <Button variant="outline" appearance="ghost" className="w-full">
                Outline Ghost
              </Button>
              <Button variant="cta" appearance="ghost" className="w-full">
                CTA Ghost
              </Button>
              <Button variant="success" appearance="ghost" className="w-full">
                Success Ghost
              </Button>
              <Button variant="warning" appearance="ghost" className="w-full">
                Warning Ghost
              </Button>
              <Button
                variant="destructive"
                appearance="ghost"
                className="w-full"
              >
                Destructive Ghost
              </Button>
            </div>
          </div>

          {/* Disabled Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 text-center pb-2 border-b">
              Disabled
            </h4>
            <div className="space-y-3">
              <Button variant="primary" disabled className="w-full">
                Primary Button
              </Button>
              <Button variant="outline" disabled className="w-full">
                Outline Button
              </Button>
              <Button variant="cta" disabled className="w-full">
                CTA Button
              </Button>
              <Button variant="success" disabled className="w-full">
                Success Button
              </Button>
              <Button variant="warning" disabled className="w-full">
                Warning Button
              </Button>
              <Button variant="destructive" disabled className="w-full">
                Destructive Button
              </Button>
            </div>
          </div>

          {/* Loading Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700 text-center pb-2 border-b">
              Loading
            </h4>
            <div className="space-y-3">
              <Button variant="primary" loading className="w-full">
                Primary Button
              </Button>
              <Button variant="outline" loading className="w-full">
                Outline Button
              </Button>
              <Button variant="cta" loading className="w-full">
                CTA Button
              </Button>
              <Button variant="success" loading className="w-full">
                Success Button
              </Button>
              <Button variant="warning" loading className="w-full">
                Warning Button
              </Button>
              <Button variant="destructive" loading className="w-full">
                Destructive Button
              </Button>
            </div>
          </div>
        </div>

        {/* Icon-only buttons section */}
        <div className="mt-12 pt-8 border-t">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">
            Icon-Only Buttons
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Enabled Icon-only */}
            <div className="space-y-4">
              <h5 className="text-md font-medium text-gray-700 text-center">
                Enabled
              </h5>
              <div className="flex justify-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Edit className="w-4 h-4" />}
                  aria-label="Edit"
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Plus className="w-4 h-4" />}
                  aria-label="Add"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  leftIcon={<Trash2 className="w-4 h-4" />}
                  aria-label="Delete"
                />
              </div>
            </div>

            {/* Ghost Icon-only */}
            <div className="space-y-4">
              <h5 className="text-md font-medium text-gray-700 text-center">
                Ghost
              </h5>
              <div className="flex justify-center gap-3">
                <Button
                  variant="primary"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Edit className="w-4 h-4" />}
                  aria-label="Edit"
                />
                <Button
                  variant="outline"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Plus className="w-4 h-4" />}
                  aria-label="Add"
                />
                <Button
                  variant="destructive"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Trash2 className="w-4 h-4" />}
                  aria-label="Delete"
                />
              </div>
            </div>

            {/* Disabled Icon-only */}
            <div className="space-y-4">
              <h5 className="text-md font-medium text-gray-700 text-center">
                Disabled
              </h5>
              <div className="flex justify-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Edit className="w-4 h-4" />}
                  aria-label="Edit"
                  disabled
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Plus className="w-4 h-4" />}
                  aria-label="Add"
                  disabled
                />
                <Button
                  variant="destructive"
                  size="sm"
                  leftIcon={<Trash2 className="w-4 h-4" />}
                  aria-label="Delete"
                  disabled
                />
              </div>
            </div>

            {/* Loading Icon-only */}
            <div className="space-y-4">
              <h5 className="text-md font-medium text-gray-700 text-center">
                Loading
              </h5>
              <div className="flex justify-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Edit className="w-4 h-4" />}
                  aria-label="Edit"
                  loading
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Plus className="w-4 h-4" />}
                  aria-label="Add"
                  loading
                />
                <Button
                  variant="destructive"
                  size="sm"
                  leftIcon={<Trash2 className="w-4 h-4" />}
                  aria-label="Delete"
                  loading
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Interactive Buttons Demo */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Interactive Loading Demo
          </h3>
          <p className="text-gray-600 mb-4">
            Click buttons to trigger loading states and test real interaction
            behavior
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div>
              <strong>Try it:</strong> Click multiple buttons to see
              simultaneous loading states
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={resetAllLoading}
              disabled={Object.values(loadingStates).every((state) => !state)}
            >
              Reset All
            </Button>
          </div>
        </div>

        {/* Interactive buttons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Actions */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Primary Actions</h4>
            <div className="space-y-3">
              <Button
                variant="primary"
                className="w-full"
                loading={isLoading("primary-save")}
                onClick={() => handleButtonClick("primary-save")}
                leftIcon={<Save className="w-4 h-4" />}
              >
                Save Changes
              </Button>
              <Button
                variant="cta"
                className="w-full"
                loading={isLoading("cta-download")}
                onClick={() => handleButtonClick("cta-download")}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download Now
              </Button>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Secondary Actions</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                loading={isLoading("outline-edit")}
                onClick={() => handleButtonClick("outline-edit")}
                leftIcon={<Edit className="w-4 h-4" />}
              >
                Edit Profile
              </Button>
              <Button
                variant="outline"
                appearance="ghost"
                className="w-full"
                loading={isLoading("ghost-cancel")}
                onClick={() => handleButtonClick("ghost-cancel")}
              >
                Cancel Action
              </Button>
            </div>
          </div>

          {/* Destructive Actions */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Destructive Actions</h4>
            <div className="space-y-3">
              <Button
                variant="destructive"
                className="w-full"
                loading={isLoading("destructive-delete")}
                onClick={() => handleButtonClick("destructive-delete")}
                leftIcon={<Trash2 className="w-4 h-4" />}
              >
                Delete Item
              </Button>
              <Button
                variant="destructive"
                appearance="ghost"
                className="w-full"
                loading={isLoading("destructive-ghost-remove")}
                onClick={() => handleButtonClick("destructive-ghost-remove")}
              >
                Remove Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
