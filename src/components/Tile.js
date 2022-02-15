const Tile = (props) => {
    return(
        <button
        className="Grid-tile"
        disabled={props.value !== 0}
        onClick={() => props.onTilePress(props.index)}
        >
            {props.value === 0 ? "" : props.value === 1 ? "X" : "O"}
        </button>
    );
}
export default Tile;