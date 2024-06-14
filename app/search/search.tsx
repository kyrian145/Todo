interface SearchProps{
    onchange:(text:string)=>void;
}
    
const search  = ({onchange}:SearchProps)=>{
return(
       <input
       placeholder="search user"
       type="text"
       onChange={(e)=>onchange(e.target.value)}
       />
)


}
export default search;
