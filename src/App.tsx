import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Field from './components/Field';
import { categories } from './utils/constants';

function App() {
  const [tasks, setTasks] = useState<any>([
    {
      text: 'Like',
      isCompleted: false,
      category: 'movies'
    },
    {
      text: 'Comment',
      isCompleted: false,
      category: 'movies'
    },
    {
      text: 'Subscribe',
      isCompleted: false,
      category: 'movies'
    },
  ]);

  const [searchQuery, setSearchQuery] = useState<any>({
    text: '',
    category: ''
  })
  const addTask = (text: String, category: String) => setTasks([...tasks, { text, isCompleted: false, category: category }]);
  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };
  const removeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleSearch = (type: String, value: any) => {
    if (type === 'category') {
      setSearchQuery((prev: any) => ({ ...prev, category: value }))
      return
    }
    setSearchQuery((prev: any) => ({ ...prev, text: value }))

  }
  const todoTasks = useMemo(() => {

    let filteredTasks: any = [...tasks];

    if (searchQuery.text) {
      const textFilter = new RegExp(searchQuery.text, 'i'); // Case-insensitive regex
      filteredTasks = filteredTasks.filter((task: any) => textFilter.test(task.text));
    }

    if (searchQuery.category) {
      filteredTasks = filteredTasks.filter((task: any) => task.category === searchQuery.category);
    }

    return filteredTasks;
  }, [searchQuery, tasks])
  return (
    <div className='wrapper'>
      <main>
        <div className='container'>
          <div className='heading'><h1> TODO LIST</h1></div>
          <div className='search-fields'>
            <div className='d'>
              <Field type='text' placeholder="Search Todo" onChange={({ target: { value } }: any) => { handleSearch('text', value) }} />
            </div>
            <div className='d'>
              <Field type='select' placeholder="Select Category" options={[{ name: 'Select Category', value: '' }, ...categories,]} value={searchQuery.category} onChange={({ target: { value } }: any) => { handleSearch('category', value) }} />
            </div>
          </div>
          <div className='list-wrapper'>
            <TodoList
              addTask={addTask}
              toggleTask={toggleTask}
              removeTask={removeTask}
              tasks={todoTasks}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
