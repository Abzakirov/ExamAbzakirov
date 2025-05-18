import React from 'react';
import { Skeleton, Card } from 'antd';

const { Meta } = Card;

const ImageTitleSkeleton: React.FC = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<Skeleton.Image style={{ width: '100%', height: 180 }} active />}
    >
      <Skeleton active title={{ width: '80%' }} paragraph={false} />
    </Card>
  );
};

export default ImageTitleSkeleton;
