import ProfilePage from "./partials/profile";
import HeroPage from "./partials/hero";
import SkillsPage from "./partials/skills";
import ExperiencePage from "./partials/experience";
import KeyskillPage from "./partials/keySkills";
import EducationPage from "./partials/education";
import ContributionPage from "./partials/contribution";

export default function HomePage() {


  return (
    <>
     <div className="page-wrapper">
       <HeroPage />
      <ProfilePage />
      <SkillsPage />
      <ExperiencePage />
      <KeyskillPage />
      <EducationPage />
      <ContributionPage />
     </div>
    </>
  );
}
