/** @jsx jsx */
import Link from '../Link/Link';
import { jsx } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';

export const Button = ({
  onClick,
  variant = 'default',
  text = 'Add a text prop',
  disabled,
  to,
  props,
}) => {
  return (
    <Link
      onClick={onClick}
      disabled={disabled}
      to={to}
      {...props}
      sx={{
        width: 'fit-content',
        height: 'fit-content',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'none',
        variant: `buttons.${variant}`,
      }}
    >
      <span sx={{ variant: 'text.button' }}>{text}</span>
    </Link>
  );
};
