/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
export const ContentBlock = ({ paragraphText, headingText, imageSrc }) => {
  return (
    <div sx={{ width: 9 }}>
      <Stack variant="col">
        <Styled.h1 sx={{ mb: 3, mt: 0 }}>{headingText}</Styled.h1>
        <img height="540px" altText={`${imageSrc}`} src={imageSrc}></img>
        <Styled.p sx={{ pb: 2, pt: 2 }}>{paragraphText}</Styled.p>
        <Button variant="outlined" text={'learn more >'} />
      </Stack>
    </div>
  );
};
