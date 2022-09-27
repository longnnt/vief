import { Article } from "@/src/common/interfaces/common.interface";
import PolicyInfo from "./policy-info";
import PolicyUpdate from "./policy-update";

type Props = {
  policies: Article[];
};
export default function SectionPolicy({ policies }: Props) {
  return (
    <>
      {policies[1] && <PolicyInfo policy={policies[1]} />}
      {policies[0] && <PolicyUpdate policy={policies[0]} />}
    </>
  );
}
