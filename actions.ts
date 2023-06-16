// Zenn
// https://zenn.dev/sum0/articles/8e903ed05ba681
// https://github.com/mymactive/openapi-typescript-example/tree/main

// openapi-typescript
// https://github.com/drwpow/openapi-typescript/tree/main/packages/openapi-typescript
import * as $axios from "./axiosUtils";

export const postPet = (name: string, photoUrls: string[]) =>
  $axios.request({
    url: "/pet",
    method: "post",
    data: {
      name,
      photoUrls,
    },
  });
