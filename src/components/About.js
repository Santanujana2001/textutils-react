export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid white'
    // })
    let myStyle = {
        color: props.mode === "dark"?'white':'black',
        backgroundColor: props.mode === "dark"?'black':'white',
        border:'0.1px solid white'
    }
  return (
    <div className="container" style={{color: props.mode === "dark"?'white':'#00182f'}}>
    <h1 className="my-4">About</h1>
        <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <h6><strong>What is it ?</strong></h6>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This is a text utility app where you can do various experiments with your text , such as : <b>uppercase , lowercase , pronunciation , word count etc.</b>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <h6><strong>About me</strong></h6>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Hi , my name is <b>Santanu Jana</b> , i am a computer science student at Hooghly Engneering and technology . I love to learn new things and i enjoy creating websites and apps .
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <h6><strong>Contact me</strong></h6>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <a href="https://www.linkedin.com/in/santanu-jana-241119201/"><i className="fa-brands fa-linkedin fa-xl mx-3" ></i></a>
                    <a href="mailto:sanujana7551@gmail.com"><i className="fa-regular fa-envelope mx-3 fa-xl"></i></a>
                    <a href="https://github.com/Santanujana2001"><i className="fa-brands fa-github mx-3 fa-xl"></i></a>
                    <a href="https://wa.me/8617281029?text=Send20%a20%quote"><i className="fa-brands fa-whatsapp mx-3 fa-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
