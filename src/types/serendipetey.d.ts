// src/types/serendipetey.d.ts
// Type declarations for @serendipetey packages

declare module "@serendipetey/components" {
  import { ReactNode, ComponentPropsWithoutRef } from "react";

  export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?:
      | "primary"
      | "outline"
      | "cta"
      | "success"
      | "warning"
      | "destructive"
      | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    loading?: boolean;
    children?: ReactNode;
  }

  export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label?: string;
    labelState?: "required" | "optional";
    hintText?: string;
    error?: string;
    success?: string;
    warning?: string;
    variant?: "default" | "error" | "success" | "warning";
  }

  export const Button: React.FC<ButtonProps>;
  export const Input: React.FC<InputProps>;

  // Export all other components as any for now
  export const SidebarMenu: React.FC<any>;
  export const SidebarBusinessLogo: React.FC<any>;
  export const SidebarMenuItem: React.FC<any>;
  export const SidebarProfile: React.FC<any>;
  export const SidebarNavigation: React.FC<any>;

  // Add more component types as needed
}

declare module "@serendipetey/design-tokens/dist/css/index.css" {
  const content: any;
  export default content;
}

declare module "@serendipetey/design-tokens" {
  const tokens: any;
  export default tokens;
}
