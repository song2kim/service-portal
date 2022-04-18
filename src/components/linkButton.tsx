import tw, { TwStyle } from 'twin.macro';

type linkButtonColor = 'violet-400' | 'white'
type linkButtonSize = 'medium' | 'large'

interface LinkButtonProps {
    color?: linkButtonColor;
    size?: linkButtonSize;
    children?: string;
}

const linkButtonColorStyle: Record<linkButtonColor, TwStyle> = {
    white: tw`bg-white text-violet-500`,
    'violet-400': tw`bg-violet-400 text-white hover:(bg-violet-500 text-white)`,
};

const linkButtonSizeStyle: Record<linkButtonSize, string> = {
    medium: 'padding: 8px 16px',
    large: 'padding: 12px 20px',
};

const styles = {
    style: ({ color = 'violet-400', size = 'medium' }: LinkButtonProps) => [
        tw`inline-block text-lg`,
        linkButtonColorStyle[color],
        linkButtonSizeStyle[size],
    ],
};

const linkButton = ({ color = 'violet-400', size = 'medium', children = 'Button' }: LinkButtonProps) => (
    <a href="/" css={styles.style({ color, size })}>{children}</a>
);

export default linkButton;
