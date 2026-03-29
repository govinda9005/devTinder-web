const UserrCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user || {};

  const validImage =
    photoUrl && photoUrl.startsWith("http")
      ? photoUrl
      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

  return (
    <div className="w-full max-w-sm h-[550px]">
      <div className="card bg-base-100 shadow-xl h-full flex flex-col">

        {/* Image */}
        <figure className="h-52 flex items-center justify-center bg-base-200">
          <img
            src={validImage}
            alt="User"
            className="max-h-full max-w-full object-contain"
          />
        </figure>

        {/* Content */}
        <div className="card-body flex flex-col justify-between text-center">
          <div>
            <h2 className="card-title justify-center text-base">
              {firstName || "First"} {lastName || "Last"}
            </h2>

            {age && gender && (
              <p className="text-xs text-gray-500">
                {age} years old, {gender}
              </p>
            )}

            {about && <p className="text-xs mt-2">{about}</p>}
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-error btn-xs">
              Ignore
            </button>
            <button className="btn btn-primary btn-xs">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserrCard;