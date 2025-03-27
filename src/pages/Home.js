import React from "react";
import { Header } from "../component/Header";
import { Breadcrumb } from "antd";
const contentStyle = {
  textAlign: "center",
  width: "100%",

  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
export const Home = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "30px" }}>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
          ]}
        />
      </div>
    </>
  );
};
