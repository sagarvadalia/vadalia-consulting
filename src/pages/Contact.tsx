import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "contact@vadaliaconsulting.com",
      description: "Primary communication channel",
      badge: "Preferred",
    },
    {
      type: "Phone",
      value: "+1 (555) 123-4567",
      description: "Direct line for urgent matters",
      badge: "",
    },
    {
      type: "Address",
      value: "123 Business Avenue, Suite 456, City, State 12345",
      description: "Our main office location",
      badge: "",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Ready to transform your business? Let's start the conversation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose your preferred method of communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">
                        {method.type}
                      </h4>
                      {method.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {method.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {method.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                    {index < contactMethods.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>
                  When you can reach us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-foreground font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>
                  Ready to begin? Let's discuss your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Every successful project starts with understanding your unique
                  challenges and opportunities. Our initial consultation is
                  complimentary and helps us design the perfect solution for
                  your business.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">Schedule Free Consultation</Button>
                  <Button variant="outline" className="w-full">
                    Download Our Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Free initial consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      24/7 project support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Proven track record
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Custom solutions
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
