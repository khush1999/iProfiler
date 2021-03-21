export const preloader = () => {
    return(
        setTimeout(()=>{
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>  
        },5000))
    }