import classes from "./CustomButton.module.scss";

export const CustomButton = ({
  children, 
  variant, 
  id, 
  onClick, 
  type, 
  size, 
  fullWidth, 
  rounded, 
  className}) => {

  const classNameGenerated = [
    classes.button,
    classes[variant],
    classes[size],
    fullWidth && classes.fullWidth,
    rounded && classes.rounded,
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <button 
    className={classNameGenerated}
    onClick={onClick} 
    type={type}
    id={id} >
      {children}
    </button>
  );
};
