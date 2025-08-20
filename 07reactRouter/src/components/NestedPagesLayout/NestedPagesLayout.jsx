import React from "react";
import { Outlet } from "react-router-dom";

function NestedPagesLayout() {
  return (
    <div>
      <h1>NestedPagesHeader</h1>
      <Outlet />
      <p>NestedPagesFooter</p>
    </div>
  );
}

export default NestedPagesLayout;
