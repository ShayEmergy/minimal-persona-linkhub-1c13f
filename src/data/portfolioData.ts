
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
  bio: "Hey, I'm Lior, a senior engineer passionate about Kubernetes and Cloud Native platforms. I build reliable, well-designed systems, contribute to core Kubernetes projects, and develop observability tools. I mentor startups and dev teams worldwide on scaling platforms, optimizing cloud deployments, and improving cost efficiency. I'm driven by entrepreneurship and leadership, and I thrive collaborating with talented teams. This site is a home for my projects and insights.",
  avatarUrl: "/lovable-uploads/bc3389a1-5510-49ef-8f13-5db134e519f1.png",
};

export const talks: ContentItem[] = [
  {
    id: "talk-1",
    title: "Encryption, Identities, and Everything in Between; Building Secure Kubernetes Networks",
    url: "https://www.youtube.com/watch?v=Q15XbASxHM0",
    date: "April 2025",
    description: "A deep dive into Kubernetes network security approaches and implementations.",
  },
  {
    id: "talk-2",
    title: "Architecting Istio for Large-Scale Deployments: R&D and Service Mesh Grow Together",
    url: "https://www.youtube.com/watch?v=GNi9ZJFuups",
    date: "April 2025",
    description: "Strategies for scaling service mesh architecture in enterprise environments.",
  },
  {
    id: "talk-3",
    title: "Towards a Standardized identity-based Authorization in Kubernetes",
    url: "https://www.youtube.com/watch?v=8JX0PUX-znQ",
    date: "March 2025",
    description: "Exploring the future of identity management and authorization in Kubernetes.",
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
    title: "Kubernetes Ingress & Gateway API Updates, with Lior Lieberman",
    url: "https://kubernetespodcast.com/episode/248-gateway-updates/",
    date: "March 2025",
  },
  {
    id: "podcast-2",
    title: "The future of Kubernetes: From Gateway API to AI integration",
    url: "https://kube.fm/gateway-api-to-api-lior",
    date: "March 2025",
  },
];
