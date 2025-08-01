function Localshow(){

    let show = JSON.parse(localStorage.getItem('userdata'))

    function Delete(){
        localStorage.clear('userdata')

    }
 
    return(
        <>
        <h1>helloo</h1>

        <h1>username {show.username}</h1>
        <h1>email {show.email}</h1>
        <h1>password{show.password}</h1>

        <button onClick={Delete}>Delete</button>



        </>
    )
}
export default Localshow