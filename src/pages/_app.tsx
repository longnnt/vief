import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "../../i18n";
import { store } from "../common/redux/store";
import { Loading } from "src/common/components/Loading";

// import { Layout } from "../components/layout";
// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
// import { Category } from "../common/type/type";
// import axios from "axios";
import Layout from "../components/layout/Layout";
import { theme } from "../common/theme/theme";

// export const getStaticProps:GetStaticProps = async () =>{
//   // const res= await axios.get('/client/categories?type=POLICY&field=WOOD&isFeatured=1')
//   const res=  await axios.get('https://jsonplaceholder.typicode.com/users')
//   const data: Category[] = await res.data;
//   return{
//       props:{
//         cate:data,
//       }
// }
// }

const queryClient = new QueryClient();
const MyApp = ({ Component, pageProps }: AppProps) => {
  // console.log(cate);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };
    const handleRouteComplete = () => {
      setIsLoading(false);
    };
    const handleRouteError = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};
export default MyApp;
