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

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Vadalia Consulting transformed our entire digital infrastructure. Their strategic approach and technical expertise delivered results beyond our expectations. The 40% cost reduction and improved customer satisfaction speak for themselves.",
      author: "Jennifer Martinez",
      title: "Chief Operating Officer",
      company: "Fortune 500 Retail Chain",
      industry: "Retail",
      project: "Digital Transformation",
      results: [
        "40% cost reduction",
        "60% improved customer satisfaction",
        "25% sales increase",
      ],
      featured: true,
    },
    {
      quote:
        "The team's deep understanding of manufacturing processes and their innovative approach to Industry 4.0 implementation helped us achieve unprecedented efficiency gains. Our profit margins improved by 35% within the first year.",
      author: "Robert Chen",
      title: "Vice President of Operations",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      project: "Strategic Restructuring",
      results: [
        "35% profit improvement",
        "50% waste reduction",
        "$50M new revenue",
      ],
      featured: true,
    },
    {
      quote:
        "Working with Vadalia was a game-changer for our startup. Their growth strategy and funding preparation expertise helped us successfully raise our Series A and expand to new markets ahead of schedule.",
      author: "Sarah Kim",
      title: "CEO & Founder",
      company: "FinTech Startup",
      industry: "Financial Services",
      project: "Growth Strategy",
      results: ["300% user growth", "$15M Series A raised", "5 new markets"],
      featured: false,
    },
    {
      quote:
        "The healthcare expertise and regulatory knowledge they brought to our EHR implementation was invaluable. Patient wait times decreased by 30% and we achieved full compliance ahead of deadline.",
      author: "Dr. Michael Thompson",
      title: "Chief Medical Officer",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      project: "Technology Integration",
      results: [
        "30% faster patient processing",
        "95% compliance",
        "$2M cost savings",
      ],
      featured: false,
    },
    {
      quote:
        "Their methodology is thorough and their communication is exceptional. Every milestone was met on time and the knowledge transfer ensured our team could maintain the improvements long-term.",
      author: "Lisa Rodriguez",
      title: "Director of IT",
      company: "Municipal Government",
      industry: "Government",
      project: "Digital Services",
      results: [
        "100% on-time delivery",
        "Seamless knowledge transfer",
        "Long-term sustainability",
      ],
      featured: false,
    },
    {
      quote:
        "Vadalia's cross-industry experience brought fresh perspectives to our challenges. Their data-driven approach and innovative solutions positioned us as leaders in our market segment.",
      author: "David Park",
      title: "President",
      company: "Technology Solutions Provider",
      industry: "Technology",
      project: "Market Positioning",
      results: [
        "Market leadership position",
        "Innovative solution delivery",
        "Competitive advantage",
      ],
      featured: false,
    },
  ];

  const clientLogos = [
    "Fortune 500 Retail Chain",
    "Global Manufacturing Corp",
    "Regional Healthcare Network",
    "Municipal Government",
    "FinTech Startup",
    "Technology Solutions Provider",
    "International Bank",
    "Pharmaceutical Company",
  ];

  const stats = [
    { label: "Client Satisfaction", value: "98%" },
    { label: "Repeat Clients", value: "85%" },
    { label: "Referral Rate", value: "75%" },
    { label: "NPS Score", value: "72" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Client Testimonials
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from our clients about their experience working with Vadalia
          Consulting and the results we've achieved together.
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

      {/* Featured Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Featured Client Stories
        </h2>
        <div className="space-y-8 max-w-6xl mx-auto">
          {testimonials
            .filter((t) => t.featured)
            .map((testimonial, index) => (
              <Card key={index} className="border-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <Badge className="mb-3">Featured</Badge>
                      <blockquote className="text-lg text-foreground italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {testimonial.industry}
                          </Badge>
                          <Badge variant="secondary">
                            {testimonial.project}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Results Achieved
                    </h4>
                    <div className="grid md:grid-cols-3 gap-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* All Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          More Client Feedback
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials
            .filter((t) => !t.featured)
            .map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <blockquote className="text-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Results
                    </h4>
                    <div className="space-y-1">
                      {testimonial.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center text-xs"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Client Logos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Trusted by Leading Organizations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clientLogos.map((client, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-muted-foreground">
                  {client}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Join Our Success Stories</CardTitle>
            <CardDescription>
              Ready to achieve similar results for your organization?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Let's discuss how we can help your organization achieve its goals
              and join our growing list of satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">Start Your Success Story</Button>
              <Button variant="outline" className="flex-1">
                View Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
