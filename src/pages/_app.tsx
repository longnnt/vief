import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import "../../i18n";
import { store } from "../common/redux/store";
import "../styles/globals.css";
import "../styles/editor-quill.css";
// import { theme } from "../common/theme/theme";

// import { Layout } from "../components/layout";
// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
// import { Category } from "../common/type/type";
// import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../common/theme/theme";
import { HomeLayout } from "../components/layout/HomeLayout";
import "swiper/css";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const MyApp = ({ Component, pageProps }: AppProps) => {
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

  //@ts-ignore
  const Layout = Component.layout ? Component.layout : HomeLayout;
  return (
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
