import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Methodology() {
  const phases = [
    {
      phase: "1",
      title: "Discovery & Assessment",
      duration: "2-4 weeks",
      description:
        "Deep dive into your current state, challenges, and objectives",
      activities: [
        "Stakeholder interviews and workshops",
        "Current state analysis and documentation",
        "Gap identification and prioritization",
        "Goal setting and success metrics definition",
        "Risk assessment and mitigation planning",
      ],
      deliverables: [
        "Current State Assessment Report",
        "Gap Analysis & Recommendations",
        "Project Charter & Roadmap",
      ],
    },
    {
      phase: "2",
      title: "Strategy & Planning",
      duration: "3-6 weeks",
      description:
        "Develop comprehensive solution strategy and detailed implementation plan",
      activities: [
        "Solution design and architecture",
        "Implementation strategy development",
        "Resource planning and allocation",
        "Timeline and milestone definition",
        "Change management strategy creation",
      ],
      deliverables: [
        "Solution Architecture Document",
        "Implementation Plan & Timeline",
        "Change Management Strategy",
      ],
    },
    {
      phase: "3",
      title: "Implementation & Execution",
      duration: "8-24 weeks",
      description:
        "Execute the solution with continuous monitoring and adjustment",
      activities: [
        "Agile implementation methodology",
        "Regular sprint reviews and adjustments",
        "Stakeholder communication and updates",
        "Quality assurance and testing",
        "Team training and knowledge transfer",
      ],
      deliverables: [
        "Implemented Solution",
        "Training Materials & Documentation",
        "Quality Assurance Reports",
      ],
    },
    {
      phase: "4",
      title: "Optimization & Support",
      duration: "4-12 weeks",
      description: "Fine-tune performance and ensure sustainable success",
      activities: [
        "Performance monitoring and analysis",
        "Process optimization and refinement",
        "User feedback collection and integration",
        "Success metrics tracking",
        "Ongoing support and maintenance",
      ],
      deliverables: [
        "Performance Analytics Dashboard",
        "Optimization Recommendations",
        "Success Metrics Report",
      ],
    },
  ];

  const principles = [
    {
      title: "Client-Centric Approach",
      description:
        "Every solution is tailored to your unique business context and goals",
      icon: "🎯",
    },
    {
      title: "Agile Methodology",
      description:
        "Iterative approach with regular feedback and continuous improvement",
      icon: "🔄",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Evidence-based recommendations supported by comprehensive analysis",
      icon: "📊",
    },
    {
      title: "Knowledge Transfer",
      description:
        "Empowering your team with skills and knowledge for long-term success",
      icon: "🎓",
    },
    {
      title: "Sustainable Results",
      description:
        "Solutions designed for long-term value and continuous improvement",
      icon: "🌱",
    },
    {
      title: "Transparent Communication",
      description:
        "Regular updates, clear documentation, and open dialogue throughout",
      icon: "💬",
    },
  ];

  const frameworks = [
    {
      name: "LEAN Six Sigma",
      description: "Process improvement and waste elimination",
      applications: [
        "Operational Excellence",
        "Quality Management",
        "Cost Reduction",
      ],
    },
    {
      name: "Agile & Scrum",
      description: "Iterative project management and delivery",
      applications: [
        "Technology Implementation",
        "Change Management",
        "Product Development",
      ],
    },
    {
      name: "Design Thinking",
      description: "Human-centered problem solving approach",
      applications: [
        "User Experience",
        "Innovation Projects",
        "Process Redesign",
      ],
    },
    {
      name: "TOGAF",
      description: "Enterprise architecture framework",
      applications: [
        "Technology Strategy",
        "System Integration",
        "Digital Transformation",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Our Methodology
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A proven, systematic approach that delivers consistent results across
          industries and project types.
        </p>
      </div>

      {/* Core Principles */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Core Principles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-3xl mb-2">{principle.icon}</div>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Four-Phase Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Our Four-Phase Process
        </h2>
        <div className="space-y-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Activities
                    </h4>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {phase.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <Badge
                            key={deliverableIndex}
                            variant="secondary"
                            className="mr-2 mb-2"
                          >
                            {deliverable}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Frameworks & Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Frameworks & Methodologies
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {frameworks.map((framework, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{framework.name}</CardTitle>
                <CardDescription>{framework.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.applications.map((app, appIndex) => (
                      <Badge
                        key={appIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mb-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Success Metrics & KPIs</CardTitle>
            <CardDescription>
              We measure success through tangible business outcomes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Project Success Rate
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">
                  On-Time Delivery
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">250%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Experience Our Methodology?</CardTitle>
            <CardDescription>
              Let's discuss how our proven approach can drive results for your
              organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Schedule a consultation to see how our methodology aligns with
              your project goals and timeline requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">Schedule Consultation</Button>
              <Button variant="outline" className="flex-1">
                Download Process Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
