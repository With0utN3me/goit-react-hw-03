import css from "./Options.module.css"
const Options = ({updateF, totalF, resetF}) => {
return (
    <div className={css["options-wrapper"]}>
        <button className={css["options-button"]} onClick={() => updateF("good")}>&#128151;Good</button>
        <button className={css["options-button"]} onClick={() => updateF("neutral")}>&#10004;Neutral</button>
        <button className={css["options-button"]} onClick={() => updateF("bad")}>&#10060;Bad</button>
        {totalF > 0 && <button className={css["options-button"]} onClick={resetF}>&#9851;Reset</button>}
    </div>
)
}
export default Options;