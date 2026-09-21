import { baseApi as api } from "./baseApi";
export const addTagTypes = ["books", "book"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getBooks: build.query<GetBooksApiResponse, GetBooksApiArg>({
        query: (queryArg) => ({
          url: `/books`,
          params: {
            completed: queryArg.completed,
            author: queryArg.author,
          },
        }),
        providesTags: ["books"],
      }),
      postBooks: build.mutation<PostBooksApiResponse, PostBooksApiArg>({
        query: (queryArg) => ({
          url: `/books`,
          method: "POST",
          body: queryArg.modelsBook,
        }),
        invalidatesTags: ["book"],
      }),
      deleteBooksById: build.mutation<
        DeleteBooksByIdApiResponse,
        DeleteBooksByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/books/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["book"],
      }),
      getBooksById: build.query<GetBooksByIdApiResponse, GetBooksByIdApiArg>({
        query: (queryArg) => ({ url: `/books/${queryArg.id}` }),
        providesTags: ["book"],
      }),
      patchBooksById: build.mutation<
        PatchBooksByIdApiResponse,
        PatchBooksByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/books/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.modelsBookStatusDto,
        }),
        invalidatesTags: ["book"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as booksApi };
export type GetBooksApiResponse = /** status 200 OK */ ModelsBook[];
export type GetBooksApiArg = {
  /** string valid */
  completed?: string;
  /** Search books by author */
  author?: string;
};
export type PostBooksApiResponse = /** status 201 Created */ ModelsBook;
export type PostBooksApiArg = {
  /** book info */
  modelsBook: ModelsBook;
};
export type DeleteBooksByIdApiResponse = /** status 204 No Content */ any;
export type DeleteBooksByIdApiArg = {
  /** book ID */
  id: number;
};
export type GetBooksByIdApiResponse = /** status 200 OK */ ModelsBook;
export type GetBooksByIdApiArg = {
  /** book ID */
  id: number;
};
export type PatchBooksByIdApiResponse = /** status 204 No Content */ any;
export type PatchBooksByIdApiArg = {
  /** Book ID */
  id: number;
  /** completed value */
  modelsBookStatusDto: ModelsBookStatusDto;
};
export type ModelsBook = {
  author?: string;
  completed?: boolean;
  completed_at?: string;
  created_at?: string;
  id?: number;
  pages?: number;
  published_year?: string;
  review?: string;
  title?: string;
};
export type ModelsErrorDto = {
  message?: string;
};
export type ModelsBookStatusDto = {
  completed?: boolean;
};
export const {
  useGetBooksQuery,
  usePostBooksMutation,
  useDeleteBooksByIdMutation,
  useGetBooksByIdQuery,
  usePatchBooksByIdMutation,
} = injectedRtkApi;
