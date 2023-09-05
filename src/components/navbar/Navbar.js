import './Navbar.css'

function Navbar({item1, item2, item3, item4}){
    return(
        <div className='navbar'>
<div>
    Nome
</div>
<div className='navbar-content'>
<div className='navbar-content-children'>
    {item1}
</div>
<div className='navbar-content-children'>
{item2}
</div>
<div className='navbar-content-children'>
 {item3}
</div>
<div className='navbar-content-children'>
    {item4}
</div>
</div>
<div className='footer'>
<footer>
Titulo 1 Titulo 2<br></br> 
item 1   item 1<br></br>
item 2   item 2<br></br>
item 3   item 3
</footer>
</div>
</div>

    )
}

export default Navbar;