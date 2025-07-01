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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Getting Started",
      badge: "Popular",
      questions: [
        {
          question:
            "How do I know if my organization needs consulting services?",
          answer:
            "Common indicators include: struggling to meet growth targets, operational inefficiencies, technology challenges, regulatory compliance issues, or planning major transformations. Our free consultation can help assess if consulting services would benefit your organization.",
        },
        {
          question: "What's the typical project timeline?",
          answer:
            "Project timelines vary based on scope and complexity. Discovery phases typically take 2-4 weeks, strategic planning 3-6 weeks, implementation 8-24 weeks, and optimization 4-12 weeks. We provide detailed timelines during the planning phase and maintain agile approaches to adapt as needed.",
        },
        {
          question:
            "Do you work with small businesses or only large enterprises?",
          answer:
            "We work with organizations of all sizes, from startups to Fortune 500 companies. Our approach and pricing models are scalable to match your organization's size, budget, and needs. We believe every business deserves access to expert consulting services.",
        },
        {
          question: "What information do you need to get started?",
          answer:
            "Initially, we need a high-level understanding of your challenges, goals, and current situation. During discovery, we'll gather detailed information about your processes, systems, team structure, and specific pain points. We handle all information with strict confidentiality.",
        },
      ],
    },
    {
      category: "Pricing & Engagement",
      badge: "Important",
      questions: [
        {
          question: "How do you structure your pricing?",
          answer:
            "We offer several pricing models: fixed-price projects for well-defined scopes, time-and-materials for flexible engagements, retainer arrangements for ongoing support, and success-based pricing for specific outcomes. Pricing depends on project complexity, duration, and team size required.",
        },
        {
          question: "Do you offer free consultations?",
          answer:
            "Yes, we provide complimentary initial consultations (typically 1-2 hours) to understand your needs, discuss potential solutions, and determine if we're a good fit. This includes a high-level assessment and preliminary recommendations at no cost.",
        },
        {
          question: "What's included in your project pricing?",
          answer:
            "Our pricing typically includes: expert consultant time, project management, documentation and deliverables, progress reporting, stakeholder meetings, and basic training. Additional costs may apply for specialized software, third-party tools, or extensive travel requirements.",
        },
        {
          question: "Do you offer payment plans or flexible terms?",
          answer:
            "Yes, we offer flexible payment arrangements including milestone-based payments, monthly retainers, and extended payment terms for qualified clients. We work with you to find a payment structure that aligns with your cash flow and project timeline.",
        },
      ],
    },
    {
      category: "Project Process",
      badge: "Process",
      questions: [
        {
          question: "How do you ensure project success?",
          answer:
            "We follow a proven four-phase methodology with regular checkpoints, stakeholder feedback loops, and continuous monitoring. We establish clear success metrics upfront, maintain transparent communication, and adapt our approach based on feedback and changing requirements.",
        },
        {
          question: "What level of involvement is required from our team?",
          answer:
            "Successful projects require active collaboration. We typically need: executive sponsorship, dedicated project stakeholders (2-8 hours/week), subject matter experts for interviews and testing, and end-users for feedback. We work around your team's schedule and availability.",
        },
        {
          question: "How do you handle change requests during a project?",
          answer:
            "We use an agile approach that accommodates reasonable changes. Minor adjustments are typically included, while major scope changes are evaluated for impact on timeline and budget. We maintain a formal change request process to ensure transparency and alignment.",
        },
        {
          question: "What happens if we're not satisfied with the results?",
          answer:
            "Client satisfaction is our priority. We have milestone reviews and regular feedback sessions to address concerns early. If issues arise, we work collaboratively to resolve them. Our track record shows 98% client satisfaction, and we stand behind our work with appropriate guarantees.",
        },
      ],
    },
    {
      category: "Technical & Implementation",
      badge: "Technical",
      questions: [
        {
          question: "Do you work with our existing technology stack?",
          answer:
            "Yes, we work with virtually all technology platforms and can integrate with your existing systems. Our team has experience across cloud platforms (AWS, Azure, Google Cloud), enterprise software, databases, and custom applications. We assess your current stack during discovery.",
        },
        {
          question: "How do you ensure data security and confidentiality?",
          answer:
            "We maintain strict security protocols including signed NDAs, secure communication channels, data encryption, access controls, and compliance with industry standards (SOC 2, GDPR, HIPAA as applicable). All team members undergo security training and background checks.",
        },
        {
          question: "Do you provide training for our staff?",
          answer:
            "Yes, knowledge transfer and training are integral parts of our methodology. We provide user training, administrator training, documentation, best practices guides, and ongoing support to ensure your team can effectively use and maintain implemented solutions.",
        },
        {
          question:
            "What ongoing support do you provide after project completion?",
          answer:
            "We offer various post-implementation support options: warranty periods for bug fixes, maintenance retainers for ongoing optimization, training refreshers, periodic health checks, and emergency support. Support levels can be customized based on your needs.",
        },
      ],
    },
  ];

  const quickAnswers = [
    {
      question: "How quickly can you start?",
      answer: "Typically within 1-2 weeks of signed agreement",
    },
    {
      question: "Do you work remotely?",
      answer: "Yes, hybrid and fully remote engagements available",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Healthcare, Financial Services, Manufacturing, Retail, Government, and more",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we maintain strict confidentiality for all clients",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about our consulting services,
          process, and engagement models.
        </p>
      </div>

      {/* Quick Answers */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Quick Answers
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {quickAnswers.map((qa, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">
                    {qa.question}
                  </h4>
                  <p className="text-sm text-muted-foreground">{qa.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Detailed FAQ by Category */}
      <div className="max-w-4xl mx-auto">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {category.category}
              </h2>
              <Badge
                variant={category.badge === "Popular" ? "default" : "secondary"}
              >
                {category.badge}
              </Badge>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {category.questions.map((faq, faqIndex) => (
                <AccordionItem
                  key={faqIndex}
                  value={`${categoryIndex}-${faqIndex}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
            <CardDescription>
              We're here to help! Get personalized answers to your specific
              questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our team is ready to address any questions not covered here and
              discuss how our services can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">Schedule a Call</Button>
              <Button variant="outline" className="flex-1">
                Email Your Questions
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-foreground">Response Time</div>
                <div className="text-muted-foreground">Within 24 hours</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Consultation</div>
                <div className="text-muted-foreground">Always free</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
