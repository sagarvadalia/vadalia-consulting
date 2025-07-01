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

export default function Team() {
  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Founder & CEO",
      experience: "15+ years",
      specialties: [
        "Strategic Planning",
        "Digital Transformation",
        "Change Management",
      ],
      background:
        "Former McKinsey & Company Senior Partner with extensive experience in Fortune 500 transformations. MBA from Harvard Business School.",
      achievements: [
        "Led 50+ digital transformation projects",
        "Authored 'Digital Excellence' (Harvard Business Review)",
        "Speaker at major industry conferences",
      ],
      certifications: [
        "PMP",
        "Certified Change Management Professional",
        "Six Sigma Black Belt",
      ],
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      experience: "12+ years",
      specialties: [
        "Technology Strategy",
        "Cloud Architecture",
        "Data Analytics",
      ],
      background:
        "Former Google Engineering Director specializing in enterprise solutions and cloud migrations. MS Computer Science from Stanford.",
      achievements: [
        "Architected solutions for 100+ companies",
        "Patents in cloud computing and AI",
        "Recognized as Tech Innovator of the Year 2023",
      ],
      certifications: [
        "AWS Solutions Architect",
        "Google Cloud Professional",
        "Azure Expert",
      ],
    },
    {
      name: "Emily Rodriguez",
      title: "Director of Operations",
      experience: "10+ years",
      specialties: [
        "Process Optimization",
        "Project Management",
        "Quality Assurance",
      ],
      background:
        "Former Deloitte Principal with deep expertise in operational excellence and lean methodologies. MBA from Wharton.",
      achievements: [
        "Improved efficiency by 40% average across projects",
        "Certified Lean Six Sigma Master Black Belt",
        "Led teams of 50+ consultants",
      ],
      certifications: [
        "Lean Six Sigma Master Black Belt",
        "PMP",
        "Agile Certified Practitioner",
      ],
    },
  ];

  const consultants = [
    {
      name: "David Park",
      title: "Senior Strategy Consultant",
      specialties: ["Market Analysis", "Growth Strategy", "M&A Advisory"],
      experience: "8+ years",
    },
    {
      name: "Lisa Thompson",
      title: "Senior Technology Consultant",
      specialties: [
        "ERP Implementation",
        "System Integration",
        "Cybersecurity",
      ],
      experience: "7+ years",
    },
    {
      name: "James Wilson",
      title: "Change Management Specialist",
      specialties: [
        "Organizational Development",
        "Training Programs",
        "Culture Transformation",
      ],
      experience: "9+ years",
    },
    {
      name: "Maria Garcia",
      title: "Data Analytics Consultant",
      specialties: [
        "Business Intelligence",
        "Predictive Modeling",
        "Dashboard Development",
      ],
      experience: "6+ years",
    },
  ];

  const values = [
    {
      title: "Expertise",
      description: "Deep domain knowledge across industries and technologies",
    },
    {
      title: "Integrity",
      description: "Transparent communication and ethical business practices",
    },
    {
      title: "Results",
      description: "Focused on delivering measurable business outcomes",
    },
    {
      title: "Partnership",
      description: "Collaborative approach that empowers your team",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the experts behind your success. Our diverse team brings decades
          of experience from top consulting firms and technology companies.
        </p>
      </div>

      {/* Leadership Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Leadership Team
        </h2>
        <div className="space-y-8 max-w-6xl mx-auto">
          {leadership.map((leader, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <CardDescription className="text-lg">
                      {leader.title}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{leader.experience}</Badge>
                      {leader.specialties.slice(0, 2).map((specialty, i) => (
                        <Badge key={i} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{leader.background}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.certifications.map((cert, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Senior Consultants */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Senior Consultants
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {consultants.map((consultant, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{consultant.name}</CardTitle>
                <CardDescription>{consultant.title}</CardDescription>
                <Badge variant="secondary" className="w-fit">
                  {consultant.experience}
                </Badge>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Work with Our Expert Team</CardTitle>
            <CardDescription>
              Ready to leverage our expertise for your next project?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our team is ready to help you tackle your biggest challenges and
              achieve your most ambitious goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">Meet with Our Team</Button>
              <Button variant="outline" className="flex-1">
                View Our Expertise
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
