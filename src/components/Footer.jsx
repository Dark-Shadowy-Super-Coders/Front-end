import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col m-auto p-4 max-w-fit items-center justify-center">
      <p className="text-md text-[#b1c0ef] text-[20px] font-semibold pb-4">Dark Shadowy Super Coders</p>
      <ul className="text-white text-[8px] md:text-[18px] flex flex-row justify-evenly w-full max-w-5xl">
        <li className="after:content-['|'] after:text-gray-600 after:mx-2">An open organization</li>
        { /*
         * Change href's to your organization's handle from `line 14-20``
         * from: href="https://twitter.com/"
         * to: href="https://twitter.com/@DSSC"
          */}
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Mail (Opens in new Window)" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">Mail</a></li>
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter (Opens in new Window)" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">Twitter</a></li>
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="https://discord.gg/" target="_blank" rel="noreferrer" aria-label="Discord (Opens in new Window)" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">Discord</a></li>
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="https://github.com//" target="_blank" rel="noreferrer" aria-label="GitHub (Opens in new Window)" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">GitHub</a></li>
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="https://medium.com/" target="_blank" rel="noreferrer" aria-label="Medium (Opens in new Window)" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">Medium</a></li>
        <li className="after:content-['|'] after:text-gray-600 after:mx-2"><a href="/newsletter-signup" className="text-purple-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none">Newsletter</a></li>
        <li><span className="eth-address"><a href="https://etherscan.io/address/0xC2BC2F890067C511215F9463A064221577A53E11" className="text-purple-400 hover:text-purple-700 focus:text-purple-600 focus:outline-none">dssc.eth</a></span></li>
      </ul>
    </footer>

  );
};

export default Footer;
