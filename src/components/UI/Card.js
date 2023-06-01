import "./Card.css";

const CardExpense = (props) => {
    let classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>
}

export default CardExpense;