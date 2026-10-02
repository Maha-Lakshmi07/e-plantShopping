import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
                    description: "Removes mold spores and purifies indoor air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity and purifies indoor spaces.",
                    cost: "$14"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and cleans air toxins effectively.",
                    cost: "$20"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Air purifying with soothing gel for skin burns.",
                    cost: "$10"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
                    description: "Calming scent, used in aromatherapy to reduce stress.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729808999-652d636329a1?q=80&w=1000&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes relaxation and sleep.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Aromatic herb that boosts memory and focus.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/02/02/03/mint-1117498_1280.jpg",
                    description: "Refreshing aroma, great for tea and culinary uses.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2018/06/10/17/39/lemon-balm-3466928_1280.jpg",
                    description: "Citrusy scent that helps relieve stress and anxiety.",
                    cost: "$14"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/eucalyptus-1867181_1280.jpg",
                    description: "Strong menthol fragrance that clears respiratory pathways.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera Medicinal",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothes burns and heals skin irritations naturally.",
                    cost: "$12"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/02/22/05/echinacea-554625_1280.jpg",
                    description: "Boosts immunity and helps fight off common colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496780_1280.jpg",
                    description: "Aids digestion and relieves headaches.",
                    cost: "$13"
                },
                {
                    name: "Tulsi (Holy Basil)",
                    image: "https://cdn.pixabay.com/photo/2021/01/06/07/31/holy-basil-5893322_1280.jpg",
                    description: "Adaptogenic herb that enhances immunity and stress relief.",
                    cost: "$15"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2017/05/15/17/43/chamomile-2315570_1280.jpg",
                    description: "Calmative herb that aids sleep and soothes stomachs.",
                    cost: "$14"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/19/09/52/calendula-4348425_1280.jpg",
                    description: "Heals skin wounds and reduces inflammation.",
                    cost: "$11"
                }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tag">
                    <div className="landing_logo">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
                            <i style={{ fontSize: '12px' }}>Where Green Meets Serenity</i>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
                    <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
                        <h1 className="cart" style={{ margin: 0, fontSize: '24px' }}>🛒 <span className="cart_quantity_count">{calculateTotalQuantity()}</span></h1>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid" style={{ padding: '20px' }}>
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 style={{ textAlign: 'center', margin: '20px 0' }}><div>{category.category}</div></h1>
                            <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center' }}>
                                        <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
                                        <div className="product-title" style={{ fontWeight: 'bold', margin: '10px 0' }}>{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost" style={{ fontSize: '18px', margin: '10px 0' }}>{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            style={{ backgroundColor: addedToCart[plant.name] ? 'gray' : '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer' }}
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
