import Link from 'next/link';
import { Button } from '../components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
              Now in Beta
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Intelligent Agent</span>
            <span className="relative">
              <span className="relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Orchestration Bridge
                  </span>
                  <span className="relative">Orchestration Bridge</span>
                </span>
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto"
          >
            Connect AI models to internal systems and external APIs through a unified interface.
            Rapidly discover and execute capabilities without complex integrations.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Button size="lg" className="group px-8 h-12 text-base" asChild>
              <Link href="#get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-12 text-base" asChild>
              <a 
                href="https://github.com/MagicBeansAI/magictunnel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 sm:top-0 sm:scale-100">
          <div className="w-screen">
            <div className="relative h-[40rem] overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/90 to-background"></div>
              <div className="absolute left-1/2 top-0 h-[200%] w-full -translate-x-1/2 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
