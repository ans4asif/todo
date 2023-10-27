import { useState } from 'react';

const AddTask = ({ addTask }: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    value && addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Enter a title for this task…'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>
        <span className='material-icons'>add</span>
      </button>
    </form>
  );
};
export default AddTask;
