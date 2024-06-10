import '../../Css/SideBar.css'
const SideBar = () => {
    let contents = ['Courses']
    let Courses = ['SET','SEM','SOBE']
    let list = 0;
    return ( 
        <div className="sideBar">
            <h3>Menu</h3>
            {
                contents.map((data)=><div className='courses' key={list++}>{data}</div>)
                
            }
            
            <ul className='school'>{
                Courses.map((c) =><div className='course' key={list++}>{c}</div> )}
            </ul>
            
        </div>
     );
}
 
export default SideBar;