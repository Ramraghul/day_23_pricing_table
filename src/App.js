import logo from './logo.svg';
import './App.css';
import Card from './Card';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const data = [{
    Plan:"free",
    price:0,
    features:[
      {
        title:"Single User",
        isEnable:true
      },
      {
        title:"5GB Storage",
        isEnable:true
      },
      {
        title:"Unlimited Public Projects",
        isEnable:true
      },
      {
        title:"Community Access",
        isEnable:true
      },
      {
        title:"Unlimited Private Projects",
        isEnable:false
      },
      {
        title:"Dedicated Phone Support",
        isEnable:false
      },
      {
        title:"Free Subdomain",
        isEnable:false
      },
      {
        title:"Monthly Status Reports",
        isEnable:false
      }
    ]
    },{
      Plan:"plus",
      price:9,
      features:[
        {
          title:"5 Users",
          isEnable:true,
          isBold:true
        },
        {
          title:"50GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true
        },
        {
          title:"Free Subdomain",
          isEnable:true
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        }
      ]
    },{
      Plan:"pro",
      price:49,
      features:[
        {
          title:"Unlimited Users",
          isEnable:true,
          isBold:true
        },
        {
          title:"150GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true
        },
        {
          title:"Unlimited Free Subdomain",
          isEnable:true
        },
        {
          title:"Monthly Status Reports",
          isEnable:true
        }
      ]
    }
]
  return (
    <div className="App">
      <section className='pricing py-5'>
        <div className='container'>
          <div className='row'>

            {/* original */}
            {/* <Card cardData = {data[0]}></Card>
            <Card cardData = {data[1]}></Card>
            <Card cardData = {data[2]}></Card> */}

            {/* loop */}
            {data.map((item)=>{
              return <Card cardData={item}></Card>
            })}

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
