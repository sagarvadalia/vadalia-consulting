import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Dedicated to delivering exceptional results through expertise and
          innovation
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Empowering businesses to achieve their full potential
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Vadalia Consulting is a leading consulting firm dedicated to
              helping businesses achieve their goals through innovative
              solutions and expert guidance. We believe in building long-term
              partnerships that create lasting value.
            </p>
            <p className="text-foreground">
              With years of experience in the industry, our team brings deep
              expertise across various domains to deliver exceptional results
              for our clients.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge>Experience</Badge>
                Our Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Years of proven experience across multiple industries, helping
                organizations navigate complex challenges and capitalize on
                opportunities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge>Innovation</Badge>
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We combine traditional business wisdom with cutting-edge
                methodologies to deliver solutions that are both practical and
                forward-thinking.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Why Choose Vadalia Consulting?</CardTitle>
            <CardDescription>
              We deliver value that extends beyond individual projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Strategic Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Long-term thinking with immediate impact
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  Track record of successful transformations
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Expert Team</h4>
                <p className="text-sm text-muted-foreground">
                  Industry specialists with deep domain knowledge
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">
                  Partnership Approach
                </h4>
                <p className="text-sm text-muted-foreground">
                  Collaborative relationships built on trust
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
