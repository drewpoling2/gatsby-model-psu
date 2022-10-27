// import React from 'react';

// export const LessonTemplate = ({ data: { quickLink } }) => (
//   <div>
//     <div>
//       {documentToReactComponents(quickLink.pageContent.json, {
//         renderNode: {
//           [BLOCKS.HEADING_1]: (_node, children) => (
//             <h1 style={{ color: 'blue' }}>{children}</h1>
//           ),
//           [BLOCKS.EMBEDDED_ASSET]: (node) => (
//             <img
//               src={`${node.data.target.fields.file['en-US'].url}?w=300&q=90`}
//               alt={node.data.target.fields.cardTitle['en-US']}
//             />
//           ),
//         },
//       })}
//     </div>
//   </div>
// );
