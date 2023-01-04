import { UploaderContainer } from './styles';
import React, { useState } from 'react';

interface Props {
    // color: string;
    // text: string;
    // icon: IconProp;
    // onClick: () => void;
}

const ImgUploader = (/*{color, text, icon, onClick }: Props*/) => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <UploaderContainer>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={'250px'} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <input
                type="file"
                name="myImage"
                onChange={event => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </UploaderContainer>
    );
};

export default ImgUploader;
