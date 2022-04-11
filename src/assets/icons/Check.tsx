import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
    width?: string;
}

const SvgCheck = (props: Props) => (
    <svg
        width={props.width ?? 16}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m6.464 8.132 6.529-7.18a1.44 1.44 0 0 1 .522-.35 1.5 1.5 0 0 1 1.085 0c.172.066.33.165.466.292a1.34 1.34 0 0 1 .03 1.947L7.58 11.056l-.006.007-.006.006a1.433 1.433 0 0 1-.468.315 1.498 1.498 0 0 1-1.108.02l.177-.468-.177.468a1.441 1.441 0 0 1-.478-.298L.932 6.817v-.001A1.357 1.357 0 0 1 .5 5.829c0-.378.16-.731.432-.988l5.532 3.291Zm0 0-3.513-3.29V4.84a1.44 1.44 0 0 0-.467-.294 1.5 1.5 0 0 0-1.085 0 1.44 1.44 0 0 0-.466.294l5.531 3.291Z"
            fill="#6638B6"
            stroke="#6638B6"
        />
    </svg>
);

export default SvgCheck;
