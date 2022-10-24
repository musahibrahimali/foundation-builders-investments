import { HeaderImage } from '../../assets/images';
import { OperationItem } from '../widgets';
import React from 'react';
import Image from 'next/image';

const WhySection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col justify-between items-center py-12">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-900 font-bold tracking-wider uppercase mb-4 text-xl md:text-2xl lg:text-4xl">
                        Why Choose Us
                    </h1>
                    <div className="w-[100px] h-[2px] bg-light-blue"></div>
                </div>
                <div className="grid grid-cols-1 md:flex flex-row justify-between items-center w-full mt-12">
                    <div className="grid md:flex flex-col justify-between px-8 mt-12 w-full md:w-1/2">
                        <p className='text-black text-justify mb-4'>
                            With a large investor community, we can assure you the best profit earning opportunity. So grab the chance and ensure your equal share from us. Because we want to grow with your development in this trading industry. So make it happen now!
                        </p>
                        <OperationItem title="Professional management" />
                        <OperationItem title="Leagal & UK Registered Compnay" />
                        <OperationItem title="Storng Protected Server" />
                        <OperationItem title="Comodo Green Bar EV-SSL Security" />
                        <OperationItem title="Easy Investment & Withdrawals System" />
                        <OperationItem title="24/7 Hours Online Support" />
                    </div>
                    <div className="flex flex-col justify-between px-8 mt-12">
                        <Image src={HeaderImage} alt="Header Image" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WhySection;
