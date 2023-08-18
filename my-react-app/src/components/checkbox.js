function Checkbox(props){
    return(

<div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Walk the doggo
            </label>
            </div>
    );
}
export default Checkbox