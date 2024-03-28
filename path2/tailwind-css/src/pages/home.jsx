import CustomButton from "../components/button/button";
import CustomInput from "../components/input/input";

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
      <CustomInput variant={"primary"} size={"small"} shape={"default"} fontSize={"small"} label={"input"} placeholder={"내용을 입력해주세요"} />
      <CustomInput variant={"secondary"} size={"medium"} shape={"shape"} fontSize={"medium"} label={"input"} placeholder={"내용을 입력해주세요"} />
      <CustomInput variant={"gray"} size={"large"} shape={"round"} fontSize={"large"} label={"input"} placeholder={"내용을 입력해주세요"} />
    </div>
  );
};

export default HomePage;
