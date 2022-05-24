const RowComponent = () => {
    return (
        <div className="row">
            <button type="button" className="operator">+/-</button>
            <input type="number"/>
            <button type="button" className="disable-btn">Disable</button>
            <button type="button" className="delete-btn">Delete</button>
        </div>
    );
}
 
export default RowComponent;