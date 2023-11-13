import React, { useState } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from "./data"

function App() {

  const [menu, setMenu] = useState(Menu);

  const menuItem = [... new Set(Menu.map((elm, ind) => {
    return elm.category;
  })), 'all'];

  const filter = (menuItem) => {
    if (menuItem === 'all') {
      setMenu(Menu);
      return;
    }
    const newMenuItem = Menu.filter((elm) => {
      const { category } = elm;
      // console.log(category);
      return category === menuItem;
    })
    // console.log(newMenuItem);
    setMenu(newMenuItem);
  }

  return (
    <>
      <h1 className='mb-5'>Menu Filter</h1>
      <div className="menu d-flex justify-content-evenly mb-4">
        {menuItem.map((elm, ind) => {
          return <button key={ind} type="button" className="btn btn-outline-primary" onClick={() => { filter(elm) }}>{elm}</button>
        })}
        {/* <button type="button" className="btn btn-outline-primary" onClick={() => { filter("breakfast") }}>Breakfast</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => { filter("lunch") }}>Lunch</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => { filter("evening") }}>Evening</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => { filter("dinner") }}>Dinner</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => { setMenu(Menu) }}>All</button> */}

      </div>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>
        {menu.map((elm) => {
          const { id, name, category, price, decription, img } = elm;
          return <div className="card mb-4 " style={{ 'maxWidth': '500px', 'width': '100%' }} key={id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{decription}</p>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <p className="h6 text-primary">Price: {price} </p>
                    <button type="button" className="btn btn-primary">Order Now</button>
                  </div>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default App
