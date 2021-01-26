// @flow
import * as React from "react";

type Props = {
  image: "",
  nameUser: "",
};
export const SidebarUser = (props: Props) => {
  return (
    <>
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src={props.image}
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div className="info">
          <a href="#" className="d-block">
            {props.nameUser}
          </a>
        </div>
      </div>
    </>
  );
};
