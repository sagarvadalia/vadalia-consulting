import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "../lib/utils";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ];

  const companyItems = [
    {
      path: "/case-studies",
      label: "Case Studies",
      description: "Real client success stories",
    },
    {
      path: "/team",
      label: "Our Team",
      description: "Meet our expert consultants",
    },
    {
      path: "/methodology",
      label: "Our Process",
      description: "How we deliver results",
    },
    {
      path: "/testimonials",
      label: "Testimonials",
      description: "What clients say about us",
    },
  ];

  const resourceItems = [
    {
      path: "/industries",
      label: "Industries",
      description: "Sectors we serve",
    },
    { path: "/faq", label: "FAQ", description: "Common questions answered" },
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
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Vadalia Consulting Logo"
                className="h-8 w-8"
                onError={(e) => {
                  // Fallback if logo doesn't exist yet
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>Vadalia Consulting</span>
            </Link>
          </Button>

          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Main navigation items */}
                {mainNavItems.map((item) => (
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

                {/* Company dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors font-medium",
                      companyItems.some((item) => isActive(item.path)) &&
                        "text-primary bg-accent"
                    )}
                  >
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-4">
                      {companyItems.map((item) => (
                        <NavigationMenuLink
                          key={item.path}
                          asChild
                          className={cn(
                            "block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive(item.path) &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          <Link to={item.path}>
                            <div className="text-sm font-medium leading-none">
                              {item.label}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors font-medium",
                      resourceItems.some((item) => isActive(item.path)) &&
                        "text-primary bg-accent"
                    )}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {resourceItems.map((item) => (
                        <NavigationMenuLink
                          key={item.path}
                          asChild
                          className={cn(
                            "block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive(item.path) &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          <Link to={item.path}>
                            <div className="text-sm font-medium leading-none">
                              {item.label}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={isActive("/contact")}
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-md",
                      isActive("/contact") && "text-primary bg-accent"
                    )}
                  >
                    <Link to="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
