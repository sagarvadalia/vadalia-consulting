import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Welcome to Vadalia Consulting
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner for business solutions and consulting services.
        </p>
      </div>

      <Separator className="mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Badge variant="secondary">Strategy</Badge>
            </CardTitle>
            <CardDescription>
              Strategic Planning & Business Transformation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              We help organizations develop comprehensive strategies that drive
              sustainable growth and competitive advantage.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Badge variant="secondary">Technology</Badge>
            </CardTitle>
            <CardDescription>Digital Solutions & Innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Modern technology implementations that streamline operations and
              enhance business capabilities.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Badge variant="secondary">Excellence</Badge>
            </CardTitle>
            <CardDescription>Process Optimization & Quality</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Proven methodologies to optimize operations and improve efficiency
              across your organization.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
