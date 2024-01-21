import React, { FC } from 'react';

import Helmet from 'react-helmet';

interface IMetadataProps {
  title: string;
  content: string
}

const Metadata: FC<IMetadataProps> = ({
  title,
  content
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"
        content={content} />
    </Helmet>
  );
};

export default Metadata;