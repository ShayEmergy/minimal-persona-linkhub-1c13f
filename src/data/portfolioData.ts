
export interface ContentItem {
  id: string;
  title: string;
  url: string;
  date?: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export const profileData: ProfileData = {
  name: "Lior Lieberman",
  title: "Software Engineering Lead",
  bio: "I am an experienced engineer specializing in Kubernetes and Cloud Native platforms. I master reliability and value good design. I have vast experience working with and contributing to Kubernetes, doing observability work and developing cloud applications.",
  avatarUrl: "/lovable-uploads/bc3389a1-5510-49ef-8f13-5db134e519f1.png",
};

export const talks: ContentItem[] = [
  {
    id: "talk-1",
    title: "The Future of Frontend Development",
    url: "https://example.com/talks/future-frontend",
    date: "November 2024",
    description: "A deep dive into emerging technologies shaping frontend development.",
  },
  {
    id: "talk-2",
    title: "Designing for Accessibility",
    url: "https://example.com/talks/accessibility",
    date: "September 2024",
    description: "Making the web more inclusive through accessible design patterns.",
  },
  {
    id: "talk-3",
    title: "React in 2025",
    url: "https://example.com/talks/react-2025",
    date: "July 2024",
    description: "Exploring the evolution of React and its ecosystem.",
  },
];

export const blogPosts: ContentItem[] = [
  {
    id: "post-1",
    title: "Optimizing Performance in Large React Applications",
    url: "https://example.com/blog/react-performance",
    date: "October 2024",
  },
  {
    id: "post-2",
    title: "The Art of Technical Writing",
    url: "https://example.com/blog/technical-writing",
    date: "September 2024",
  },
  {
    id: "post-3",
    title: "My Journey into Open Source",
    url: "https://example.com/blog/open-source-journey",
    date: "August 2024",
  },
  {
    id: "post-4",
    title: "Building Resilient Design Systems",
    url: "https://example.com/blog/design-systems",
    date: "July 2024",
  },
];

export const podcasts: ContentItem[] = [
  {
    id: "podcast-1",
    title: "JavaScript Today - Episode 42",
    url: "https://example.com/podcasts/js-today-42",
    date: "November 2024",
  },
  {
    id: "podcast-2",
    title: "Web Development Happy Hour - Career Paths",
    url: "https://example.com/podcasts/web-dev-happy-hour",
    date: "October 2024",
  },
  {
    id: "podcast-3",
    title: "The Frontend Podcast - UX Engineering",
    url: "https://example.com/podcasts/frontend-podcast",
    date: "September 2024",
  },
];
