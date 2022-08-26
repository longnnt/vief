import SectionCompanyResearch from "./company-research";
import SectionCompanyStory from "./company-story";

export default function SectionCompany() {
  return (
    <>
      <SectionCompanyStory />
      <SectionCompanyResearch wrapperStyle={{ mt: "64px" }} />
    </>
  );
}
