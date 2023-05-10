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
          return <div className="link" >{item}</div>;
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
          <div className="active menu-item">{this.props.heading}</div>
          {this.props.list.map((item) => {
            return (
              <div className="product menu-item">{item}</div>
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
        <div className="hinh">
          <img src={this.props.url} alt="product"></img>
        </div>
        <div>{this.props.name}</div>
        <div className="price">{this.props.price}</div>
        <div className="but">
          <button className="but-xem">xem</button>
          <button className="but-mua">mua</button>
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
      <div className="container">
        <table className="customers">
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
                    <button onClick={() => {
                      this.props.deleteProduct(product.name)
                    }}>
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="text-sum">Tổng tiền: {total}đ</td>
            </tr>
          </tbody>
        </table>
      </div>
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
  deleteProduct(name) {
    const products = this.state.table.filter((product) => product.name !== name);
    this.setState({ table: products });
  }
  increaseDanhMuc() {

    const increaseList = this.state.list.push()
  }
  render() {

    return <>
      <div className="container" id="header">
        <Header url={".\\01_HTML\\UITraining01\\UITraining01\\imgs\\banner.jpg"} list={["Đồ gia dụng", "Thực phẩm", "Thời trang", "Mỹ phẩm", "Liện hệ"]} />
      </div>
      <div className="container" id="main">
        <div className="left_sidebar">
          {this.state.list.map((item) => {
            return (
              <Danhmuc heading={item.heading} list={item.list} />
            )
          })}
        </div>
        <div className="right-sider">
          <div className="row">
            <div className="col-4 product-col">
              <div class="card h-100">
                {this.state.danhmuc.map((item) => {
                  return (
                    <Product url={item.hinh} name={item.name} price={item.price} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="table">
        <Productable products={this.state.table} deleteProduct={this.deleteProduct} />
      </div>
    </>

  }

}