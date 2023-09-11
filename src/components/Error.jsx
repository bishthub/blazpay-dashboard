import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black bg-gray-100">
      <h1 className="mb-4 text-4xl font-semibold text-black">
        404 - Page Not Found
      </h1>
      <p className="text-black">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
