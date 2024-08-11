const { CATEGORIES_URL } = require("../constants");
const { apiSlice } = require("./apiSlice");

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: CATEGORIES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getCategoryDetails: builder.query({
      query: (categoryId) => `${CATEGORIES_URL}/${categoryId}`,
    }),
    
  }),
});

export const { useGetCategoriesQuery, useGetCategoryDetailsQuery } =
  categoriesApiSlice;
