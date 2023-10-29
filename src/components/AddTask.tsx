import { useState } from 'react';
import { categories } from '../utils/constants';
const AddTask = ({ addTask }: any) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ value })
    if (!value) {
      alert('Please enter title')
      return false;
    }
    if (!category) {
      alert('Please select category')
      return false
    }
    value && category && addTask(value, category);
    setValue('');
    setCategory('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Enter a title for this task…'
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <select name='category' value={category} placeholder='select category' onChange={({ target: { value } }) => {
          console.log({ value })
          setCategory(value)
        }}>
          <option value='' disabled selected>Select Category</option>

          {categories?.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}

        </select>
      </div>
      <button type='submit'>
        <span className='material-icons'>add</span>
      </button>
    </form>
  );
};
export default AddTask;
