import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcFacebook = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M26.781 4.281H5.22a.936.936 0 0 0-.938.938V26.78c0 .519.42.938.938.938H26.78a.937.937 0 0 0 .938-.938V5.22a.937.937 0 0 0-.938-.938Zm-2.707 6.841h-1.872c-1.468 0-1.752.697-1.752 1.723v2.258h3.504l-.457 3.537H20.45v9.079h-3.653v-9.076H13.74v-3.54h3.056v-2.607c0-3.026 1.848-4.676 4.55-4.676 1.295 0 2.405.097 2.73.14v3.162h-.003Z"
            fill="#fff"
        />
    </svg>
);

export default SvgIcFacebook;
