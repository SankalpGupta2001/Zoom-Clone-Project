import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";

import "./JoinRoomPage.css";

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction, isRoomHost } = props;
  console.log(props,"props");
  console.log({ setIsRoomHostAction, isRoomHost },"{ setIsRoomHostAction, isRoomHost }")
  const search = useLocation().search;
  console.log(search,"search");
  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    console.log(isRoomHost,"isRoomHost")
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
  }, [setIsRoomHostAction,search]);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
