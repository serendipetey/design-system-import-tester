import React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSection,
  SidebarProfile,
  SidebarBusinessLogo,
  SidebarToggle,
  createNavigationSection,
  createNavigationItem,
  useNavigationState,
  type NavigationConfig,
  type SidebarProfileData,
} from "@serendipetey/components";

const mockProfileData: SidebarProfileData = {
  contact: {
    name: "John Doe",
    role: "Product Manager",
  },
  entity: {
    name: "Acme Corp",
    id: "acme-001",
  },
};

const mockNavigationConfig: NavigationConfig = {
  sections: [
    createNavigationSection("main", "Main Navigation", [
      createNavigationItem("dashboard", "Dashboard", "/dashboard"),
      createNavigationItem("projects", "Projects", "/projects"),
    ]),
    createNavigationSection("settings", "Settings", [
      createNavigationItem("preferences", "Preferences", "/preferences"),
    ]),
  ],
};

export function NavigationComponentsPage() {
  const navigationState = useNavigationState(
    mockNavigationConfig,
    "/dashboard"
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Navigation Components</h2>
        <p className="text-gray-600 mb-6">
          Testing navigation components from the design system
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-3">Sidebar Toggle</h3>
          <SidebarToggle
            open={true}
            onToggle={() => console.log("Toggle sidebar")}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Business Logo</h3>
          <SidebarBusinessLogo
            logoUrl="https://via.placeholder.com/120x40"
            businessName="Design System Demo"
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Profile Component</h3>
          <SidebarProfile user={mockProfileData} />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Navigation Menu</h3>
          <div className="border rounded-lg p-4 max-w-xs">
            <SidebarMenu>
              <div>Menu content goes here</div>
            </SidebarMenu>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Individual Menu Items</h3>
          <div className="space-y-2 max-w-xs">
            <SidebarMenuItem active={false}>Example Item 1</SidebarMenuItem>
            <SidebarMenuItem active={true}>Active Item</SidebarMenuItem>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Menu Section</h3>
          <div className="border rounded-lg p-4 max-w-xs">
            <SidebarMenuSection title="Demo Section">
              <div>Section content</div>
            </SidebarMenuSection>
          </div>
        </section>
      </div>
    </div>
  );
}
