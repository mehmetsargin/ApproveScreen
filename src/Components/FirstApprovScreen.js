import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';





function FirstApprovScreen() {


    const [form, setForm] = useState({ fromname: "", replyadress: "", subject: "", preheader: "", templatename: "", editor: "" });
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)
    }

    const url = "";
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            fromname: form.fromname,
            replyadress: form.replyadress,
            subject: form.subject,
            preheader: form.preheader,
            templatename: form.templatename,
            editor: form.editor
        })
            .then(res => {
                console.log(res.data)
            })
    }


    return (
        <div>
            <div >
                <form onSubmit={(e) => submit(e)}>
                    <label>************BİRİNCİ ONAYCI************</label>
                    <p>{form.preheader}</p>
                    <div className="form-group">
                        <label>FROM NAME:</label>
                        <select name="fromname" value={form.fromname} onChange={handleChange} id="fromname">
                            <option value="volvo">Volvo</option>
                            <option value="renault">Renault</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label >REPLY ADRESS:</label>
                        <select name="replyadress" value={form.replyadress} onChange={handleChange} id="replyadress">
                            <option value="volvo">Volvo</option>
                            <option value="renault">Renault</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="form-group">  <label>SUBJECT:</label>
                        <input type='text' name="subject" value={form.subject} onChange={handleChange} size={"40"} ></input>
                    </div>

                    <div className="form-group">  <label>PRE HEADER:</label>
                        <input type='text' name="preheader" value={form.preheader} onChange={handleChange} size={"40"}></input>
                    </div>

                    <div className="form-group"> <label>TEMPLATE NAME:</label>
                        <input type='text' name="templatename" value={form.templatename} onChange={handleChange} size={"40"}></input>
                    </div>

                    <div className="form-group"><textarea id="editor" name="editor" value={form.editor} onChange={handleChange} rows="12" cols="200"></textarea></div>
                    <div className="form-group">
                        <div className="col">
                            <button> <ImAttachment />Attachments</button>
                            <Link to="/önizlemeşablon"> <button>Preview Template</button>  </Link>
                        </div>
                        <div className="col">
                            <button className="border-none">&lt; Vazgeç</button>
                            <button>Red</button>
                            <Link to="/ikincionayci" > <button >Onaya Gönder</button> </Link>
                        </div>
                    </div>
                </form>



            </div>
        </div>
    )
}


export default FirstApprovScreen;
