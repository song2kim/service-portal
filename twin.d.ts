import 'twin.macro';
import styledImport from '@emotion/styled';
import { css as cssImport } from '@emotion/react';

declare module 'twin.macro' {
	// The styled and css imports
	const styled: typeof styledImport;
	const css: typeof cssImport;
}
declare module 'react' {
	// The css prop
	// eslint-disable-next-line no-undef
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		// eslint-disable-next-line no-undef
		css?: CSSProp
	}
	// The inline svg css prop
	// eslint-disable-next-line no-unused-vars
	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
		// eslint-disable-next-line no-undef
		css?: CSSProp
	}
}
// The 'as' prop on styled components
declare global {
	namespace JSX {
		// eslint-disable-next-line no-undef
		interface IntrinsicAttributes<T> extends DOMAttributes<T> {
			as?: string
		}
	}
}
