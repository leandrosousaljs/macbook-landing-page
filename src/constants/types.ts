export interface NavLink {
  label: string;
}

export interface PerformanceImage {
  id: string;
  src: string;
}

export interface PerformanceImgPosition {
  id: string;
  left?: number;
  right?: number;
  bottom: number;
}

export interface Feature {
  id: number;
  icon: string;
  highlight: string;
  text: string;
  styles: string;
}

export interface FeatureSequence {
  videoPath: string;
  boxClass: string;
  delay: number;
}

export interface FooterLink {
  label: string;
  link: string;
}
