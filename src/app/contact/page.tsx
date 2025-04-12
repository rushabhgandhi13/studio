
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-foreground mb-8">
          We would love to hear from you! Please fill out the form below or use the contact information provided to get in touch with us.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                  <Input type="text" id="name" placeholder="Your Name" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <Input type="email" id="email" placeholder="Your Email" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" placeholder="Your Message" className="mt-1" />
                </div>
                <Button className="bg-accent text-background hover:bg-accent-foreground">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary mb-4">Contact Information</h2>
          <p className="text-lg text-foreground mb-2">Address: 123 AI Innovation Street, Tech City, USA</p>
          <p className="text-lg text-foreground mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg text-foreground mb-2">Email: info@thinknexus.com</p>
          <div className="h-64 w-full bg-gray-200 rounded-md">
            {/* Placeholder for Map Integration */}
            </div>
        </div>
      </div>
    </div>
  );
}
