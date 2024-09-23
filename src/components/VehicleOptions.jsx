// eslint-disable-next-line react/prop-types
export default function VehicleOptions({ wheels }) {
  const vehicleOptions =
    wheels === "2" ? ["Bike", "Scooter"] : ["Car", "Truck"];

  return (
    <div className="mt-4">
      <label>Select Vehicle Type:</label>
      <div className="space-x-4">
        {vehicleOptions.map((option) => (
          <label key={option}>
            <input type="radio" value={option} name="vehicleType" /> {option}
          </label>
        ))}
      </div>
    </div>
  );
}
