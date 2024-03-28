import CustomButton from "../components/button/button";

const HomePage = () => {
  return (
    <div className="m-4 space-y-4">
      <CustomButton variant={"primary"} size={"small"} shape={"default"}>
        button
      </CustomButton>
      <CustomButton variant={"secondary"} size={"medium"} shape={"shape"}>
        button
      </CustomButton>
      <CustomButton variant={"error"} size={"large"} shape={"round"}>
        button
      </CustomButton>
    </div>
  );
};

export default HomePage;
