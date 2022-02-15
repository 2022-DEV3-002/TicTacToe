import Tile from "./Tile";

const Grid = (props) => {
    return (
        <div className="Grid">
            <div className="Grid-row">
                <Tile
                    index={0}
                    value={props.gridArray[0]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={1}
                    value={props.gridArray[1]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={2}
                    value={props.gridArray[2]}
                    onTilePress={props.onTilePress}
                />
            </div>
            <div className="Grid-row">
                <Tile
                    index={3}
                    value={props.gridArray[3]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={4}
                    value={props.gridArray[4]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={5}
                    value={props.gridArray[5]}
                    onTilePress={props.onTilePress}
                />
            </div>
            <div className="Grid-row">
                <Tile
                    index={6}
                    value={props.gridArray[6]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={7}
                    value={props.gridArray[7]}
                    onTilePress={props.onTilePress}
                />
                <Tile
                    index={8}
                    value={props.gridArray[8]}
                    onTilePress={props.onTilePress}
                />
            </div>
        </div>
    );
}
export default Grid;