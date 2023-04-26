import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#07001B] w-full h-full py-32 px-4' id='services'>
      <div className='text-white text-center justify-center pt-0 sm:pt-0 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
        Services
      </div>
      <div className='text-white pt-[3rem] md:max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:max-w-[550px] cursor-cell'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#262A55]'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold text-center py-8'>Smart Contract Development</h2>
            <p>Develop secure and efficient smart contracts for your blockchain projects. Our expert developers create custom solutions tailored to your specific needs, ensuring seamless integration with your existing systems.</p>
          </div>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#262A55]'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold text-center py-8'>Web3 Solutions</h2>
            <p>Harness the power of Web3 with decentralized applications (dApps) that connect users directly to blockchain networks. We build innovative dApps that streamline transactions, enhance security, and offer unparalleled user experiences.</p>
          </div>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#262A55]'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold text-center py-8'>Security Audits</h2>
            <p>Protect your smart contracts and Web3 projects from vulnerabilities with comprehensive security audits. Our experienced cybersecurity team identifies and addresses potential risks to safeguard your assets and maintain your project's integrity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services