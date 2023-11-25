import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './Types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea';
export function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, task: 'Ir para Academia', done: true },
    { id: 2, task: 'Comprar paçoca', done: false },
    { id: 3, task: 'Programar', done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}
        <AddArea />


        {/* Lista de tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>

  )
}
