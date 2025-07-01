import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Strategy Consulting",
      description:
        "Strategic planning and business transformation to drive growth and competitive advantage",
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Business Transformation",
        "Growth Strategy",
      ],
      badge: "Popular",
    },
    {
      title: "Technology Solutions",
      description:
        "Digital transformation and technology implementation to modernize your operations",
      features: [
        "Digital Transformation",
        "System Integration",
        "Cloud Migration",
        "Process Automation",
      ],
      badge: "Featured",
    },
    {
      title: "Process Optimization",
      description:
        "Streamline operations and improve efficiency through proven methodologies",
      features: [
        "Operational Excellence",
        "Workflow Optimization",
        "Quality Management",
        "Performance Metrics",
      ],
      badge: "New",
    },
    {
      title: "Change Management",
      description:
        "Guide your organization through successful transformations and cultural shifts",
      features: [
        "Change Strategy",
        "Training Programs",
        "Communication Plans",
        "Leadership Development",
      ],
      badge: "",
    },
    {
      title: "Data Analytics",
      description:
        "Leverage data insights to drive informed decision-making and business intelligence",
      features: [
        "Data Strategy",
        "Analytics Implementation",
        "Reporting Dashboards",
        "Predictive Modeling",
      ],
      badge: "",
    },
    {
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate risks to protect and enhance business value",
      features: [
        "Risk Assessment",
        "Compliance Management",
        "Business Continuity",
        "Security Consulting",
      ],
      badge: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive consulting solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{service.title}</CardTitle>
                {service.badge && (
                  <Badge
                    variant={
                      service.badge === "Popular" ? "default" : "secondary"
                    }
                  >
                    {service.badge}
                  </Badge>
                )}
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-2 mb-6 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
