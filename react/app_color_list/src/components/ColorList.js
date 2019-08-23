import React from 'react';
import Color from './Color'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            /*colors.maps(color =>
                <Color key={color.id} {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)}
                />)*/
            <Color key={colors[0].id} {...colors[0]}
                onRate={(rating) => onRate(colors[0].id, rating)}
                onRemove={() => onRemove(colors[0].id)}
            />
        }
    </div>

export default ColorList;
