'use client';

import { useQuery } from '@tanstack/react-query';
import { Button, TextInput, Container, Loader, List, ListItem } from '@mantine/core';
import { useState } from 'react';

const fetchTestData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Test Data 1", "Test Data 2", "Test Data 3"]);
    }, 1000);
  });
};

export default function ConversationsPage() {
  const [inputValue, setInputValue] = useState('');
  
  const { data, error, isLoading } = useQuery({
    queryKey: ['testData'],
    queryFn: fetchTestData,
  });

  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <h1>Test Mantine UI and React Query</h1>

      <TextInput
        placeholder="Type something..."
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <Button onClick={() => alert(`You typed: ${inputValue}`)}>Click Me</Button>

      {isLoading && <Loader />}
      {error && <div>Error loading data</div>}
      {data && (
        <List>
          {data.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
