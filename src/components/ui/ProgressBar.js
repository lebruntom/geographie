const ProgressBar = ({ pct }) => {
  return (
    <div className="w-full bg-gray l h-2 dark:bg-gray-700">
      <div
        className="bg-blue h-2 rounded-full dark:bg-gray-300"
        style={{
          width: `${pct}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
