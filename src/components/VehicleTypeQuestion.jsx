import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export default function VehicleTypeQuestion({ nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    nextStep(data); // Proceed to the next question
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <label>Select Vehicle Type:</label>
      <div className="space-x-4">
        <label>
          <input
            type="radio"
            value="SUV"
            {...register('vehicleType', { required: 'Vehicle type is required' })}
          /> 
          SUV
        </label>
        <label>
          <input
            type="radio"
            value="Sedan"
            {...register('vehicleType', { required: 'Vehicle type is required' })}
          /> 
          Sedan
        </label>
      </div>

      {/* Display error message if validation fails */}
      {errors.vehicleType && <span className="text-red-500">{errors.vehicleType.message}</span>}

      <Button type="submit" variant="contained">Next</Button>
    </form>
  );
}
