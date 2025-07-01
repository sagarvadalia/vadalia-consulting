import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Button
            variant="ghost"
            asChild
            className="text-xl font-bold p-0 hover:bg-transparent"
          >
            <Link to="/">Vadalia Consulting</Link>
          </Button>

          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink
                      asChild
                      active={isActive(item.path)}
                      className={cn(
                        "text-muted-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-md",
                        isActive(item.path) && "text-primary bg-accent"
                      )}
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
