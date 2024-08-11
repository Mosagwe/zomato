import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const CategoryItem = ({ category }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/${category.name}/foods`}>
        <Card.Img
          src={category.imageUrl}
          variant="top"
          style={{ width: 280, height: 220 }}
        />
      </a>
      <Card.Body>
        <a href={`/${category.name}/foods`}>
          <Card.Title as="div">
            <strong>{category.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
