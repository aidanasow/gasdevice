import classes from "./Typography.module.scss";

export const Typography = (props) => {
    const {
        variant="body",
        weight = "",
        children,
        className,
        color = "",
        truncate = false,
        id,
    } = props;

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        body: "p",
        smallBody: "p",
    };

    const classNamedGenerated = [
        classes[variant],
        classes[weight],
        classes[color],
        className,
    ]   .filter(Boolean)
        .join(" ")
        .trim();

    const truncateString = (str, maxNumber) => {
        if (typeof str === "string") {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
        }
        return str;
    };

    const TagName = Tags[variant in Tags ? variant : "body"];

    return (
        <TagName id={id} className={classNamedGenerated}>
            {!truncate ? children : truncateString(children, truncate)}
        </TagName>
    );
};



