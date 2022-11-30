/** @jsx jsx */
import { jsx } from 'theme-ui';

const VariantDefault = ({ Icon, onClick, disabled, iconSize }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'whiteout',
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        mx: 14,
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'grayPS',
        },
        variant: 'layout.rowJAC',
      }}
    >
      {/* <Icon fontSize={iconSize} /> */}
      <b>?</b>
    </div>
  );
};

const variantIconButtons = {
  default: VariantDefault,
};

export const IconButton = ({
  ariaLabel,
  Icon,
  onClick,
  variant = 'default',
  iconSize,
  disabled = 'false',
}) => {
  const Variant = variantIconButtons[variant];
  return (
    <Variant
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      Icon={Icon}
      iconSize={iconSize}
    ></Variant>
  );
};
