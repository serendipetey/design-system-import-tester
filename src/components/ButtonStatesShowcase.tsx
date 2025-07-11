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
            Complete visual reference showing all button variants in their
            different states
          </p>
        </div>

        {/* Three-column layout matching your screenshot */}
        <div className="grid grid-cols-3 gap-8">
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
              <Button variant="outline" appearance="ghost" className="w-full">
                Ghost Button
              </Button>
              <Button variant="destructive" className="w-full">
                Destructive Button
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
              <Button
                variant="outline"
                appearance="ghost"
                disabled
                className="w-full"
              >
                Ghost Button
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
              <Button
                variant="outline"
                appearance="ghost"
                loading
                className="w-full"
              >
                Ghost Button
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

          <div className="grid grid-cols-3 gap-8">
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
                  variant="outline"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                  aria-label="Download"
                />
                <Button
                  variant="destructive"
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
                  variant="outline"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                  aria-label="Download"
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
                  variant="outline"
                  appearance="ghost"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                  aria-label="Download"
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

      {/* Section 2: Interactive Loading Demo */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Interactive Loading Demo
          </h3>
          <p className="text-gray-600 mb-4">
            Click any button below to see it transition to loading state for 3
            seconds
          </p>
          <div className="flex items-center gap-4">
            <div className="text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-md">
              💡 <strong>Try it:</strong> Click multiple buttons to see
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
                Cancel
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
                Delete Account
              </Button>
            </div>
          </div>
        </div>

        {/* Icon-only interactive section */}
        <div className="mt-8 pt-6 border-t">
          <h4 className="font-medium text-gray-700 mb-4">
            Interactive Icon-Only Buttons
          </h4>
          <div className="flex justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Edit className="w-4 h-4" />}
              aria-label="Edit item"
              loading={isLoading("icon-edit")}
              onClick={() => handleButtonClick("icon-edit")}
            />
            <Button
              variant="outline"
              size="md"
              leftIcon={<Plus className="w-4 h-4" />}
              aria-label="Add item"
              loading={isLoading("icon-add")}
              onClick={() => handleButtonClick("icon-add")}
            />
            <Button
              variant="outline"
              appearance="ghost"
              size="md"
              leftIcon={<Download className="w-4 h-4" />}
              aria-label="Download"
              loading={isLoading("icon-download")}
              onClick={() => handleButtonClick("icon-download")}
            />
            <Button
              variant="destructive"
              size="md"
              leftIcon={<Trash2 className="w-4 h-4" />}
              aria-label="Delete item"
              loading={isLoading("icon-delete")}
              onClick={() => handleButtonClick("icon-delete")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
