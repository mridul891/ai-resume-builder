import { SignIn } from "@clerk/clerk-react";

const SigninPage = () => {
  return (
    <div className="flex justify-center my-20 items-center ">
      <SignIn />
    </div>
  );
};

export default SigninPage;
