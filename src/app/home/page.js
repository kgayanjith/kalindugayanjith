import ProfilePage from "./partials/profile";
import HeroPage from "./partials/hero";
import SkillsPage from "./partials/skills";
import ExperiencePage from "./partials/experience";


export default function HomePage() {


  return (
    <>
     <div className="page-wrapper">
       <HeroPage />
      <ProfilePage />
      <SkillsPage />
      <ExperiencePage />
     </div>
    </>
  );
}
