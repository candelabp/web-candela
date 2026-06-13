export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
  metric: {
    value: string;
    label: string;
  };
  description: string;
  details: {
    challenge: string;
    solution: string;
    impact: string;
    techExplanation: string;
  };
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
