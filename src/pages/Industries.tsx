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

export default function Industries() {
  const industries = [
    {
      name: "Healthcare & Life Sciences",
      description:
        "Digital transformation, regulatory compliance, and operational excellence for healthcare organizations",
      expertise: [
        "EHR Implementation & Optimization",
        "HIPAA Compliance & Security",
        "Patient Experience Enhancement",
        "Clinical Workflow Optimization",
        "Telehealth Platform Development",
        "Medical Device Integration",
      ],
      clients: [
        "Regional Health Networks",
        "Medical Device Companies",
        "Pharmaceutical Firms",
      ],
      caseStudy:
        "30% reduction in patient wait times for regional healthcare network",
      featured: true,
    },
    {
      name: "Financial Services",
      description:
        "Risk management, digital banking, and regulatory compliance solutions for financial institutions",
      expertise: [
        "Digital Banking Transformation",
        "Risk Management Systems",
        "Regulatory Compliance (SOX, GDPR)",
        "Fraud Detection & Prevention",
        "Customer Experience Platforms",
        "Blockchain & Cryptocurrency",
      ],
      clients: ["Regional Banks", "Credit Unions", "FinTech Startups"],
      caseStudy:
        "300% user growth for FinTech startup through strategic scaling",
      featured: true,
    },
    {
      name: "Manufacturing & Industrial",
      description:
        "Supply chain optimization, Industry 4.0 implementation, and operational transformation",
      expertise: [
        "Smart Manufacturing (Industry 4.0)",
        "Supply Chain Optimization",
        "Quality Management Systems",
        "Predictive Maintenance",
        "Lean Manufacturing",
        "Sustainability Initiatives",
      ],
      clients: [
        "Global Manufacturers",
        "Automotive Suppliers",
        "Industrial Equipment",
      ],
      caseStudy:
        "35% profit margin improvement through strategic restructuring",
      featured: false,
    },
    {
      name: "Retail & E-commerce",
      description:
        "Omnichannel experiences, inventory optimization, and customer analytics for retail leaders",
      expertise: [
        "Omnichannel Strategy",
        "Inventory Management Systems",
        "Customer Analytics & Personalization",
        "E-commerce Platform Development",
        "Point-of-Sale Integration",
        "Supply Chain Visibility",
      ],
      clients: [
        "Fortune 500 Retailers",
        "E-commerce Platforms",
        "Specialty Retailers",
      ],
      caseStudy: "40% operational cost reduction for Fortune 500 retailer",
      featured: false,
    },
    {
      name: "Technology & Software",
      description:
        "Scaling strategies, product development, and go-to-market optimization for tech companies",
      expertise: [
        "Product Development Strategy",
        "Go-to-Market Planning",
        "Technical Architecture Review",
        "DevOps & CI/CD Implementation",
        "Cloud Migration Strategy",
        "Data Architecture & Analytics",
      ],
      clients: ["SaaS Companies", "Enterprise Software", "Tech Startups"],
      caseStudy: "Successfully guided Series A funding preparation",
      featured: false,
    },
    {
      name: "Government & Public Sector",
      description:
        "Digital government initiatives, citizen services, and administrative modernization",
      expertise: [
        "Digital Government Services",
        "Citizen Experience Platforms",
        "Administrative Process Automation",
        "Cybersecurity & Compliance",
        "Data Governance & Privacy",
        "Interagency Integration",
      ],
      clients: [
        "Municipal Governments",
        "State Agencies",
        "Federal Contractors",
      ],
      caseStudy: "95% compliance achievement for government agency",
      featured: false,
    },
  ];

  const stats = [
    { label: "Industries Served", value: "15+" },
    { label: "Cross-Industry Projects", value: "85%" },
    { label: "Industry Certifications", value: "25+" },
    { label: "Sector Expertise Years", value: "50+" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Industries We Serve
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Deep domain expertise across key industries, delivering solutions that
          understand your unique challenges and regulatory requirements.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="mb-12" />

      {/* Industries Grid */}
      <div className="space-y-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <Card
            key={index}
            className={industry.featured ? "border-primary" : ""}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  {industry.featured && <Badge>Featured Expertise</Badge>}
                  <CardDescription>{industry.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Our Expertise
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {industry.expertise.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Recent Success
                    </h4>
                    <p className="text-sm text-muted-foreground italic">
                      "{industry.caseStudy}"
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Client Types
                    </h4>
                    <div className="space-y-2">
                      {industry.clients.map((client, clientIndex) => (
                        <Badge
                          key={clientIndex}
                          variant="outline"
                          className="mr-2 mb-2"
                        >
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View {industry.name} Solutions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Don't See Your Industry?</CardTitle>
            <CardDescription>
              We work across many sectors and adapt our expertise to your unique
              needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our cross-industry experience allows us to bring fresh
              perspectives and proven methodologies to any sector. Let's discuss
              your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">Discuss Your Industry</Button>
              <Button variant="outline" className="flex-1">
                View All Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
