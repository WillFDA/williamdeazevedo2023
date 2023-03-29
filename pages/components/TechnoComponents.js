import React from "react";

export default function TechnoComponents(props) {
    const { title, paragraph, icons = [] } = props;

    const hexToRGBA = (hex, alpha) => {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div className="p-10 bg-black rounded-3xl">
            <h2 className="text-white font-semibold text-xl mb-5">
                {title}
            </h2>
            <p className="text-white font-regular text-base">
                {paragraph}
            </p>
            <div className="flex justify-start mt-5">
                {icons.map((icon, index) => {
                    const modifiedIcon = React.cloneElement(icon.component, {
                        width: "",
                        height: "",
                        className: "w-8 h-8",
                    });

                    return (
                        <div
                            key={index}
                            className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                            style={{
                                backgroundColor: hexToRGBA(icon.color, 0.1),
                                color: icon.color,
                            }}
                        >
                            {modifiedIcon}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}