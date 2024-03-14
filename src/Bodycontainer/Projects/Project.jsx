export function Project({data,prueba}){
    console.log (prueba)
return(

<div className='card' >
<div className='card_image'>
  <img src= {data.image} />
</div>
<div className='card_subtitle'>
    {data.skills.map(function(skill,i){return <span key ={i}>{skill}</span>
    })}
</div>

<div className='card_body'>
  <span className='card_title' >{data.title}</span>
  <div className='card_description'>{data.description}</div>
  <div className='card_button'>
    {data.live && (<button className='card_buttonb1'>Live {'<~>'} </button>) }
    {data.cached && (<button className='card_buttonb1' >Cached {'≥'}</button>)}
  </div>
</div>
</div>
)
}