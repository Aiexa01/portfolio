export function Skill({ data, prueba }) {
    console.log(prueba)

    return (
        <div className='block'>
            <div className='blockname'>{data.title} </div>
            <span>{data.span1} </span>
            <span >{data.span2} </span>
            <span>{data.span3} </span>

        </div>


    )
}