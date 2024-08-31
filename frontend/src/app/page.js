"use client";

import { Button, Container, Group, Text, Title, Grid } from '@mantine/core';
import Link from "next/link";
import { TypingAnimation } from '../components/typing-animation';

export default function Home() {
  const prompts = [
    "Teach me the basics of quantum mechanics.",
    "How do I implement a binary search algorithm?",
    "What is the difference between supervised and unsupervised learning?",
    "Explain REST APIs and how they work.",
    "What is the difference between a stack and a queue?",
    "How do I implement a linked list in Python?",
    "What is the difference between a GET and POST request?",
    "How do I implement a bubble sort algorithm?",
    "What is the difference between a linked list and an array?",
    "How do I implement a binary tree in Java?",
    "What is the difference between a for loop and a while loop?",
    "How do I implement a merge sort algorithm?",
    "What is the difference between a hash table and a dictionary?",
    "How do I implement a depth-first search algorithm?",
    "What is the difference between a function and a method?",
    "How do I implement a breadth-first search algorithm?",
    "What is the difference between a class and an object?",
  ];

  return (
    <Container size="lg" py="xl" className="flex flex-col items-center justify-center h-screen">
      <Grid align="center">
        <Grid.Col span={6}>
          <Title order={1} style={{ fontSize: 54, fontWeight: 900 }}>
            Welcome to
          </Title>
          <Title order={2} style={{ fontSize: 54, fontWeight: 900, marginTop: '0.001em' }}>
            LLM Chat Manager<span className="blinking-cursor">_</span>
          </Title>
          
          <Text size="lg" mt="md">
            Experience seamless integration with our powerful Language Learning Model. Manage conversations with ease and efficiency.
          </Text>
          <Group mt="xl">
            <Link href="/conversations">
              <Button size="lg" variant="filled" color='black'>
                  Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" color='black'>
              Learn More
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className="flex flex-col justify-center w-full h-full lg:max-w-xl mx-auto overflow-hidden rounded-xl bg-black p-8" style={{ height: '320px' }}>
            <div className="text-white min-h-full flex items-center">
              <TypingAnimation prompts={prompts} />
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}