import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select a valid format file');
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            
            <div className="output">
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default Upload;