export interface BaseLayoutProps {
  title?: string;
  description?: string;
}

export interface IconProps {
  name: string;
  class?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
