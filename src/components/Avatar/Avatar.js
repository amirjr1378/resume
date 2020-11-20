import classnames from "classnames";

function Avatar({ src, className, ...otherProps }) {
  const avatarClasses = classnames("avatar", { [className]: className });
  return (
    <div
      className={avatarClasses}
      style={{ backgroundImage: `url(${src})` }}
      {...otherProps}
    />
  );
}

export default Avatar;
