import { useGetUsersQuery, useGetTodosQuery } from "../services/api";
import { Container, Table } from "react-bootstrap";

const SummaryPage = () => {
  const { data: users } = useGetUsersQuery();
  const { data: todos } = useGetTodosQuery();

  const userSummary = users?.map((user) => {
    const userTodos = todos?.filter((todo) => todo.userId === user.id);
    const completedTodos = userTodos?.filter((todo) => todo.completed).length;
    const incompleteTodos = userTodos?.length - completedTodos;

    return { ...user, completedTodos, incompleteTodos };
  });

  return (
    <Container className="py-3 text-center">
      <h2 className="my-5">Todo Summary</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Completed</th>
            <th>Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {userSummary?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.completedTodos}</td>
              <td>{user.incompleteTodos}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SummaryPage;
