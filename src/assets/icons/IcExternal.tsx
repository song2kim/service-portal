import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcExternal = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.423 5.34 4.262 12.5l-.762-.762 7.16-7.16H3.88V3.5h8.62v8.62h-1.078V5.34Z"
            fill="#fff"
        />
    </svg>
);

export default SvgIcExternal;
