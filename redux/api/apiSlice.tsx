import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getData: build.query({
      query() {
        return "https://api.jsonbin.io/v3/qs/6613e176ad19ca34f856d3a1";
      },
    }),
    // getFeaturedData: build.query({
    //   async queryFn(){
    //     const result = await fetch("https://api.jsonbin.io/v3/qs/660aa9cde41b4d34e4dd5361")
    //     if(result.ok){
    //       const data = await result.json()
    //       return {data: data.record.filter((post: any) => post.isFeatured == true )}
    //     } else{
    //       return {error: "somthing went wrong! "}
    //     }
    //   }
    // })
  }),
});
export const { useGetDataQuery}: any = apiSlice;