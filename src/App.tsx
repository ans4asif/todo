import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Field from './components/Field';
import { categories } from './utils/constants';
import ClipBoardBanner from './components/ClipBoardBanner';
import { SearchQuery, Task } from './types';

function App() {
  const [showCopyBanner, setShowCopyBanner] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    text: '',
    category: ''
  })
  const handleLocalStorage = (items: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(items));

  }
  const addTask = (text: string, category: string) => {
    const newTask = { text, isCompleted: false, category };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Save the updated tasks array to local storage
    handleLocalStorage(updatedTasks)
  };
  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    handleLocalStorage(newTasks)
    setTasks(newTasks);
  };
  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    handleLocalStorage(newTasks)
    setTasks(newTasks);
  };

  const handleSearch = (type: string, value: any) => {
    if (type === 'category') {
      setSearchQuery((prev) => ({ ...prev, category: value }))
      return
    }
    setSearchQuery((prev) => ({ ...prev, text: value }))

  }
  //copy to clipboard
  const copyToClipboard = (text: string) => {
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    document.execCommand('copy');
    setCopiedText(text); // Set the copied text
    setShowCopyBanner(true); // Show the banner

    // Remove the textarea
    document.body.removeChild(textarea);
  };
  const todoTasks = useMemo(() => {

    let filteredTasks: Task[] = [...tasks];

    if (searchQuery.text) {
      const textFilter = new RegExp(searchQuery.text, 'i'); // Case-insensitive regex
      filteredTasks = filteredTasks.filter((task: Task) => textFilter.test(task.text));
    }

    if (searchQuery.category && searchQuery?.category !== 'All') {
      filteredTasks = filteredTasks.filter((task: Task) => task.category === searchQuery.category);
    }

    return filteredTasks;
  }, [searchQuery, tasks])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  return (
    <div className='wrapper'>
      <main>
        <div className='container'>
          <div className='heading'><h1> TODO LIST</h1></div>
          <div className='search-fields'>
            <div className="column">
              <Field type='text' placeholder="Search Todo" onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => { handleSearch('text', value) }} />
            </div>
            <div className="column">
              <Field type='select' placeholder="Select Category" options={[{ name: 'Select Category', value: '' }, { name: 'All', value: 'All' }, ...categories,]} value={searchQuery.category} onChange={({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => { handleSearch('category', value) }} />
            </div>
          </div>
          <div className='list-wrapper'>
            <TodoList
              addTask={addTask}
              toggleTask={toggleTask}
              removeTask={removeTask}
              tasks={todoTasks}
              copyTask={copyToClipboard}
            />
          </div>
          <ClipBoardBanner showBanner={showCopyBanner} text={copiedText} setShow={setShowCopyBanner} />
        </div>

      </main>
    </div>
  );
}

export default App;
