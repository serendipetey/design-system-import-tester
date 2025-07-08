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
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://via.placeholder.com/40",
};

const mockNavigationConfig: NavigationConfig = {
  sections: [
    createNavigationSection({
      id: "main",
      title: "Main Navigation",
      items: [
        createNavigationItem({
          id: "dashboard",
          label: "Dashboard",
          href: "/dashboard",
          icon: "home",
        }),
        createNavigationItem({
          id: "projects",
          label: "Projects",
          href: "/projects",
          icon: "folder",
        }),
      ],
    }),
    createNavigationSection({
      id: "settings",
      title: "Settings",
      items: [
        createNavigationItem({
          id: "preferences",
          label: "Preferences",
          href: "/preferences",
          icon: "settings",
        }),
      ],
    }),
  ],
};

export function NavigationComponentsPage() {
  const navigationState = useNavigationState(mockNavigationConfig);

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
            isOpen={true}
            onToggle={() => console.log("Toggle sidebar")}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Business Logo</h3>
          <SidebarBusinessLogo
            logoUrl="https://via.placeholder.com/120x40"
            companyName="Design System Demo"
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Profile Component</h3>
          <SidebarProfile data={mockProfileData} />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Navigation Menu</h3>
          <div className="border rounded-lg p-4 max-w-xs">
            <SidebarMenu config={mockNavigationConfig} />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Individual Menu Items</h3>
          <div className="space-y-2 max-w-xs">
            <SidebarMenuItem
              item={createNavigationItem({
                id: "example1",
                label: "Example Item 1",
                href: "/example1",
                icon: "star",
              })}
              isActive={false}
            />
            <SidebarMenuItem
              item={createNavigationItem({
                id: "example2",
                label: "Active Item",
                href: "/example2",
                icon: "check",
              })}
              isActive={true}
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Menu Section</h3>
          <div className="border rounded-lg p-4 max-w-xs">
            <SidebarMenuSection
              section={createNavigationSection({
                id: "demo-section",
                title: "Demo Section",
                items: [
                  createNavigationItem({
                    id: "item1",
                    label: "Item 1",
                    href: "/item1",
                    icon: "circle",
                  }),
                  createNavigationItem({
                    id: "item2",
                    label: "Item 2",
                    href: "/item2",
                    icon: "square",
                  }),
                ],
              })}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
