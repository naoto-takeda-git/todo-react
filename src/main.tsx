import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
