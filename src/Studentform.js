import React, { useState } from "react";
export default function Studentform() {
  const[sfname,setSFname]=useState("");
  const[slname,setSlname]=useState("");
  const [date,setDate]=useState("")
  const[textarea,setTextarea]=useState("")
  const[ffname,setFFname]=useState("");
  const[flname,setFlname]=useState("");
  const [fqualification,setFqualification]=useState("")
  const[fmobno,setFMobno]=useState("")
  const [femail,setfEmail]=useState("")
  const[focupation,setFocupation]=useState("")
  const[mfname,setMFname]=useState("");
  const[mlname,setMlname]=useState("");
  const[mmobno,setMMobno]=useState("")
  const [memail,setmEmail]=useState("")
  const[mocupation,setMocupation]=useState("")
  const[address,setAddress]=useState("")

  const nameHandler=(e)=>{
    setSFname(e.target.value) 
  }
  const lnameHandler=(e)=>{
    setSlname(e.target.value) 
  }
  const dateHandler=(e)=>{
    setDate(e.target.value)
  }
  const textareaHandler=(e)=>{
    setTextarea(e.target.value)
  }
  const ffnameHandler=(e)=>{
    setFFname(e.target.value) 
  }
  const flnameHandler=(e)=>{
    setFlname(e.target.value) 
  }
  const fqualicationHandler=(e)=>{
    setFqualification(e.target.value)
  }
  const numberHandler=(e)=>{
    setFMobno(e.target.value)
}

const emailHandler=(e)=>{
  setfEmail(e.target.value)
}
const focupationHandler=(e)=>{
  setFocupation(e.target.value)
}
const MfnameHandler=(e)=>{
  setMFname(e.target.value) 
}
const MlnameHandler=(e)=>{
  setMlname(e.target.value) 
}
const mnumberHandler=(e)=>{
  setMMobno(e.target.value)
}
const memailHandler=(e)=>{
  setmEmail(e.target.value)
}
const mocupationHandler=(e)=>{
    setMocupation(e.target.value)
}
const addressHandler=(e)=>{
  setAddress(e.target.value)
}
  const clickHandler =(event)=>{
        event.preventDefault();
        var email1=femail
    var atposition=email1.indexOf("@");
    var dotposition=email1.lastIndexOf(".");
        if(sfname ===""){
          alert("First name should not be empty");
          document.form.sfname.focus();
        }
        else if(!isNaN(sfname)){
          alert("First name should not be integer");
          document.form.sfname.focus();
        }
        else if(slname===""){
          alert("Last name should not be empty");
          document.form.slname.focus();
        }
        else if(!isNaN(slname)){
          alert("last name should not ne integer");
          document.form.slname.focus();
        }
        else if(date===""){
          alert("Plese enter your date of Birth");
        }
        else if(textarea===""){
          alert("Please enter your full address");
          document.form.textarea.focus();
        }
        else if(ffname ===""){
          alert("Father First name should not be empty");
          document.form.ffname.focus();
        }
        else if(!isNaN(ffname)){
          alert("Father First name should not be integer");
          document.form.ffname.focus();
        }
        else if(flname===""){
          alert(" Father Last name should not be empty");
          document.form.flname.focus();
        }
        else if(!isNaN(flname)){
          alert("Father last name should not ne integer");
          document.form.flname.focus();
        }
        else if(fqualification===""){
          alert("Plesse Enter Father qualifications ")
          document.form.fqualification.focus();
        }
        else if(fmobno===""){
          alert("Enter mobile number")
          document.form.number.focus();
        }
        else if(isNaN(fmobno)){
          alert("number should be integer")
          document.form.number.focus();
       }
        else if(email1===""){
          alert("Plese enter your email");
        }
        else if ((atposition<1 || email1.lastIndexOf(".")<atposition+2 || dotposition+2>=email1.length)) {
          alert("please enter valid email");
          document.form.email.focus();
        }
        else if(focupation===""){
          alert("Father ocupation should not be empty");
          document.form.focupation.focus();
        }
        else if(!isNaN(focupation)){
          alert("ocupation should not be integer");
          document.form.focupation.focus();
        }
        else if(mfname ===""){
          alert(" First Mother name should not be empty");
          document.form.mfname.focus();
        }
        else if(!isNaN(mfname)){
          alert(" First Mother name should not be integer");
          document.form.mfname.focus();
        }
        else if(mlname===""){
          alert("  Last Mother name should not be empty");
          document.form.mlname.focus();
        }
        else if(!isNaN(mlname)){
          alert(" last Mother name should not ne integer");
          document.form.mlname.focus();
        }
        else if(mmobno===""){
          alert("Enter mobile number")
          document.form.mnumber.focus();
        }
        else if(isNaN(mmobno)){
          alert("number should be integer")
          document.form.mnumber.focus();
       }
       else if(memail===""){
        alert("Plese enter your email");
      }
      else if ((memail.indexOf("@")<1 || memail.lastIndexOf(".")<memail.indexOf("@")+2 || memail.lastIndexOf(".")+2>=memail.length)) {
        alert("please enter valid email");
        document.form.memail.focus();
      }
      else if(mocupation===""){
        alert("Mother ocupation should not be empty");
        document.form.mocupation.focus();
      }
      else if(!isNaN(mocupation)){
        alert("ocupation should not be integer");
        document.form.mocupation.focus();
      }
      else if(address===""){
        alert("address should not empty");
        document.form.address.focus();
      }
      else if(!isNaN(address)){
        alert("address should not be empty");
        document.form.address.focus();
      }
  }
  return (
    <div>
        <center>
      <form onSubmit={clickHandler} name='form'>
        <table>
          <tbody>
            <tr>
              <tr>
                <td> Name of Student</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text" name='sfname' placeholder="First" onChange={nameHandler} />
                </td>
                <td>
                  <input type="text" name='slname' onChange={lnameHandler} placeholder="last" />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Date of Birth</td>
              </tr>
            </tr>
            <tr>
              <td>
                <tr>
                  <input type="date" onChange={dateHandler} />
                </tr>
              </td>
            </tr>
            <tr>
              <tr>
                <td>Gendar</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="radio" name="gender" defaultChecked='checked' />
                  Male
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="radio" name="gender" />
                  Female
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Details of siblings</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <textarea type="text" name='textarea' onChange={textareaHandler} />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Parent's Information</td>
              </tr>
            </tr>
            <tr>
              <tr>Father's Name</tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text" name='ffname' onChange={ffnameHandler}  placeholder="First"/>
                </td>
                <td>
                  <input type="text" name='flname' onChange={flnameHandler}  placeholder="Last" />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>Fatder's qualification</tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text" name='fqualification' onChange={fqualicationHandler} />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Phone</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text" name='number' minLength="10" maxLength="10" onChange={numberHandler} />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Email</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="email" name='email'  onChange={emailHandler} />
                </td>
              </tr>
            </tr>
            <tr><tr><td>Father's Ocupation</td></tr></tr>
            <tr><tr><td><input type="text" name="focupation" onChange={focupationHandler} /></td></tr></tr>
            <tr>
              <tr>
                <td> Mother's Name</td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text"  name='mfname' onChange={MfnameHandler} placeholder="First" />
                </td>
                <td>
                  <input type="text" name='mlname' onChange={MlnameHandler} placeholder="First" />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>Mother's qualification</tr>
            </tr>
            <tr>
              <tr>
                <td>
                  <input type="text" placeholder="this is not mandetory" />
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td>Phone</td>
              </tr>
            </tr>
            <tr>
              <tr><td>
                  <input type="text" minLength="10" maxLength="10" name="mnumber" onChange={mnumberHandler} /></td></tr>
            </tr><tr><tr><td>Email</td></tr></tr>
            <tr><tr><td><input type="text" name='memail' onChange={memailHandler} /></td></tr></tr>
            <tr><tr><td>Mother's Ocupation</td></tr></tr>
            <tr><tr><td><input type="text" name="mocupation" onChange={mocupationHandler}/></td></tr></tr>
            <tr><tr><td>Address</td></tr></tr>
            <tr><tr><td><input type="text" name="address" onChange={addressHandler} minLength={15}/></td></tr></tr>
          <button type="submit">Submit</button>
          </tbody>
        </table>
      </form>
      </center>
    </div>
  );
}
