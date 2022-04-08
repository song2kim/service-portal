import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcArrowDownLg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m11.828 14.143.18.187.18-.187 6.25-6.482c.127-.13.276-.234.44-.305a1.306 1.306 0 0 1 1.032 0c.164.07.313.174.44.305.126.131.227.288.296.46a1.47 1.47 0 0 1 0 1.09c-.07.172-.17.328-.296.459l-7.394 7.668a1.352 1.352 0 0 1-.44.305 1.307 1.307 0 0 1-1.471-.305L3.65 9.67a1.42 1.42 0 0 1-.296-.46 1.468 1.468 0 0 1 .295-1.547 1.347 1.347 0 0 1 1.928-.002l6.25 6.482Z"
            fill="#1D1D1F"
            stroke="#fff"
            strokeWidth={0.5}
        />
    </svg>
);

export default SvgIcArrowDownLg;
