import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcGlobal = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={8} cy={8} r={6.5} stroke="#fff" />
        <path
            d="M10.5 8c0 1.882-.328 3.562-.838 4.753-.256.596-.547 1.047-.845 1.341-.297.292-.572.406-.817.406s-.52-.114-.817-.406c-.298-.294-.59-.745-.845-1.341C5.828 11.562 5.5 9.882 5.5 8c0-1.882.328-3.562.838-4.753.256-.596.547-1.047.845-1.341.297-.292.572-.406.817-.406s.52.114.817.406c.298.294.59.745.845 1.341.51 1.191.838 2.871.838 4.753Z"
            stroke="#fff"
        />
        <path
            stroke="#fff"
            strokeWidth={0.5}
            d="M2.75 4.25h10.5v.5H2.75zM2.75 11.25h10.5v.5H2.75zM1.25 7.75h13.5v.5H1.25z"
        />
    </svg>
);

export default SvgIcGlobal;
