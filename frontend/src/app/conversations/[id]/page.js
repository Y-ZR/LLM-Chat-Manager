"use client";

import { useState, useEffect } from 'react';
import { AppShell, Title, Group, Card, Grid, TextInput, Button, ScrollArea, Text, Slider, Select } from '@mantine/core';
import { PiBrainDuotone } from "react-icons/pi";
import { useParams } from 'next/navigation';
import { fetchConversationById } from '../../../utils/api.js'; 

export default function ConversationPage() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'LLM', text: 'Hello! How can I assist you today?' },
  ]);
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(1);

  useEffect(() => {
    if (id) {
      console.log(fetchConversationById(id));
      fetchConversationById(id)
        .then(data => setConversation(data.messages))
        .catch(error => console.error("Failed to fetch conversation:", error));
    }
  }, [id]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setConversation([...conversation, { sender: 'User', text: message }]);
      setMessage('');
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header className="py-2 pl-2 ml-2">
        <Group spacing="xs">
          <PiBrainDuotone size={34} style={{ marginTop: '4px' }} />
          <Title>LLM Chat Manager<span className="blinking-cursor">_</span></Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Title order={1} style={{ fontSize: 24, fontWeight: 900, marginBottom: '0.5em' }}>
          Conversation
        </Title>
        <Grid gutter="md">
          <Grid.Col span={2}>
            <Card shadow="xs" padding="md" radius="md" withBorder>
              <Title order={2} style={{ fontSize: 20, fontWeight: 700, marginBottom: '1em' }}>LLM Properties</Title>
              <Select
                label="Model Type"
                placeholder="Select model"
                data={['GPT-3', 'GPT-3.5', 'GPT-4']}
                defaultValue="GPT-3"
                mb="sm"
              />
              <Text size="sm" mt="sm" fw={500}>
                Temperature
              </Text>
              <Slider
                value={temperature}
                onChange={setTemperature}
                min={0}
                max={1}
                step={0.1}
                marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }]}
                mb="lg"
              />
              <Text size="sm" mt="sm" fw={500} style={{ marginBottom: '0.3em' }}>
                Stop Sequence
              </Text>
              <TextInput placeholder="Stop sequence" mb="xs" />
              <Text size="sm" mt="sm" fw={500}>
                Top P
              </Text>
              <Slider
                value={topP}
                onChange={setTopP}
                min={0}
                max={1}
                step={0.1}
                marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }]}
                mb="xl"
              />
              <Button variant="filled" color="blue" fullWidth>
                Update
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={10}>
            <Card shadow="xs" padding="md" radius="md" withBorder>
              <Title order={2} style={{ fontSize: 20, fontWeight: 700, marginBottom: '1em' }}>Chat</Title>
              <ScrollArea style={{ height: '60vh', marginBottom: '1em', paddingRight: '1em' }}>
                {conversation.map((msg, index) => (
                  <Text
                  key={index}
                  align={msg.role === 'user' ? 'right' : 'left'}
                  mb="xs"
                  >
                    <strong>{msg.role === 'user' ? 'User' : 'LLM'}:</strong> {msg.content}
                  </Text>
                ))}
              </ScrollArea>
              <Group>
                <TextInput
                  placeholder="Type a message"
                  value={message}
                  onChange={(event) => setMessage(event.currentTarget.value)}
                  onKeyDown={(event) => event.key === 'Enter' && handleSendMessage()}
                  style={{ flex: 1 }}
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
