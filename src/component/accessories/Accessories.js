import './accessories.css';

const Accessories = ({AccessoriesData}) => {
    return (
        <section className='accessories' id='accessories'>
            <h1>Looking for Accessories?</h1>
            <div className='accessories-container'>
            {AccessoriesData.map((product, index) => {
                return (
                    <div className='acc-box1' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box2' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box3' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box4' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box5' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box6' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>,
                    <div className='acc-box7' key={index}>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                    </div>
                    

                )
            })}
                
            </div>
        </section>
    )
}

export default Accessories;