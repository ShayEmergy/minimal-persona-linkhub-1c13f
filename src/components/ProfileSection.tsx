
import { Avatar } from "@/components/ui/avatar";
import { ProfileData } from "@/data/portfolioData";

interface ProfileSectionProps {
  data: ProfileData;
}

const ProfileSection = ({ data }: ProfileSectionProps) => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 md:py-24">
      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-gray-100">
        <img 
          src={data.avatarUrl} 
          alt={`${data.name}'s portrait`} 
          className="object-cover"
        />
      </Avatar>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">{data.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{data.title}</p>
      <p className="mt-4 max-w-lg text-muted-foreground">{data.bio}</p>
    </section>
  );
};

export default ProfileSection;
