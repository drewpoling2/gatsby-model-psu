/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
export const ContentBlock = ({ paragraphText, headingText, imageSrc }) => {
  return (
    <div sx={{ width: 4 }}>
      <Stack variant="col">
        <div
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            position: 'relative',
          }}
          sx={{ height: '640px' }}
          altText={`${imageSrc}`}
        >
          <div
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              pl: 5,
              pr: 7,
              bottom: 5,
            }}
          >
            <h1
              sx={{
                mb: 3,
                fontSize: 10,
                color: 'whitePS',
                fontStyle: 'italic',
              }}
            >
              {headingText}
            </h1>
            <div
              sx={{ mb: 3, borderBottom: '1px solid white', width: '5%' }}
            ></div>
            <p
              sx={{
                variant: 'text.copyP',
                fontSize: 9,
                color: 'whitePS',
                pb: 4,
              }}
            >
              {paragraphText}
            </p>
            <Button variant="outlined" text={'learn more >'} />
          </div>
        </div>
      </Stack>
    </div>
  );
};
