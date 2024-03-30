import css from "./Description.module.css"
const Description = () => {
    return (
        <div className={css["description-wrapper"]}>
            <h1 className={css["title"]}>&#127861;Sip Happens Café</h1>
            <p className={css["description-p"]}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}
export default Description;