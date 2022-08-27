import PitchCard from "../../../presentation/components/PitchCard";

const Pitch = () => {
  return (
    <div>
      {Array(5)
        .fill(null)
        .map((_) => (
          <PitchCard />
        ))}
    </div>
  );
};

export default Pitch;
