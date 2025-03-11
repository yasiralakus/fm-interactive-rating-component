import { useState } from "react"

export default function App() {

    const [selected, setSelected] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [otherPage, setOtherPage] = useState(false);

    function onClickFunc(e) {
        e.preventDefault();
        setSelected(Number(e.target.textContent))
        setIsSubmit(true)
    }

    return (
        <div className="full-page">

            {
                otherPage === false ?

                <div className="main-box">

                <div className="icon-star">
                    <img src="./images/icon-star.svg" alt="" />
                </div>

                <h1>How did we do?</h1>

                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                <div className="btns">
                    <button className={selected === 1 && 'selected'} onClick={onClickFunc}>1</button>
                    <button className={selected === 2 && 'selected'} onClick={onClickFunc}>2</button>
                    <button className={selected === 3 && 'selected'} onClick={onClickFunc}>3</button>
                    <button className={selected === 4 && 'selected'} onClick={onClickFunc}>4</button>
                    <button className={selected === 5 && 'selected'} onClick={onClickFunc}>5</button>
                </div>

                <button onClick={() => (setOtherPage(true))} style={isSubmit ? {cursor: 'pointer'} : {cursor: 'not-allowed'}} disabled={isSubmit === false}>SUBMIT</button>

            </div>
            :
            <div className="main-box">
                <img src="./images/illustration-thank-you.svg" alt="" className="phone" />
                <div className="you-selected">
                    <p>You selected {selected} out of 5</p>
                </div>
                <div className="thanks">
                    <h1>Thank you!</h1>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
            </div>
            }

        </div>
    )
}