import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <div className="hinh">
          <img src={this.props.url} alt="header"></img>
        </div>
        {this.props.list.map((item) => {
          return <div className="link">{item}</div>;
        })}
      </>
    );
  }
}
class Danhmuc extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <div className="list">
          <div className="menu-item">{this.props.heading}</div>
          {this.props.list.map((item) => {
            return (
              <div className=" menu-item">{item}</div>
            );
          })}
        </div>
      </>
    );
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <div className="col-4 product-col">
          <div className="card h-100">
            <div className="hinh">
              <img src={this.props.url} alt="product"></img>
            </div>
            <div>{this.props.name}</div>
            <div className="price">{this.props.price}</div>
            <div className="but">
              <button className="but-xem">xem</button>
              <button className="but-mua">mua</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Productable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    }
  }

  render() {
    const total = this.state.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    return (

      <table className="table">
        <thead>
          <tr>
            <th className="text head">STT</th>
            <th className="text head">Tên mặt hàng</th>
            <th className="text head">Đơn giá</th>
            <th className="text head">Số lượng</th>
            <th className="text head">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product, index) => {
            return (
              <tr key={product.id}>

                <td className="text">{index + 1}</td>
                <td className="text">{product.name}</td>
                <td className="text">{product.price}</td>
                <td className="text">{product.quantity}</td>
                <td className="text">
                  <button className="but-xem" onClick={() => {
                    this.props.deleteProduct(product.name)
                  }}>
                    Xóa
                  </button>
                  <button className="but-xem" onClick={() => {
                    this.props.addProduct(product.name)
                  }}>
                    Thêm
                  </button>
                </td>
              </tr>

            );
          })}
          <tr>
            <th className="text-sum" colSpan={5}>Tổng tiền: {total}đ</th>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhmuc: [
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\1.png",
          name: "sản phẩm 1",
          price: 10000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\2.png",
          name: " sản phẩm 2",
          price: 20000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\3.png",
          name: " sản phẩm 3",
          price: 30000,

        },
        {
          hinh: ".:\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\4.png",
          name: " sản phẩm 4",
          price: 40000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\5.png",
          name: "sản phẩm 5",
          price: 50000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\6.png",
          name: "sản phẩm 6",
          price: 60000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\7.png",
          name: "sản phẩm 7",
          price: 70000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\8.png",
          name: "sản phẩm 8",
          price: 80000,

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\9.png",
          name: " sản phẩm 9",
          price: 90000,
        },],
      list: [
        {
          heading: "Danh mục sản phẩm",
          list: ["Đồ gia dụng", "Thực phẩm", "Thời trang", "Mỹ phẩm"],
        },
        {
          heading: "Nhà cung cấp",
          list: ["Chin su", "Vion", "Acecook", "Trung Nguyên", "Milo", "VietGap", "Mỹ phẩm"],
        },],
      table: [
        {
          name: "sản phẩm 1",
          price: 10000,
          quantity: 2,

        },
        {
          name: "sản phẩm 2",
          price: 20000,
          quantity: 4,

        },
        {
          name: "sản phẩm 3",
          price: 30000,
          quantity: 6,

        },
        {
          name: "sản phẩm 4",
          price: 40000,
          quantity: 8,

        },
        {
          name: "sản phẩm 5",
          price: 50000,
          quantity: 10,

        },
        {
          name: "sản phẩm 6",
          price: 60000,
          quantity: 12,

        },
        {
          name: "sản phẩm 7",
          price: 70000,
          quantity: 14,

        },
        {
          name: "sản phẩm 8",
          price: 80000,
          quantity: 16,

        },
        {
          name: "sản phẩm 9",
          price: 90000,
          quantity: 18,
        }],
    }
  }
  deleteProduct = (name) => {
    console.log(this)
    const products = this.state.table.filter((product) => product.name !== name);
    this.setState({ table: products });
  }
  addProduct = (name) => {
    console.log(this)
    let newTable = this.state.table.map((product) => {
      if (product.name == name) {
        product.quantity += 1;
      }
      return product
    })
    this.setState({ table: newTable })
  }
  render() {

    return <>
      <div className="container" id="header">
        <Header url={".\\01_HTML\\UITraining01\\UITraining01\\imgs\\banner.jpg"} list={["Đồ gia dụng", "Thực phẩm", "Thời trang", "Mỹ phẩm", "Liện hệ"]} />
      </div>
      <div className="container" id="main_content">
        <div className="left_sidebar">
          {this.state.list.map((item) => {
            return (
              <Danhmuc heading={item.heading} list={item.list} />
            )
          })}
        </div>
        <div className="right_sidebar">
          <div className="id">Danh mục sản phẩm</div>
          <div className="row">
            {this.state.danhmuc.map((item) => {
              return (
                <Product url={item.hinh} name={item.name} price={item.price} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="container" >
        <div className="customers">
          <Productable products={this.state.table} deleteProduct={this.deleteProduct} addProduct={this.addProduct} />
        </div>
      </div>
    </>

  }

}
