import { useState } from "react"


export default function Reverse() {
  const [sub, setSub] = useState('');
  const [reversed, setReversed] = useState('');

  const handleOnChange = (event) => {
    let sub = event.target.value;
    if (sub.substr(0, 4) === 'sub_'){
      sub = sub.substr(4);
    }
    const license = sub.split('').reverse().join('');
    setReversed(license)
    setSub(sub);
  }

  return (
   <div style={{margin: '4rem', textAlign: 'center'}}>
     <input onChange={handleOnChange} />
     <div style={{fontFamily:'monospace', margin: '2rem'}}>INPUT: {sub}</div>
     <div style={{fontFamily:'monospace', margin: '2rem'}}>OUTPUT: {reversed}</div>
   </div>
  )
}
