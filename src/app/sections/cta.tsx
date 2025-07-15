import { Button } from '../components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to supercharge your AI integration?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started with MagicTunnel today and connect your AI models to any system with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="lg" className="group px-8 h-12 text-base" asChild>
                <a 
                  href="https://github.com/MagicBeansAI/magictunnel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 h-12 text-base group" asChild>
                <a 
                  href="https://github.com/MagicBeansAI/magictunnel#readme" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Documentation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
