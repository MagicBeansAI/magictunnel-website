'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useTransform, AnimatePresence, AnimatePresence as MotionPresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { ParallaxSection } from '@/components/ParallaxSection';

import type { Variants } from 'framer-motion';

// Animation variants for Framer Motion
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
};

const API_TYPES = ["GraphQL", "OpenAPI", "Swagger", "gRPC"];
const PREFIXES = ["MCP", "LLM", "AI"];
const ANIMATION_DELAY = 3000; // 3 seconds

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [apiIndex, setApiIndex] = useState(0);
  const [prefixIndex, setPrefixIndex] = useState(0);
  const { theme } = useTheme();
  
  // Animate text changes
  useEffect(() => {
    const apiInterval = setInterval(() => {
      setApiIndex((prev) => (prev + 1) % API_TYPES.length);
    }, ANIMATION_DELAY);
    
    const prefixInterval = setInterval(() => {
      setPrefixIndex((prev) => (prev + 1) % PREFIXES.length);
    }, ANIMATION_DELAY + 1000); // Slightly offset from API type animation
    
    return () => {
      clearInterval(apiInterval);
      clearInterval(prefixInterval);
    };
  }, []);
  
  // Use window scroll instead of element scroll
  const { scrollYProgress } = useScroll();
  
  // Parallax effects - using window scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sticky Header with Banner and Navigation */}
      <header className="sticky top-0 z-50">
        {/* Coming Soon Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20">
              Coming Soon
            </span>
            <p className="text-sm md:text-base">
              MagicTunnel is launching soon! {/*Join our waitlist for early access and updates.*/}
            </p>
            {/*<a 
              href="#waitlist" 
              className="px-4 py-1 text-sm font-medium bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </a>*/}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80"
        >
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <span className="text-xl font-bold">MT</span>
              </div>
              <span className="text-xl font-bold">MagicTunnel</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden space-x-6 md:flex"
            >
              <a href="#story" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                The Story
              </a>
              <a href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Features
              </a>
              <a href="#code-examples" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Code Examples
              </a>
              {/*<a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Get Started
              </a>*/}
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-4"
            >
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <a
                  className="github-button"
                  href="https://github.com/MagicBeansAI/magictunnel"
                  data-color-scheme="light"
                  data-size="large"
                  aria-label="Visit MagicBeansAI/magictunnel on GitHub"
                >
                  GitHub
                </a>
                <a
                  className="github-button"
                  href="https://github.com/MagicBeansAI/magictunnel"
                  data-icon="octicon-star"
                  data-show-count="true"
                  data-color-scheme="light"
                  data-size="large"
                  aria-label="Star MagicBeansAI/magictunnel on GitHub"
                >
                  Star
                </a>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative flex h-auto min-h-[80vh] items-start justify-center overflow-hidden pt-4 sm:pt-8">
        {/* Background elements with parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"
        />
        
        <div className="container relative z-10 px-4 text-center pt-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl pb-20"
          >
            <motion.div variants={item} className="mb-3">
              <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-0.5 text-sm font-medium text-blue-600 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-300">
                The Future of MCP Integration
              </span>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <div className="space-y-2 text-center">
                  {/* First Line: Your [API] APIs */}
                  <div className="h-24 md:h-28 flex items-center justify-center">
                    <div className="relative">
                      <div className="flex items-baseline">
                        <motion.span 
                          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-4xl md:text-6xl font-bold leading-normal inline-block pt-1"
                          layout
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                          Your{' '}
                        </motion.span>
                        <div className="relative inline-block mx-1">
                          <MotionPresence mode="wait">
                            <motion.span
                              key={`api-${apiIndex}`}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-4xl md:text-6xl font-bold whitespace-nowrap leading-none px-1"
                            >
                              {API_TYPES[apiIndex]}
                            </motion.span>
                          </MotionPresence>
                        </div>
                        <motion.span 
                          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-4xl md:text-6xl font-bold leading-none inline-block"
                          layout
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                          {' '}APIs
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Line: [PREFIX]Ready */}
                  <div className="h-16 md:h-20 flex items-end justify-center">
                    <div className="relative">
                      <div className="flex items-baseline">
                        <div className="relative inline-block mx-1">
                          <MotionPresence mode="wait">
                            <motion.span
                              key={`prefix-${prefixIndex}`}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-4xl md:text-6xl font-bold whitespace-nowrap leading-none px-1"
                            >
                              {PREFIXES[prefixIndex]}
                            </motion.span>
                          </MotionPresence>
                        </div>
                        <motion.span 
                          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-4xl md:text-6xl font-bold leading-none inline-block"
                          layout
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                          Ready
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={item}
              className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              MagicTunnel bridges the gap between your internal APIs and MCP clients and Agents with unprecedented ease and intelligence.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              {/*<Button size="lg" className="bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700">
                Start Building
              </Button>*/}
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Demo Coming Soon
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [20, 0, -10]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400"
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The MagicTunnel Story
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              Born from the need for seamless MCP compatible integration of internal APIs, MagicTunnel redefines how LLMs communicate with your services.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500/20 to-transparent" />
            
            {/* Timeline items */}
            {[
              {
                title: 'The Challenge',
                description: 'The struggle of creating standardized integrations of internal APIs with LLMs is real. Teams spend countless hours on boilerplate code and debugging.',
                icon: '🔍'
              },
              {
                title: 'The Vision',
                description: 'We envisioned a solution that would simplify making your internal APIs MCP compatible with an intuitive, user-friendly approach.',
                icon: '💡'
              },
              {
                title: 'The Solution',
                description: 'MagicTunnel was born - a powerful, flexible bridge that makes MCP integration of internal APIs, effortless and efficient.',
                icon: '✨'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-16 flex w-full items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
                <div className="flex w-16 flex-shrink-0 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-900/50">
                    {item.icon}
                  </div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section id="features" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div 
            style={{ y: y3 }}
            className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent"
          />
        </div>
        
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to connect and orchestrate your MCP clients effectively.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Multi-Protocol Support',
                description: 'Full support for WebSocket, Server-Sent Events, HTTP Streaming, and gRPC for real-time communication.',
                icon: '🔄',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Agent Ecosystem',
                description: 'Diverse agents including HTTP, gRPC, GraphQL, Database, and WebSocket for comprehensive API integration.',
                icon: '🤖',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'API Specification Support',
                description: 'Automatically convert GraphQL, OpenAPI 3.0, Swagger 2.0, and gRPC specifications into MCP tools with full type system support.',
                icon: '📊',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'External MCP Integration',
                description: 'Seamlessly connect with external MCP servers with automatic capability discovery.',
                icon: '🔗',
                color: 'from-amber-500 to-orange-500'
              },
              {
                title: 'Advanced Security',
                description: 'Built-in authentication, rate limiting, and secure credential management.',
                icon: '🔒',
                color: 'from-rose-500 to-pink-500'
              },
              {
                title: 'Getting Enterprise Ready',
                description: 'Multi-tenant support, logging, monitoring, and horizontal scaling capabilities.',
                icon: '🏢',
                color: 'from-indigo-500 to-blue-500'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
              >
                <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br opacity-10 transition-all group-hover:opacity-20 ${feature.color}`} />
                <div className="relative z-10">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-2xl ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MCP Compliance Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <span className="mr-2">✓</span> MCP Compliant
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Full MCP Specification Compliance
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              MagicTunnel implements the complete Model Context Protocol specification, ensuring seamless compatibility with all MCP clients and servers.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                title: 'MCP Core Features',
                features: [
                  'Full MCP protocol support',
                  'Tool discovery & execution',
                  'Resource management',
                  'Prompt templates',
                  'Multi-protocol streaming'
                ],
                icon: '🧩'
              },
              {
                title: 'MCP Logging',
                features: [
                  'RFC 5424 syslog compliance',
                  '8 severity levels',
                  'Rate limiting',
                  'Dynamic log level control',
                  'Structured logging'
                ],
                icon: '📝'
              },
              {
                title: 'MCP Notifications',
                features: [
                  'Event-driven architecture',
                  'Resource subscriptions',
                  'Broadcast channels',
                  'Real-time updates',
                  'WebSocket integration'
                ],
                icon: '🔔'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl dark:bg-blue-900/30">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="code-examples" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Configuration Examples</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore example configurations for different MagicTunnel use cases
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* MCP Generator Config - Left Aligned */}
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 w-full flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/2 p-1 bg-gray-900">
                  <div className="p-5 bg-gradient-to-r from-blue-600 to-cyan-600">
                    <h3 className="text-xl font-semibold text-white">MCP Generator Configuration</h3>
                    <p className="text-blue-100 text-sm mt-1">mcp-generator-config.yaml</p>
                  </div>
                  <div className="text-xs text-gray-400 px-4 py-2 border-b border-gray-800 font-mono">
                    <span className="text-red-400">#</span> MCP Generator Configuration Example
                  </div>
                  <pre className="text-sm bg-gray-900 text-gray-300 overflow-auto max-h-96 p-4 font-mono">
                    <code className="whitespace-pre">
{`global:
  tool_prefix: "mcp"
  output_dir: "./capabilities"
  auth:
    auth_type:
      Bearer: "YOUR_TOKEN"
    headers:
      X-Custom-Header: "value"

# GraphQL configuration
graphql:
  enabled: true
  endpoint: "https://api.example.com/graphql"
  # Optional: Path to GraphQL schema file
  # schema_file: "./schema.graphql"
  # Optional: Headers specific to GraphQL
  # headers:
  #   X-GraphQL-Token: "graphql-token"

# gRPC configuration
grpc:
  enabled: true
  proto_paths: ["./protos"]
  # Optional: gRPC server address for reflection
  # server_address: "localhost:50051"`}
                    </code>
                  </pre>
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-50 dark:bg-gray-800/50">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">About This Configuration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    This example shows a basic MCP generator configuration with GraphQL support.
                    The generator will create MCP capabilities from your GraphQL schema.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* HTTP Client Capability - Right Aligned */}
            <div className="relative">
              <div className="absolute -right-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 w-full ml-auto flex flex-col md:flex-row-reverse"
              >
                <div className="w-full md:w-1/2 p-1 bg-gray-900">
                  <div className="p-5 bg-gradient-to-r from-purple-600 to-pink-600">
                    <h3 className="text-xl font-semibold text-white">HTTP Client Capability</h3>
                    <p className="text-purple-100 text-sm mt-1">http-client-capability.yaml</p>
                  </div>
                  <div className="text-xs text-gray-400 px-4 py-2 border-b border-gray-800 font-mono">
                    <span className="text-red-400">#</span> HTTP Client Capability Example
                  </div>
                  <pre className="text-sm bg-gray-900 text-gray-300 overflow-auto max-h-96 p-4 font-mono">
                    <code className="whitespace-pre">
{`name: "http_client"
description: "HTTP client for making requests"
type: "tool"

inputSchema:
  type: "object"
  properties:
    url:
      type: "string"
      description: "The URL to make the request to"
      format: "uri"
    headers:
      type: "object"
      description: "HTTP headers to include"
      additionalProperties: { type: "string" }
    timeout:
      type: "integer"
      description: "Request timeout in seconds"
      default: 30
      minimum: 1
      maximum: 300
  required: ["url"]

routing:
  type: "http"
  config:
    method: "GET"
    url: "\${url}"
    headers: "\${headers}"
    timeout: "\${timeout}"`}
                    </code>
                  </pre>
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-50 dark:bg-gray-800/50">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">About This Capability</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    This YAML defines an HTTP client capability for MagicTunnel. It includes input validation, type definitions,
                    and routing information. The example shows a GET request with configurable URL, headers, and timeout parameters.
                    The capability can be extended with additional HTTP methods and parameters as needed.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* External MCP Servers - Left Aligned */}
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 w-full flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/2 p-1 bg-gray-900">
                  <div className="p-5 bg-gradient-to-r from-green-600 to-emerald-600">
                    <h3 className="text-xl font-semibold text-white">External MCP Servers</h3>
                    <p className="text-green-100 text-sm mt-1">external-servers.yaml</p>
                  </div>
                  <div className="text-xs text-gray-400 px-4 py-2 border-b border-gray-800 font-mono">
                    <span className="text-red-400">#</span> External MCP Servers Configuration Example
                  </div>
                  <pre className="text-sm bg-gray-900 text-gray-300 overflow-auto max-h-96 p-4 font-mono">
                    <code className="whitespace-pre">
{`mcpServers:
  # Filesystem server
  filesystem:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/tmp", "/Users"]
    env:
      PATH: "\${PATH}"

  # Git server
  git:
    command: "uv"
    args: ["run", "mcp-server-git", "--repository", "."]
    env:
      PATH: "\${PATH}"

  # Web search server
  websearch:
    command: "python"
    args: ["-m", "mcp_websearch"]
    env:
      SEARCH_API_KEY: "your-api-key-here"

  # Database server
  database:
    command: "node"
    args: ["database-server.js", "--port", "3001"]
    env:
      DB_CONNECTION_STRING: "postgresql://user:pass@localhost:5432/db"
      NODE_ENV: "development"

  # AI model server
  ai-model:
    command: "python"
    args: ["-m", "transformers_serve", "--model", "gpt2"]
    env:
      HF_HOME: "/path/to/cache"
      CUDA_VISIBLE_DEVICES: "0"`}
                    </code>
                  </pre>
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-50 dark:bg-gray-800/50">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">About This Configuration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    This example shows how to configure external MCP servers that MagicTunnel can connect to.
                    Each server can have its own command, arguments, and environment variables.
                    The servers will be automatically discovered and their capabilities will be available to clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section id="contact" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div 
            style={{ y: y2 }}
            className="h-full w-full bg-gradient-to-br from-blue-500/5 to-transparent"
          />
        </div>
        
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
              Ready to transform make your organization AI ready?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Join other organizations who are already using MagicTunnel to power their MCP integrations.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <div className="flex items-center gap-3">
                <a
                  className="github-button"
                  href="https://github.com/MagicBeansAI/magictunnel"
                  data-color-scheme="light"
                  data-size="large"
                  aria-label="Visit MagicBeansAI/magictunnel on GitHub"
                >
                  View on GitHub
                </a>
                <a
                  className="github-button"
                  href="https://github.com/MagicBeansAI/magictunnel"
                  data-icon="octicon-star"
                  data-show-count="true"
                  data-color-scheme="light"
                  data-size="large"
                  aria-label="Star MagicBeansAI/magictunnel on GitHub"
                >
                  Star
                </a>
              </div>
              {/*<Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Contact Sales
              </Button>*/}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-sm text-gray-500 dark:text-gray-400"
            >
              No credit card required. Start in minutes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <span className="text-xl font-bold">MT</span>
                </div>
                <span className="text-xl font-bold">MagicTunnel</span>
              </div>
              <p className="max-w-xs text-sm text-gray-600 dark:text-gray-400">
                The intelligent bridge between your internal APIs and MCP clients and agents, making your organization AI ready.
              </p>
            </div>
            
            {[
              {
                title: 'Product',
                items: ['Features', 'Pricing', 'Documentation', 'Releases']
              },
              {
                title: 'Company',
                items: ['About', 'Blog', 'Careers', 'Contact']
              },
              {
                title: 'Legal',
                items: ['Privacy', 'Terms', 'Cookie Policy', 'GDPR']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MagicTunnel. All rights reserved.
              </p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                {['twitter', 'github', 'linkedin', 'discord'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-xl">
                      {social === 'twitter' ? '𝕏' : 
                       social === 'github' ? '🐙' : 
                       social === 'linkedin' ? '🔗' : '💬'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
