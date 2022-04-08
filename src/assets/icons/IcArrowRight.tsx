import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m5.263 11.467 3.5-3.472-3.5-3.472a.892.892 0 0 1-.195-.972.892.892 0 0 1 .487-.483.905.905 0 0 1 .98.193l4.139 4.108a.892.892 0 0 1 .195.972.892.892 0 0 1-.195.29l-4.14 4.107a.898.898 0 0 1-.98.194.898.898 0 0 1-.29-.194.905.905 0 0 1 0-1.27Z"
            fill="#fff"
        />
    </svg>
);

export default SvgIcArrowRight;
