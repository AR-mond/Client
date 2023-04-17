import React, { useState } from 'react';
import styles from './test2.module.css';

const Test2 = () => {
    const [modelsInfo, setModelsInfo] = useState("");

    const handleModelsInfoChange = (ev) => {
        setModelsInfo(ev.target.value);
    }

    const handleDrop = (ev) => {
        console.log('File(s) dropped');
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            if (ev.dataTransfer.items.length > 10) {
                alert("파일은 최대 10개씩 올릴 수 있습니다.");
                return 1;
            }
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                //create_model(i).add_model({local_file: event.dataTransfer.files[i]});
                console.log(ev.dataTransfer.files);
                if (ev.dataTransfer.items[i].kind === 'file'){
                    let file = ev.dataTransfer.items[i].getAsFile();
                    console.log(`...file[${i}].name = ${file.name}`);
                }
            }
        }
        else {
            for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log(ev.dataTransfer.files[i]);
            }
        }
    };

    const handleDragOver = (ev) => {
        ev.preventDefault();
    };


    return (
        <form id="target" method="POST">
            <input id="models_info" type="hidden" name="models_info" onChange={handleModelsInfoChange} />
            <div id="drop_zone" onDrop={handleDrop} onDragOver={handleDragOver}>
            <div id="cont_box">
                <p>파일을 끌어 당겨서 업로드 해주세요.(.stl)</p>
                <div id="stl_cont"/></div>
            </div>
        </form>
    );
};

export default Test2;