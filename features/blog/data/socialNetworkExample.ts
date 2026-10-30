export type ExampleFile = {
  contents: string | null;
  name: string;
};

export type ExampleFolder = {
  children: Array<ExampleFile | ExampleFolder>;
  name: string;
};

export function isExampleFolder(item: ExampleFile | ExampleFolder): item is ExampleFolder {
  return 'children' in item;
}

export const socialNetworkExample: ExampleFolder = {
  name: 'red-social',
  children: [
    { name: 'package.json', contents: null },
    {
      name: 'client',
      children: [
        {
          name: 'src',
          children: [
            {
              name: 'auth',
              children: [
                { name: 'LoginForm.jsx', contents: null },
                { name: 'authApi.js', contents: null },
              ],
            },
            {
              name: 'posts',
              children: [
                {
                  name: 'PostForm.jsx',
                  contents: `import { useState } from 'react';

export function PostForm() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  async function publish(event) {
    event.preventDefault();

    // Validación repetida en el cliente para mostrar feedback rápido.
    if (!text.trim()) {
      setMessage('Escribe algo primero');
      return;
    }

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    setMessage(response.ok ? 'Publicado' : 'No se pudo publicar');
  }

  return (
    <form onSubmit={publish}>
      <textarea value={text} onChange={(event) => setText(event.target.value)} />
      <button type="submit">Publicar</button>
      <p>{message}</p>
    </form>
  );
}`,
                },
                { name: 'Feed.jsx', contents: null },
              ],
            },
            { name: 'App.jsx', contents: null },
          ],
        },
      ],
    },
    {
      name: 'server',
      children: [
        {
          name: 'src',
          children: [
            {
              name: 'auth',
              children: [
                { name: 'auth.routes.js', contents: null },
                { name: 'requireAuth.js', contents: null },
              ],
            },
            {
              name: 'routes',
              children: [
                {
                  name: 'posts.js',
                  contents: `import { database } from '../database.js';
import { notifyFollowers } from '../notifications.js';

export async function createPost(request, response) {
  // Sesión, regla, SQL, notificación y respuesta HTTP juntos.
  const authorId = request.user.id;
  const text = String(request.body.text ?? '').trim();

  if (!text) {
    return response.status(400).json({ error: 'Escribe algo primero' });
  }

  const post = await database.query(
    'INSERT INTO posts (author_id, text) VALUES (?, ?) RETURNING *',
    [authorId, text],
  );

  await notifyFollowers(authorId, text);
  return response.status(201).json(post);
}`,
                },
              ],
            },
            { name: 'database.js', contents: null },
            { name: 'notifications.js', contents: null },
            { name: 'app.js', contents: null },
          ],
        },
      ],
    },
  ],
};
