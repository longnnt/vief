import React from "react";
import { useRouter } from "next/router";
import { UrlObject } from "url";

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

function useViefRouter() {
  const router = useRouter();

  function push(
    url: UrlObject | string,
    as?: UrlObject,
    options?: TransitionOptions
  ) {
    router.push(url, as, options);
  }

  function replace(
    url: UrlObject | string,
    as?: UrlObject,
    options?: TransitionOptions
  ) {
    router.replace(url, as, options);
  }

  return { ...router, push, replace };
}

export { useViefRouter };
