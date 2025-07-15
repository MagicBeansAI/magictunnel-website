import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme/theme-toggle';

const navigation = {
  main: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Documentation', href: 'https://github.com/MagicBeansAI/magictunnel' },
    { name: 'GitHub', href: 'https://github.com/MagicBeansAI/magictunnel' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/MagicBeansAI/magictunnel',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/magicbeansai',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/magicbeansai',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MagicTunnel
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Intelligent Agent Orchestration Bridge
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {navigation.social.map((item) => (
              <Button key={item.name} variant="ghost" size="icon" asChild>
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} MagicBeansAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
