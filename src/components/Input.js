const classes =
  'block w-full px-3 py-2 transition border rounded-md shadow-sm focus:ring-2 focus:outline-none focus:ring-blue-200 focus:border-blue-300 sm:text-lg';

export const Input = ({ id, name, label, isTextarea = false, ...rest }) => {
  if (isTextarea)
    return (
      <div className="flex-1 w-full">
        <label htmlFor="first_name" className="block font-medium text-gray-500 focus:outline-none">
          {label}
        </label>

        <div className="mt-1">
          <textarea id={id} required name={name} className={classes} {...rest} />
        </div>
      </div>
    );

  return (
    <div className="flex-1 w-full">
      <label htmlFor="first_name" className="block font-medium text-gray-500 focus:outline-none">
        {label}
      </label>

      <div className="mt-1">
        <input id={id} required name={name} className={classes} {...rest} />
      </div>
    </div>
  );
};
