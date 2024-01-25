// import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white'

    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        border: '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'grey',
    }

    let AboutUsStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
    }

    // const [btnText, setBtnText] = useState("Enable dark Mode")

    // const [btnColor, setBtnColor] = useState('btn btn-primary my-3')

    // let toggleStyles = () => {
    //     if(myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })

    //         setBtnText("Enable dark Mode")
    //         setBtnColor('btn btn-primary my-3')
    //     }

    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'grey',
    //             border: '1px solid white'
    //         })

    //         setBtnText("Enable light Mode")
    //         setBtnColor('btn btn-secondary my-3')
    //     }
    // }


  return (
    <div className='container' style={AboutUsStyle}>
        <h2 className='m-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item my-2 " >
            <h2 className="accordion-header">
            <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyse Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or, removing extra spaces from the world, sectences, it also provides features like clear text and copy written text as well. It allows you to convert the written text or sentence in Lower and Uppercase as well.
            </div>
            </div>
        </div>
        <div className="accordion-item my-2" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.

            </div>
            </div>
        </div>
        <div className="accordion-item my-2" style={myStyle} >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}
