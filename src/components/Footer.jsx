import React from 'react'
import FooterLink from './FooterLink'
import FooterSocmed from './FooterSocmed'

// icons
import { SiCoinmarketcap } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import TweetComponent from './TweetComponent';
import { FaCopy } from "react-icons/fa";


const Footer = ({ copyToClipboard }) => {
    return (
        <div className='w-full bg-black flex flex-col gap-10 py-20 xl:px-32 2xl:px-96'>
            <div className='w-full hidden lg:flex gap-32 overflow-hidden justify-center items-center'>
                <TweetComponent id={'1753947231550357995'} />
                <TweetComponent id={'1753918082500727116'} />
            </div>
            <div className='container mx-auto w-full flex flex-col items-end justify-end xl:flex-row gap-10'>
                <div className='w-full flex flex-col justify-center xl:items-start items-center gap-5'>
                    <FooterLink link='https://etherscan.io/tx/0xe40971416ade1eba5767c3ac064ad88292156bd868932a68046f0293d7a6f89d' title='LIQUIDITY POOL BURNED' />
                    <FooterLink link='https://app.uniswap.org/swap?inputCurrency=0xde342a3e269056fc3305f9e315f4c40d917ba521&outputCurrency=ETH' title='BUY ON UNISWAP' />
                    <FooterLink link='https://poloniex.com/trade/BYTE_USDT/?type=spot' title='BUY ON POLONIEX' />
                    <FooterLink link='https://www.dextools.io/app/en/ether/pair-explorer/0x8fbd26a7cb1ab65834c5ea245aa1f1e78d03ed30' title='DEXTOOLS' />
                    <FooterLink link='https://dexscreener.com/ethereum/0x8fbd26a7cb1ab65834c5ea245aa1f1e78d03ed30' title='DEXSCREENER' />
                    <FooterLink link='' title='EMAIL : BYTETOKEN@PROTON.ME' />
                </div>
                <div className='w-full flex flex-col flex-wrap lg:flex-row lg:w-1/2 mx-auto justify-center items-center gap-5'>
                    <FooterSocmed link='' title='COINMARKETCAP' icon={<SiCoinmarketcap className='scale-125' />} />
                    <FooterSocmed link='' title='ETHEREUM' icon={<FaEthereum className='scale-125' />} />
                    <FooterSocmed link='' title='BITCOIN' icon={<FaBitcoin className='scale-125' />} />
                    <FooterSocmed link='' title='X/TWITTER' icon={<FaXTwitter className='scale-125' />} />
                    <FooterSocmed link='' title='TELEGRAM' icon={<FaTelegramPlane className='scale-125' />} />
                </div>
            </div>
            <div className='w-full flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-2'>
                <p className='text-slate-200 font-pp-supply-mono-medium'>WE DONT BARK, WE BYTE</p>
                <div className='flex items-center gap-3'>

                    <p
                        className='text-orange-500 font-pp-supply-mono text-xs lg:text-sm hover:cursor-pointer hover:text-white transition-colors duration-300'
                        onClick={() => copyToClipboard('0XDE342A3E269056FC3305F9E315f4C40D917BA521')}>
                        CA: 0XDE342A3E269056FC3305F9E315f4C40D917BA521
                    </p>
                    <FaCopy onClick={() => copyToClipboard('0xde342a3e269056fc3305f9e315f4c40d917ba521')} className='inline-block text-orange-500 hover:cursor-pointer hover:text-slate-200 transition-colors duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Footer