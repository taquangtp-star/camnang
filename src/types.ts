export interface LeadFormData {
  fullName: string;
  email: string;
  phone?: string;
  submittedAt?: string;
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
  warningNote?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  riskIfIgnored: string;
  status?: 'critical' | 'important';
}
