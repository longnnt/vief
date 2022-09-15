import { LIST_DATA_RESPONSE } from "@/src/common/constants/common.constant";
import { Lang, ListResponse } from "@/src/common/interfaces/common.interface";
import { getListCategoryService } from "@/src/common/services/common.services";
import LibraryPage from "@/src/components/libraryComponents";
import { getParamSearchDoccument } from "@/src/components/libraryComponents/contants";
import {
  DocumentItem,
  LibraryPageProps,
} from "@/src/components/libraryComponents/interfaces";
import { getListDoccumentService } from "@/src/components/libraryComponents/services";
import { GetServerSideProps } from "next";

const Library = ({ listItem, categories }: LibraryPageProps) => {
  return <LibraryPage listItem={listItem} categories={categories} />;
};

export const getServerSideProps: GetServerSideProps<LibraryPageProps> = async ({
  locale,
}) => {
  // const doccumentRes = await getListDoccumentService();

  const categories = await (
    await getListCategoryService(
      getParamSearchDoccument({ lang: locale as Lang })
    )
  ).data;
  let doccumentRes: ListResponse<DocumentItem> = LIST_DATA_RESPONSE;

  if (categories.length) {
    doccumentRes = await getListDoccumentService(
      getParamSearchDoccument({
        lang: locale as Lang,
      })
    );
  }
  return {
    props: { listItem: doccumentRes.data, categories },
  };
};

export default Library;
