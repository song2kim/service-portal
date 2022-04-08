import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcMenu = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="#6638B6" d="M0 3h16v2H0zM0 11h16v2H0z" />
    </svg>
);

export default SvgIcMenu;
