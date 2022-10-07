import React, { useState } from "react";

import "../ContactPage/Content.css";
import Form from "./Form";
import Table from "./Table";

function Content() {
  return (
    <main>
      <div id="container">
        <div className="form_address">
          <Form></Form>
          <Table></Table>
        </div>
      </div>
    </main>
  );
}

export default Content;
