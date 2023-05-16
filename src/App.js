
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
              <div className=" menu-item" onClick={() => {
                this.props.filterProduct(item);
              }}>{item}</div>
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
            <div>{this.props.type}</div>
            <div>{this.props.provider}</div>
            <div className="price">{this.props.price}</div>
            <div className="but">
              <button className="but-xem">xem</button>
              <button className="but-mua" onClick={() => {
                this.props.buyProduct(this.props.name, this.props.price)
              }}>
                mua
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
class Producttable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    }
  }

  render() {
    const total = this.props.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    const totalProduct = this.props.products.reduce(
      (sum, product) => sum + product.quantity, 0)
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
          {this.props.products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td className="text" >{index + 1}</td>
                <td className="text" >{product.name}</td>
                <td className="text" >{product.price}</td>
                <td className="text">{product.quantity}</td>
                <td className="text">
                  <button className="but-xem" onClick={() => {
                    this.props.deleteProduct(product.name)// gọi hàm và truyền tham số
                  }}>
                    Xóa
                  </button>
                  <button className="but-xem" onClick={() => {
                    this.props.addProduct(product.name)// gọi hàm và truyền tham số
                  }}>
                    Thêm
                  </button>
                  <button className="but-xem" onClick={() => {
                    this.props.decreaseProduct(product.name) // gọi hàm và truyền tham số
                  }}>
                    Giảm
                  </button>

                </td>
              </tr>

            );
          })}
          <tr>
            <th className="text-sum" colSpan={5}>Tổng tiền: {total}đ</th>
          </tr>
          <tr>
            <th className="text-sum" colSpan={5}>Tổng sản phẩm:{totalProduct}</th>
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
          type: "Đồ gia dụng",
          provider: "VietGap",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\2.png",
          name: "sản phẩm 2",
          price: 20000,
          type: "Thực phẩm",
          provider: "Chin su",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\3.png",
          name: " sản phẩm 3",
          price: 30000,
          type: "Thời trang",
          provider: "Milo",

        },
        {
          hinh: ".:\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\4.png",
          name: "sản phẩm 4",
          price: 40000,
          type: "Mỹ phẩm",
          provider: "Mỹ phẩm",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\5.png",
          name: "sản phẩm 5",
          price: 50000,
          type: "Đồ gia dụng",
          provider: "Milo",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\6.png",
          name: "sản phẩm 6",
          price: 60000,
          type: "Thực phẩm",
          provider: "Acecook",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\7.png",
          name: "sản phẩm 7",
          price: 70000,
          type: "Thời trang",
          provider: "Trung Nguyên",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\8.png",
          name: "sản phẩm 8",
          price: 80000,
          type: "Mỹ phẩm",
          provider: "Vion",

        },
        {
          hinh: ".\\01_HTML\\UITraining01\\UITraining01\\imgs\\products\\9.png",
          name: "sản phẩm 9",
          price: 90000,
          type: "Đồ gia dụng",
          provider: "Chin su"
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
  buyProduct = (name, price) => {
    const buyProduct = this.state.table.find((product) => product.name == name)
    if (buyProduct) {
      buyProduct.quantity += 1;
    } else {
      this.state.table.push({
        name: name,
        price: price,
        quantity: 1,
      })
    }
    this.setState({ table: this.state.table })

  }
  deleteProduct = (name) => {
    const products = this.state.table.filter((product) => product.name !== name);
    console.log(products)
    this.setState({ table: products });
  }
  addProduct = (name) => {
    console.log(this)
    let newTable = this.state.table.map((product) => {
      if (product.name == name) {
        product.quantity += 1;
      }
      return product;
    })
    this.setState({ table: newTable })
  }
  decreaseProduct = (name) => {
    const a = this.state.table.find((product) => { return product.name == name })
    let c = 0;
    if (a) {
      a.quantity -= 1;
      if (a.quantity == 0) {
        let product = this.state.table.filter((product) => product !== a)
        c = 1;
        this.setState({ table: product })
      }
    }
    if (c == 0) {
      this.setState({ table: this.state.table });
    }
  }

  filterProduct = (type) => {
    // const b = this.state.danhmuc.filter((product)=> product.type == type)
    // const e = this.state.list.map((item)=>{})

    this.setState({ filterType: type })
  }

  filterProvider = (provider) =>{
    this.setState({filterProvider: provider})
  }

  render() {
    const { filterType, } = this.state;
    let sanpham = this.state.danhmuc;
    if (filterType) {
      sanpham = sanpham.filter((item) => { return item.type == filterType })
    }
    const{filterProvider} = this.state;
    if(filterProvider){
      sanpham = sanpham.filter((item) =>{return item.provider == filterProvider})
    }
    return <>
      <div className="container" id="header">
        <Header url={".\\01_HTML\\UITraining01\\UITraining01\\imgs\\banner.jpg"} list={["Đồ gia dụng", "Thực phẩm", "Thời trang", "Mỹ phẩm", "Liện hệ"]} />
      </div>
      <div className="container" id="main_content">
        <div className="left_sidebar">
          {this.state.list.map((item) => {
            return (
              <Danhmuc heading={item.heading} list={item.list} filterProduct={this.filterProduct} filterProvider={this.filterProvider}/>
            )
          })}
        </div>
        <div className="right_sidebar">
          <div className="id">Danh mục sản phẩm</div>
          <div className="row">
            {sanpham.map((item) => {             
              return (
                <Product url={item.hinh} name={item.name} price={item.price} type={item.type} provider={item.provider} buyProduct={this.buyProduct} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="container" >
        <div className="customers">
          <Producttable products={this.state.table} deleteProduct={this.deleteProduct} addProduct={this.addProduct} decreaseProduct={this.decreaseProduct} />
        </div>
      </div>
    </>
  }
}
