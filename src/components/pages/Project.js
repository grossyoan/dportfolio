import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import { Link } from "@reach/router";

import content from "../../assets/content.json";

const Project = ({ projectId }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            background: "black",
            position: "absolute",
            width: "100%",
            minHeight: "100vh",
            userSelect: "none",
            zIndex: "5"
          }
        }
      }}
    >
      <Link
        to="/category"
        style={{
          color: "transparent",
          marginTop: "40px",
          marginLeft: "5%",
          display: "inline-block"
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Gabriela",
            fontSize: "28px",
            margin: "0"
          }}
        >
          Back to menu
        </p>
        <span
          style={{
            color: "white",
            fontSize: "30px",
            marginTop: "-100px",
            display: "inline-block"
          }}
        >
          &#10229;
        </span>
      </Link>
      <Block>
        {content
          .filter(content => content.id === projectId)
          .map(item => (
            <img src={item.src} alt="" />
          ))}
      </Block>
    </Block>
  );
};

Project.propTypes = {};
Project.defaultProps = {};

export default Project;
