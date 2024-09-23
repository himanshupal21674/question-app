import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export default function VehicleModelQuestion({ nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    nextStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <label>Select Vehicle Model:</label>
      <div className="space-x-4">
        <label>
          <input
            type="radio"
            value="Model X"
            {...register("vehicleModel", {
              required: "Vehicle model is required",
            })}
          />
          Model X
        </label>
        <label>
          <input
            type="radio"
            value="Model Y"
            {...register("vehicleModel", {
              required: "Vehicle model is required",
            })}
          />
          Model Y
        </label>
      </div>

      {/* Display error message if validation fails */}
      {errors.vehicleModel && (
        <span className="text-red-500">{errors.vehicleModel.message}</span>
      )}

      <Button type="submit" variant="contained">
        Next
      </Button>
    </form>
  );
}
