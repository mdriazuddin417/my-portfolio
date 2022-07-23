import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center justify-center h-[calc(100vh-81px)]">
      <div class="w-16 h-16 border-b-2 border-blue-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
