export default {
    schemaFile: './src/infrastructure/API/open-api/swagger-books.yaml',
    apiFile: './src/infrastructure/API/rtkQueryApi/baseApi.ts',
    apiImport: 'baseApi',
    outputFile: './src/infrastructure/API/rtkQueryApi/booksApi.ts',
    exportName: 'booksApi',
    hooks: true,
    tag: true,
};
