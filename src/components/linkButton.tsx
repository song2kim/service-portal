import tw, { TwStyle } from 'twin.macro';
import styled from 'styled-components';

type linkButtonColor = 'violet-400' | 'white'
type linkButtonSize = 'medium' | 'large'

interface LinkButtonProps {
    color: linkButtonColor;
    size: linkButtonSize;
    children: string;
}

type LinkStyle = Partial<LinkButtonProps>

const StyledLinkButton = styled.a`
    border-radius: 4px;
`;

const linkButtonColorStyle: Record<linkButtonColor, TwStyle> = {
    white: tw`bg-white text-violet-500`,
    'violet-400': tw`bg-violet-400 text-white hover:(bg-violet-500 text-white)`,
};

const linkButtonSizeStyle: Record<linkButtonSize, (string | TwStyle)[]> = {
    medium: [tw`text-md`, 'padding: 8px 16px;'],
    large: [tw`text-lg`, 'padding: 12px 20px;'],
};

const styles = {
    style: ({ color = 'violet-400', size = 'medium' }: LinkStyle) => [
        tw`inline-block`,
        linkButtonColorStyle[color],
        linkButtonSizeStyle[size],
    ],
};

const LinkButton = ({
    color = 'violet-400', size = 'medium', children = 'Button',
}: LinkButtonProps) => (
    <StyledLinkButton href="/" css={styles.style({ color, size, children })}>{children}</StyledLinkButton>
);

export default LinkButton;
