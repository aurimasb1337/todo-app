import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../services/api";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import {
  Container,
  Button,
  Modal,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";

const TodoPage = () => {
  const { id } = useParams();
  const { data: todos, isLoading, isError, refetch } = useGetTodosQuery(id);
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [editingTodo, setEditingTodo] = useState(null);

  const onSubmit = async (data) => {
    try {
      if (editingTodo) {
        await updateTodo({ ...editingTodo, ...data }).unwrap();
      } else {
        await addTodo({ ...data, userId: id }).unwrap();
      }
      reset();
      setShow(false);
      setEditingTodo(null);
      refetch();
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const handleDelete = async (todo) => {
    await deleteTodo(todo.id);
    refetch();
  };

  useEffect(() => {
    if (!show) {
      setEditingTodo(null);
      reset();
    }
  }, [show, reset]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos.</div>;

  return (
    <Container>
      <div className="text-center py-3">
        <h2>My Todos</h2>
        <Button onClick={() => setShow(true)}>Add Todo</Button>
      </div>

      <Row>
        {todos.map((todo) => (
          <Col md={4} key={todo.id} className="mb-3 d-flex">
            <Card className="h-100 w-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>
                  {todo.completed ? "✔️ Completed" : "❌ Not Completed"}
                </Card.Text>
                <div className="mt-auto justify-content-between d-flex">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditingTodo(todo);
                      setShow(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(todo)}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingTodo ? "Edit Todo" : "Add Todo"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register("title")}
                defaultValue={editingTodo?.title || ""}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                {...register("completed")}
                label="Completed"
                defaultChecked={editingTodo?.completed || false}
              />
            </Form.Group>
            <Button type="submit">{editingTodo ? "Update" : "Add"}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TodoPage;
