// import React from 'react';
// import heroImage from '../images/hero.png'
// import Marquee from "react-fast-marquee";
// import { GrYoga } from "react-icons/gr";
// import { FaCalculator,FaMoneyBillAlt,FaChartLine} from "react-icons/fa";
// import studymaterialpng from '../images/studymaterial.jpeg'



// const Home = () => {
//   return (
//     <>
//     <div className='hero' style={{ height: '100vh', backgroundImage: `url(${heroImage})`, backgroundSize: 'contain', backgroundPosition: 'left',backgroundRepeat:'no-repeat' }}>
//           <h1 style={{textAlign:'right', fontSize:'5rem',marginRight:'100px'}}>Mannu Bhaiya</h1>
//           <h2  style={{textAlign:'right', fontSize:'3rem',marginRight:'100px'}}>For Finance and Accounting</h2>
//           <h1 style={{textAlign:'right', fontSize:'20px',marginRight:'100px',marginLeft:'550px',marginTop:"10px"}} >One stop solution for all of your finance and accounting needs. Mannu Goyal is famous amongst students for his practical style of teaching and making his classrooms the most interactive ones.</h1>
//     </div>
//     <br />
//     <Marquee speed={100} style={{ backgroundColor: '#110e24', color: 'white', borderTop: '10px double white', borderBottom: '10px double white', fontFamily: "fantasy" }}>
//       <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
//         <FaMoneyBillAlt style={{ marginRight: '10px' }} />&nbsp; Finance &nbsp;
//       </div>
//       <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
//         <FaCalculator style={{ marginRight: '10px' }} />&nbsp; Accounting &nbsp;
//       </div>
//       <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
//         <FaChartLine style={{ margin: '10px 0' }} />&nbsp; Economics &nbsp;
//       </div>
//     </Marquee>
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
//       <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>mannubhaiya.in</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px' }}>
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//           <img src={studymaterialpng} alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Study Material</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
//           </div>
//         </div>
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//           <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Videos</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
//           </div>
//         </div>
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//           <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//           <div style={{ padding: '20px' }}>
//             <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Jobs Portal</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Home;




//Responsive

import React from 'react';
import heroImage from '../images/hero.png';
import Marquee from "react-fast-marquee";
import { GrYoga } from "react-icons/gr";
import { FaCalculator, FaMoneyBillAlt, FaChartLine } from "react-icons/fa";
import studymaterialpng from '../images/studymaterial.jpeg';

const Home = () => {
  return (
    <>
      <div className="hero md:flex md:items-center" style={{ height: '100vh', backgroundImage: `url(${heroImage})`, backgroundSize: 'contain', backgroundPosition: 'left', backgroundRepeat: 'no-repeat'}}>
        <div className="md:hidden relative inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Mannu Bhaiya</h1>
          <h2 className="text-2xl mb-8">For Finance and Accounting</h2>
          <p className="max-w-2xl text-center text-lg">One stop solution for all of your finance and accounting needs. Mannu Goyal is famous amongst students for his practical style of teaching and making his classrooms the most interactive ones.</p>
        </div>
        <div className="hidden md:block md:w-1/2 md:ml-auto md:pr-20 md:text-right">
          <h1 className="text-6xl font-bold mb-4">Mannu Bhaiya</h1>
          <h2 className="text-4xl mb-8 ml-20">For Finance and Accounting</h2>
          <p className="max-w-lg ml-20">One stop solution for all of your finance and accounting needs. Mannu Goyal is famous amongst students for his practical style of teaching and making his classrooms the most interactive ones.</p>
        </div>
      </div>
      <br />
      <Marquee speed={100} style={{ backgroundColor: '#110e24', color: 'white', borderTop: '10px double white', borderBottom: '10px double white', fontFamily: "fantasy" }}>
        <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
          <FaMoneyBillAlt style={{ marginRight: '10px' }} />&nbsp; Finance &nbsp;
        </div>
        <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
          <FaCalculator style={{ marginRight: '10px' }} />&nbsp; Accounting &nbsp;
        </div>
        <div style={{ fontSize: '80px', display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ margin: '10px 0' }} />&nbsp; Economics &nbsp;
        </div>
      </Marquee>
      <div className="min-h-screen flex flex-col justify-center items-center py-20">
        <h1 className="text-3xl md:text-4xl mb-10 text-center">mannubhaiya.in</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src={studymaterialpng} alt="Placeholder" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Study Material</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Videos</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Jobs Portal</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;