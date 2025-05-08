
import React from "react";
import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import { profileData, talks, writing, audio } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <ProfileSection data={profileData} />
        
        <div className="border-t border-border">
          <ContentSection 
            title="Talks" 
            type="talk" 
            items={talks} 
            id="talks"
          />
        </div>
        
        <div className="border-t border-border">
          <ContentSection 
            title="Audio" 
            type="audio" 
            items={audio} 
            id="audio"
          />
        </div>

        <div className="border-t border-border">
          <ContentSection 
            title="Writing" 
            type="blog" 
            items={writing} 
            id="blog"
          />
        </div>
        
        
        <footer className="py-12 px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lior Lieberman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
