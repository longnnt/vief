import LibraryPage from "@/src/components/libraryComponents";
import { LibraryPageProps } from "@/src/components/libraryComponents/interfaces";
import { getListDoccumentService } from "@/src/components/libraryComponents/services";
import { GetServerSideProps } from "next";

const Library = ({ listItem }: LibraryPageProps) => {
  return <LibraryPage listItem={listItem} />;
};

export const getServerSideProps: GetServerSideProps<
  LibraryPageProps
> = async () => {
  const doccumentRes = await getListDoccumentService();
  return {
    props: { listItem: doccumentRes.data.data },
  };
};

export default Library;
