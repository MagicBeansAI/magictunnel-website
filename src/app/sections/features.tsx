import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2, Zap, Code2, GitBranch, Cpu, Lock, Server } from 'lucide-react';

const features = [
  {
    name: 'Universal Compatibility',
    description: 'Support any MCP client through standard protocol compliance',
    icon: CheckCircle2,
  },
  {
    name: 'Rapid Development',
    description: 'Enable capability addition without per-tool MCP server development',
    icon: Zap,
  },
  {
    name: 'Intelligent Orchestration',
    description: 'Provide dependency-aware capability selection and composition',
    icon: Cpu,
  },
  {
    name: 'Ecosystem Integration',
    description: 'Bridge custom agents with existing MCP servers',
    icon: GitBranch,
  },
  {
    name: 'Enterprise Ready',
    description: 'Support multi-tenant deployments with authentication and monitoring',
    icon: Server,
  },
  {
    name: 'Secure by Default',
    description: 'Built-in security features to protect your data and systems',
    icon: Lock,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powerful features for modern AI integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              MagicTunnel provides everything you need to connect AI models with your systems
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="absolute -right-1 -top-1 h-4 w-4 rounded-bl-full bg-primary/20" />
              <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-tr-full bg-primary/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
