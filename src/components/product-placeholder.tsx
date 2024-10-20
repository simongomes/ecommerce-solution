/**
 * This component is used to show a placeholder for the product card when the data is loading.
 */
import React from "react";
import { Card } from "antd";

const ProductPlaceholder: React.FC = () => {
  return (
    <>
      <Card loading={true} style={{ minWidth: 300 }}>
        <Card.Meta
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
      <Card loading={true} style={{ minWidth: 300 }}>
        <Card.Meta
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
      <Card loading={true} style={{ minWidth: 300 }}>
        <Card.Meta
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
      <Card loading={true} style={{ minWidth: 300 }}>
        <Card.Meta
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
      <Card loading={true} style={{ minWidth: 300 }}>
        <Card.Meta
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default ProductPlaceholder;
