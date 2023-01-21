import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Page1 = () => {
  const [table, setTabl] = useState(false);
  return (
    <div>
      <Form />
      <Table />
    </div>
  );
};

export default Page1;
