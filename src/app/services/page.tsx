
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "AI-Driven Product Development",
    description: "We leverage the latest AI technologies to create innovative products that solve real-world problems and drive business growth.",
    benefits: [
      "Innovative solutions",
      "Improved efficiency",
      "Data-driven decision making",
    ],
    applications: [
      "AI-powered analytics tools",
      "Machine learning models",
      "Intelligent automation systems",
    ],
  },
  {
    title: "Custom Software Solutions",
    description: "We design and develop custom software solutions tailored to your specific business needs, ensuring seamless integration and optimal performance.",
    benefits: [
      "Tailored solutions",
      "Seamless integration",
      "Scalable architecture",
    ],
    applications: [
      "Enterprise resource planning (ERP) systems",
      "Customer relationship management (CRM) software",
      "E-commerce platforms",
    ],
  },
  {
    title: "IT Consulting",
    description: "Our experienced IT consultants provide strategic guidance and support to help you optimize your technology infrastructure and achieve your business objectives.",
    benefits: [
      "Strategic guidance",
      "Optimized infrastructure",
      "Improved efficiency",
    ],
    applications: [
      "Technology roadmap planning",
      "Cloud migration strategy",
      "Cybersecurity assessments",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg text-foreground mb-8">
          Thinknexus offers a comprehensive range of AI-powered product development, custom software solutions, and IT consulting services.
          We are dedicated to helping businesses leverage the power of technology to achieve their goals and drive growth.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-primary mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-foreground mb-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-2">Applications</h3>
              <ul className="list-disc list-inside text-foreground">
                {service.applications.map((application, i) => (
                  <li key={i}>{application}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
