const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="bg-gray-300 w-48 h-48 m-4"></div>
        ))}
    </div>
  );
};

export default Shimmer;
