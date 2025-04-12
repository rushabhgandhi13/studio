
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Thinknexus</h1>
        <p className="text-lg text-foreground mb-8">
          We are Thinknexus, an AI-powered product development and software outsourcing company.
          Our mission is to transform ideas into reality through cutting-edge technology and innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>Our guiding principle</CardDescription>
            </CardHeader>
            <CardContent>
              To empower businesses with AI-driven solutions, creating value and driving growth through innovation.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
              <CardDescription>Where we aspire to be</CardDescription>
            </CardHeader>
            <CardContent>
              To be a global leader in AI-powered product development, recognized for our innovation, quality, and client success.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
              <CardDescription>What drives us</CardDescription>
            </CardHeader>
            <CardContent>
              Innovation, Quality, Collaboration, Client Focus, and Integrity.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Ready to transform your ideas?</h2>
        <p className="text-foreground mb-8">
          Contact us today to learn how Thinknexus can help you leverage the power of AI for your next project.
        </p>
        <Button className="bg-accent text-background hover:bg-accent-foreground">Get in Touch</Button>
      </section>
    </div>
  );
}
