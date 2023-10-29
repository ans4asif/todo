import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Field from './components/Field';
import { categories } from './utils/constants';
import ClipBoardBanner from './components/ClipBoardBanner';

function App() {
  const [showCopyBanner, setShowCopyBanner] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [tasks, setTasks] = useState<any>([

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
  const handleLocalStorage = (items: any) => {
    localStorage.setItem('tasks', JSON.stringify(items));

  }
  const addTask = (text: String, category: String) => {
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
  const removeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    handleLocalStorage(newTasks)
    setTasks(newTasks);
  };

  const handleSearch = (type: String, value: any) => {
    if (type === 'category') {
      setSearchQuery((prev: any) => ({ ...prev, category: value }))
      return
    }
    setSearchQuery((prev: any) => ({ ...prev, text: value }))

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
