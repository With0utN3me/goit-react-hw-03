import css from "./Feedback.module.css"
const Feedback = ({valueG, valueN, valueB, valueP, valueTF}) =>{
    return (
        <ul className={css["feedback-list"]}>
            <li className={css["feedback-list-item"]}>&#128151;Good: {valueG}</li>
            <li className={css["feedback-list-item"]}>&#10004;Neutral: {valueN}</li>
            <li className={css["feedback-list-item"]}>&#10060;Bad: {valueB}</li>
            <li className={css["feedback-list-item"]}>Total: {valueTF}</li>
            <li className={css["feedback-list-item"]}>&#128154;Positive: {valueP}&#37;</li>
        </ul>
    )
}
export default Feedback;