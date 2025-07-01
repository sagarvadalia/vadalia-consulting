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

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Digital Transformation for Fortune 500 Retailer",
      client: "Major Retail Chain",
      industry: "Retail",
      challenge:
        "Legacy systems causing operational inefficiencies and poor customer experience",
      solution:
        "Comprehensive digital transformation including cloud migration, process automation, and customer experience redesign",
      results: [
        "40% reduction in operational costs",
        "60% improvement in customer satisfaction",
        "25% increase in online sales conversion",
        "80% faster order processing time",
      ],
      timeline: "8 months",
      featured: true,
    },
    {
      title: "Strategic Restructuring for Manufacturing Company",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge:
        "Declining profitability and market competitiveness in changing industry landscape",
      solution:
        "Strategic restructuring, operational optimization, and market repositioning strategy",
      results: [
        "35% improvement in profit margins",
        "50% reduction in production waste",
        "New market entry generating $50M revenue",
        "15% workforce productivity increase",
      ],
      timeline: "12 months",
      featured: false,
    },
    {
      title: "Technology Integration for Healthcare System",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge:
        "Fragmented systems leading to poor patient outcomes and regulatory compliance issues",
      solution:
        "EHR implementation, workflow optimization, and staff training programs",
      results: [
        "30% reduction in patient wait times",
        "95% regulatory compliance achievement",
        "20% improvement in patient satisfaction",
        "$2M annual cost savings",
      ],
      timeline: "6 months",
      featured: false,
    },
    {
      title: "Growth Strategy for Financial Services Startup",
      client: "FinTech Startup",
      industry: "Financial Services",
      challenge:
        "Scaling challenges and need for sustainable growth strategy in competitive market",
      solution:
        "Market analysis, growth strategy development, operational scaling, and funding preparation",
      results: [
        "300% user base growth",
        "Successfully raised $15M Series A",
        "Expanded to 5 new markets",
        "Achieved break-even 6 months ahead of plan",
      ],
      timeline: "10 months",
      featured: true,
    },
  ];

  const metrics = [
    { label: "Projects Completed", value: "150+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Average ROI", value: "250%" },
    { label: "Years Experience", value: "15+" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Case Studies
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real results for real businesses. See how we've helped organizations
          achieve their goals.
        </p>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
        {metrics.map((metric, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="mb-12" />

      {/* Case Studies */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {caseStudies.map((study, index) => (
          <Card key={index} className={study.featured ? "border-primary" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{study.industry}</Badge>
                    <span className="text-sm text-muted-foreground">
                      • {study.timeline}
                    </span>
                    {study.featured && <Badge>Featured</Badge>}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Results
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  View Full Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Create Your Success Story?</CardTitle>
            <CardDescription>
              Let's discuss how we can help your organization achieve similar
              results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Every successful project starts with understanding your unique
                challenges. Schedule a free consultation to explore
                possibilities.
              </p>
              <Button className="w-full">Schedule Free Consultation</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
