import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../services/api";
import { Button, Container, ListGroup } from "react-bootstrap";

const HomePage = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const navigate = useNavigate();

  const handleLogin = (userId) => {
    navigate(`/todos/${userId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <Container className="py-5 text-center">
      <h2>Select a User to Login</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            <Button onClick={() => handleLogin(user.id)}>{user.name}</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default HomePage;
