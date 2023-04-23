import React from "react";

export default function TopBar(props) {
  const { title } = props;

  return (
    <header className="topbar">
      <h1>{title}</h1>
    </header>
  );
}



