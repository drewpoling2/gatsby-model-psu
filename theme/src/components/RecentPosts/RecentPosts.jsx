/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Stack } from '@bit/stack';
import { Posts } from '@bit/posts';

export const RecentPosts = ({ allPostsLink, heading, postData }) => {
  return (
    <div sx={{ pl: 5 }}>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          alignContent: 'center',
        }}
      >
        <Styled.h1 sx={{ mr: 5, mt: 0 }}>{heading}</Styled.h1>
      </div>
      <Stack variant="col">
        {postData
          ? postData.map((item, index) => {
              return <Posts item={item} key={index} />;
            })
          : null}
      </Stack>
      <Styled.h4 sx={{ cursor: 'pointer', mt: 2, color: 'darkNavyBluePS' }}>
        {allPostsLink}
      </Styled.h4>
    </div>
  );
};
