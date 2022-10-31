/** @jsx jsx */
import { jsx, jsxs, Styled } from 'theme-ui';
import React from 'react';
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
        py: 12,
        mx: 1,
        cursor: 'pointer',
        variant: 'layout.rowJAC',
        '&:hover': {},
      }}
    >
      <a
        href={href}
        sx={{
          variant: 'text.button',
        }}
      >
        {text}
      </a>
    </div>
  );
};

const VariantHotline = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'bluishBlackPS',
        color: 'lightBluePS',
        width: 5,
        height: 5,
        border: '2px solid #000321',
        px: 13,
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
      <a
        href={href}
        sx={{
          variant: 'text.button',
        }}
      >
        {text}
      </a>
    </div>
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
        }}
      >
        {text}
      </a>
    </div>
  );
};
const VariantOutlinedNav = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'none',
        color: 'lightBluePS',
        border: '2px solid #ccf0ff',
        width: 5,
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
      <a
        href={href}
        sx={{
          variant: 'text.button',
        }}
      >
        {text}
      </a>
    </div>
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
