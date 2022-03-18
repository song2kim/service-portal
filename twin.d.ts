// twin.d.ts
import 'twin.macro';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';

declare module 'twin.macro' {
	// The styled and css imports
	const styled: typeof styledImport;
	const css: typeof cssImport;
}
declare module 'react' {
	// The css prop
	// eslint-disable-next-line no-undef
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSProp
	}
	// The inline svg css prop
	// eslint-disable-next-line no-unused-vars
	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
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
