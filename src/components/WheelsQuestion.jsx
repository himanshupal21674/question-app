import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export default function WheelsQuestion({ nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    nextStep(data); // Proceed to the next question
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <label>Number of Wheels:</label>
      <div className="flex space-x-4">
        <label>
          <input 
            type="radio" 
            value="2" 
            {...register('wheels', { required: 'Please choose one option' })} 
          /> 2
        </label>
        <label>
          <input 
            type="radio" 
            value="4" 
            {...register('wheels', { required: 'Please choose one option' })} 
          /> 4
        </label>
      </div>
      {errors.wheels && <span className="text-red-500">{errors.wheels.message}</span>}

      <Button type="submit" variant="contained">Next</Button>
    </form>
  );
}
