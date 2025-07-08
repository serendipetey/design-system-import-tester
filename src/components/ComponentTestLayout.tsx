// src/components/ComponentTestLayout.tsx
import { useState } from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  createNavigationSection,
  createNavigationItem,
  useNavigationState,
  type NavigationConfig,
} from "@serendipetey/components";

interface ComponentTestLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function ComponentTestLayout({
  children,
  currentPage,
  onPageChange,
}: ComponentTestLayoutProps) {
  const navigationConfig: NavigationConfig = {
    sections: [
      createNavigationSection({
        id: "components",
        title: "Component Tests",
        items: [
          createNavigationItem({
            id: "form",
            label: "Form Components",
            href: "/form",
            icon: "📝",
          }),
          createNavigationItem({
            id: "data",
            label: "Data Components",
            href: "/data",
            icon: "📊",
          }),
          createNavigationItem({
            id: "navigation",
            label: "Navigation Components",
            href: "/navigation",
            icon: "🧭",
          }),
        ],
      }),
    ],
  };

  const { activeItemId, expandedSections, toggleSection, isSectionExpanded } =
    useNavigationState(navigationConfig, currentPage);

  const handleItemClick = (href: string, id: string) => {
    const pageMap: Record<string, string> = {
      "/form": "form",
      "/data": "data",
      "/navigation": "navigation",
    };
    onPageChange(pageMap[href] || "form");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Component Tests
          </h2>
          <p className="text-sm text-gray-600">Design System Validation</p>
        </div>

        <div className="p-4">
          <SidebarMenu
            navigationConfig={navigationConfig}
            currentPath={`/${currentPage}`}
            onItemClick={handleItemClick}
            expandedSections={expandedSections}
            onToggleSection={toggleSection}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
