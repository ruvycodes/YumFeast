const Shimmer = () => {


    return (
        <div className="shimmer-container flex flex-wrap mt-3">

            <div className="shimmer-card w-52 py-[2px] px-1 h-80 mx-1 my-0 bg-[#ededed]">

                <div className="shimmer-img-container">
                    <div className="shimmer-img mx-auto my-[5px] h-[140px] w-[185px] rounded bg-[#D6D6D6] opacity-85"></div>
                </div>

                <div className="shimmer-line-container mt-8 ml-2 flex justify-center items-center flex-col">

                    <div className="shimmer-line bg-[#D6D6D6] w-[95%] mb-11 opacity-85 rounded-sm h-2"></div>
                    <div className="shimmer-line bg-[#D6D6D6] w-[95%] mb-11 opacity-85 rounded-sm h-2"></div>
                    <div className="shimmer-line bg-[#D6D6D6] w-[50%] mb-11 opacity-85 rounded-sm h-2"></div>
                </div>

            </div>



        </div>
    )

}

export default Shimmer