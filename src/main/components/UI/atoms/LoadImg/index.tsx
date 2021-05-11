import * as React from "react";
import placeholder from "../../../../assets/images/placeholder.svg";
import "./index.css";

interface LoadImgDef {
    loadDefaultImg?: string;
    loadImg: string;
    loadAlt: string;
    loadClass?: string;
    loadHeight?: string;
    loadWidth?: string;
    loadImgMob?: string;
    loadPictureClass?: string;
}

export const LoadImg = (props: LoadImgDef) => {
    let theImage = React.useRef<HTMLImageElement>(null);

    const [imageLoaded, setImageLoaded] = React.useState(false);

    const loadImages = (image: HTMLImageElement) => {
        image.setAttribute("src", image?.getAttribute("data-src") || "{}");
        image.onload = () => {
            image.removeAttribute("data-src");
            setImageLoaded(true);
        };
    };

    React.useEffect(() => {
        if (theImage.current) {
            loadImages(theImage.current);
        }
    }, [true]);

    return (
        <picture className={props.loadPictureClass}>
            <source
                media="(max-width: 745px)"
                srcSet={props.loadImgMob}
                className={props.loadClass}
            />

            <source
                media="(min-width: 745px)"
                srcSet={props.loadImg}
                className={props.loadClass}
            />

            <img
                ref={theImage}
                className={props.loadClass}
                src={props?.loadDefaultImg ?? placeholder}
                data-src={props.loadImg}
                alt={props.loadAlt}
                height={props?.loadHeight}
                width={props?.loadWidth}
                loading="lazy"
            />
        </picture>
    );
};
