import like from '../../public/images/like.svg'


export default function Data({id, title, image, removeCard, setItem}) {
  return (
    <li className="list-item">
        <img src={like} alt="" className='like-icon' />
        <img src={image} alt="" width={240} height={280} />
        <h2>{title}</h2>
        <button>add to cart</button>
        <button id='remove' onClick={() => removeCard(id)}>remove</button>
    </li>
  )
}
