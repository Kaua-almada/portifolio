import './Rodape.css'

function Rodape({titulo1, item1, item2, item3, item4, item5, titulo2}){
    return(
        <div className='footer-body'>
            
            <div className='footer-title1'>
                {titulo1}
            </div>

            <div className='footer-itens1'>
                <div>
                {item1}
            </div>
            <div>
                {item2}
            </div>
            <div>
                {item3}
            </div>
            </div>
            




            <div className='footer-title-1'>
                {titulo2}
            </div>

            <div className='footer-itens1'>
            <div>
                {item4}
            </div>
            <div>
                {item5}
            </div>
        </div>
            </div>
            
        

    )
}

export default Rodape;