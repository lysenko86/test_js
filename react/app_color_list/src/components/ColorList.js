import { Color } from './Color'

export const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.maps(color => <Color key={color.id} {...color} />)
        }
    </div>
