'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {portfolioSummary} from '@/ai/flows/portfolio-summary';
import {useEffect, useState, useRef} from 'react';

interface PortfolioItem {
  title: string;
  projectDetails: string;
  technologiesUsed: string;
  clientTestimonials: string;
  successMetrics: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Healthcare Platform',
    projectDetails:
      'Developed an AI-powered platform to improve patient outcomes and reduce healthcare costs. The platform uses machine learning algorithms to analyze patient data and provide personalized treatment recommendations.',
    technologiesUsed: 'Python, TensorFlow, React, Node.js',
    clientTestimonials:
      'The AI-powered platform has significantly improved our patient outcomes and reduced our healthcare costs.',
    successMetrics: 'Improved patient outcomes by 30% and reduced healthcare costs by 20%.',
    imageUrl: 'https://picsum.photos/id/237/400/300',
  },
  {
    title: 'Smart City Transportation System',
    projectDetails:
      'Designed and implemented a smart city transportation system that uses AI to optimize traffic flow and reduce congestion. The system uses real-time data to adjust traffic signals and provide commuters with personalized route recommendations.',
    technologiesUsed: 'Java, Spring Boot, Angular, PostgreSQL',
    clientTestimonials:
      'The smart city transportation system has significantly reduced traffic congestion and improved the overall quality of life for our residents.',
    successMetrics: 'Reduced traffic congestion by 40% and improved commuter satisfaction by 25%.',
    imageUrl: 'https://picsum.photos/id/239/400/300',
  },
  {
    title: 'AI-Driven E-Commerce Recommendation Engine',
    projectDetails:
      'Developed an AI-driven recommendation engine to provide personalized product recommendations to e-commerce customers. The engine uses machine learning algorithms to analyze customer behavior and provide relevant product suggestions.',
    technologiesUsed: 'Python, scikit-learn, Flask, MongoDB',
    clientTestimonials:
      'The AI-driven recommendation engine has significantly increased our sales and improved customer satisfaction.',
    successMetrics: 'Increased sales by 35% and improved customer satisfaction by 30%.',
    imageUrl: 'https://picsum.photos/id/246/400/300',
  },
];

async function summarizePortfolioItem(item: PortfolioItem) {
  try {
    const summary = await portfolioSummary({
      projectDetails: item.projectDetails,
      technologiesUsed: item.technologiesUsed,
      clientTestimonials: item.clientTestimonials,
      successMetrics: item.successMetrics,
    });
    return summary?.summary || 'Summary not available.';
  } catch (error) {
    console.error('Failed to generate summary:', error);
    return 'Summary not available.';
  }
}

const AnimatedText = ({text}: {text: string}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 50); // Adjust the typing speed here

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <>{displayText}</>;
};

function getRandomColor() {
  const letters = 'ABCDEF0123456789';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const GlowingLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<
    {x: number; y: number; color: string; length: number}[]
  >([]);

  useEffect(() => {
    const generateLines = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const newLines = [];
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const color = getRandomColor();
        const length = Math.random() * 100 + 50; // Random length between 50 and 150
        newLines.push({x, y, color, length});
      }
      setLines(newLines);
    };

    generateLines();

    const animationFrame = () => {
      setLines(prevLines =>
        prevLines.map(line => {
          // Simple movement logic: adjust x and y slightly
          let newX = line.x + (Math.random() - 0.5) * 2;
          let newY = line.y + (Math.random() - 0.5) * 2;

          // Keep lines within container bounds
          if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            newX = Math.max(0, Math.min(newX, containerWidth));
            newY = Math.max(0, Math.min(newY, containerHeight));
          }

          return {...line, x: newX, y: newY};
        })
      );
      requestAnimationFrame(animationFrame);
    };

    const frameId = requestAnimationFrame(animationFrame);

    const handleResize = () => {
      generateLines();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{zIndex: 0}}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: line.x,
            top: line.y,
            width: line.length,
            height: '2px',
            background: `linear-gradient(to right, ${line.color}, transparent)`,
            opacity: 0.7,
            animation: 'glow 5s infinite alternate',
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [summaries, setSummaries] = useState<{[key: string]: string}>({});

  useEffect(() => {
    async function generateSummaries() {
      const summaryMap: {[key: string]: string} = {};
      for (const item of portfolioItems) {
        summaryMap[item.title] = await summarizePortfolioItem(item);
      }
      setSummaries(summaryMap);
    }

    generateSummaries();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <GlowingLines />

      {/* Hero Section */}
      <section
        className="relative z-10 text-center py-24 md:py-36"
        style={{
          background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
          color: '#F5F5F5',
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Transforming Ideas into{' '}
          <span style={{color: '#FFC107'}}>
            <AnimatedText text="Intelligent Solutions" />
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 px-4 md:px-0">
          We are Thinknexus, an AI-powered product development and software
          outsourcing company. Our mission is to transform your ideas into
          reality through cutting-edge technology and innovative solutions.
        </p>
        <Button className="bg-orange-500 text-white hover:bg-orange-700">
          Explore Our Services
        </Button>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {item.title}
                  </CardTitle>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-md w-full h-48 object-cover mb-4"
                  />
                  <CardDescription>
                    {item.projectDetails.substring(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Summary
                  </h3>
                  <p className="text-foreground mb-4">
                    {summaries[item.title] || 'Loading summary...'}
                  </p>
                  <Button className="bg-orange-500 text-white hover:bg-orange-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative z-10 py-16 text-center"
        style={{
          background: 'linear-gradient(135deg, #E64A19 0%, #FF5722 100%)',
          color: '#F5F5F5',
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg mb-8 px-4 md:px-0">
            Contact us today to discover how Thinknexus can help you leverage
            the power of AI for your next project.
          </p>
          <Button className="bg-orange-500 text-white hover:bg-orange-700">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

