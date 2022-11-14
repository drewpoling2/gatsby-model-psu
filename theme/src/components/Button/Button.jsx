/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';
const VariantDefault = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundImage: () =>
          `linear-gradient(to bottom, ${theme.colors.robinsEggBluePS},  ${theme.colors.bluePS})`,
        color: 'whitePS',
        width: 5,
        height: 5,
        px: 13,
        textDecoration: 'none',
        py: 2,
        mx: 0,
        cursor: 'pointer',
        variant: 'layout.rowJAC',
        '&:hover': {},
      }}
    >
      <a
        href={href}
        sx={{
          variant: 'text.button',
          color: 'whitePS',
          textDecoration: 'none',
        }}
      >
        {text}
      </a>
    </div>
  );
};

const VariantHotline = ({ text, onClick, disabled, href }) => {
  return (
    <a
      disabled={disabled}
      onClick={onClick}
      href={'https://clc.com/home/get-licensed/'}
      sx={{
        backgroundColor: 'bluishBlackPS',
        color: 'lightBluePS',
        width: 5,
        height: 5,
        border: '2px solid #000321',
        px: 13,
        textDecoration: 'none',
        py: 1,
        mx: 1,
        cursor: 'pointer',
        variant: 'layout.rowJAC',
        '&:hover': {
          border: '2px solid #ffd100',
          backgroundColor: 'yellowPS',
          color: 'bluishBlackPS',
        },
      }}
    >
      <span
        sx={{
          variant: 'text.button',
        }}
      >
        {text}
      </span>
    </a>
  );
};
const VariantOutlined = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'none',
        color: 'whitePS',
        border: 'outlineButton',
        fontSize: 2,
        width: 5,
        height: 5,
        px: 13,
        py: 2,
        my: 2,
        cursor: 'pointer',
        variant: 'layout.rowJAC',
        '&:hover': {
          backgroundColor: 'lightBluePS',
          color: 'mediumBluePS',
        },
      }}
    >
      <a
        href={href}
        sx={{
          variant: 'text.button',
          textDecoration: 'none',
          color: 'whitePS',
        }}
      >
        {text}
      </a>
    </div>
  );
};
const VariantOutlinedNav = ({ text, onClick, disabled, href }) => {
  return (
    <Link
      disabled={disabled}
      onClick={onClick}
      href={href}
      sx={{
        backgroundColor: 'none',
        color: 'lightBluePS',
        border: '2px solid #ccf0ff',
        width: 5,
        textDecoration: 'none',
        height: 5,
        px: 13,
        py: 1,
        mx: 1,
        cursor: 'pointer',
        variant: 'layout.rowJAC',
        '&:hover': {
          border: '2px solid #009CDE',
          backgroundImage: () =>
            `linear-gradient(to bottom, ${theme.colors.robinsEggBluePS},  ${theme.colors.bluePS})`,
          color: 'whitePS',
        },
      }}
    >
      <span sx={{ variant: 'text.button' }}>{text}</span>
    </Link>
  );
};

const VariantIcon = ({ text, onClick, disabled, Icon, href, iconSize }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'transparent',
        color: 'whitePS',
        cursor: 'pointer',
        textDecoration: 'none',
        variant: 'layout.rowJAC',
      }}
    >
      {/* <Icon className="pr-2" fontSize={iconSize} /> */}
      <a
        sx={{
          variant: 'text.caps',
          fontWeight: 'heading',
        }}
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

const variantButtons = {
  default: VariantDefault,
  hotLine: VariantHotline,
  icon: VariantIcon,
  outlined: VariantOutlined,
  outlinedNav: VariantOutlinedNav,
};

export const Button = ({
  onClick,
  variant = 'default',
  Icon,
  text = 'Add a text prop',
  disabled,
  href,
  iconSize,
}) => {
  const Variant = variantButtons[variant];
  return (
    <Variant
      text={text}
      onClick={onClick}
      disabled={disabled}
      Icon={Icon}
      href={href}
      iconSize={iconSize}
    ></Variant>
  );
};
