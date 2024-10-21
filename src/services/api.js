import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
    getTodos: builder.query({
      query: (userId) => `todos?userId=${userId}`,
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});


export const {
  useGetUsersQuery,
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = api;
