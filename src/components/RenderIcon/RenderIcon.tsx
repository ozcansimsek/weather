import { CSSProperties } from "react";

const RenderIcon = ({
  icon,
  alt,
  size = "small",
}: {
  icon?: string;
  alt?: string;
  size?: "xsmall" | "small" | "medium" | "large";
}) => {
  let imgStyle: CSSProperties;
  const determineSize = (size: string): CSSProperties => {
    switch (size) {
      case "xsmall":
        imgStyle = { width: "2.5rem", height: "2.5rem" };
        break;
      case "small":
        imgStyle = { width: "3.5rem", height: "3.5rem" };
        break;
      case "medium":
        imgStyle = { width: "5rem", height: "5rem" };
        break;
      case "large":
        imgStyle = { width: "7.5rem", height: "7.5rem" };
        break;
      default:
        imgStyle = { width: "2.5rem", height: "2.5rem" };
        break;
    }
    return imgStyle;
  };

  return (
    <img
      style={determineSize(size)}
      src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`}
      alt={alt}
    />
  );
};

export default RenderIcon;
