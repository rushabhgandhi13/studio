
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alice Johnson",
    title: "CEO",
    bio: "Visionary leader with a passion for innovation and technology.",
    imageUrl: "https://picsum.photos/id/1005/400/400",
  },
  {
    name: "Bob Williams",
    title: "CTO",
    bio: "Expert in AI and software development, driving our technology strategy.",
    imageUrl: "https://picsum.photos/id/1011/400/400",
  },
  {
    name: "Charlie Brown",
    title: "Lead Developer",
    bio: "Dedicated developer with a commitment to writing clean, efficient code.",
    imageUrl: "https://picsum.photos/id/1024/400/400",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">About Thinknexus</h1>
        <p className="text-lg text-foreground mb-8">
          Thinknexus was founded in 2015 with the goal of providing cutting-edge AI solutions and software outsourcing services.
          We are dedicated to helping businesses transform their ideas into reality through innovative technology and exceptional service.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={member.imageUrl} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                <p className="text-sm text-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Philosophy</h2>
        <p className="text-lg text-foreground">
          At Thinknexus, we believe in the power of collaboration, innovation, and continuous improvement.
          We are committed to delivering high-quality solutions that exceed our clients' expectations and drive their success.
        </p>
      </section>
    </div>
  );
}
