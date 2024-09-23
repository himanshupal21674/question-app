import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export default function NameQuestion({ nextStep }) {
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
      <TextField
        label="First Name"
        variant="outlined"
        {...register("firstName", { required: "First name is required" })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        {...register("lastName", { required: "Last name is required" })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <Button type="submit" variant="contained">
        Next
      </Button>
    </form>
  );
}
