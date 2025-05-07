
import { ExternalLink } from "lucide-react";
import { ContentItem as ContentItemType } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ContentItemProps {
  item: ContentItemType;
  type: "talk" | "blog" | "podcast";
}

const ContentItem = ({ item, type }: ContentItemProps) => {
  const icons = {
    talk: <ExternalLink className="h-4 w-4 opacity-70" />,
    blog: <ExternalLink className="h-4 w-4 opacity-70" />,
    podcast: <ExternalLink className="h-4 w-4 opacity-70" />,
  };

  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex justify-between items-start py-4 px-2 -mx-2 rounded-md hover:bg-secondary transition-colors"
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center space-x-2">
          <h3 className="text-base font-medium group-hover:text-primary transition-colors">
            {item.title}
          </h3>
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
        {item.date && (
          <p className="text-xs text-muted-foreground">{item.date}</p>
        )}
      </div>
      <div className="pt-1 group-hover:translate-x-0.5 transition-transform">
        {icons[type]}
      </div>
    </a>
  );
};

export default ContentItem;
