import React from "react";
import withAuth from "@/hocs/withAuth";

const Index = () => {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default withAuth(Index);
