import { SettingsProvider } from "layout/Settings/context";
import { SidebarProvider } from "layout/Sidebar/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </SidebarProvider>
  );
}
