import { useState } from "react";
const defaultFormValue = {
    // key name uguali alle colonne del server
    name: "",
    vote: "",
    text: ""
}

function ReviewForm(props) {
    const [formValue, setFormValue] = useState(defaultFormValue);

    function handleFormValue(event) {
        // console.log(event);
        const { value, name } = event.target
        const newFormValue = { ...formValue, [name]: value }
        setFormValue(newFormValue)
        // console.log(newFormValue);
    };

    return (
        <>
            <form className="d-flex flex-column align-items-center" >
                <div className="input-group w-75 mb-3">
                    <span className="input-group-text w-25">Name</span>
                    <input type="text" className="form-control" id="name" value={formValue.name} name="name" onChange={handleFormValue} />
                </div>
                <div className="input-group w-75 mb-3">
                    <label className="input-group-text w-25" htmlFor="vote">Options</label>
                    <select className="form-select" id="vote" value={formValue.vote} name="vote" onChange={handleFormValue}>
                        <option selected>-</option>
                        <option value="1">&#9733;</option>
                        <option value="2">&#9733;&#9733;</option>
                        <option value="3">&#9733;&#9733;&#9733;</option>
                        <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                        <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                    </select>
                </div>
                <div className="input-group w-75 mb-3">
                    <span class="input-group-text w-25">text</span>
                    <textarea type="text" className="form-control" id="text" value={formValue.text} name="text" onChange={handleFormValue} />
                </div>
                <button type="submit" className="btn btn-light mb-3">Submit</button>
            </form >
        </>
    );
};

export default ReviewForm;