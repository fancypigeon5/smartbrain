import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onEnterPress, onImageChange }) => {
    return(
        <div>
            <p className='f3'>
                {'this magic brain will detect any face in your image'}
            </p>
            <div className='container'>
                <div className='pa5 br3'>
                    <label htmlFor="inputTag" className='lable form pa4 br3 shadow-5'>click to upload image</label>
                    <input className='imageUpload' id="inputTag" type='file' onChange={onImageChange} />
                </div>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} onKeyDown={onEnterPress} placeholder='image URL' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;