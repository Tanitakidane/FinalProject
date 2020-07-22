import React, { Component } from 'react'

export default class RightSideBarBlog extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-12">
            <aside className="sidebar">
              <div className="side_rec_area">
                <div className="side_title">Best recipes of the month</div>
                <div className="side_recipes"><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Yummy Mango Citrus Drink</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Chicken and Chourico Pizza</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Veal Marsala</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Healthy Green Juice</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Strawberry Spinach Salad</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Slow Cooker Chicken and Salsa </div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Egg in a Hole</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Tropical Cooler Smoothie</div></a></div>
              </div>
              <div className="side_rec_area side_rec_area_2">
                <div className="side_title">Latest recipes</div>
                <div className="side_recipes"><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Yummy Mango Citrus Drink</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Chicken and Chourico Pizza</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Veal Marsala</div></a><a className="side_item" href="#">
                    <div className="img"><img className="resize" src="img/demo.jpg" alt="" /></div>
                    <div className="title dot">Healthy Green Juice            </div></a></div>
              </div>
            </aside>
          </div>
        )
    }
}
