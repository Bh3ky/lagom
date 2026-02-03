
import type { ReactNode } from 'react';

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'draft' | 'completed';
  reach: number;
  conversion: number;
  budget: number;
  lastUpdated: string;
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  trend: number;
  icon: ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  path: string;
}

export enum AppRoute {
  Dashboard = '/',
  Campaigns = '/campaigns',
  AIStudio = '/ai-studio',
  Analytics = '/analytics',
  MarketingTools = '/tools',
  Projects = '/projects',
  Help = '/help',
  Settings = '/settings'
}
