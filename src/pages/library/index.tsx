import { LIST_DATA_RESPONSE } from "@/src/common/constants/common.constant";
import { Lang, ListResponse } from "@/src/common/interfaces/common.interface";
import { getListCategoryService } from "@/src/common/services/common.services";
import LibraryPage from "@/src/components/libraryComponents";

import { DOCCUMENT_SIZE, getParamSearchDocument } from "@/src/components/libraryComponents/contants";
import { DocumentItem, LibraryPageProps } from "@/src/components/libraryComponents/interfaces";

import { getListDocumentService } from "@/src/components/libraryComponents/services";
import { GetServerSideProps } from "next";

const Library = ({ listItem, categories }: LibraryPageProps) => {
  return <LibraryPage listItem={listItem} categories={categories} />;
};

export const getServerSideProps: GetServerSideProps<LibraryPageProps> = async ({ locale }) => {
  // const doccumentRes = await getListDoccumentService();

  const categories = await (await getListCategoryService(getParamSearchDocument({ lang: locale as Lang }))).data;

  let doccumentRes: ListResponse<DocumentItem> = LIST_DATA_RESPONSE;

  if (categories.length) {
    doccumentRes = await getListDocumentService(
      getParamSearchDocument({
        size: DOCCUMENT_SIZE,
        lang: locale as Lang,
      })
    );
  }
  return {
    props: { listItem: doccumentRes, categories },
  };
};

export default Library;
