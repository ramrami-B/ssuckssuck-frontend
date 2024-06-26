import React from "react";
import PropTypes from "prop-types";

export const Button = ({ primary, size, label, onClick, ...props }) => {
  const buttonMode = primary
    ? "bg-green text-white "
    : "bg-white text-gray border-[0.3px] border-gray ";
  const buttonSize =
    size === "small"
      ? "w-[6rem] h-[3rem] text-base "
      : size === "medium"
        ? "w-[12rem] h-[3.5rem] text-lg "
        : "w-[20rem] h-[4rem] text-xl ";
  return (
    <button
      type="button"
      className={
        "outline-none rounded-lg font-nps-bold " +
        buttonMode +
        buttonSize +
        "hover:brightness-90 " +
        "active:shadow-shadow "
      }
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: "medium",
  label: null,
  onClick: undefined,
};
