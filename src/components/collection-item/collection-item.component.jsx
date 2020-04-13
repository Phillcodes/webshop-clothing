import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl, test}) => (
    <div className="collection-item">
<div   
className="image"
style={{
    backgroundImage: `url(${imageUrl})`
}}
/>
<div className="collection-footer">
    <span className="name"> { name } </span>
    <span className="price"> { price } </span>
    <span className="test"> { test }</span>
</div>
    </div>
)

export default CollectionItem
