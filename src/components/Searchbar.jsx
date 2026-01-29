import { useState, useCallback } from "react";
import { Header, Form, Button, Input } from "./Searchbar.styled";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!query.trim()) return;
      onSubmit(query);
      setQuery("");
    },
    [query, onSubmit]
  );

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Search</Button>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}
