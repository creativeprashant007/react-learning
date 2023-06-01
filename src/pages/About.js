import React from "react";
import { Header } from "../component/Header";
import { Breadcrumb } from "antd";
export const About = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "30px" }}>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },

            {
              title: "About",
            },
          ]}
        />
      </div>
    </>
  );
};
