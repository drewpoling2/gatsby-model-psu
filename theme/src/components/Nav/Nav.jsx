/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { Image } from '../Image/Image';
import { IconButton } from '../IconButton/IconButton';
import { HoverDropDown } from '../HoverDropDown/HoverDropDown';
import { Link } from 'gatsby';
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
          <Link to="/">
            <img
              src={imageSrc}
              sx={{ width: '180px' }}
              alt={'Psu logo'}
              loading="lazy"
            />
          </Link>
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
                pt: -3,
              }}
            >
              <Button
                text="vendor application"
                href={'https://clc.com/home/get-licensed/'}
                variant="hotLine"
              />
              <Button
                text="contact us"
                href={'/contact-us'}
                variant="outlinedNav"
              />
              <Button
                text="about us"
                href={'/about-us'}
                variant="outlinedNav"
              />
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
