import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router";
export function Card(props){
    const ratingChanged=(x)=>console.log(x);
    const navigate=useNavigate();
    const {name,review,price,rating,id,image}=props;
    return (
        <button onClick={()=>navigate(`/product/${id}`)}className="hover:shadow-xl  border-black grid grid-cols-2 gap-2 rounded-xl object-contain"><img src={image} className="rounded-xl"></img>
       <div> <span className="text-xl font-semibold">{name}</span>
      <ReactStars
    count={5}
    onChange={ratingChanged}
  value={rating}
  a11y={true}
    size={24}
    activeColor="#ffd700"
  />
  <span><pre>({review} reviews)</pre></span>
  <span className="text-red-700 text-xl font-semibold">Rs:{price}</span>
  </div>
  </button>
)
}