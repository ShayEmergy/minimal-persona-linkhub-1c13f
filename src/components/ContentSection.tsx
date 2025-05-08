
import { ContentItem as ContentItemType } from "@/data/portfolioData";
import ContentItem from "./ContentItem";
import { BookText, Mic, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  type: "talk" | "blog" | "audio";
  items: ContentItemType[];
  id: string;
}

const ContentSection = ({ title, type, items, id }: ContentSectionProps) => {
  const icons = {
    talk: <MessageCircle className="h-5 w-5" />,
    blog: <BookText className="h-5 w-5" />,
    audio: <Mic className="h-5 w-5" />,
  };

  return (
    <section id={id} className="py-12 px-4 md:px-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-primary">{icons[type]}</span>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="space-y-1 divide-y divide-border">
        {items.map((item) => (
          <ContentItem key={item.id} item={item} type={type} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
