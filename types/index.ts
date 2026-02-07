import { IconType } from "react-icons";

export interface Country {
  name: string;
  flag: string;
  unis: string;
}

export interface Testimonial {
  name: string;
  avatar: string;
  avatarBg: string;
  year: string;
  text: string;
  highlight: string;
  rating: number;
  course: string;
}

export interface VideoTestimonial {
  name: string;
  avatar: string;
  bg: string;
  uni: string;
  country: string;
  flag: string;
  course: string;
  quote: string;
  duration: string;
  views: string;
  thumbBg: string;
}

export interface Topic {
  icon: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: IconType;
}
