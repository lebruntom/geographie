const Dashboard = ({ toFind }) => {
  return (
    <div className="flex justify-center items-center min-w-[250px] absolute top-15 right-0 transform z-[1000] bg-white p-5 m-5 shadow-main rounded-lg">
      <div className="font-bold text-blue">{toFind.nom}</div>
    </div>
  );
};

export default Dashboard;
