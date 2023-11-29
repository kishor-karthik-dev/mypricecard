
import './App.css';
import Pricecard from './Pricecard';
function App() {
  const planDetail = [
    {
      price: 0,
      plan: "FREE",
      feature :[
        {
          key:"Single User",
          value: true
        },
        {
          key:"5GB Storage",
          value: true
        },
        {
          key:"Unlimited Public Projects",
          value: true
        },
        {
          key:"Community Access",
          value: true
        },
        {
          key:"Unlimited Private Projects",
          value: false
        },
        {
          key:"Dedicated Phone Support",
          value: false
        },
        {
          key:"Free Subdomain",
          value: false
        },
        {
          key:"Monthly Status Reports",
          value: false
        }
      ]
    },
    {
      price: 9,
      plan: "PLUS",
      feature :[
        {
          key:"5 Users",
          value: true
        },
        {
          key:"50GB Storage",
          value: true
        },
        {
          key:"Unlimited Public Projects",
          value: true
        },
        {
          key:"Community Access",
          value: true
        },
        {
          key:"Unlimited Private Projects",
          value: true
        },
        {
          key:"Dedicated Phone Support",
          value: true
        },
        {
          key:"Free Subdomain",
          value: true
        },
        {
          key:"Monthly Status Reports",
          value: false
        }
      ]

    },
    {
      price: 49,
      plan: "PRO",
      feature :[
        {
          key:"Unlimited Users",
          value: true
        },
        {
          key:"150GB Storage",
          value: true
        },
        {
          key:"Unlimited Public Projects",
          value: true
        },
        {
          key:"Community Access",
          value: true
        },
        {
          key:"Unlimited Private Projects",
          value: true
        },
        {
          key:"Dedicated Phone Support",
          value: true
        },
        {
          key:"Free Subdomain",
          value: true
        },
        {
          key:"Monthly Status Reports",
          value: true
        }
      ]
    }
 
  ]
  

  
  return (
    <section className='main py-5'>
    <div className="container">
      <h1 className='heading'>PRICE CARD SECTION</h1>
      <div className="row justify-content-center align-items-center">
        {
          planDetail.map((item,index)=>{
            return <Pricecard item={item} key={index}></Pricecard>
          })
        }
      </div>
    </div>
    </section>

  );
}



export default App;
