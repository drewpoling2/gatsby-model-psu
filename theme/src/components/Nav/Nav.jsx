/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { Image } from '../Image/Image';
import { IconButton } from '../IconButton/IconButton';
import { HoverDropDown } from '../HoverDropDown/HoverDropDown';

export const Nav = ({ imageSrc, navData }) => {
  return (
    <div
      sx={{
        variant: 'layout.rowJSB',
        width: 4,
        py: 9,
      }}
    >
      <Container
        sx={{
          variant: 'layout.rowJSB',
        }}
      >
        <div sx={{ variant: 'layout.rowJAC' }}>
          <Image
            altText={'Psu Altoona Logo'}
            src={imageSrc}
            width="180px"
            onClick={() => console.log('Logo')}
          />
        </div>
        <div
          sx={{
            variant: 'layout.rowJAC',
          }}
        >
          <div
            sx={{
              variant: 'layout.col',
              alignItems: 'flex-end',
            }}
          >
            <div
              sx={{
                variant: 'layout.rowJAC',
                mx: 3,
                my: 15,
              }}
            >
              <Button text="vendor application" variant="hotLine" />
              <Button text="contact us" variant="outlinedNav" />
              <Button text="about us" variant="outlinedNav" />
              <Button text="home" variant="outlinedNav" />
            </div>
            <div
              sx={{
                variant: 'layout.row',
              }}
            >
              <HoverDropDown navData={navData} />
            </div>
          </div>

          <Divider />
          <div
            sx={{
              variant: 'layout.rowJAC',
            }}
          >
            <IconButton />
            <Button variant="icon" text="menu" />
          </div>
        </div>
      </Container>
    </div>
  );
};
