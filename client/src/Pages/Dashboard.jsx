import Addresume from "@/custom/Addresume";

const Dashboard = () => {
  return (
    <div className="p-10 md:p-20 lg:px-22">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p className="font-semibold">
        Start Creating AI Resume to your next Job role
      </p>

      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 ">
        <Addresume />
      </div>
    </div>
  );
};

export default Dashboard;
