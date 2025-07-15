import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, GitBranch, Cpu, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    name: 'Define Capabilities',
    description: 'Easily define what your agents can do with simple configuration',
    icon: Code,
  },
  {
    name: 'Connect Agents',
    description: 'Link your AI models and external services as agents',
    icon: GitBranch,
  },
  {
    name: 'Orchestrate',
    description: 'Let MagicTunnel handle the routing and execution of capabilities',
    icon: Cpu,
  },
  {
    name: 'Execute',
    description: 'Trigger actions and get results through a unified interface',
    icon: Zap,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How MagicTunnel Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect your AI models and external services in just a few simple steps
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                variants={item}
                className={cn(
                  'relative flex items-center gap-6',
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row-reverse',
                  'md:even:flex-row-reverse'
                )}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0 mx-auto md:mx-0">
                  <step.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-1/2 md:translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
