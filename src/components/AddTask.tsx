import { useState } from 'react';
import { categories } from '../utils/constants';

interface AddTaskProps {
  addTask: (text: string, category: string) => void;
}
const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [value, setValue] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      setError('Please enter title')
      return false;
    }
    if (!category) {
      setError('Please select category')
      return false
    }
    value && category && addTask(value, category);
    setValue('');
    setCategory('')
    setError('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          placeholder='Enter a title for this task…'
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <select name='category' value={category} placeholder='select category' onChange={({ target: { value } }) => {
            setCategory(value)
          }}>
            <option value='' disabled defaultValue=''>Select Category</option>

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
      {error && <div className='error'><p>{error}</p></div>}
    </>
  );
};
export default AddTask;
