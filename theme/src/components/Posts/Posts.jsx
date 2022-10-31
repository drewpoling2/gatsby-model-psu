/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Stack } from '@bit/stack';

export const Posts = ({ item }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'row', py: 2 }}>
      <div sx={{ pr: 3 }}>
        <Stack variant="col">
          <Styled.p sx={{ textTransform: 'uppercase', my: 0 }}>
            {item.month}
          </Styled.p>
          <h2
            sx={{ textTransform: 'uppercase', color: 'darkNavyBluePS', my: 0 }}
          >
            {item.day}
          </h2>
        </Stack>
      </div>
      <Styled.p
        sx={{
          my: 0,
          cursor: 'pointer',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {item.description}
      </Styled.p>
    </div>
  );
};
